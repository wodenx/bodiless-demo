import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { vitalSpacing } from '@bodiless/vital-elements';
import {
  as, replaceWith, Fragment, on, withDesign
} from '@bodiless/fclasses';
// import { withPrependChild } from '@bodiless/core';
// import { vitalRichText, RichTextClean } from '@bodiless/vital-editors';
// import { ArticleClean } from '../../../components/Article';
// import withDrupalArticleLibrary from '../../../components/Article/data/withDrupalArticleLibrary';

// const DrupalArticle = asGenericTemplateToken(
//   vitalGenericTemplateBase.Base,
//   {
//     Components: {
//       TopContent: replaceWith(withDrupalArticleLibrary(ArticleClean)),
//     },
//   },
// );
import { CardStatic, vitalCard } from '@bodiless/vital-card';
import { HeroCenter } from '../../../components/Card';

const NoTopContent = asGenericTemplateToken(
  vitalGenericTemplateBase.Base,
  {
    Components: {
      TopContent: replaceWith(Fragment),
      TopWrapper: replaceWith(Fragment),
    },
    Meta: {
      title: 'Generic With No Hero',
    },
  }
);

const ContentListing = asGenericTemplateToken(
  vitalGenericTemplateBase.ContentListing,
  {
    Components: {
      TopContent: as(
        withDesign({
          HeroCard: on(CardStatic)(vitalCard.Basic),
        }),
      ),
    }
  }
);

const Generic = asGenericTemplateToken(
  vitalGenericTemplateBase.Generic,
  {
    Spacing: {
      TopWrapper: as(
        vitalSpacing.WithSiteMargin,
        vitalSpacing.WithSiteXLConstraint,
      ),
    },
    Components: {
      TopContent: as(
        withDesign({
          HeroCard: on(CardStatic)(HeroCenter),
        }),
      ),
    },
  }
);

export default {
  ...vitalGenericTemplateBase,
  Generic,
  ContentListing,
};

export {
  NoTopContent,
  // DrupalArticle,
};
