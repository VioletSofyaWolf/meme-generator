import React from 'react';

const Meme = () => {
  return (
    <main>
      <form className='form' action='submit'>
        <input className='form-input' type='text' placeholder='top text' />
        <input className='form-input' type='text' placeholder='bottom text' />
        <button className='form-button'>Get a new meme image</button>
      </form>
    </main>
  );
};

export default Meme;
