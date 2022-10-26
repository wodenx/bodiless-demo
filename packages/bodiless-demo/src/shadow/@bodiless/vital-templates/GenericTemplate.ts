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
import { ContentListingClean } from '@bodiless/vital-content-listing';
import { HeroCenter } from '../../../components/Card';
import demoContentListing from '../vital-content-listing/ContentListing';

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

const ArticleListing = asGenericTemplateToken({
  ...vitalGenericTemplateBase.ContentListing,
  Meta: {
    title: 'Article Listing',
  },
  Components: {
    ...vitalGenericTemplateBase.ContentListing.Components,
    // Use the Article content listing which allows selection of article cards
    // rather than the default (styleguide cards) as shadowed in
    // shadow/@bodiless/vital-content-listing/ContentListingFlowContainer
    Content: on(ContentListingClean)(demoContentListing.Article),
  },
  Schema: {
    ...ContentListing.Schema,
    // Use the default (page-level) node-key for the content section as opposed to
    // the site level one used with the filter select feature
    // as defined in vitalGenericTemplateBase.ContentListing.Schema
    Content: vitalGenericTemplateBase.Base.Schema.Content,
  },
});

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
  ArticleListing,
  // DrupalArticle,
};
