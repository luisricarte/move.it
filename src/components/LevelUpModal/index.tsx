import { useContext } from 'react';
import styles from './styles.module.css';
import { ChallengesContext } from '@/contexts/ChallengesContext';

interface Props {
    isModalOpen: boolean
    closeModal: ()=>void
}

export function LevelUpModal({isModalOpen = false, closeModal, ...props}: Props) {
    const { level } = useContext(ChallengesContext);
    return (
        <>
        { isModalOpen && (
            
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <header> {level} </header>
                        <strong> Parabéns</strong>
                        <p>Você alcançou um novo level.</p>

                        <button type="button" onClick={closeModal} >
                            <img src="/icons/close.svg" alt="Fechar modal" />
                        </button>
                    </div>            
                </div>
            
        )
        }
        </>


    )
}