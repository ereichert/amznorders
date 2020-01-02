// Inspired by https://github.com/jlucaspains/vue-mouseless/

import MouseTrap from 'mousetrap';
import { VNodeDirective, VNode } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const hotkeybinding = {

  bind(el: HTMLElement, binding: VNodeDirective, vnode: VNode): void {
    const focus = binding && binding.modifiers && binding.modifiers.focus;
    MouseTrap.bind(binding.value, (e: ExtendedKeyboardEvent) => {
      if (focus) {
        el.focus();
      }

      e.preventDefault();
      e.stopPropagation();
    });
  },

  unbind: (el: HTMLElement, binding: VNodeDirective): void => {
    MouseTrap.unbind(binding.value);
  },
};
