import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: string
    active?: boolean
}
export function Button({children, active = false, ...props}: ButtonProps) {
    return (
            <button  {...props}>
                {children}
            </button>
    )
}