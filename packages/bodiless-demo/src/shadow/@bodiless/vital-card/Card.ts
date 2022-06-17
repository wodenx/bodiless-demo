import { asCardToken, vitalCardBase } from '@bodiless/vital-card';

const HeroMargin = asCardToken({
  Theme: {
    Wrapper: 'mt-8',
  },
});

const Basic = asCardToken(vitalCardBase.Basic, {
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
