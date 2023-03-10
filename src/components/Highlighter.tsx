import React, { FC, RefObject } from 'react';

interface HighlighterProps {
  children: string;
  highlight: string;
  css: string;
  ref?: RefObject<any>;
}

const Highlighter: FC<HighlighterProps> = (data) => {
  var parts = null;
  var elements = [];

  if (data) {
    let highlight = data?.highlight;

    if (highlight.trim() != '') {
      let children = data?.children;
      let highlighted_classname = data?.css;
      let ref = data?.ref;

      const regexp = new RegExp(highlight, 'g');
      const matches = children.match(regexp);
      let parts = children.split(new RegExp(highlight, 'g'));

      for (var i = 0; i < parts.length; i++) {
        let match = matches ? matches[i] : '';
        if (i !== parts.length - 1) {
          while (parts[i + 1] === '') {
            // match += matches[++i];
            match += matches ? matches[i] : '';
          }

          elements[i] = (
            <React.Fragment key={i}>
              {parts[i]}
              <span className={highlighted_classname}>{match}</span>
            </React.Fragment>
          );
        } else {
          elements[i] = (
            <React.Fragment key={i}>
              {parts[i]}
              <span className={highlighted_classname}>{match}</span>
            </React.Fragment>
          );
        }
      }
    }
  }

  if (elements && elements.length > 0) {
    parts = elements;
  } else parts = data?.children;

  return (
    <div className="highlighter" ref={data?.ref}>
      {parts}
    </div>
  );
};

export default Highlighter;
