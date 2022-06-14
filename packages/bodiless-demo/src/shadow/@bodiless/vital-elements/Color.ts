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

import { asTokenGroup, vitalColorBase} from '@bodiless/vital-elements';

// Error: @sites/bodiless-demo: export 'ColorMeta' (reexported as 'ColorMeta') was not
// found in './tokens'
// thus redeclaring ColorMeta
export const ColorMeta = {
  categories: {
    Type: ['Element'],
    Group: ['Color'],
  },
};

const OverrideColors = asTokenGroup(ColorMeta)({
  ...vitalColorBase,
  BgPrimaryInteractive: 'bg-demo-primary-interactive',
  BorderPrimaryInteractive: 'border-demo-primary-interactive',
  TextPrimaryInteractive: 'text-demo-primary-interactive hover:opacity-70 active:text-demo-primary-interactive-active',
  TextPrimaryInteractiveNoHover: 'text-demo-primary-interactive active:text-demo-primary-interactive-active',
  TextPrimaryInteractiveHover: 'hover:text-demo-primary-interactive',
  BgSecondaryFooter: 'bg-demo-primary-interactive shadowed-bgsecondaryfooter-class',
});

export default OverrideColors;
