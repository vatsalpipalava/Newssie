import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Newscard from './card';
import Title from './title';

function Home() {
  const apiUrl = 'https://inshorts.me/news/all?offset=0&limit=99';

  return (
      <div className='main-main-container'>
        <Title titleName={'All'} />
        <Newscard apiUrl={apiUrl} />
      </div>

  );
}

export default Home;
