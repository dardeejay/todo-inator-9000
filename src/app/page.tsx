'use client'
import LoginPromptModal from '@/component/LoginPromptModal';
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { ArrowUp } from 'lucide-react';
import Button from '@/component/ui/Button';
import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';


export default function page() {
  const { isSignedIn } = useUser()
  const { handleSubmit, register } = useForm()
  const onSubmit = async (data: any) => {
    const response = await fetch('api/v1/extract-todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: data.textPrompt
      })
    })

    const json = await response.json();
    console.log(json)
  }
  return (
    <div className='bg-custom-black w-full h-screen flex flex-col items-center justify-center'>
      <React.Fragment>
        <h1 className='text-custom-dark-white text-3xl font-bold mb-5'>Todo-inator 9000</h1>
        <h2 className='text-custom-light-grey text-lg font-semibold mb-5'>Let's create your todo list you lazy fuck</h2>
        <form className=' w-1/2 bg-custom-secondary-black rounded-3xl  outline-1 outline-custom-light-grey text-custom-dark-white p-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextareaAutosize
            {...register('textPrompt')}
            placeholder='Add text to extract'
            minRows={2}
            autoFocus={isSignedIn}
            maxRows={10}
            className='w-full  resize-none outline-none outline-custom-light-grey text-custom-dark-white mb-1'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
          />
          <Button className='float-right w-fit' size='extraSmall' type='submit'>
            <ArrowUp />
          </Button>
        </form>
      </React.Fragment>
      <LoginPromptModal />
    </div>
  )
}
