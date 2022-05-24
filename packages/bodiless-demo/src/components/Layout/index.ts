/**
 * Copyright © 2022 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    LanguageButton: replaceWith(() => null),
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
