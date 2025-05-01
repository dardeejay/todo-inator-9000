import React from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
    children: React.ReactNode
}
export default function Modal({children} : ModalProps) {
    return createPortal(
        <div className='absolute top-0 left-0 w-full h-screen bg-black/30 flex items-center justify-center z-50'>
            <div className='bg-custom-secondary-black rounded-2xl flex flex-col items-center justify-center'>
                {children}
            </div>
        </div>,
        document.body
    )
}
