import React from 'react';
import type { ComponentOrTag } from '@bodiless/fclasses';
import {
  designable,
  Div,
  Video,
  DesignableComponentsProps,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { useVideoAutoPlayback } from './AutoPlayback';

export type VideoComponents = {
  Wrapper: ComponentOrTag<any>,
  Video: ComponentOrTag<any>,
};

const videoComponents:VideoComponents = {
  Wrapper: Div,
  Video,
};

type Props = DesignableComponentsProps<VideoComponents> & { };

const VideoBase = (props: Props) => {
  const { components: C } = props;

  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  return (
    <C.Wrapper ref={containerRef}>
      <C.Video ref={videoRef}>
        Sorry, your browser does not support videos
      </C.Video>
    </C.Wrapper>
  );

  /*
  return (
    <C.Wrapper>
      <C.Video>
        Sorry, your browser does not support videos
      </C.Video>
    </C.Wrapper>
  );
  */
};

const VideoClean = designable(videoComponents, 'Video')(VideoBase);

export const asVideoToken = asVitalTokenSpec<VideoComponents>();

export default VideoClean;
