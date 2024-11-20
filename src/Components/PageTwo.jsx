import React from 'react'

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
              <img src="/hitler.jpg" alt="SatisfyingVideos" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Historical figures</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>Select from Hitler, Albert Einstien, Mahatma Gandhi, Sidhu Moosewala, etc.</p>
            </div>
            <div className='w-96 h-80 bg-pink-100 flex-col mt-3 rounded-3xl hover:bg-pink-200 cursor-pointer transition-all delay-75 hover:shadow-xl'>
            <img src="/bob.avif" alt="customizedAnimatedTemplateSoraAI" className='h-52 w-full rounded-3xl object-cover'/>
              <p className='text-gray-700 font-Sanso font-bold text-lg pt-2 px-2'>Cartoon Characters (Pro)</p>
              <p className='text-gray-700 font-Sanso pt-2 px-2 mr-10'>From Spongebob, Mickey House, Ben 10, Goku, Shinchan etc.</p>
            </div>
       </div>

       <p className='ml-48 text-3xl font-Sanso pt-14 text-gray-800'>Connect your Socials</p>
       <div className='flex gap-3 p-4 justify-around ml-44 mr-28 pb-32'>
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

    </div>
    
  )
}

export default PageTwo
