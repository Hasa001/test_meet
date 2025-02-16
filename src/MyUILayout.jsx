import { CallingState, CallControls, SpeakerLayout, StreamTheme, useCallStateHooks } from '@stream-io/video-react-sdk';

export const MyUILayout = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="loading">
        <svg width="64px" height="48px">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
        </svg>
      </div>
    );
  }

  const handleOnLeave = () => {
    window.location.href = '/'
}

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition='bottom' />
      <CallControls onLeave={handleOnLeave} />
    </StreamTheme>
  );
};
