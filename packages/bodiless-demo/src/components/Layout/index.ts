// TBD remove after shadowing PR merges....

import { replaceWith } from '@bodiless/fclasses';
import {
  asLayoutToken,
  asHeaderToken, vitalHeader,
  asFooterToken, vitalFooter,
} from '@bodiless/vital-layout';
import { vitalBurgerMenu } from '@bodiless/vital-navigation';
import { GitStar, GitDiscuss } from '../GitHubButtons';

// TBD -- move to shadowing and switch vitalHeader to vitalHeaderBase
const DemoHeader = asHeaderToken({
  ...vitalHeader.Default,
  Components: {
    WhereToBuy: replaceWith(GitStar),
    DesktopSearch: replaceWith(() => null),
    UtilityMenuWrapper: replaceWith(() => null),
    UtilityMenu: replaceWith(() => null),
    LanguageButton: replaceWith(() => null), // replace with Edit Current Page Button
    SearchToggler: replaceWith(() => null),
    BurgerMenu: vitalBurgerMenu.Default,
  },
});

// TBD -- move to shadowing and switch vitalFooter to vitalFooterBase
const DemoFooter = asFooterToken({
  ...vitalFooter.Default,
  Components: {
    Rewards: replaceWith(GitDiscuss),
    SocialLinksWrapper: replaceWith(() => null),
    SocialLinks: replaceWith(() => null),
  },
});

// TBD -- move to shadowing and switch vitalLayout to vitalLayoutBase
export const DemoLayout = asLayoutToken({
  Components: {
    Header: DemoHeader,
    Footer: DemoFooter,
  },
});
