import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
       <h1>  News-Jack Top headlines</h1>
       <NewsItem title="my title" description = "desc"/>
       <NewsItem/>
       <NewsItem/>
       <NewsItem/>
       <NewsItem/>
       <NewsItem/>
       
      </div>
    )
  }
}

export default News
