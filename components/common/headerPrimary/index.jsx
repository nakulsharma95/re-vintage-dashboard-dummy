import styles from './style.module.scss';

function HeaderPrimary(props) {
  return (
    <div className={`${styles.headerPrimary} ${props.headerClass}`}>
      <div>
        <h3 className={styles.filterHeading}>
          {props.title}
          {props.totalLeads && <span> - {props.totalLeads}</span>}
          {props.lastEdited && (
            <div className={styles.latsEditedText}>
              ({props.editedTitle} :
              <span className={styles.nameText}>{props.editedName}</span>)
            </div>
          )}
        </h3>
        {props.subTitle && (
          <p className={styles.filterSubTitle}>{props.subTitle}</p>
        )}
      </div>

      <div className={styles.headerActionSection}>{props.children}</div>
    </div>
  );
}

export default HeaderPrimary;
