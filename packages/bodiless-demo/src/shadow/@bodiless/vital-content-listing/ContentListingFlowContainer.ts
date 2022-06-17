import { on, replaceWith } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalContentListingFlowContainerBase } from '@bodiless/vital-content-listing';
import { asCardToken, CardStatic, vitalCardStatic } from '@bodiless/vital-card';

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

export default {
  ...vitalContentListingFlowContainerBase,
  Default,
};
