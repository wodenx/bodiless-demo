// TBD remove after shadowing PR merges....

import { on, replaceWith } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import {
  vitalPage,
  GenericTemplateClean,
  asGenericTemplateToken,
  vitalGenericTemplate,
} from '@bodiless/vital-templates';

const SkipBreadcrumbTop = asGenericTemplateToken(vitalGenericTemplate.Default, {
  Components: {
    BreadcrumbWrapper: replaceWith(() => null),
    TopWrapper: replaceWith(() => null),
  },
});

const Default = asFluidToken(vitalPage.Default, {
  Components: {
    _default: on(GenericTemplateClean)(SkipBreadcrumbTop),
  },
});

export default {
  ...vitalPage,
  Default,
};
