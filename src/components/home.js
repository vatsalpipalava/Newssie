import React from 'react';
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default function Home() {
    const apiUrl = 'https://inshorts.me/news/top?offset=0&limit=21';
    return (
        <div className='main-main-container'>
            <Navigationbar />
            <Title titleName={'All'} />
            <Newscard apiUrl={apiUrl} />
        </div>
    )
}
