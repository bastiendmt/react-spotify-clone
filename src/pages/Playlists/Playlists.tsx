import { PlaylistType } from '../../types/playlist.interface';
import { PlaylistsType } from '../../types/playlists.interface';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import styles from './Playlists.module.scss';

const Playlists = ({
  message,
  playlists,
}: {
  message: string;
  playlists: PlaylistsType;
}): JSX.Element => (
  <div className={styles.Playlists}>
    <h1 className={styles.Title}>Playlists - {message}</h1>
    <div className={styles.Container}>
      {playlists.items.map((item: PlaylistType) => (
        <PlaylistItem key={item.id} playlist={item} />
      ))}
    </div>
  </div>
);

export default Playlists;
