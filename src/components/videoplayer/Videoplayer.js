import '../../../node_modules/video-react/dist/video-react.css'; // import css
import React from 'react';
import {
  Player,
  ControlBar,
  PlaybackRateMenuButton,
  ForwardControl,
  ReplayControl,
  ClosedCaptionButton,
} from 'video-react';

const Videoplayer = ({ poster, url }) => {
  return (
    <Player playsInline poster={poster}>
      <source
        // src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4"
        src={url}
        type="video/mp4"
      />
      <ControlBar autoHide={true}>
        <ReplayControl seconds={10} order={5} />
        <ForwardControl seconds={10} order={5} />
        <ClosedCaptionButton order={8} />
        <PlaybackRateMenuButton
          order={8}
          rates={[4, 2.5, 2, 1.75, 1.5, 1.3, 1, 0.8, 0.5]}
        />
      </ControlBar>

      <track
        kind="captions"
        src="/assets/elephantsdream/captions.en.vtt"
        srcLang="en"
        label="English"
        default
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.sv.vtt"
        srcLang="sv"
        label="Swedish"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ru.vtt"
        srcLang="ru"
        label="Russian"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ja.vtt"
        srcLang="ja"
        label="Japanese"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ar.vtt"
        srcLang="ar"
        label="Arabic"
      />

      <track
        kind="descriptions"
        src="/assets/elephantsdream/descriptions.en.vtt"
        srcLang="en"
        label="English"
      />

      <track
        kind="chapters"
        src="/assets/elephantsdream/chapters.en.vtt"
        srcLang="en"
        label="English"
      />
    </Player>
  );
};

export default Videoplayer;
