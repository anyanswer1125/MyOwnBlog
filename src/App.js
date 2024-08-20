import React, { useState } from 'react';
import './App.css';
import LoremIpsumImage from './LoremIpsum1.jpg';
import LoremIpsumImage2 from './LoremIpsum2.png';
import LoremIpsumImage3 from './LoremIpsum3.png';
import LoremIpsumImage4 from './LoremIpsum4.png';
import LoremIpsumImage5 from './LoremIpsum5.jpg';
import LoremIpsumImage6 from './Loremipsum6.png';

function App() {
  let [logo] = useState('HWAI Portfolio');
  let [Title] = useState(['테스트 제목 1','테스트 제목 2','테스트 제목 3','테스트 제목 4','테스트 제목 5','테스트 제목 6']);
  let [좋아요, 좋아요_수_변동] = useState([41, 39, 37, 46, 182, 378]);

  function 함수(index) {
    const 새로운좋아요 = [...좋아요];
    새로운좋아요[index] += 1;
    좋아요_수_변동(새로운좋아요);
  }

  return (
    <div className="App">
      <div className="nav">
        <h1>{logo}</h1>
        <button>Click Me!</button>
      </div>

      <div className='Banner'></div>

      <div className='lists-container'>
        <div className="list">
          <h4>{Title[0]}</h4>
          <img src={LoremIpsumImage} alt='Lorem1'></img>
          <p>8월 21일 발행 
            <span onClick={() => 함수(0)} className='social_function'> ❤️ {좋아요[0]}</span>
          </p>
        </div>

        <div className="list">
          <h4>{Title[1]}</h4>
          <img src={LoremIpsumImage2} alt='Lorem2'></img>
          <p>8월 4일 발행 
            <span onClick={() => 함수(1)} className='social_function'> ❤️ {좋아요[1]}</span>
          </p>
        </div>

        <div className="list">
          <h4>{Title[2]}</h4>
          <img src={LoremIpsumImage3} alt='Lorem3'></img>
          <p>7월 26일 발행 
            <span onClick={() => 함수(2)} className='social_function'> ❤️ {좋아요[2]}</span>
          </p>
        </div>
      </div>

      <div className='lists-container'>
        <div className="list">
          <h4>{Title[3]}</h4>
          <img src={LoremIpsumImage4} alt='Lorem4'></img>
          <p>7월 13일 발행 
            <span onClick={() => 함수(3)} className='social_function'> ❤️ {좋아요[3]}</span>
          </p>
        </div>

        <div className="list">
          <h4>{Title[4]}</h4>
          <img src={LoremIpsumImage5} alt='Lorem5'></img>
          <p>7월 2일 발행 
            <span onClick={() => 함수(4)} className='social_function'> ❤️ {좋아요[4]}</span>
          </p>
        </div>

        <div className="list">
          <h4>{Title[5]}</h4>
          <img src={LoremIpsumImage6} alt='Lorem6'></img>
          <p>6월 12일 발행 
            <span onClick={() => 함수(5)} className='social_function'> ❤️ {좋아요[5]}</span>
          </p>
        </div>
      </div>
      <div className='more'>
        <h1>새로운 피드가 없네요</h1>
        <button>인기 게시글 둘러보기</button>
      </div>
      <footer className="footer">
        <p>&copy; 2024 HWAI Portfolio. All rights reserved.</p>
        <p>Contact: Lorem-ipsum@dolor.com</p>
      </footer>
    </div>
  );
}

export default App;
