import React from 'react'
import logo from '../assets/ted.png'

export default function Events() {
  return (
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div class="max-w-2xl mb-10">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white sm:text-start text-center">Our Events</h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400 sm:text-start text-center">Check out our events!</p>
      </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="group flex flex-col h-full  border  shadow-sm rounded-xl border-neutral">
      <div class="h-52 flex flex-col justify-center items-center bg-black rounded-t-xl">
      <img src={logo} alt="" className='h-20'/>
      </div>
      <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibol uppercase text-red-600 dark:text-red-500">
          TedxUIUC
        </span>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          TedXUIUC Salon Odyssey
        </h3>
        <p class="mt-3 text-gray-500">
        TEDxUIUC Odyssey premieres on 22nd April at the Lincoln Hall. Register Now!  </p>     
        </div>
    </div>

    <div class="group flex flex-col h-full  border  shadow-sm rounded-xl border-neutral">
      <div class="h-52 flex flex-col justify-center items-center bg-black rounded-t-xl">
      <img src={logo} alt="" className='h-20'/>
      </div>
      <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibol uppercase text-red-600 dark:text-red-500">
          TedxUIUC
        </span>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
        TedXUIUC Crossroads Conference
        </h3>
        <p class="mt-3 text-gray-500">
        Lost at the crossroads of fun and adventure 🛣️✨seeking good times and great memories - which path should I take? 🤔   
        </p>
      </div>
    </div>

    <div class="group flex flex-col h-full  border  shadow-sm rounded-xl border-neutral">
      <div class="h-52 flex flex-col justify-center items-center bg-black rounded-t-xl">
      <img src={logo} alt="" className='h-20'/>
      </div>
      <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibol uppercase text-red-600 dark:text-red-500">
          TedxUIUC
        </span>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
        TedXUIUC Salon Emerge Conference
        </h3>
        <p class="mt-3 text-gray-500">
        TEDxUIUC invites you to our annual conference this year, Emerge. This event takes place on April 7th, 2019 at the Krannert Center for the Performing Arts. Seats are limited so apply now at the link in our bio!
            </p>
        </div>
    </div>
  </div>
</div>
  )
}
