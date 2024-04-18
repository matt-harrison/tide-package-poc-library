import type { Css } from '@/types/css';

import TideButton from '@/components/TideButton.vue';
import { CSS } from '@/types/css';

import '@/assets/css/utilities.css';

const sayHello = () => {
  console.log('hello');
};

const sayGoodbye = () => {
  console.log('goodbye');
};

export { type Css, CSS, TideButton, sayHello, sayGoodbye };
