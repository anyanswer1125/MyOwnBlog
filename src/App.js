import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoremIpsumImage from './LoremIpsum1.jpg';
import LoremIpsumImage2 from './LoremIpsum2.png';
import LoremIpsumImage3 from './LoremIpsum3.png';
import LoremIpsumImage4 from './LoremIpsum4.png';
import LoremIpsumImage5 from './LoremIpsum5.jpg';
import LoremIpsumImage6 from './Loremipsum6.png';


function App() {

  let post_title = '글 제목';

  let [logo, setLogo] = useState('HWAI Portfolio');
  let [Title, setTitle] = useState(['테스트 제목 1','테스트 제목 2','테스트 제목 3']);
  let [좋아요, 좋아요_수_변동] = useState(0);

  function 함수() {
    console.log('좋아요 버튼 클릭!')
    // 좋아요 += 1;
    좋아요_수_변동(좋아요 + 1)
    
  }

  return (
    <div className="App">
      <div className="nav">
        <h1> { logo } </h1>
        <button>Click Me!</button>
      </div>

      <div className='Banner'></div>

      <div className='lists-container'>

        <div className="list">
          <h4> {Title[0]}  </h4>
          <img src={LoremIpsumImage} alt='Lorem1'></img>
          <p>8월 21일 발행 <span onClick={함수} className='social_function'> ❤️ {좋아요}</span></p>
        </div>
                

        <div className="list">
          <h4> {Title[1]}  </h4>
          <img src={LoremIpsumImage2} alt='Lorem1'></img>
          <p>8월 21일 발행 <span onClick={함수} className='social_function'> ❤️ {좋아요}</span></p>
        </div>

        <div className="list">
          <h4> {Title[2]}  </h4>
          <img src={LoremIpsumImage3} alt='Lorem1'></img>
          <p>8월 21일 발행 <span onClick={함수} className='social_function'> ❤️ {좋아요}</span></p>
        </div>

      </div>
      <div className='lists-container'>

      <div className="list">
          <h4> {Title[0]}  </h4>
          <img src={LoremIpsumImage4} alt='Lorem1'></img>
          <p>8월 21일 발행 <span onClick={함수} className='social_function'> ❤️ {좋아요}</span></p>
        </div>
                

        <div className="list">
          <h4> {Title[1]}  </h4>
          <img src={LoremIpsumImage5} alt='Lorem1'></img>
          <p>8월 21일 발행 <span onClick={함수} className='social_function'> ❤️ {좋아요}</span></p>
        </div>

        <div className="list">
          <h4> {Title[2]}  </h4>
          <img src={LoremIpsumImage6} alt='Lorem1'></img>
          <p>8월 21일 발행 <span onClick={함수} className='social_function'> ❤️ {좋아요}</span></p>
        </div>

      </div>

      <footer className="footer">
        <p>&copy; 2024 HWAI Portfolio. All rights reserved.</p>
        <p>Contact: Lorem-ipsum@dolor.com</p>
      </footer>
    </div>
  );
}

export default App;
