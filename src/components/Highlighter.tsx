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
  console.log('=====');
  console.log(data);

  if (data) {
    let highlight = data?.highlight;
    let children = data?.children;
    let highlighted_classname = data?.css;
    // let highlighted_classname = '';
    let ref = data?.ref;

    const regexp = new RegExp(highlight, 'g');
    // console.log(regexp);
    // const matches = regexp.exec(children);
    const matches = children.match(regexp);
    // console.log(matches);
    // console.log(matches.length);
    // let parts = children.split(new RegExp(`${highlight.replace()}`, 'g'));
    let parts = children.split(new RegExp(highlight, 'g'));
    // console.log('PARTS');
    // console.log(parts);
    // console.log(parts.length);

    for (var i = 0; i < parts.length; i++) {
      let match = matches ? matches[i] : '';
      if (i !== parts.length - 1) {
        // console.log(i);
        // console.log(parts[i]);
        // console.log(matches[i]);
        // let match = matches[i];

        // While the next part is an empty string, merge the corresponding match with the current
        // match into a single <span/> to avoid consequent spans with nothing between them.
        while (parts[i + 1] === '') {
          // match += matches[++i];
          match += matches ? matches[i] : '';
        }

        // console.log('here..');

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

  // console.log(elements);
  // console.log(parts);

  if (elements && elements.length > 0) {
    // console.log(1);
    parts = elements;
  } else parts = data?.children;

  // console.log(parts);
  return (
    <div className="highlighter" ref={data?.ref}>
      {parts}
    </div>
  );
};

export default Highlighter;
