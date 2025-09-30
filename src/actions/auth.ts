

"use server"

import { FieldValues } from "react-hook-form"

  // as its not for client side.

export const  register = async (data: FieldValues)=>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if(!res.ok){
        console.log("user registration failed", res.text());
        
    }

    return res.json();
}


export const  login = async (data: FieldValues)=>{

    const res = await fetch (`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if(!res.ok){
        console.log("user registration failed", res.text());
        
    }

    return res.json();

}

