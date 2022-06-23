import {
  addProps, as, on, withDesign, addClassesIf, and, Div,
} from '@bodiless/fclasses';
import { withChild, withNode, withNodeKey } from '@bodiless/core';
import { asBodilessChameleon } from '@bodiless/components';
import {
  asBodilessTable,
  useIsInBody,
  useIsInHead,
  useIsSecondColumn,
  useIsThirdColumn,
  useIsFirstColumn,
} from '@bodiless/table';
import { vitalTable, asTableToken } from '@bodiless/vital-table';
import {
  EditorPlainClean, vitalEditorPlain, RichTextClean, vitalRichText
} from '@bodiless/vital-editors';
import GreenYesIcon from '../../assets/GreenYes';
import RedNoIcon from '../../assets/RedNo';

const PlainEditor = (vitalEditorPlain.Default, addProps({ placeholder: 'Cell' }))(EditorPlainClean);

const CellChameleon = as(
  asBodilessChameleon('component', { component: 'PlainEditor' }, () => ({ groupLabel: 'Cell Content', label: 'Type' })),
  withDesign({
    PlainEditor: withChild(PlainEditor),
    Yes: withChild(GreenYesIcon),
    No: withChild(RedNoIcon),
    Editor: on(RichTextClean)(vitalRichText.Default, addProps({ placeholder: 'Cell' })),
  }),
);

const DemoStyleTable = asTableToken({
  Components: {
    CellContent: on(Div)(CellChameleon),
  },
  Schema: {
    _: asBodilessTable(),
    CellContent: as(withNode, withNodeKey('Cell')),
  },
  Theme: {
    Table: 'mx-auto',
    THead: 'bg-demo-primary-interactive text-white',
    TFoot: 'bg-demo-primary-interactive',
    Cell: addClassesIf(and(useIsInBody, useIsFirstColumn))('text-center'),
  },
  Spacing: {
    Cell: 'p-2',
  },
});

const WithHighlightSecondColumn = asTableToken({
  Theme: {
    Cell: as(
      addClassesIf(and(useIsInBody, useIsSecondColumn))('bg-demo-table-light'),
      addClassesIf(and(useIsInHead, useIsSecondColumn))('font-extrabold italic'),
    ),
  },
});

const WithHighlightThirdColumn = asTableToken({
  Theme: {
    Cell: as(
      addClassesIf(and(useIsInBody, useIsThirdColumn))('bg-demo-table-light'),
      addClassesIf(and(useIsInHead, useIsThirdColumn))('font-extrabold italic'),
    ),
  },
});

const asSecondColumnHighlighted = as(
  DemoStyleTable,
  vitalTable.WithFlowContainerPreview,
  vitalTable.WithBorders,
  WithHighlightSecondColumn,
);
const asThirdColumnHighlighted = as(
  DemoStyleTable,
  vitalTable.WithFlowContainerPreview,
  vitalTable.WithBorders,
  WithHighlightThirdColumn,
);

export {
  asSecondColumnHighlighted,
  asThirdColumnHighlighted,
};
