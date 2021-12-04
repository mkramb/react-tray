import { App } from 'electron';

import { HostContext, Props } from '../types';
import { ComponentTypes } from '../index';

class RootComponent {
  constructor(
    public type: ComponentTypes,
    public props: Props,
    public rootContainerInstance: App,
    public hostContext: HostContext
  ) {}

  static getHostContext() {}

  appendChild() {}
  removeChild() {}

  finalizeBeforeMount() {
    return false;
  }

  unmount() {
    this.rootContainerInstance.quit();
  }

  getPublicInstance() {
    return this.rootContainerInstance;
  }
}

export { RootComponent };