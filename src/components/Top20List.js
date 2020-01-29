import React from 'react';
import Song from './Song'
 
const Top20List = ({songs}) => {
  const songEntry = songs.map((song, index) => {
    return (
      <Song title={song['im:name'].label} artist={song['im:artist'].label} position={index} key={index}></Song>
    )
  })


  return (
    <div className='top-20-list'>
        {songEntry}                
    </div>
);
}



export default Top20List;