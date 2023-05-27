import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
let {title, description} = this.props

    return (
      <div class="card" style={{width: '18rem'}}>
      <img src="https://i.pinimg.com/736x/13/c4/23/13c423eeeede92d2b1f364488b29ffbb.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href="/newsdetail" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )}
}

export default NewsItem
