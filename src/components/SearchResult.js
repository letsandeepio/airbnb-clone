import React from 'react';
import './SearchResult.css';

function SearchResult({
  img,
  location,
  title,
  desription,
  star,
  price,
  total
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult_heart" />
    </div>
  );
}

export default SearchResult;
