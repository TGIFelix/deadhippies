import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faShip } from '@fortawesome/free-solid-svg-icons'
import Countdown from 'react-countdown';



export default function Home() {
  return (
    <div className='w-screen h-screen py-8 sm:py-12 md:py-16 lg:py-32 bg-gradient-to-bl from-emerald-500 to to-cyan-800'>
      <div className='container flex justify-center w-full mx-auto space-x-4'>
        <Image
          src='/deadhippie.png'
          alt='deadhippies'
          width={600}
          height={600}
          className='object-contain'
          loading='lazy'
        />
        <div>
          <h1 className='pt-32 font-mono font-semibold uppercase text-7xl'>
            #deadhippies
          </h1>
          
          <div className='flex items-center w-full pt-4 space-x-8'>
            <button className='px-8 py-4 text-2xl font-bold text-black uppercase bg-gray-500 cursor-not-allowed' disabled>
              <Countdown date={Date.now() + 1000000000} />
            </button>
            <ul className='flex space-x-4 text-2xl font-semibold'>
              <li>
                <a href='' className='leading-9'>
                  <FontAwesomeIcon icon={faShip}/> OpenSea
                </a>
              </li>
              <li>
                <a href='' className='leading-9'>
                  <FontAwesomeIcon icon={faTwitter}/> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}