import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default class Top extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/top?offset=0&limit=21';
        return (
            <div className='main-main-container'>
                <Navigationbar />
                <Title titleName={'Top'} />
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}