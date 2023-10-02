import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';
import Navigationbar from './navbar';

export default class Sports extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/topics/sports';
        return (
            <div className='main-main-container'>
                <Navigationbar />
                <Title titleName = {'Sports'}/>
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}
