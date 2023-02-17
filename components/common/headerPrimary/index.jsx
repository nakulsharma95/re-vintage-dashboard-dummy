import filterStyle from './style.module.scss';

function HeaderPrimary(props) {
  return (
    <div className={`header-section ${props.headerClass}`}>
      <div className="row w-100">
        <div className="col-sm-4">
          <div>
            <h3 className={filterStyle.filterHeading}>
              {props.title}
              <span> - {props.totalLeads}</span>
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
            <p className={filterStyle.filterSubTitle}>{props.subTitle}</p>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="header-button-style">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
