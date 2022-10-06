import {
  Div, flowHoc, on, replaceWith, H2, extendMeta,
} from '@bodiless/fclasses';
import { asCardToken, vitalCardStatic, vitalCard } from '@bodiless/vital-card';
import { vitalTypography } from '@bodiless/vital-elements';
import { vitalRichText, RichTextClean } from '@bodiless/vital-editors';
import { VideoClean, VideoTokens } from '../Video';

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

const asArticle = asCardToken(
  {
    ...vitalCard.Base,
    Components: {
      ...vitalCard.Base.Components,
      Wrapper: replaceWith(Div),
      CTAWrapper: replaceWith(() => null),
      Description: on(RichTextClean)(vitalRichText.Default),
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
      flowHoc.meta.term('Type')('Card'),
      flowHoc.meta.term('Sub Type')('Article'),
      flowHoc.meta.term('Orientation')('Horizontal'),
    ),
    Editors: {
      ...vitalCard.Base.Editors,
      Wrapper: undefined,
    },
  },
  vitalCardStatic.WithNoEyebrow,
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

export {
  asGetStarted,
  HeroCenter,
  asVideoCard,
  asArticle,
};
