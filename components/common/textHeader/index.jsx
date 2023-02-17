import filterStyle from './style.module.scss';

function TextHeader(props) {
  return (
    <div>
      <h3 className={filterStyle.filterHeading}>
        {props.title}
        <span> {props.totalLeads}</span>
        {props.lastEdited && (
          <div className={filterStyle.latsEditedText}>
            ({props.editedTitle} :
            <span className={filterStyle.nameText}> {props.editedName}</span>)
          </div>
        )}
      </h3>
      <p className={filterStyle.filterSubTitle}>{props.subTitle}</p>
    </div>
  );
}

export default TextHeader;
