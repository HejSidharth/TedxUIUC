import React from 'react'

export default function Videos() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl mb-10">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white sm:text-start text-center">Featured Talks</h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400 sm:text-start text-center">Check out these amazing ted talks!</p>
      </div>
    
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a class="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://www.youtube.com/watch?v=OxA0LESuUDE">
            <div class="aspect-w-16 aspect-h-9">
            <iframe className='w-full h-64 sm:h-max' src="https://www.youtube.com/embed/OxA0LESuUDE" title="Visionaries are People Who Can See In The Dark | Justine Musk | TEDxUIUC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Visionaries are People Who Can See In The Dark | Justine Musk | TEDxUIUC
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
    
          <a class="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://www.youtube.com/watch?v=0e52QfQngrM">
            <div class="aspect-w-16 aspect-h-9">
            <iframe className='w-full h-64 sm:h-max' src="https://www.youtube.com/embed/0e52QfQngrM" title="The Power in Effective Data Storytelling | Malavica Sridhar | TEDxUIUC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            The Power in Effective Data Storytelling | Malavica Sridhar | TEDxUIUC            
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
    
          <a class="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://www.youtube.com/watch?v=9Il_D3Xt9W0">
            <div class="aspect-w-16 aspect-h-9">
            <iframe className='w-full h-64 sm:h-max' src="https://www.youtube.com/embed/9Il_D3Xt9W0" title="Seeing the world as it isn&#39;t  | Daniel Simons | TEDxUIUC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Seeing the world as it isn&#39;t  | Daniel Simons | TEDxUIUC
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
    
          <a class="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://www.youtube.com/watch?v=X_9cyPIvdyo">
            <div class="aspect-w-16 aspect-h-9">
            <iframe className='w-full h-64 sm:h-max' src="https://www.youtube.com/embed/X_9cyPIvdyo" title="Mindset is Everything | Cole Bennett | TEDxUIUC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Mindset is Everything | Cole Bennett | TEDxUIUC
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
        </div>
    </div>
    )
}
