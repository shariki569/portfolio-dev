import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <picture>
            <source media="(min-width: 768px)" srcSet="https://res.cloudinary.com/duxm7pc8y/image/upload/v1687575420/SepalonAssets/Main-bg-desktop_itkt5a.jpg" />
            <img className='w-full h-screen object-cover object-bottom' src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/333642147_116218774730310_8967114564537994783_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEZpoD7bo0nH21MwD_IOcC7XJyXr8wrodFcnJevzCuh0WeA2EqJkXvBqod5SRxIC9uiyihIoKtmgc6PSY5JMVG3&_nc_ohc=E2exPiw1ApwAX-NjjG2&_nc_ht=scontent.fmnl9-1.fna&oh=00_AfAm-SUH94jtfXRdm1_JR9OVvAbxzM_4UNxN2wM_Y6ErrQ&oe=649B87C4"/>
        </picture>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>    
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Clint Sepalon</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a  
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Web-Developer',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Coder',
                    2000,
                    'Digital Illustrator',
                    2000,
                    'Graphic Designer',
                    2000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Main
