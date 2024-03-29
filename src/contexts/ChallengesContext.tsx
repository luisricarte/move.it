import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

type ChallengesProviderProps = {
    children: ReactNode;
}

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp(){ 
        setLevel(level +1);
    }

    function startNewChallenge() {
        console.log('New Challenge');
    }
    return (

        <ChallengesContext.Provider
            value={{ 
                level, 
                levelUp, 
                currentExperience, 
                challengesCompleted, 
                startNewChallenge}}>
            {children}
        </ChallengesContext.Provider>
    )

}