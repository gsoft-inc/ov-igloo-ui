import React from 'react';

export default function Toc(props) {
  const { children } = props;

  const listItems = children.props;
  const tocList = listItems.children.props.children;
  const toc = tocList[1].props.children;

  return (
    <div className="io-toc">
      <div className="io-subnav">
        <div className="io-subnav__title">Quick nav</div>
        <ol className="io-subnav__list">{toc}</ol>
      </div>
    </div>
  );
}
