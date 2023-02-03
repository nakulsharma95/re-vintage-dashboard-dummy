import style from './style.module.scss';

export default function Homepage() {
  return (
    <div className={style.homepageStyle}>
      <h1 className={`${style.titleCustomStyle} title2`}>
        Welcome to 😊
        <br /> Vintage Dashboard
      </h1>
    </div>
  );
}
