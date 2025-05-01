import React from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const button = cva('w-full p-4 rounded-full transition cursor-pointer', {
    variants: {
        variant: {
            primary: ' bg-custom-dark-white text-custom-black hover:bg-custom-dark-white/80',
            secondary: '',
            outline: '',
        },
        size: {
            extraSmall: 'text-xs p-1',
            small: 'text-sm p-2',
            medium: '',
            large: ''
        },
        disabled: {
            true: '',
            false: ''
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
        disabled: false
    }
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: React.ElementType;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large' | 'extraSmall';
    className?: string;
    title?: string;
    onClick?: () => void;
}

export default function Button({ as: Component = 'button', variant, size, disabled, className, onClick, title = 'button', type = 'button', children, ...props }: ButtonProps) {
    return (
        <Component
            title={title}
            className={twMerge(button({ variant, size, disabled, className }))}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {children}
        </Component>
    )
}
