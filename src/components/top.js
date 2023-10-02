import React from 'react';
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default function Top() {
    const apiUrl = 'https://inshorts.me/news/top?offset=0&limit=21';
    return (
        <div className='main-main-container'>
            <Navigationbar />
            <Title titleName={'Top'} />
            <Newscard apiUrl={apiUrl} />
        </div>
    )
}