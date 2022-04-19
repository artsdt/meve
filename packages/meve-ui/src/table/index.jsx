import Loading from '../loading'
import Icon from '../icon'
import Checkbox from '../checkbox'
import { toPxNum, toSizeUnit, scrollTo } from '../utils/elements'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { easeInOutCubic } from '../utils/animation'
import {
  buildTreeRelation,
  getNodeDeep,
  getNodeParent,
  isArray,
  isPlainObject,
  removeItem,
  toggleItem,
  uniq,
} from '../utils/shared'

import '../styles/common.less'
import '../loading/loading.less'
import '../ripple/ripple.less'
import '../icon/icon.less'
import '../checkbox/checkbox.less'
import './table.less'

const { createComponent, namespace } = createNamespace('table')

const TablePlugin = createComponent({
  props,

  data: () => ({
    loading: false,
    hasError: false,
    allSelected: false,
    data: [],
    sorters: {},
    expandedRowKeys: [],
    keyMap: null,
  }),

  computed: {
    allRowKeys() {
      return this.getAllRows().map((row) => row[this.rowKey])
    },

    indentNum() {
      return toPxNum(this.indent)
    },
  },

  watch: {
    data: {
      handler() {
        this.syncAllSelected()
        this.expandedRowKeys = []
        this.keyMap = buildTreeRelation(this.data, this.rowKey)
      },
      deep: true,
      immediate: true,
    },

    selectedKeys: {
      handler() {
        this.syncAllSelected()
      },
      immediate: true,
    },
  },

  created() {
    this.load(true)
  },

  methods: {
    // expose
    async load(initial = false) {
      if (this.scroller != null && !initial) {
        this.scrollToTop()
      }

      try {
        this.hasError = false
        this.loading = true
        this.data = await Promise.resolve(this.$listeners.load?.({ sorters: this.sorters }))
      } catch (e) {
        this.hasError = true
      } finally {
        this.loading = false
      }
    },

    // expose
    getData() {
      return this.data
    },

    syncAllSelected() {
      this.allSelected = this.data.length > 0 && this.allRowKeys.every((key) => this.selectedKeys.includes(key))
    },

    normalizeColumns() {
      return this.columns.filter((column) => column.key || this.isValidSelection(column.selection))
    },

    scrollToTop() {
      this.$nextTick(() => {
        scrollTo(this.$refs['table-container'], { top: 0, animation: easeInOutCubic })
      })
    },

    hasChildren(row) {
      const children = row[this.childrenKey]

      return isArray(children) && children.length > 0
    },

    isValidSelection(selection) {
      return isPlainObject(selection) || selection === true
    },

    findDisplayRows(row) {
      if (!this.hasChildren(row) || !this.expandedRowKeys.includes(row[this.rowKey])) {
        return []
      }

      const rows = []
      const children = row[this.childrenKey]

      children.forEach((child) => {
        rows.push(child)
        rows.push(...this.findDisplayRows(child))
      })

      return rows
    },

    findChildrenRows(row) {
      if (!this.hasChildren(row)) {
        return []
      }

      const rows = []
      const children = row[this.childrenKey]

      children.forEach((child) => {
        rows.push(child)
        rows.push(...this.findChildrenRows(child))
      })

      return rows
    },

    findChildrenLeafRows(row) {
      if (!this.hasChildren(row)) {
        return []
      }

      const rows = []
      const children = row[this.childrenKey]

      children.forEach((child) => {
        if (!this.hasChildren(child)) {
          rows.push(child)
        }
        rows.push(...this.findChildrenLeafRows(child))
      })

      return rows
    },

    getAllRows() {
      return this.data.reduce((rows, row) => {
        rows.push(row)
        rows.push(...this.findChildrenRows(row))

        return rows
      }, [])
    },

    handleSorterClick(column) {
      const {
        sorter: { asc = 'asc', desc = 'desc' },
        key,
      } = column
      const orderBy = this.sorters[key]

      if (orderBy == null) {
        this.sorters = {}
        this.$set(this.sorters, key, asc)
      } else if (orderBy === asc) {
        this.$set(this.sorters, key, desc)
      } else if (orderBy === desc) {
        this.$delete(this.sorters, key)
      }

      this.load()
    },

    onRowSelectChange(selectedKeys, row) {
      let parent = getNodeParent(this.keyMap, row[this.rowKey])

      while (parent) {
        const children = parent[this.childrenKey]

        if (children.some((row) => selectedKeys.includes(row[this.rowKey]))) {
          selectedKeys.push(parent[this.rowKey])
        } else {
          removeItem(selectedKeys, parent[this.rowKey])
        }

        parent = getNodeParent(this.keyMap, parent[this.rowKey])
      }
    },

    renderIndent(indent) {
      return <span class={namespace('__indent')} style={{ marginRight: `${indent * this.indentNum}px` }} />
    },

    renderTableColumns(row) {
      return this.normalizeColumns(this.columns).map((column) => {
        const rowIndex = this.data.indexOf(row)
        const { colSpan = 1, rowSpan = 1 } = column.bodySpan?.(rowIndex, row, column) ?? {}

        if (colSpan === 0 || rowSpan === 0) {
          return
        }

        const { style = {}, sticky, key } = column
        const value = row[key]
        const currentRowKey = row[this.rowKey]
        const parentRow = getNodeParent(this.keyMap, currentRowKey)
        const childrenRows = this.findChildrenRows(row)
        const rowKeys = [currentRowKey, ...childrenRows.map((row) => row[this.rowKey])]

        const handleChange = (value) => {
          const selectedKeys = [...this.selectedKeys]

          if (value) {
            selectedKeys.push(...rowKeys)
          } else {
            rowKeys.forEach((rowKey) => {
              removeItem(selectedKeys, rowKey)
            })
          }

          if (parentRow) {
            // could be modified selectedKeys
            this.onRowSelectChange(selectedKeys, row)
          }

          this.$emit('update:selected-keys', uniq(selectedKeys))
        }

        const renderExpandIcon = () => {
          if (key === this.rowKey && this.hasChildren(row)) {
            return (
              <Icon
                class={[
                  namespace('__expanded-icon'),
                  this.expandedRowKeys.includes(currentRowKey) ? namespace('--expanded') : null,
                ]}
                table-cover
                name={'chevron-right'}
                onClick={() => toggleItem(this.expandedRowKeys, currentRowKey)}
              />
            )
          }
        }

        const renderSelection = () => {
          const childrenSelected = rowKeys.every((rowKey) => this.selectedKeys.includes(rowKey))
          const leafRows = this.findChildrenLeafRows(row)
          const hasLeafRow = leafRows.some((row) => this.selectedKeys.includes(row[this.rowKey]))
          const indeterminate = hasLeafRow && !childrenSelected

          return <Checkbox indeterminate={indeterminate} value={childrenSelected} onChange={handleChange} />
        }

        const renderContent = () => {
          if (this.hasSlots(key)) {
            return this.slots(key, { row, column })
          }

          // selection renderer
          if (this.isValidSelection(column.selection)) {
            return renderSelection()
          }

          return <span>{value}</span>
        }

        return (
          <td
            class={[
              namespace('__td'),
              namespace(`--${this.size}-cell`),
              this.border ? namespace('--td-or-th-border') : null,
              sticky ? namespace(`--sticky`) : null,
            ]}
            rowSpan={rowSpan}
            colSpan={colSpan}
            style={style}
          >
            {key === this.rowKey && this.renderIndent(getNodeDeep(this.keyMap, row[this.rowKey]))}
            {renderExpandIcon()}
            {renderContent()}
          </td>
        )
      })
    },

    renderTHs() {
      return this.normalizeColumns(this.columns).map((column) => {
        const { style = {}, headColSpan = 1, title, sticky } = column

        if (headColSpan === 0) {
          return
        }

        const handleChange = (value) => {
          const selectedKeys = [...this.selectedKeys]

          if (value) {
            selectedKeys.push(...this.allRowKeys)
          } else {
            this.allRowKeys.forEach((key) => {
              removeItem(selectedKeys, key)
            })
          }

          this.$emit('update:selected-keys', uniq(selectedKeys))
        }

        const renderContent = () => {
          if (this.isValidSelection(column.selection)) {
            const indeterminate = !this.allSelected && this.selectedKeys.length >= 1

            return <Checkbox value={this.allSelected} indeterminate={indeterminate} onChange={handleChange} />
          }

          return (
            <div class={namespace('__th-cell')}>
              <span>{title}</span>
              {this.renderSorter(column)}
            </div>
          )
        }

        return (
          <th
            class={[
              namespace('__th'),
              namespace(`--${this.size}-cell`),
              this.border ? namespace('--td-or-th-border') : null,
              sticky ? namespace(`--sticky`) : null,
            ]}
            colSpan={headColSpan}
            style={style}
          >
            {renderContent()}
          </th>
        )
      })
    },

    renderSorter(column) {
      if (column.sorter == null || column.sorter === false) {
        return
      }

      const {
        sorter: { asc = 'asc', desc = 'desc' },
      } = column
      const orderBy = this.sorters[column.key]

      return (
        <div class={namespace('__sorter')} onClick={() => this.handleSorterClick(column)}>
          <Icon
            class={[namespace('__sorter-up'), orderBy === asc ? namespace('--sorter-active') : null]}
            table-cover
            name="menu-up"
          />
          <Icon
            class={[namespace('__sorter-down'), orderBy === desc ? namespace('--sorter-active') : null]}
            table-cover
            name="menu-down"
          />
        </div>
      )
    },

    renderHead() {
      return (
        <thead class={[namespace('__thead'), this.scroller == null ? null : namespace('--thead-sticky')]}>
          <tr class={namespace('__tr')}>{this.renderTHs()}</tr>
        </thead>
      )
    },

    renderBody() {
      return <tbody>{this.renderRows()}</tbody>
    },

    renderRows() {
      const rows = this.data.reduce((rows, row) => {
        rows.push(row)
        rows.push(...this.findDisplayRows(row))

        return rows
      }, [])

      return rows.map((row) => {
        return (
          <tr class={namespace('__tr')} key={this.rowKey != null ? row[this.rowKey] : undefined}>
            {this.renderTableColumns(row)}
          </tr>
        )
      })
    },

    renderEmptyOrError() {
      if (this.hasError) {
        return (
          <div class={namespace('__error')} onClick={this.load}>
            加载错误，点击重试
          </div>
        )
      }

      if (this.data.length === 0 && !this.loading) {
        return <div class={namespace('__empty')}>暂无数据</div>
      }
    },

    renderFooter() {
      if (this.hasSlots('footer')) {
        return <div class={namespace('__footer')}>{this.slots('footer')}</div>
      }
    },
  },

  render() {
    const { loading, border, scroller, tableLayout } = this

    return (
      <div class={[namespace(), 'm--box']}>
        <Loading class={namespace('__loading')} loading={loading} table-cover>
          <div
            ref="table-container"
            class={[namespace('__table-container'), scroller == null ? null : namespace('--scroller')]}
            style={{
              maxHeight: scroller == null ? undefined : toSizeUnit(scroller.y),
            }}
          >
            <table
              class={[namespace('__table'), border ? namespace('--table-border') : null]}
              style={{
                tableLayout: scroller != null ? 'fixed' : tableLayout,
                minWidth: scroller == null ? undefined : '100%',
                width: scroller == null ? undefined : toSizeUnit(scroller.x),
              }}
            >
              {this.renderHead()}
              {this.renderBody()}
            </table>
          </div>
          {this.renderEmptyOrError()}
          {this.renderFooter()}
        </Loading>
      </div>
    )
  },
})

export const _TableComponent = TablePlugin

export default TablePlugin
