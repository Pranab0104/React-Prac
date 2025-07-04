import React from 'react'
import Link from 'next/link';

const Header =(props)=>{
    return(
        <>
        <div className='font-bold h-20 text-xl bg-amber-100 text-cyan-900 flex items-center justify-between font-serif'>Header
            <h2>{props.user}</h2>
            <div className='flex gap-8 px-5 py-2'>
                 <Link href="/About">About</Link>
                <Link href="/Projects">Projects</Link>
                <Link href="/Skills">Skills</Link>
                <Link href="/Connect">Connect</Link>
            </div>
        </div>
        </>
    )
}

export default Header