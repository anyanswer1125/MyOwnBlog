import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post_title = '글 제목';

  let [logo, setLogo] = useState('ReactPortfolio');
  let [Title, setTitle] = useState(['테스트 제목 1','테스트 제목 2','테스트 제목 3']);


  return (
    <div className="App">
      <div className="black-nav">
        <h1> { logo } </h1>
      </div>

      <div className="list">
        <h4> {Title[0]} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4> {Title[1]} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4> {Title[2]} </h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
