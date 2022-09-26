import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { vitalSpacing } from '@bodiless/vital-elements';
import {
  as, replaceWith, Fragment, on, withDesign
} from '@bodiless/fclasses';
import { withPrependChild } from '@bodiless/core';
import { vitalRichText, RichTextClean } from '@bodiless/vital-editors';
import { CardStatic } from '@bodiless/vital-card';
import vitalCardShadowed from '../vital-card/Card';

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

const Description = as(vitalRichText.Default)(RichTextClean);

const ContentListing = asGenericTemplateToken(
  vitalGenericTemplateBase.ContentListing,
  {
    Components: {
      ContentWrapper: withPrependChild(Description, 'Description'),
      TopContent: as(
        withDesign({
          HeroCard: on(CardStatic)(vitalCardShadowed.Basic),
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
          HeroCard: on(CardStatic)(vitalCardShadowed.HeroCenter),
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
};
