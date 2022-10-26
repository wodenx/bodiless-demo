import { on } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalPageBase, GenericTemplateClean } from '@bodiless/vital-templates';
import { NoTopContent, ArticleListing } from './GenericTemplate';

const Default = asFluidToken(
  vitalPageBase.Base,
  {
    Components: {
      NoTopContent: on(GenericTemplateClean)(NoTopContent),
      ArticleListing: on(GenericTemplateClean)(ArticleListing),
      // DrupalArticle: on(GenericTemplateClean)(DrupalArticle),
    },
  }
);

export default {
  ...vitalPageBase,
  Default,
};
