import React from 'react';
import { withNodeKey } from '@bodiless/core';
import {
  EditorPlainClean, vitalEditorPlain, RichTextClean, vitalRichText
} from '@bodiless/vital-editors';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import {
  as, replaceWith,
  H3, Section, Pre, Div,
} from '@bodiless/fclasses';
import { vitalColor, vitalTypography } from '@bodiless/vital-elements';

const C = {
  H3: as(vitalTypography.H3)(H3),
  Example: as('pt-12')(Section),
  Demo: as('p-2 border border-1')(Div),
  Code: as(
    'p-2 mt-2',
    vitalColor.BgPrimaryDivider,
    vitalColor.TextPrimaryHeaderCopy,
  )(Pre),
};

// @todo auto-generate examples from token collection entries
const Default = as(
  vitalEditorPlain.Default,
  withNodeKey('plain-default'),
)(EditorPlainClean);

const WithAutoSuperscript = as(
  vitalEditorPlain.Default,
  vitalEditorPlain.WithAutoSuperscript,
  withNodeKey('plain-with-super'),
)(EditorPlainClean);

const RichText = as(
  vitalRichText.Default,
  withNodeKey('rich-text-default'),
)(RichTextClean);

const Examples = () => (
  <>
    <C.Example>
      <C.H3>Default Plain Text Editor</C.H3>
      <C.Demo>
        <Default />
      </C.Demo>
      <C.Code>
        as(vitalEditorPlain.Default)(EditorPlainClean);
      </C.Code>
    </C.Example>
    <C.Example>
      <C.H3>Plain Text Editor with Auto Superscript</C.H3>
      <C.Demo>
        <WithAutoSuperscript />
      </C.Demo>
      <C.Code>
        as(vitalEditorPlain.WithAutoSuperscript)(EditorPlainClean);
      </C.Code>
    </C.Example>
    <C.Example>
      <C.H3>Default Rich Text Editor</C.H3>
      <C.Demo>
        <RichText />
      </C.Demo>
      <C.Code>
        as(vitalRichText.Default)(RichTextClean);
      </C.Code>
    </C.Example>
  </>
);

export const Editors = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Editors',
  },
  Content: {
    Title: replaceWith(() => <>Text Editors</>),
    Examples: replaceWith(Examples),
  },
});

const MonoFont = {
  Wrapper: as('font-mono')(Div),
};

const ExamplesMonoFont = () => (
  <>
    <MonoFont.Wrapper>
      <Examples />
    </MonoFont.Wrapper>
  </>
);

export const EditorsMonoFont = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Editors with MonoFont',
  },
  Content: {
    Title: replaceWith(() => <>Text Editors</>),
    Examples: replaceWith(ExamplesMonoFont),
  },
});
