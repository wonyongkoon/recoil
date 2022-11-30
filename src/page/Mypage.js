import React from 'react'
import { useRecoilState } from "recoil";
import { userState } from '../recoil/atom';
import Chat from './chat';
import './Mypage.css'

const Mypage = () => {
    const [user, setUser] = useRecoilState(userState)
    const test = () => {
        console.log(user)
    }

    const onChange = () => {
        setUser( {
            id : "Yong123",
            name : "Yong",
            age : "300",
        },)
    }

    const onChange2 = () => {
        setUser( {...user,
            name : "KING",
            age : "30100",
        })
    }

    return (
    <div>
        <button onClick={test}> Mypage에서의 버튼 </button>

        <button onClick={onChange}> 변경 </button>
        <button onClick={onChange2}> 변경2 </button>
        <Chat/>
    </div>
  )
}

export default Mypage
