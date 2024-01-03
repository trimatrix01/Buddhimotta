// components/Navbar.js
'use client'
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className="w-[80vw] mx-auto bg-transparent ">
      <div className=" mx-auto flex items-center justify-between">
        <div className="w-1/2 flex items-center">
         
          {/* Logo */}
          <Image
            src="/icon.png"
            alt="Vercel Logo"
            className=""
            width={150}
            height={24}
            priority
          />
          
        </div>

        <div className="w-1/2 flex justify-between items-center gap-3">
          {/* Home Link */}
          <Link href="/" className={clsx(`p-5 hover:text-purple-800`, { 'text-purple-800': pathname === '/' })}>
            Home
          </Link>
          {/* Terms and Conditions Link */}
          <Link href="/terms&condition" className={clsx(`p-5 hover:text-purple-800`, { 'text-purple-800': pathname === '/terms&condition' })}>Terms & Conditions</Link>

          {/* Account Deletion Link */}
          <Link href="/account-delete" className={clsx(`p-5 hover:text-purple-800`, { 'text-purple-800': pathname === '/account-delete' })}>Account Delete</Link>

          {/* Contact Link */}
          <Link href="/contact" className={clsx(`p-5 hover:text-purple-800`, { 'text-purple-800': pathname === '/contact' })}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
