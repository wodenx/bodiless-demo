import { on, replaceWith } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalContentListingFlowContainerBase } from '@bodiless/vital-content-listing';
import { asCardToken, CardClean, vitalCard } from '@bodiless/vital-card';

const WithRemoveImage = asCardToken({
  Components: {
    ImageWrapper: replaceWith(() => null),
    Image: replaceWith(() => null),
  },
});

const Default = asFluidToken(vitalContentListingFlowContainerBase.Default, {
  Components: {
    FilterableContent: on(CardClean)(
      vitalCard.Default,
      vitalCard.WithVerticalOrientation,
      vitalCard.WithNoDescription,
      WithRemoveImage,
    ),
  },
});

export default {
  ...vitalContentListingFlowContainerBase,
  Default,
};
