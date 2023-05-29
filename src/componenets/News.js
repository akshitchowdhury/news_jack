import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "status": "ok",
      "totalResults": 3,
      "articles": [
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": null,
          "title": "Roy set to end England deal to play in US",
          "description": "Jason Roy is set to end his England contract in order to play in the inaugural season of Major League Cricket in the United States.",
          "url": "http://www.bbc.co.uk/sport/cricket/65711625",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/167A2/production/_129866029_gettyimages-1470896725.jpg",
          "publishedAt": "2023-05-25T14:22:26.6247284Z",
          "content": "Jason Roy plays for Kolkata Knight Riders in the Indian Premier League\r\nJason Roy is set to end his England contract in order to play in July's inaugural season of Major League Cricket in the United … [+1972 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    }

  ]

  constructor(){
    super();

    this.state = {
      articles : this.articles
    }
  }
 
  render() {
 
    return (
      <div className='container my-3'>
       <h1>  News-Jack Top headlines</h1>

        <div className='row'>
        <div className='col-md-4'>
       <NewsItem title="my title" description = "desc" imageurl ="https://i.pinimg.com/736x/13/c4/23/13c423eeeede92d2b1f364488b29ffbb.jpg" /> </div>
       <div className='col-md-4'>
       <NewsItem title="my title" description = "desc"/></div>
       <div className='col-md-4'>
       <NewsItem title="my title" description = "desc"/></div>
       </div>
       {/* <NewsItem/>
       <NewsItem/>
       <NewsItem/> */}
       
      </div>
    )
  }

}
export default News
