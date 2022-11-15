import { as } from '@bodiless/fclasses';
import { vitalCardStatic } from '@bodiless/vital-card';
import { withCategory } from '../../TokenEditor';
import {
  asGetStarted, withGreyBackground,
} from '../../../../components/Card';

/* Using vitalCardStatic these will get shadowned color changes */
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
const GetStarted = withCategory('Card SubTypes')(as(asGetStarted));
const WithGrayBackground = withCategory('Appearance')(as(asGetStarted, withGreyBackground));

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
  GetStarted,
  WithGrayBackground,
};
