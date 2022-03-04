import { DefaultSlots } from '../utils/create'
import { VNode } from 'vue'

export type LoadingProps = {
  loading?: boolean;
  description?: string;
  rotate?: boolean;
  size?: number | string;
  color?: string;
}

export type LoadingSlots = DefaultSlots & {
  icon?: () => VNode;
  description?: () => VNode;
}

export const props = {
  loading: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  rotate: {
    type: Boolean,
    default: true,
  },
  size: {
    type: [Number, String],
  },
  color: {
    type: String,
  },
}
