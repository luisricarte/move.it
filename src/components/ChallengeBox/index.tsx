import { Button } from '../Button';
import styles from './styles.module.css';
import stylesButton from '../Button/styles.module.css';
export function ChallengeBox() {
    const hasActiveChallenge = true
    return (
        <div className={styles.challengeBoxContainer}>
            {
                hasActiveChallenge ? (
                    <div className={styles.challengeActive}>
                        <header>Ganhe 400xp</header>

                        <main>
                            <img src="icons/body.svg" alt="" />
                            <strong>Novo desafio</strong>
                            <p>Levante e faça uma caminhada de 3 minutos</p>
                        </main>
                        <footer>
                            <Button
                                type='button'
                                className={stylesButton.challengeFailedButton}
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