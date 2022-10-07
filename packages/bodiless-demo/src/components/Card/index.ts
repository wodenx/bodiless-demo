import {
  Div, flowHoc, on, replaceWith, H2, extendMeta, as,
} from '@bodiless/fclasses';
import { asCardToken, vitalCardStatic, vitalCard } from '@bodiless/vital-card';
import { vitalTypography } from '@bodiless/vital-elements';
import { VideoClean, VideoTokens } from '../Video';
import { withNode, withNodeKey } from '@bodiless/core';

const asGetStarted = asCardToken(
  vitalCardStatic.Default,
  vitalCardStatic.WithPrimaryButton,
  vitalCardStatic.WithNoEyebrow,
  {
    Components: {
      Wrapper: replaceWith(Div),
      DescriptionWrapper: replaceWith(() => null),
      ImageWrapper: replaceWith(() => null),
      Image: replaceWith(() => null),
    },
    Layout: {
      ContentWrapper: 'flex flex-col self-center',
    },
    Spacing: {
      Wrapper: 'py-16',
    },
    Theme: {
      TitleWrapper: 'text-center',
      Wrapper: 'bg-demo-table-light rounded-md',
    },
    Meta: extendMeta(
      flowHoc.meta.term('Sub Type')('Get Started'),
      flowHoc.meta.term('Orientation')('Horizontal'),
    ),
  }
);

const HeroCenter = asCardToken({
  Theme: {
    Wrapper: 'mt-8',
    CTAWrapper: 'mx-auto max-w-xs',
    TitleWrapper: 'text-center',
    DescriptionWrapper: 'text-center',
  },
});

const VideoCardDefault = asCardToken(
  {
    // Extend vitalCard (not vitalCardStatic) bc we must hydrate to enable auto-play.
    ...vitalCard.Base,
    Components: {
      Image: on(VideoClean)(VideoTokens.Default),
      CTAWrapper: replaceWith(() => null),
      TitleWrapper: replaceWith(H2),
    },
    Theme: {
      ImageWrapper: 'md:mx-16',
      TitleWrapper: vitalTypography.H3,
    },
    Meta: extendMeta(
      flowHoc.meta.term('Type')('Card'),
      flowHoc.meta.term('Sub Type')('Video'),
    ),
  },
);

const asVideoCard = asCardToken(
  VideoCardDefault,
  vitalCard.WithHorizontalLeftOrientation,
  vitalCard.WithHorizontalContentCentered,
  vitalCard.WithNoEyebrow,
);

const WithCenteredTitle = asCardToken({
  Core: {
    TitleWrapper: 'text-center',
  }
});

const CaptionedImage = asCardToken(
  vitalCard.Base,
  vitalCard.WithNoDescription,
  vitalCard.WithNoEyebrow,
  WithCenteredTitle,
  {
    Meta: flowHoc.meta.term('Sub Type')('Captioned Image'),
  },
  {
    Schema: {
      Image: as(withNode, withNodeKey('image'))
    }
  },
);

export {
  asGetStarted,
  HeroCenter,
  asVideoCard,
  WithCenteredTitle,
  CaptionedImage,
};
