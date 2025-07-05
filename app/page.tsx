"use client"
import React, { useState } from 'react'
import Link from 'next/link';


const page = ()=>{
    // const [percent, setpercent] = useState(95)

    // header file info
    const [user, setUser] = useState("Pranav")
    return(

        <>
        {/* <h1 className='font-bold text-2xl text-fuchsia-600'>My total percentage was {percent}</h1>
        <button onClick={()=>
            setpercent(70)
        } className='bg-emerald-800 font-bold px-5 py-3 rounded mt-5'> Update </button> */}

        
        {/* header file info */}

        <div>
            <h1>This is my Home page</h1>

        </div>
        </> 
    )
}

export default page