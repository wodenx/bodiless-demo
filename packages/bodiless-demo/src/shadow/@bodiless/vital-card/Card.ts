import { H2, replaceWith } from '@bodiless/fclasses';
import { asCardToken, vitalCardBase } from '@bodiless/vital-card';
// import { vitalTypography } from '@bodiless/vital-elements';

const HeroMargin = asCardToken({
  Theme: {
    Wrapper: 'mt-8',
    CTAWrapper: 'mx-auto max-w-xs',
    TitleWrapper: 'text-center',
    DescriptionWrapper: 'text-center',
  },
});

const Basic = asCardToken(vitalCardBase.Basic, {
  Components: {
    TitleWrapper: replaceWith(H2),
  },
  Theme: {
    ImageWrapper: 'md:mx-16',
  },
});

const Hero = asCardToken(
  vitalCardBase.HeroBase,
  vitalCardBase.WithHorizontalContentCentered,
  vitalCardBase.WithHorizontalLeftOrientation,
  vitalCardBase.WithPrimaryButton,
  HeroMargin,
);

export default {
  ...vitalCardBase,
  Hero,
  Basic,
};
