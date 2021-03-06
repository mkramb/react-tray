import { MenuItem } from 'electron';

import { BaseItemComponent } from './base';

interface MenuItemNormalComponentProps {
  readonly label: string;
  readonly onClick: () => void;
}

interface MenuItemSeparatorComponentProps {
  readonly type: 'separator';
}

type MenuItemComponentProps = MenuItemNormalComponentProps | MenuItemSeparatorComponentProps;

class MenuItemComponent extends BaseItemComponent<MenuItemComponentProps> {
  constructor(type, props, rootContainerInstance, hostContext) {
    super(type, props, rootContainerInstance, hostContext);

    let item = {};

    switch (props.type ?? 'normal') {
      case 'normal': {
        item = {
          type: 'normal',
          label: props.label,
          click: props.onClick,
        };
        break;
      }
      case 'separator': {
        item = {
          type: 'separator',
        };
        break;
      }
      default: {
        throw 'Unsupported "type" for MenuItem';
      }
    }

    this.menuItem = new MenuItem(item);
  }

  commitUpdate(payload) {
    if (payload.type) this.menuItem.type = payload.type;
    if (payload.label) this.menuItem.label = payload.label;
    if (payload.onClick) this.menuItem.click = payload.onClick;
  }
}

export { MenuItemComponent, MenuItemComponentProps };
