import React from 'react';
import { withNodeKey } from '@bodiless/core';
import {
  as,
  replaceWith,
} from '@bodiless/fclasses';
import { vitalFlowContainer, FlowContainerClean } from '@bodiless/vital-flowcontainer';

import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';

const DefaultFlowContainer = as(
  vitalFlowContainer.Default,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const FullFlowContainer = as(
  vitalFlowContainer.Default,
  vitalFlowContainer.WithFullWidthConstraint,
  withNodeKey('fullwidthcontainer'),
)(FlowContainerClean);

const SingleContainer = as(
  vitalFlowContainer.Default,
  vitalFlowContainer.WithSingleConstraint,
  withNodeKey('singlecontainer'),
)(FlowContainerClean);

const OneThirdContainer = as(
  vitalFlowContainer.Default,
  vitalFlowContainer.WithTabletOneThirdConstraint,
  withNodeKey('onethirdcontainer'),
)(FlowContainerClean);

const ContentRegionContainer = as(
  vitalFlowContainer.ContentRegion,
  withNodeKey('contentregioncontainer'),
)(FlowContainerClean);

const ContentLibraryContainer = as(
  vitalFlowContainer.WithContentLibrary,
  withNodeKey('contentLibraryContainer'),
)(FlowContainerClean);

const Examples = (props: any) => (
  <>
    <DefaultFlowContainer />
    <hr />
    <SingleContainer />
    <hr />
    <FullFlowContainer />
    <hr />
    <OneThirdContainer />
    <hr />
    <div className="border-2">
      <ContentRegionContainer />
    </div>
    <hr />
    <ContentLibraryContainer />
  </>
);

export const FlowContainer = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Flow Container',
  },
  Content: {
    Title: replaceWith(() => <>FlowContainer</>),
    Examples: replaceWith(Examples),
  },
});
