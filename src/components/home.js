import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';

export default class Home extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/all?offset=0&limit=99';
        return (
            <div className='main-main-container'>
                <Title titleName = {'All'}/>
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}