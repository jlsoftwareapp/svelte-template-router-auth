import { writable} from "svelte/store";
import {  onAuthStateChanged } from "firebase/auth";

import {auth}   from "../firebase"

const createUser = () => {
    const { subscribe, set } = writable(false)

    return{
        subscribe,
        setUser: (user) =>{
            set(user)
        },
        current: async () => {
            onAuthStateChanged(auth, (user) => {
            set(user)
            })
        }
    }
}

export const user = createUser()