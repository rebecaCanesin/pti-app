import React, { useState } from "react";
import './styles.css';

const ArticleCard = ({ data, cards }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardExpansion = index => {
    setExpandedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const renderText = (text, index) => {
    if (expandedCards[index]) return text;
    return text.length > 100 ? text.substring(0, 135) + '...' : text;
  };

  return (
    <div className="container">
      <div className="title__container">
        <h1>{data.title}</h1>
        <span>{data.introduction}</span>
      </div>
      <div className="cards__container">
        {cards.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt='card' className="card__img"/>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__text">{renderText(item.text, index)}</p>
            <span className="button__readMore" onClick={() => toggleCardExpansion(index)}>
              {expandedCards[index] ? 'Read less' : 'Read more'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;