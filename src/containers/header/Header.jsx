import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
          <div className='gpt3__header-content'>
            <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
            <p>real madrid won the uefa champions league for the first time in 12 years 
            while atletico madrid won it later two years later whith chelase
            coming from behind to win in again then barcelona lost</p>
            <div className='gpt3__header-content__input'>
              <input type='email' placeholder='email' />
              <button type='button'>Get started</button>
            </div>
            <div className='gpt3__header-content__people'>
              <img src={people} alt='people' />
              <p>6000 people requested access a vsit in the last 24 hours</p>
            </div>
          </div>
          <div className='gpt3__header-image'>
              <img src={ai} alt='ai' />
            </div>   
        </div>
    )
}

export default Header