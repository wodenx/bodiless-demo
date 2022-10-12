import { asCardToken, vitalCard } from '@bodiless/vital-card';
import { replaceWith } from '@bodiless/fclasses/lib/replaceable';
import {
  Div, flowHoc, extendMeta, on
} from '@bodiless/fclasses';
import { vitalEditorPlain, EditorPlainClean } from '@bodiless/vital-editors';
import { vitalTypography } from '@bodiless/vital-elements';
// import { NodeTreePrinter } from '../NodeTreePrinter';
import { withNodeKey } from '@bodiless/core';
import { ARTICLE_LIBRARY_NODEKEY } from './data/withContentLibrary';
import type { ArticleMetadata } from './data/withContentLibrary';
import withDrupalArticleLibrary from './data/withDrupalArticleLibrary';

const Feature = asCardToken(
  {
    ...vitalCard.Base,
    Schema: {
      ...vitalCard.Base.Schema,
      _: withDrupalArticleLibrary,
      Description: withNodeKey('body'),
    },
    Components: {
      ...vitalCard.Base.Components,
      Wrapper: replaceWith(Div),
      CTAWrapper: replaceWith(() => null),
    },
    Layout: {
      ImageWrapper: 'float-left full md:w-1/3 pr-4 pb-4',
    },
    Theme: {
      TitleWrapper: vitalTypography.H1,
      Description: vitalTypography.Body,
    },
    Spacing: {
      Wrapper: 'py-8',
    },
    Meta: extendMeta(
      flowHoc.meta.term('Type')('Article'),
      flowHoc.meta.term('Sub Type')('Feature'),
    ),
    Editors: {
      ...vitalCard.Base.Editors,
      Wrapper: undefined,
      Description: on(EditorPlainClean)(vitalEditorPlain.Default),
    },
  },
  vitalCard.WithNoEyebrow,
);

const demoArticle = { Feature };

export { demoArticle, ArticleMetadata, ARTICLE_LIBRARY_NODEKEY };