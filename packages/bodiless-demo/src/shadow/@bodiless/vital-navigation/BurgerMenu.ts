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

import { replaceWith } from '@bodiless/fclasses';
import { vitalBurgerMenuBase, asBurgerMenuToken } from '@bodiless/vital-navigation';
import { GitStar } from '../../../components/GitHubButtons';

const Default = asBurgerMenuToken(vitalBurgerMenuBase.Default, {
  Components: {
    UtilityMenu: replaceWith(() => null),
    WhereToBuy: replaceWith(GitStar),
  },
});

export default {
  ...vitalBurgerMenuBase,
  Default,
};
