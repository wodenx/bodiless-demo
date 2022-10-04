import { as } from '@bodiless/fclasses';
import { vitalCardStatic } from '@bodiless/vital-card';
import { withCategory } from '../../TokenEditor';
import { asGetStarted, withGreyBackground, withGradientBackground } from '../../../../components/Card';

const WithVerticalOrientation = withCategory('Orientation')(as(vitalCardStatic.WithVerticalOrientation));
const WithHorizontalLeftOrientation = withCategory('Orientation')(as(vitalCardStatic.WithHorizontalOrientationBase, vitalCardStatic.WithHorizontalLeftOrientation));
const WithHorizontalRightOrientation = withCategory('Orientation')(as(vitalCardStatic.WithHorizontalOrientationBase, vitalCardStatic.WithHorizontalRightOrientation));
const WithHorizontalContentAtTop = withCategory('Positioning')(as(vitalCardStatic.WithHorizontalContentAtTop));
const WithHorizontalContentCentered = withCategory('Positioning')(as(vitalCardStatic.WithHorizontalContentCentered));
const WithNoTitle = withCategory('Structure')(as(vitalCardStatic.WithNoTitle));
const WithNoEyebrow = withCategory('Structure')(as(vitalCardStatic.WithNoEyebrow));
const WithNoDescription = withCategory('Structure')(as(vitalCardStatic.WithNoDescription));
const WithPrimaryTextLink = withCategory('CTA Type')(as(vitalCardStatic.WithPrimaryTextLink));
const WithPrimaryButton = withCategory('CTA Type')(as(vitalCardStatic.WithPrimaryButton));
const WithSecondaryButton = withCategory('CTA Type')(as(vitalCardStatic.WithSecondaryButton));
const Basic = withCategory('Card SubTypes')(as(vitalCardStatic.Basic));
const Hero = withCategory('Card SubTypes')(as(vitalCardStatic.Hero));
const Category = withCategory('Card SubTypes')(as(vitalCardStatic.Category));
const Topic = withCategory('Card SubTypes')(as(vitalCardStatic.Topic));
const Product = withCategory('Card SubTypes')(as(vitalCardStatic.Product));
const GetStartedGray = withCategory('Custom')(as(asGetStarted, withGreyBackground));
const GetStartedGradient = withCategory('Custom')(as(asGetStarted, withGradientBackground));

export {
  WithNoTitle,
  WithNoEyebrow,
  WithNoDescription,
  WithPrimaryTextLink,
  WithPrimaryButton,
  WithSecondaryButton,
  WithHorizontalContentAtTop,
  WithHorizontalContentCentered,
  WithVerticalOrientation,
  WithHorizontalLeftOrientation,
  WithHorizontalRightOrientation,
  Basic,
  Hero,
  Category,
  Topic,
  Product,
  GetStartedGray,
  GetStartedGradient,
};
