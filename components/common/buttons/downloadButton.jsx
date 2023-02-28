import styles from './style.module.scss';

export default function DownloadButton(props) {
  return (
    <a
      className={styles.downloadButton}
      href={props.buttonLink || '/'}
      download
    >
      <div className={styles.iconUrl}>{props.iconUrl}</div>
    </a>
  );
}
