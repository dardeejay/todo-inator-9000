'use client'
import React from 'react'
import Modal from './ui/Modal'
import Button from './ui/Button'
import { SignInButton, useUser } from '@clerk/nextjs'

export default function LoginPromptModal() {
    const { isSignedIn, isLoaded } = useUser()
    
    if (isLoaded && !isSignedIn)
        return (
            <Modal>
                <div className='flex flex-col items-center justify-center w-full h-full p-10'>
                    <div className='text-custom-dark-white text-center'>
                        <h1 className='text-3xl font-bold mb-5'>Behold, human!</h1>
                        <h2>Fire up the Todo-inator 9000 and let the laziness-powered productivity begin.</h2>
                    </div>
                    <Button variant='primary' className='mt-5' as={SignInButton} />
                </div>

            </Modal>
        )
}
