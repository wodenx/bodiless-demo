import { as } from '@bodiless/fclasses';
import { vitalCardBase } from '@bodiless/vital-card';
import { withCategory } from '../../TokenEditor';

const WithVerticalOrientation = withCategory('Orientation')(as(vitalCardBase.WithVerticalOrientation));
const WithHorizontalLeftOrientation = withCategory('Orientation')(as(vitalCardBase.WithHorizontalOrientationBase, vitalCardBase.WithHorizontalLeftOrientation));
const WithHorizontalRightOrientation = withCategory('Orientation')(as(vitalCardBase.WithHorizontalOrientationBase, vitalCardBase.WithHorizontalRightOrientation));
const WithHorizontalContentAtTop = withCategory('Positioning')(as(vitalCardBase.WithHorizontalContentAtTop));
const WithHorizontalContentCentered = withCategory('Positioning')(as(vitalCardBase.WithHorizontalContentCentered));
const WithNoTitle = withCategory('Structure')(as(vitalCardBase.WithNoTitle));
const WithNoEyebrow = withCategory('Structure')(as(vitalCardBase.WithNoEyebrow));
const WithNoDescription = withCategory('Structure')(as(vitalCardBase.WithNoDescription));
const WithPrimaryTextLink = withCategory('CTA Type')(as(vitalCardBase.WithPrimaryTextLink));
const WithPrimaryButton = withCategory('CTA Type')(as(vitalCardBase.WithPrimaryButton));
const WithSecondaryButton = withCategory('CTA Type')(as(vitalCardBase.WithSecondaryButton));
const Basic = withCategory('Card SubTypes')(as(vitalCardBase.Basic));
const Hero = withCategory('Card SubTypes')(as(vitalCardBase.Hero));
const Category = withCategory('Card SubTypes')(as(vitalCardBase.Category));
const Topic = withCategory('Card SubTypes')(as(vitalCardBase.Topic));
const Product = withCategory('Card SubTypes')(as(vitalCardBase.Product));

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
};
