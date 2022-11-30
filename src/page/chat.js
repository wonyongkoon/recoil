import React from 'react'
import './chat.css'
import { useRecoilState } from "recoil";
import { userState } from '../recoil/atom';
const Chat = () => {
    const [user, setUser] = useRecoilState(userState)
    const test = () => {
        console.log(user)
    }
  return (
    <div>
        <button onClick={test}> chat에서의 버튼 </button>
    </div>
  )
}

export default Chat