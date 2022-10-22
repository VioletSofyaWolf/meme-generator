import React, { useState } from 'react';

import memesData from '../memesData';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
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
      <img className='meme-image' src={meme.randomImage} alt='' />
    </main>
  );
};

export default Meme;
