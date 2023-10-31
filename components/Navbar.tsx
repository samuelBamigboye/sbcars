import Link from "next/link";
import Image from "next/image";
import image from '../public/sbcars-logo.png'

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-[#0033ff15]'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src={image}
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles=' shadow rounded-full text-primary-blue font-semibold min-w-[130px] lg:text-white'
      />
    </nav>
  </header>
);

export default NavBar;
