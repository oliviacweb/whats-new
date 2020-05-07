import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (props) => {
  return (
    <section className='news-article' id={props.id}>
      <img src={props.img} alt='photograph of news story'/>
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <a href={props.url}>Link to Article</a>
    </section>
  )
}

export default NewsArticle;
