import React from 'react'
import logo from '../assets/ted.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
<header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full py-3 text-sm sm:py-0 border-b border-neutral">
  <nav class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center py-2 sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div class="flex items-center justify-between">
      <a class="flex-none text-xl font-semibold dark:text-white btn btn-ghost rounded-lg" href="/" aria-label="Brand"><img src={logo} alt="" className='h-10'/></a>
      <div class="sm:hidden">
        <button className='btn bg-red-600 text-white hover:bg-red-700 btn-sm rounded-md'>Register</button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
      <div className='' data-tf-live="01HTK26X8BNDAZB8MZBG703KS2"></div>
      </div>
    </div>
  </nav>
</header>  )
}
