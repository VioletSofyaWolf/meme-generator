import react from 'react';

// Images
import TrollFace from '../images/troll-face.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='header-image' src={TrollFace} alt='' />
        <h1 className='title'>Meme Generator</h1>
      </div>
      <p className='subtitle'>React Course - Project 3</p>
    </div>
  );
};

export default Header;
