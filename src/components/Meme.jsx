import React from 'react';

import memesData from '../memesData';

const Meme = () => {
  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
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
    </main>
  );
};

export default Meme;
