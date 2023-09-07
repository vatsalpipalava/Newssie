import React, { Component } from 'react'
import Newscard from './card';
import Title from './title';


export default class Sports extends Component {
    render() {
        const apiUrl = 'https://inshorts.me/news/topics/sports';
        return (
            <div className='main-main-container'>
                <Title titleName = {'Sports'}/>
                <Newscard apiUrl={apiUrl} />
            </div>
        )
    }
}
