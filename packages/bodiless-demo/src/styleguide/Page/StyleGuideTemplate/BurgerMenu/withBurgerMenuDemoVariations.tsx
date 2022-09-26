import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { BurgerMenuClean, vitalBurgerMenu, withBurgerMenuProvider, asBurgerMenuToken } from '@bodiless/vital-navigation';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

/* The following demonstrates an open inoperable burger menu */
/* Need more separation of tokens to put tokens to together in styleguide. */
const AlwaysOpenNoBehavior = asBurgerMenuToken({
  ...vitalBurgerMenu.Base,
  Layout: {
    Wrapper: 'h-full w-1/2 border-2',
    Container: 'flex flex-col h-full max-h-screen',
    MenuTogglerWrapper: 'flex justify-end',
    MenuToggler: 'flex justify-center items-center',
    MenuWrapper: 'flex-grow overflow-y-auto',
    FooterWrapper: 'w-full flex flex-col items-center',
    ActionFooterContainer: 'w-full flex justify-center items-center',
    Overlay: 'w-full h-full',
  },
  Behavior: {},
});

const Component = as(AlwaysOpenNoBehavior, withBurgerMenuProvider)(BurgerMenuClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'BurgerMenu',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    BurgerMenu: withTokenEditorStyles,
  }),
);
