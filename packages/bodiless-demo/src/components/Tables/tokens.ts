import { withNodeKey } from '@bodiless/core';
import {
  addProps, as, flowHoc, on
} from '@bodiless/fclasses';
import { EditorPlainClean, vitalEditorPlain } from '@bodiless/vital-editors';
import { vitalTypography } from '@bodiless/vital-elements';
import omit from 'lodash/omit';
import { asSecondColumnHighlighted, asThirdColumnHighlighted } from './TableVariations';
import { asTitleTableToken } from './TitleTableClean';

const Base = asTitleTableToken(
  {
    Components: {
      Title: on(EditorPlainClean)(vitalEditorPlain.Default, addProps({ placeholder: 'Title' })),
    },
    Schema: {
      Title: withNodeKey('title'),
    },
    Spacing: {
      TitleWrapper: 'pb-2',
    },
    Theme: {
      TitleWrapper: as(
        'text-center',
        omit(vitalTypography.H2, 'Spacing'),
      ),
    },
    Meta: flowHoc.meta.term('Type')('Table with Title'),
  }
);

const asSecondColumnHighlightedTitle = asTitleTableToken(Base,
  {
    Components: {
      Table: asSecondColumnHighlighted,
    },
    Meta: flowHoc.meta.term('Column Style')('Second Column Highlighted'),
  });
const asThirdColumnHighlightedTitle = asTitleTableToken(Base,
  {
    Components: {
      Table: asThirdColumnHighlighted,
    },
    Meta: flowHoc.meta.term('Column Style')('Third Column Highlighted'),
  });

export {
  Base,
  asSecondColumnHighlightedTitle,
  asThirdColumnHighlightedTitle,
};
