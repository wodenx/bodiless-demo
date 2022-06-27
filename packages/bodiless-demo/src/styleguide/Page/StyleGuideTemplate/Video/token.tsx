import { as } from '@bodiless/fclasses';
import { vitalYouTube } from '@bodiless/vital-youtube';
import { withCategory } from '../../TokenEditor';

const Default = withCategory('Video Type')(as(vitalYouTube.Default));
const Hero = withCategory('Video Type')(as(vitalYouTube.Hero));
const WithFullScreenEnabled = withCategory('Video Features')(as(vitalYouTube.WithFullScreenEnabled));
const WithSchema = withCategory('Video Features')(as(vitalYouTube.WithSchema));

export {
  WithSchema,
  WithFullScreenEnabled,
  Hero,
  Default,
};
