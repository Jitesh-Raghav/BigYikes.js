import React from 'react'
import { TextHoverEffect } from "./ui/text-hover-effect";
import { WobbleCard } from "./ui/wobble-card";

const PageTwo = () => {
  return (
    
    <div className=' bg-gray-100 w-full h-full'>

        
   <p className='ml-48 text-2xl font-Sanso pt-20 text-gray-800'>Variety of Video Templates</p>
       <div className='flex gap-3 pb-4 justify-around ml-44 mr-28'>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
              <img src="/minec.jpg" alt="gamingTemplates" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Gaming Templates</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Select from Minecraft, GTA, Subway Surfers, Fortnight, Valorant, etc.</p>
            </div>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
              <img src="/sat.jpg" alt="SatisfyingVideos" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>ASMR/Satisfying Templates</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Select from Hydraulic press, Kinetic sand, cake cutting etc.</p>
            </div>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
            <img src="/sora.png" alt="customizedAnimatedTemplateSoraAI" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Customized AI Templates (Pro)</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Create your own AI customized templates from a prompt.</p>
            </div>
       </div>

       <p className='ml-48 text-2xl font-Sanso pt-14 text-gray-800'>Variety of Characters</p>
       <div className='flex gap-3 pb-4 justify-around ml-44 mr-28'>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
              <img src="/trump.jpg" alt="gamingTemplates" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Real Life</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Select from Trump, John Cena, Elon Musk, Walter White etc.</p>
            </div>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
              <img src="/hitler.jpg" alt="SatisfyingVideos" className='h-52 w-full rounded-3xl object-cover object-left-top'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Historical figures</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Select from Hitler, Albert Einstien, Mahatma Gandhi, Sidhu Moosewala, etc.</p>
            </div>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
            <img src="/bob.avif" alt="customizedAnimatedTemplateSoraAI" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Cartoon Characters (Pro)</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>From Spongebob, Mickey House, Ben 10, Simpsons, Shinchan etc.</p>
            </div>
       </div>

       <p className='ml-44 pb-3 pt-14 text-gray-700 font-Sanso text-2xl font-semibold'>All the Bells and Whistles</p>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto w-full">
  <WobbleCard
    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] ml-10"
    className=""
  >
    <div className="max-w-xs">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Big Yikes revolutionizes content creation
      </h2>
      <p className="mt-4 text-left text-base/6 text-neutral-200">
        Design stunning AI-powered short videos effortlessly. Choose templates, customize characters, and craft your story.
      </p>
    </div>
    <img
      src="/about.jpg"
      width="500"
      height="500"
      alt="Big Yikes demo image"
      className="absolute -right-2 lg:-right-[20%] grayscale filter -bottom-4 object-contain rounded-2xl"
    />
  </WobbleCard>

  <WobbleCard containerClassName="col-span-1 min-h-[300px] ml-10">
    <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Voices that make your story stand out
    </h2>
    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
      Whether it's Elon Musk, Walter White, or your favorite characters, bring your story to life with our customizable AI-generated voices.
    </p>
  </WobbleCard>

  <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] ml-10">
    <div className="max-w-sm">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Start creating with Big Yikes today!
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        Generate stunning, personalized short videos in minutes. Tap into Big Yikes for templates, voices, and storytelling that resonate with your audience.
      </p>
    </div>
    <img
      src="/an.jpg"
      width="500"
      height="500"
      alt="Big Yikes demo image"
      className="absolute -right-2 lg:-right-[10%] grayscale filter -bottom-4 object-contain rounded-2xl"
    />
  </WobbleCard>
</div>



       <p className='ml-48 text-2xl font-Sanso pt-20 text-gray-800'>Connect your Socials</p>
       <div className='pb-20'>
       <div className='flex gap-3 justify-around ml-44 mr-28 pb-32 border-b border-gray-300'>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
              <img src="/in.jpg" alt="gamingTemplates" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Instagram</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Connect your Instagram account and post reels.</p>
            </div>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
              <img src="/ytt.jpg" alt="SatisfyingVideos" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Youtube</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Connect your Youtube account and post shorts.</p>
            </div>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
            <img src="/x.avif" alt="customizedAnimatedTemplateSoraAI" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>X (Twitter)</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Connect your X account and tweet your brainRot.</p>
            </div>
       </div>
       {/* <div className='w-[80%] rounded-3xl ml-44 mr-80 pt-4 mt-10'>
          <p className='text-4xl font-Sanso px-4 text-gray-700 font-semibold'>Join the waitlist</p>
        </div> */}
        <div className="h-[23rem] mt-4 ml-44 mr-28 flex items-center justify-center">
      <TextHoverEffect text="BIGYIKES"/>
        </div>
       <div className='flex justify-around mx-20 ml-40 mt-6 bg-pink-100 rounded-3xl'>
          <div className='h-96 w-1/2 rounded-3xl'>
            <img className='w-20 m-4 cursor-pointer' src="/icoon.png" alt="" />
            <p className='px-8 pt-4 font-Sanso text-gray-700 text-md mr-14'>Big Yikes is an adaptable, open-source tool designed to generate stunning AI-driven short-form content for social media platforms. By streamlining content creation, it helps you reach a wider audience, enhance engagement, and drive growth effortlessly.</p>
            <p className='font-semibold px-8 pt-4 font-Sanso text-gray-600 underline decoration-gray-400'>Building in public at <span className='cursor-pointer text-pink-400'>@okayjitesh</span></p>
            </div>
          <div className='h-96 w-60  flex-col rounded-3xl'>
            <p className='mt-10 px-8 py-3 text-gray-700 text-lg font-Sanso font-semibold'>Socials</p>
            <p className='px-8 pt-3 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Twitter</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Github</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Instagram</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>LinkedIn</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Blog</p>
            </div>
            <div className='h-96 w-60  flex-col rounded-3xl'>
            <p className='mt-10 px-8 py-3 text-gray-700 text-lg font-Sanso font-semibold'>Quick Links</p>
            <p className='px-8 pt-3 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Docs</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Pages</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Integration</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Testimonials</p>
            <p className='px-8 py-1 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Contact</p>
            </div>
          <div className='h-96 w-60 b flex-col rounded-3xl'>
          <p className='pt-14 px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Contribute</p>
            <p className='px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Having Issues?</p>
            <p className='px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Buy Me a Coffee</p>
            <p className='px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Report Abuse</p>
            </div>
       </div>
       </div>
    
    <div className='pt-8 pb-8 items-center justify-between text-start border-t border-gray-300 ml-44 mr-32'>
      <p className='text-gray-700 font-Sanso ml-4'>Copyright © 2024 BigYikes.js LLC. All Rights Reserved.</p>
    </div>

    </div>
    
  )
}

export default PageTwo
