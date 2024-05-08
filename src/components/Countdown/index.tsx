import { useState, useEffect, useContext } from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';
import stylesButton from '../Button/styles.module.css';
import { ChallengesContext } from '@/contexts/ChallengesContext';
import { CountdownContext, CountdownProvider } from '@/contexts/CountdownContext';

export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, resetCountDown, startCountDown } = useContext(CountdownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');
    


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
                        onClick={isActive ?  resetCountDown : startCountDown}
                        className={ `${stylesButton.countDown} ${isActive ? stylesButton.countDownActive : stylesButton.countDownUnactive}`}   
                    >
                    { isActive ? 'Abandonar Ciclo ' : 'Iniciar um Ciclo'}
                    </Button>
                )
            }

        </div>
    )
}