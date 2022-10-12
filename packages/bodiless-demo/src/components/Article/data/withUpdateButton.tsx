import React, { useRef } from 'react';
import {
  useNode, ContentNode, useMenuOptionUI, useNotify,
} from '@bodiless/core';
import { v4 } from 'uuid';
import type { HOC } from '@bodiless/fclasses';
import {
  ArticleMetadata, useIsLinked,
  useLibraryNode as useLibraryNodeBase,
  useOverrides as useOverridesBase,
} from './withContentLibrary';
import withUpdateButtonBase from './withUpdateButtonBase';

const useLibraryNode = () => {
  const { node: targetNode } = useNode<any>();
  const { node: libraryNode } = useLibraryNodeBase();
  const { id } = targetNode.data;
  return {
    node: id && libraryNode.child<ArticleMetadata>(id),
  };
};

const useNodes = () => ({
  targetNode: useNode<ArticleMetadata>().node,
  libraryNode: useLibraryNode().node,
});

const useIsNewVersionAvailable = () => {
  const { targetNode, libraryNode } = useNodes();
  return libraryNode && libraryNode.data.revisionId !== targetNode.data.revisionId;
};

const useFormOptions = () => {
  const { libraryNode, targetNode } = useNodes();
  const unLink = () => {
    targetNode.setData({
      id: '',
      revisionId: '',
      updateTime: '',
    });
  };

  const hasSubmit = useIsNewVersionAvailable();

  const renderForm = () => {
    const {
      ComponentFormFieldWrapper, ComponentFormFieldTitle, ComponentFormDescription,
      ComponentFormUnwrapButton,
    } = useMenuOptionUI();
    const renderNode = (node: ContentNode<ArticleMetadata> | undefined, title: string) => (
      <ComponentFormFieldWrapper key={title}>
        <ComponentFormFieldTitle>{title}</ComponentFormFieldTitle>
        <ComponentFormDescription>
          {node?.data.revisionId
            ? `Revision ${node.data.revisionId}, ${node.data.updateTime}`
            : 'Not available'}
        </ComponentFormDescription>
      </ComponentFormFieldWrapper>
    );
    return (
      <>
        {renderNode(targetNode, 'Current')}
        {renderNode(libraryNode, 'Original')}
        {hasSubmit && <div> Click the check below to update to latest version</div>}
        <br />
        <br />
        <ComponentFormUnwrapButton onClick={unLink}>Unlink</ComponentFormUnwrapButton>
      </>
    );
  };
  return {
    renderForm,
    hasSubmit,
  };
};

const useOverrides = () => ({
  ...useOverridesBase(),
  name: 'cms-update',
  isActive: true,
  isHidden: !useIsLinked(),
  formDescription: `This component is linked to an article from the CMS.
                      If there is a later revision, you may update the content here.`,
});

const options = {
  useOverrides,
  useFormOptions,
  useLibraryNode,
  peer: true,
};

const withUpdateButton = withUpdateButtonBase(options);

export default withUpdateButton;

export const withUpdateNotifier:HOC = Component => {
  const WithUpdateNotifier = (props: any) => {
    const id = useRef(v4());
    useNotify(
      useIsNewVersionAvailable()
        ? [{
          id: id.current,
          message: 'A newer version of this content is available.',
        }]
        : [],
    );
    return <Component {...props} />;
  };
  return WithUpdateNotifier;
};