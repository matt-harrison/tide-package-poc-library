const CSS = {
  MB_1: 'mb-1',
  BG_RED: 'bg-red',
  BG_YELLOW: 'bg-yellow',
} as const;

export type Css = (typeof CSS)[keyof typeof CSS];

export { CSS };
