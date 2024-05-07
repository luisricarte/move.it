import { useContext } from 'react';
import styles from './styles.module.css';
import { ChallengesContext } from '@/contexts/ChallengesContext';

export function Profile() {
    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/luisricarte.png" alt="Profile Photo" />
            <div>
                <strong className={styles.nameTitle}>Luis Eduardo Ricarte</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level <span style={{color: 'green', fontSize: '22px'}}>{level}</span></p>
            </div>
        </div>
    )
}