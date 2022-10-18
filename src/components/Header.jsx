import react from 'react';

// Images
import TrollFace from '../images/troll-face.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='header-image' src={TrollFace} alt='' />
      <h1 className='header-title'>Meme Generator</h1>
      <h4 className='header-subtitle'>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
