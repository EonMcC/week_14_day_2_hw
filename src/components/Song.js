import React from 'react';

const Song = ({title, artist, position}) => {
  return(
  <div className="song">
    <h1>#{position}</h1>
    <h3>{title}</h3>
    <h6>{artist}</h6>
  </div>
  );
}

export default Song;