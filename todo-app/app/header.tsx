import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='p-5 #cdcdcd'>
        <Link href="/" className='px-2 py-1 bg-white text-blue'>
            Home
        </Link>
    </header>
  );
}