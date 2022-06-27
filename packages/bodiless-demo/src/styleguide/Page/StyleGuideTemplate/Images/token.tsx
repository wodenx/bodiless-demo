import { as } from '@bodiless/fclasses';
import { vitalImage } from '@bodiless/vital-image';
import { withCategory } from '../../TokenEditor';

const Plain = withCategory('Image Type')(as(vitalImage.Plain));
const EditableTraced = withCategory('Image Type')(as(vitalImage.EditableTraced));
const EditableNoEffect = withCategory('Image Type')(as(vitalImage.EditableNoEffect));
const Hero = withCategory('Image Type')(as(vitalImage.Hero));
const WithEditorPlain = withCategory('Image Editors')(as(vitalImage.WithEditorPlain));
const WithEditorBlurUp = withCategory('Image Editors')(as(vitalImage.WithEditorBlurUp));
const WithEditorTraced = withCategory('Image Editors')(as(vitalImage.WithEditorTraced));
const WithEditorNoEffect = withCategory('Image Editors')(as(vitalImage.WithEditorNoEffect));
const WithLandscapePlaceholder = withCategory('Image Features')(as(vitalImage.WithLandscapePlaceholder));
const WithLink = withCategory('Image Features')(as(vitalImage.WithLink));
const WithFullWidthImage = withCategory('Image Features')(as(vitalImage.WithFullWidthImage));
const WithEager = withCategory('Image Features')(as(vitalImage.WithEager));

export {
  Plain,
  WithEditorPlain,
  WithEditorBlurUp,
  WithEditorTraced,
  WithEditorNoEffect,
  EditableTraced,
  EditableNoEffect,
  WithLandscapePlaceholder,
  WithLink,
  WithFullWidthImage,
  WithEager,
  Hero,
};
