import React from 'react';
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default function Trending() {
    const apiUrl = 'https://inshorts.me/news/trending?offset=0&limit=21';
    return (
        <div className='main-main-container'>
            <Navigationbar />
            <Title titleName={'Trending'} />
            <Newscard apiUrl={apiUrl} />
        </div>
    )
}
