export type IconProps = {
  name?: string;
  size?: string | number;
  color?: string;
  namespace?: string;
}

export type IconEvents = {
  onClick?: (event: Event) => void;
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
