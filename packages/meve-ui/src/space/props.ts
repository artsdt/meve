import { isArray, isNumber, isString } from '../utils/shared'
import { DefaultSlots } from '../utils/create'

export type SpaceAlign =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'

export type SpaceDirection = 'row' | 'column'

export type SpaceJustify = 'start' | 'flex-start' | 'end' | 'flex-end' | 'center' | 'space-around' | 'space-between'

export type SpaceInternalSize = 'mini' | 'small' | 'normal' | 'large'

export type SpaceSize = SpaceInternalSize | number | string | (number | string)[]

export type SpaceProps = {
  justify?: SpaceJustify;
  align?: SpaceAlign;
  direction?: SpaceDirection;
  size?: SpaceSize;
  wrap?: boolean;
  inline?: boolean;
}

export type SpaceSlots = DefaultSlots

export const internalSizeValidator = (size: any) => ['mini', 'small', 'normal', 'large'].includes(size)

export const sizeValidator = (size: any): boolean =>
  internalSizeValidator(size) || isArray(size) || isNumber(size) || isString(size)

export const justifyValidator = (justify: string): boolean =>
  ['start', 'end', 'flex-start', 'flex-end', 'center', 'space-around', 'space-between'].includes(justify)

export const props = {
  align: {
    type: String,
  },
  size: {
    type: [String, Number, Array],
    default: 'normal',
    validator: sizeValidator,
  },
  wrap: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: 'row',
  },
  justify: {
    type: String,
    default: 'start',
    validator: justifyValidator,
  },
  inline: {
    type: Boolean,
    default: false,
  },
}
