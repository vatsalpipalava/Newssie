import React from 'react';

function Title({titleName}) {
  return (
    <div>
      <h1 className='news-main-title'>{titleName} News</h1>
      <div className='news-heading-under-line'></div>
    </div>
  );
}

export default Title;
