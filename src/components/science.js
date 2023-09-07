import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';

export default class Science extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/topics/science';
        return (
            <div className='main-main-container'>
                <Title titleName = {'Science'}/>
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}