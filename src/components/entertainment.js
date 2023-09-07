import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';


export default class Entertainment extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/topics/entertainment';
        return (
            <div className='main-main-container'>
                <Title titleName = {'Entertainment'}/>
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}
