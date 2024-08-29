import { WebinarRecordingProps } from './WebinarRecording.props';
import styles from './WebinarRecording.module.css';
import YouTube from 'react-youtube';


export const WebinarRecording = ({ videoUrl }: WebinarRecordingProps): JSX.Element => {
    const videoId = videoUrl.split('v=')[1].split('&')[0];

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return <YouTube videoId={videoId} opts={opts} className={styles.webinarRecording} />;
};
