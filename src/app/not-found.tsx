import React from 'react'
import err404 from '../../public/404.jpg'
import Image from 'next/image'

function NotFound() {


    return <>
    <Image className=' mt-5 w-[80%] mx-auto' src={err404} alt="" />
    </>
}

export default NotFound
