import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface ChallengeMockProps {
    type: 'body' | 'eye' | string,
    description: string,
    amount: number
}

interface ChallengesContextData {
    level: number,
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: ChallengeMockProps | undefined;
    resetChallenge: () => void;
}

type ChallengesProviderProps = {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState<ChallengeMockProps>() 

    function levelUp(){ 
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    function resetChallenge () {
        setActiveChallenge({type:'',description:'', amount:0});
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
                resetChallenge}}>
            {children}
        </ChallengesContext.Provider>
    )

}