import React from 'react';
import type { ComponentOrTag } from '@bodiless/fclasses';
import {
  designable,
  Div,
  Video,
  DesignableComponentsProps,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
// import { useVideoAutoPlayback } from './AutoPlayback';

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

  /*

  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const WrapperRef = React.forwardRef<HTMLDivElement, any>(
    (props, forwardRef) => <C.Wrapper {...props} ref={forwardRef} />
  );
  const VideoRef = React.forwardRef<HTMLVideoElement, any>(
    (props, forwardRef) => <C.Video {...props} ref={forwardRef} />
  );

  return (
    <WrapperRef forwardRef={containerRef}>
      <VideoRef forwardRef={videoRef}>
        Sorry, your browser does not support videos
      </VideoRef>
    </WrapperRef>
  );

  */

  return (
    <C.Wrapper>
      <C.Video>
        Sorry, your browser does not support videos
      </C.Video>
    </C.Wrapper>
  );
};

const VideoClean = designable(videoComponents, 'Video')(VideoBase);

export const asVideoToken = asVitalTokenSpec<VideoComponents>();

export default VideoClean;
