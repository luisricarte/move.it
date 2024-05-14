import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '@/components/LevelUpModal';

interface ChallengeMockProps {
    type: 'body' | 'eye' | string,
    description: string,
    amount: number
}

interface ChallengesContextData {
    level: number,
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: ChallengeMockProps | null;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

type ChallengesProviderProps = {
    children: ReactNode;
    level: number,
    currentExperience: number,
    challengesCompleted: number,
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level || 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience || 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted || 0);
    const [activeChallenge, setActiveChallenge] = useState<ChallengeMockProps | null>(null) 
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    
    const experienceToNextLevel = Math.pow((level+1)*4,2);

    
    useEffect(()=>{
        Cookies.set('level', String(level));
        Cookies.set('challengesCompleted', String(challengesCompleted));
        Cookies.set('currentExperience', String(currentExperience));

    }, [level, challengesCompleted, currentExperience])
    

    function levelUp(){ 
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeUpModal() {
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    function resetChallenge () {
        setActiveChallenge(null);
    }

    const completeChallenge = () => {
        if (!activeChallenge) return;
        
        const { amount } = activeChallenge;
        
        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted+1);
    }

    return (

        <ChallengesContext.Provider
            value={{ 
                level, 
                levelUp, 
                currentExperience, 
                challengesCompleted, 
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge}}>
            {children}
            <LevelUpModal closeModal={closeUpModal} isModalOpen={isLevelUpModalOpen}/>
        </ChallengesContext.Provider>
    )

}