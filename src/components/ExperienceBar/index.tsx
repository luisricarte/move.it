import { useContext } from 'react'
import styles from './styles.module.css'
import { ChallengesContext } from '@/contexts/ChallengesContext'

export function ExperienceBar() {   
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    const percentToNextLevel = ~~(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
                
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}