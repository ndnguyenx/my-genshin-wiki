import Link from 'next/link'
import React from 'react'
import { PiYoutubeLogoFill } from 'react-icons/pi'
import './style.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-context'>
        <p>This website is owned by the "Người Chơi Game" channel. Visit the YouTube link for more information.</p>
      </div>
      <div className='footer-contact'>
        <Link 
          className='footer-link' 
          href="https://www.youtube.com/@nguoichoigamez" 
          target="_blank" 
          rel="noopener noreferrer">
          <PiYoutubeLogoFill className='footer-link-icon'
        />
          <p className='footer-link-text'>Người Chơi Game</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer