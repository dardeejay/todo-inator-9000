import React from 'react'
import {

    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { ArrowLeft, ListPlus } from 'lucide-react'
export default function Navbar() {
    return (
        <div className='flex items-center justify-between w-full bg-custom-black px-5 py-4 absolute top-0 right-0'>
            <div className='flex items-center  text-custom-dark-white'>
                <SignedIn>
                    <button title="Back to home" className='navbar-buttons'>
                        <ArrowLeft />
                    </button>
                </SignedIn>
                <button title='New Todo' className='navbar-buttons '>
                    <ListPlus />
                </button>
            </div>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
                <div className='flex items-center gap-2'>
                    <SignInButton mode='modal' />
                </div>
            </SignedOut>
        </div>
    )
}
