import filterStyle from './style.module.scss';

function HeaderPrimary(props) {
  return (
    <div className={`header-section ${props.headerClass}`}>
      <div className="row w-100">
        <div className="col-sm-3">
          <div>
            <h3 className={filterStyle.filterHeading}>
              {props.title}
              {props.totalLeads && <span> - {props.totalLeads}</span>}
              {props.lastEdited && (
                <div className={filterStyle.latsEditedText}>
                  ({props.editedTitle} :
                  <span className={filterStyle.nameText}>
                    {props.editedName}
                  </span>
                  )
                </div>
              )}
            </h3>
            {props.subTitle && (
              <p className={filterStyle.filterSubTitle}>{props.subTitle}</p>
            )}
          </div>
        </div>
        <div className="col-sm-9 mr-0">
          <div className="header-button-style">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
