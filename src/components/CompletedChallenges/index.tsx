import styles from './styles.module.css';

export function CompletedChallenges() {
    return( 
        <div className={styles.completedChallengesContainer}>
            <span>
                Desafios Completos:
            </span>
            <span>05</span>
        </div>
    )
}