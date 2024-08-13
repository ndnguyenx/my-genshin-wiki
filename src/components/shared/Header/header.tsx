import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logos/genshin-impact-logo.png';
import avatar from '@/assets/images/diluc.png';
import './style.scss';

const Header = () => {
  return (
    <nav className='header'>
        <Link href='/' className='header-logo'>
            <Image src={logo} alt='logo' />
        </Link>
        <ul className='header-list'>
            <Link href='/'>
                <li className='header-list-item'><p>Characters</p></li>
            </Link>
            <Link href='/'>
                <li className='header-list-item'><p>Builds</p></li>
            </Link>
            <Link href='/'>
                <li className='header-list-item'><p>Teams</p></li>
            </Link>
            <Link href='/'>
                <li className='header-list-item'><p>Blog</p></li>
            </Link>
            <Link href='/'>
                <li className='header-list-item'><p>Banners</p></li>
            </Link>
            <Link href='/'>
                <li className='header-list-item'><p>Wiki</p></li>
            </Link>
        </ul>
        <div className='header-user'>
            <Image src={avatar} alt='avatar' />
        </div>
    </nav>
  )
}

export default Header