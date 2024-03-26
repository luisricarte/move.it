import styles from './styles.module.css';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: string
    active?: boolean
    hasFinished?: boolean
}
export function Button({children, active = false, hasFinished = false, ...props}: ButtonProps) {
    return (
        <>
        {hasFinished ? 
        (
            <button  disabled className={`${styles.countDown} ${styles.hasFinished}`} {...props}>
            {children}
            </button>
        ) : 
        (
            <button className={ `${styles.countDown} ${active ? styles.countDownActive : styles.countDownUnactive}`} {...props}>
            {children}
            </button>
        )}
        </>
    )
}