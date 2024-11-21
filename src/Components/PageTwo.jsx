import React from 'react'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const PageTwo = () => {
  return (
    
    <div className=' bg-gray-100 w-full h-full'>

        
   <p className='ml-48 text-3xl font-Sanso pt-20 text-gray-800'>Choose from a variety of video Templates</p>
       <div className='flex gap-3 p-4 justify-around ml-44 mr-28'>
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

       <p className='ml-48 text-3xl font-Sanso pt-14 text-gray-800'>Choose from a variety of Characters</p>
       <div className='flex gap-3 p-4 justify-around ml-44 mr-28'>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
              <img src="/trump.jpg" alt="gamingTemplates" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Real Life</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Select from Trump, John Cena, Elon Musk, Hitler etc.</p>
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

       <p className='ml-48 text-3xl font-Sanso pt-14 text-gray-800'>Connect your Socials</p>
       <div className='pb-20'>
       <div className='flex gap-3 p-4 justify-around ml-44 mr-28 pb-32 border-b border-gray-300'>
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
       <div className='flex justify-around mx-20 ml-40 mt-20 bg-pink-100'>
          <div className='h-96 w-1/2 rounded-3xl'>
            <img className='w-20 m-6 cursor-pointer' src="/icoon.png" alt="" />
            <p className='px-8 pt-4 font-Sanso text-gray-700 text-md mr-14'>Big Yikes is an adaptable, open-source tool designed to generate stunning AI-driven short-form content for social media platforms. By streamlining content creation, it helps you reach a wider audience, enhance engagement, and drive growth effortlessly.</p>
            <p className='font-semibold px-8 pt-4 font-Sanso text-gray-600 underline decoration-gray-400'>Building in public at <span className='cursor-pointer text-pink-400'>@okayjitesh</span></p>
            </div>
          <div className='h-96 w-60  flex-col rounded-3xl'>
            <p className='mt-10 px-8 py-3 text-gray-700 text-lg font-Sanso font-semibold'>Socials</p>
            <p className='px-8 py-3 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Twitter</p>
            <p className='px-8 py-3 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Github</p>
            <p className='px-8 py-3 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Instagram</p>
            <p className='px-8 py-3 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>LinkedIn</p>
            <p className='px-8 py-3 text-gray-800 font-Sanso hover:underline hover:decoration-gray-500 cursor-pointer'>Blog</p>
            </div>
          <div className='h-96 w-60 b flex-col rounded-3xl'>
          <p className='pt-14 px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Contribute</p>
            <p className='px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Having Issues?</p>
            <p className='px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Buy Me a Coffee</p>
            <p className='px-8 pb-4 text-md font-semibold text-gray-600 decoration-gray-500 hover:underline cursor-pointer font-Sanso'>Report Abuse</p>
            </div>
       </div>
       </div>
    
    <div className='pt-10 pb-4 items-center justify-between text-start border-t border-gray-300 ml-44 mr-32'>
      <p className='text-gray-700 font-Sanso ml-10'>Copyright © 2024 BigYikes.js LLC. All Rights Reserved.</p>
    </div>

    </div>
    
  )
}

export default PageTwo
