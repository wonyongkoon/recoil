import logo from './logo.svg';
import './App.css';
import Mypage from './page/Mypage';
import Chat from './page/chat';
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Mypage/>

      </RecoilRoot>
    </div>
  );
}

export default App;
