import { DefaultSlots } from '../utils/create'
import { VNode } from 'vue'

export type CardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
}

export type CardSlots = DefaultSlots & {
  title?: () => VNode;
  subtitle?: () => VNode;
  extra?: () => VNode;
}

export const props = {
  name: {
    type: String,
  },
  size: {
    type: [Number, String],
  },
  color: {
    type: String,
  },
  namespace: {
    type: String,
    default: 'meve-icon',
  },
}
