import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { vitalCardStatic, CardStatic } from '@bodiless/vital-card';
import * as styleTokens from './token';
import * as styleBrandTokens from '../CardBrand/token';

import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleBrandTokens,
  ...styleTokens,
};

const Component = as(vitalCardStatic.Default)(CardStatic);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Card',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Card: withTokenEditorStyles,
  }),
);
