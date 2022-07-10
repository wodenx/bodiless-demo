import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { vitalSpacing } from '@bodiless/vital-elements';
import {
  as, replaceWith, Fragment
} from '@bodiless/fclasses';
import { withPrependChild } from '@bodiless/core';
import { vitalRichText, RichTextClean } from '@bodiless/vital-editors';

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
    }
  }
)

const Generic = asGenericTemplateToken(
  vitalGenericTemplateBase.Generic,
  {
    Spacing: {
      TopWrapper: as(
        vitalSpacing.WithSiteMargin,
        vitalSpacing.WithSiteXLConstraint,
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
