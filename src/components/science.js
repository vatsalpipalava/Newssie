import React from 'react';
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default function Science() {
    const apiUrl = 'https://inshorts.me/news/topics/science';
    return (
        <div className='main-main-container'>
            <Navigationbar />
            <Title titleName={'Science'} />
            <Newscard apiUrl={apiUrl} />
        </div>
    )
}