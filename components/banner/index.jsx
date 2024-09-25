import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='banner'>
            <Image src='/img/banner.jpg' alt='banner' width={100} height={100} className='w-full h-auto' objectFit='cover' unoptimized />
        </div>
    )
}

export default Banner