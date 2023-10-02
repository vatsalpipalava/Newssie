import React from 'react';
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default function Entertainment() {
    const apiUrl = 'https://inshorts.me/news/topics/entertainment';
    return (
        <div className='main-main-container'>
            <Navigationbar />
            <Title titleName={'Entertainment'} />
            <Newscard apiUrl={apiUrl} />
        </div>
    )
}

