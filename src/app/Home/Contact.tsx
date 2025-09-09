import { LinkPreview } from '@/components/ui/link-preview'
import React from 'react'


export const Contact = () => {
  return (
    <div className='mt-20 pb-20  max-w-3xl mx-auto text-center px-6 dark:bg-black'>

        <h2 className='text-4xl font-bold'>Get in Touch</h2>
        <div className='mt-4 text-lg md:text-xl text-muted-foreground '>
            Want to chat? Just shoot me a dm <span className="inline-block ml-2">
          <LinkPreview url="https://www.linkedin.com/in/harsh-21476b267/" className="font-bold hover:underline text-blue-400">
            with a direct question on  linkedin  
          </LinkPreview>
        </span>
             {" "}and I'll respond whenever I can. I will ignore all <br /> soliciting.
            
          
        </div>
    </div>
  )
}
