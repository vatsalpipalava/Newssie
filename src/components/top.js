import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';

export default class Top extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/top?offset=0&limit=21';
        return (
            <div className='main-main-container'>
                <Title titleName={'Top'} />
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}