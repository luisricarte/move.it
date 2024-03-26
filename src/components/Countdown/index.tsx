import { useState, useEffect } from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [count,setCount] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');
    
    function startCountDown() {
        setIsActive(true);
    }

    function cancelCountDown() {
        clearTimeout(countdownTimeout);
        setCount(25 * 60);
        setIsActive(false);
    }

    useEffect(()=> {
        if (isActive && count > 0) {
            countdownTimeout = setTimeout(()=> {
                setCount(count - 1)
            }, 1000)
        }
        else if ( count == 0 ) {
            setHasFinished(true);
            setIsActive(false)
        }
    }, [isActive,count])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished ? 
                (
                    <Button
                    hasFinished
                    >
                    Ciclo Finalizado
                    </Button>
                ) :
                (
                    <Button
                        onClick={isActive ?  cancelCountDown : startCountDown}
                        active={isActive}
                    >
                    { isActive ? 'Abandonar Ciclo ' : 'Iniciar um Ciclo'}
                    </Button>
                )
            }

        </div>
    )
}