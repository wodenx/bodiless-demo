import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withVideoDemoVariations from './withVideoDemoVariations';

const DemoFlowContainer = flowHoc(
  withVideoDemoVariations,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const Video = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Video'),
  Content: {
    Title: replaceWith(() => <>Video</>),
    Examples: replaceWith(Variations),
  },
});
