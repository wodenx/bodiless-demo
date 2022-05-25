import { replaceWith } from '@bodiless/fclasses';
import { asGenericTemplateToken, vitalGenericTemplateBase } from '@bodiless/vital-templates';

const Default = asGenericTemplateToken(vitalGenericTemplateBase.Default, {
  Components: {
    BreadcrumbWrapper: replaceWith(() => null),
    TopWrapper: replaceWith(() => null),
  },
});

export default {
  ...vitalGenericTemplateBase,
  Default,
};
