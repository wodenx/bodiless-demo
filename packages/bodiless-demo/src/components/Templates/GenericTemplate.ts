// TBD remove after shadowing PR merges....

import {
  vitalGenericTemplate, asGenericTemplateToken
} from '@bodiless/vital-templates';
import { DemoLayout } from '../Layout';

const Default = asGenericTemplateToken(vitalGenericTemplate.Default, {
  Components: {
    PageWrapper: DemoLayout,
  },
});

export default {
  Default,
};
