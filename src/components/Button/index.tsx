import styles from './styles.module.css';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: string
}
export function Button({children, ...props}: ButtonProps) {
    return (
        <button className={styles.startCountdownButton} {...props}>
            {children}
        </button>
    )
}