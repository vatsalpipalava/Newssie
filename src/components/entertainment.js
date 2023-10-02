import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default class Entertainment extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/topics/entertainment';
        return (
            <div className='main-main-container'>
                <Navigationbar />
                <Title titleName = {'Entertainment'}/>
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}
