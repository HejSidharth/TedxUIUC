import React from "react";
import Faq from "../components/Faq";

export default function About() {
  return (

    <>
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
<div class="lg:col-span-1">
      <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
        Who are we?
      </h2>
      <p class="mt-2 md:mt-4 text-gray-500">
        TEDxUIUC is a platform for sharing ideas and stories, and we invite you to join us in exploring new ideas. Our event will feature a diverse group of speakers from a wide range of backgrounds, who will share unique experiences.
      </p>
    </div>
  <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
  </div>
</div>

<div className="sm:px-6">
<div className="card w-64 bg-base-100 shadow-xl bg-opacity-60 rounded-lg">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-sm">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>

    <div class=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class=" mx-auto mb-5 lg:mb-8">
        <h2 class="text-2xl font-bold md:text-2xl md:leading-tight dark:text-white">
          FAQ
        </h2>
      </div>

      <div class=" mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        <div class="py-4 first:pt-0 last:pb-0">
          <div class="flex gap-x-5">
            <svg
              class="flex-shrink-0 mt-1 size-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 class="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Are the events free to attend?
              </h3>
              <p class="mt-.5 text-gray-500">
                Yes! All our events are free to attend.
              </p>
            </div>
          </div>
        </div>
        <div class="py-4 first:pt-0 last:pb-0">
          <div class="flex gap-x-5">
            <svg
              class="flex-shrink-0 mt-1 size-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 class="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Are the events virtual or in person?
              </h3>
              <p class="mt-1 text-gray-500">Our events are all in person.</p>
            </div>
          </div>
        </div>
        <div class="py-4 first:pt-0 last:pb-0">
          <div class="flex gap-x-5">
            <svg
              class="flex-shrink-0 mt-1 size-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 class="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                How can I register for the event?
              </h3>
              <p class="mt-1 text-gray-500">
                You can register for the event by clicking the register button
                on the home page!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
