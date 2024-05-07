import { Button } from '../Button';
import styles from './styles.module.css';
import stylesButton from '../Button/styles.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '@/contexts/ChallengesContext';
export function ChallengeBox() {

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

    return (
        <div className={styles.challengeBoxContainer}>
            {
                activeChallenge ? (
                    <div className={styles.challengeActive}>
                        <header>{`Ganhe ${activeChallenge.amount}xp`}</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <Button
                                type='button'
                                className={stylesButton.challengeFailedButton}
                                onClick={resetChallenge}
                            >
                                Falhei
                            </Button>
                            <Button
                                type='button'
                                className={stylesButton.challengeSucceededButton}
                            >
                                Completei
                                </Button>
                        </footer>
                    </div>

                ) : (
                    <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up" />
                        Avance de level completando desafios
                    </p>
                    </div>
                )
            }
        </div>
    )
}