import { DefaultSlots } from '../utils/create'

export type SkeletonProps = {
  loading?: boolean;
  title?: boolean;
  avatar?: boolean;
  card?: boolean;
  fullscreen?: boolean;
  fullscreenZIndex?: string | number;
  titleWidth?: string | number;
  avatarSize?: string | number;
  cardHeight?: string | number;
  rows?: string | number;
  rowsWidth?: (string | number)[];
}

export type SkeletonSlots = DefaultSlots

export const props = {
  loading: {
    type: Boolean,
    default: true,
  },
  title: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: Boolean,
    default: false,
  },
  card: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100,
  },
  titleWidth: {
    type: [Number, String],
  },
  cardHeight: {
    type: [Number, String],
  },
  avatarSize: {
    type: [Number, String],
  },
  rows: {
    type: [Number, String],
    default: 3,
  },
  rowsWidth: {
    type: Array,
    default: () => [],
  },
}
