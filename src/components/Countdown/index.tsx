import { useState } from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';

export function Countdown() {
    const [count,setCount] = useState(25 * 60);
    const [active, setActive] = useState(false);
    
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');
    
    function startCountDown() {

    }

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
            <Button
            onClick={startCountDown}
            >Iniciar um Ciclo</Button>
        </div>
    )
}