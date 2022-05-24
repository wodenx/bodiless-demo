// TBD remove after shadowing PR merges....

import { on } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import {
  vitalPage,
  GenericTemplateClean,
} from '@bodiless/vital-templates';
import DemoTemplate from './GenericTemplate';

const Default = asFluidToken({
  ...vitalPage.Default,
  Components: {
    _default: on(GenericTemplateClean)(DemoTemplate.Default),
  },
});

export default {
  ...vitalPage,
  Default,
};
