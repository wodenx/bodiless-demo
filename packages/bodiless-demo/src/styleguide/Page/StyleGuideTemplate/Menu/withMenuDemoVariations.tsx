import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { MenuClean, vitalMenu } from '@bodiless/vital-navigation';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(vitalMenu.Default)(MenuClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Menu',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Menu: withTokenEditorStyles,
  }),
);
