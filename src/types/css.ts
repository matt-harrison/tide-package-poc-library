const CSS = {
  MB_1: 'mb-1',
  BORDER_GREEN: 'border-green',
  RADIUS_1OF4: 'radius-1/4',
  P_1: 'p-1',
  P_1OF2: 'p-1/2',
  BG_BLUE: 'bg-blue',
  BG_GREEN: 'bg-green',
  BG_RED: 'bg-red',
  BG_YELLOW: 'bg-yellow',
} as const;

export type Css = (typeof CSS)[keyof typeof CSS];

export { CSS };
