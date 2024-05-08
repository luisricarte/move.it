import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: ()=>void;
    resetCountDown: ()=>void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps) {
    const {startNewChallenge} = useContext(ChallengesContext);

    const [count,setCount] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setCount(0.1 * 60);
        setIsActive(false);
    }

    useEffect(()=> {
        if (isActive && count > 0) {
            countdownTimeout = setTimeout(()=> {
                setCount(count - 1)
            }, 1000)
        }
        else if ( count == 0 ) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive,count])

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}