import React, { useState } from 'react';

import memesData from '../memesData';

const Meme = () => {
  const [memeImage, setMemeImage] = useState('');

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <main>
      <div className='form'>
        <input className='form-input' type='text' placeholder='top text' />
        <input className='form-input' type='text' placeholder='bottom text' />
        <button className='form-button' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img className='meme-image' src={memeImage} alt='' />
    </main>
  );
};

export default Meme;
