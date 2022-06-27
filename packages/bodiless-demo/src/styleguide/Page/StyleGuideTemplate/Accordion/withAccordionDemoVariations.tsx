import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { AccordionClean, vitalAccordion } from '@bodiless/vital-accordion';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(vitalAccordion.Default)(AccordionClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Accordion',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Accordion: withTokenEditorStyles,
  }),
);
