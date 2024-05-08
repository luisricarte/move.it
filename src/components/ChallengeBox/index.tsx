import { Button } from '../Button';
import styles from './styles.module.css';
import stylesButton from '../Button/styles.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '@/contexts/ChallengesContext';
import { CountdownContext } from '@/contexts/CountdownContext';
export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const { resetCountDown } = useContext(CountdownContext);

    function handleChallegenSucceeded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

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
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </Button>
                            <Button
                                type='button'
                                className={stylesButton.challengeSucceededButton}
                                onClick={handleChallegenSucceeded}
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