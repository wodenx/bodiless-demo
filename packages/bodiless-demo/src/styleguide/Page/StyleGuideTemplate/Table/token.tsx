import { as } from '@bodiless/fclasses';
import { vitalTable } from '@bodiless/vital-table';
import { withCategory } from '../../TokenEditor';

const WithRowStripes = withCategory('Table Style')(as(vitalTable.WithRowStripes));
const WithHoverable = withCategory('Table Style')(as(vitalTable.WithHoverable));
const WithBorders = withCategory('Table Style')(as(vitalTable.WithBorders));
const WithBottomBorders = withCategory('Table Style')(as(vitalTable.WithBottomBorders));
const WithLightHeaderFooter = withCategory('Table Style')(as(vitalTable.WithLightHeaderFooter));
const WithFirstColumnHeader = withCategory('Table Style')(as(vitalTable.WithFirstColumnHeader));
const WithSecondColumnHighlighted = withCategory('Table Style')(as(vitalTable.WithSecondColumnHighlighted));
const WithThirdColumnHighlighted = withCategory('Table Style')(as(vitalTable.WithThirdColumnHighlighted));
const WithPrimaryHeaderFooter = withCategory('Table Style')(as(vitalTable.WithPrimaryHeaderFooter));
const WithScrolling = withCategory('Table Style')(as(vitalTable.WithScrolling));

export {
  WithRowStripes,
  WithHoverable,
  WithBorders,
  WithBottomBorders,
  WithLightHeaderFooter,
  WithFirstColumnHeader,
  WithSecondColumnHighlighted,
  WithThirdColumnHighlighted,
  WithPrimaryHeaderFooter,
  WithScrolling,
};
