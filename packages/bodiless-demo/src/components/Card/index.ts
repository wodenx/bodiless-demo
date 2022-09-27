import {
  Div, extendMeta, flowHoc, replaceWith
} from '@bodiless/fclasses';
import { asCardToken, vitalCardStatic } from '@bodiless/vital-card';

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

export {
  asGetStarted,
  HeroCenter,
};
