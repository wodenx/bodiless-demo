import { as } from '@bodiless/fclasses';
import { vitalList } from '@bodiless/vital-list';
import { withCategory } from '../../TokenEditor';

const WithIndent = withCategory('Accordion Style')(as(vitalList.WithIndent));
const WithBullets = withCategory('Accordion Style')(as(vitalList.WithBullets));
const WithNumbers = withCategory('Accordion Style')(as(vitalList.WithNumbers));
const WithPlainTitle = withCategory('List Editor')(as(vitalList.WithPlainTitle));
const WithRichTitle = withCategory('List Editor')(as(vitalList.WithRichTitle));
const WithLinkedTitle = withCategory('List Editor')(as(vitalList.WithLinkedTitle));
const WithInfographicTitle = withCategory('List Editor')(as(vitalList.WithInfographicTitle));

export {
  WithIndent,
  WithRichTitle,
  WithInfographicTitle,
  WithLinkedTitle,
  WithPlainTitle,
  WithNumbers,
  WithBullets,
};
