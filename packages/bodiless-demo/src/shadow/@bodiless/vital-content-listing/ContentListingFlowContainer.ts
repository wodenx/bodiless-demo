import { on, replaceWith } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalContentListingFlowContainerBase } from '@bodiless/vital-content-listing';
import { vitalFlowContainer } from '@bodiless/vital-flowcontainer';
import {
  asCardToken, CardStatic, vitalCardStatic, CardClean
} from '@bodiless/vital-card';
import { demoArticle } from '../../../components/Article';

const WithRemoveImage = asCardToken({
  Components: {
    ImageWrapper: replaceWith(() => null),
    Image: replaceWith(() => null),
  },
});

const Default = asFluidToken(vitalContentListingFlowContainerBase.Default, {
  Components: {
    FilterableContent: on(CardStatic)(
      vitalCardStatic.Default,
      vitalCardStatic.WithVerticalOrientation,
      vitalCardStatic.WithNoDescription,
      WithRemoveImage,
    ),
  },
});

const Article = asFluidToken({
  ...Default,
  Components: {
    ArticleCard: on(CardClean)(demoArticle.Promo),
  },
});

export default {
  ...vitalContentListingFlowContainerBase,
  Default,
  Article,
};
