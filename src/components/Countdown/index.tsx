import { useState, useEffect, useContext } from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';
import stylesButton from '../Button/styles.module.css';
import { ChallengesContext } from '@/contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const {startNewChallenge} = useContext(ChallengesContext);

    const [count,setCount] = useState(0.1 * 60);
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
        setCount(0.1 * 60);
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
            setIsActive(false);
            startNewChallenge();
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
                        className={`${stylesButton.countDown} ${stylesButton.hasFinished}`}
                        disabled
                    >
                    Ciclo Finalizado
                    </Button>
                ) :
                (
                    <Button
                        onClick={isActive ?  cancelCountDown : startCountDown}
                        className={ `${stylesButton.countDown} ${isActive ? stylesButton.countDownActive : stylesButton.countDownUnactive}`}   
                    >
                    { isActive ? 'Abandonar Ciclo ' : 'Iniciar um Ciclo'}
                    </Button>
                )
            }

        </div>
    )
}