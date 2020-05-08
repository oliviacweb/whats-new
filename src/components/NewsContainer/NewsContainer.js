import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = ({ news }) => {
  console.log({ news })
  const allNews = news.map(article => {
    return <NewsArticle
      key = {article.id}
      headline = {article.headline}
      img = {article.img}
      description = {article.description}
      url = {article.url}
    />
  })
  return (
    <section className='news-container'>
      {allNews}
    </section>
  )
}


export default NewsContainer;
