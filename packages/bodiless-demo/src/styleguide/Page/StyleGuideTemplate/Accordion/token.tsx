import { as } from '@bodiless/fclasses';
import { vitalAccordion } from '@bodiless/vital-accordion';
import { withCategory } from '../../TokenEditor';

const WithInitiallyExpanded = withCategory('Accordion State')(as(vitalAccordion.WithInitiallyExpanded));
const WithFAQSchema = withCategory('Accordion Schema')(as(vitalAccordion.WithFAQSchema));

export {
  WithInitiallyExpanded,
  WithFAQSchema,
};
