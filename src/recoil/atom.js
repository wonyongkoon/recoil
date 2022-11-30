import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const userState = atom({
    key : 'userState',
    default : {
        id : "",
        name : "",
        age : "",
    },
    effects_UNSTABLE : [persistAtom]
});