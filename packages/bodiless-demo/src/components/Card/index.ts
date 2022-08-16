import {
  Div, flowHoc, on, replaceWith, H2, extendMeta,
} from '@bodiless/fclasses';
import { asCardToken, vitalCardStatic } from '@bodiless/vital-card';
import { vitalTypography } from '@bodiless/vital-elements';
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
    Meta: flowHoc.meta.term('Sub Type')('Get Started'),
  }
);

const VideoCardDefault = asCardToken(
  {
    ...vitalCardStatic.Base,
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
  vitalCardStatic.WithHorizontalLeftOrientation,
  vitalCardStatic.WithHorizontalContentCentered,
  vitalCardStatic.WithNoEyebrow,
);

export {
  asGetStarted,
  asVideoCard,
};
