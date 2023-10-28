import React from 'react';

function PageSection(props) {
  const { fullWidth, overflow, padding, paddingY, paddingTop, paddingBottom, customStyle, children } = props;

  const sectionClass = ['page-section', { '--allow-overflow': overflow }].join(' ');
  const contentClass = ['section-content', { '--full-width': fullWidth }].join(' ');
  const style = {
    padding,
    paddingTop: paddingY || paddingTop,
    paddingBottom: paddingY || paddingBottom,
    ...customStyle,
  };

  return (
    <section className={sectionClass}>
      {props.children.prepended}
      <div className={contentClass} style={style}>
        {children}
      </div>
      {props.children.appended}
    </section>
  );
}

export default PageSection;
