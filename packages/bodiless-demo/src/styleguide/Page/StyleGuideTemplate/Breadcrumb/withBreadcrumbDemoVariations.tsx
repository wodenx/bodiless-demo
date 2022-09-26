import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { BreadcrumbsClean, vitalBreadcrumbs } from '@bodiless/vital-navigation';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(vitalBreadcrumbs.Default)(BreadcrumbsClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Breadcrumb',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Breadcrumb: withTokenEditorStyles,
  }),
);
