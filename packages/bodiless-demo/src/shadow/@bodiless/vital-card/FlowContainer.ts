import { as } from '@bodiless/fclasses';
import { vitalCardFlowContainerBase } from '@bodiless/vital-card';

// Demostrating only showing Basic & Hero Card Variations in Component Picker
const WithCardVariations = as(
  vitalCardFlowContainerBase.WithBasicVariations,
  vitalCardFlowContainerBase.WithHeroVariations,
);

export default {
  ...vitalCardFlowContainerBase,
  WithCardVariations,
};
