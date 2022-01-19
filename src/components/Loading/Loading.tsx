import React from 'react';
import './Loading.css';

interface ILoadingProps {
  children: React.ReactNode;
  width?: string;
  minHeight?: string;
  load: boolean;
}
function Loading(props: ILoadingProps) {
  if (!props.load) return <>{props.children}</>;
  return (
    <div
      className="container"
      ref={(el) => {
        if (el) {
          el.style.width = props.width || '100%';
          el.style.minHeight = props.minHeight || '100px';
        }
      }}
    >
      <div className="bars">
        <div className="bar bar1" />
        <div className="bar bar1" />
        <div className="bar bar1" />
      </div>
    </div>
  );
}

export default Loading;
