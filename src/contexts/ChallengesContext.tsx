import { createContext, ReactNode, useState } from 'react';
import challenges from '../challenges.json';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengeCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const challengesContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ children }: ChallengeProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

        console.log("New challenge");
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }



    return (
        <challengesContext.Provider value={{
            level,
            currentExperience,
            experienceToNextLevel,
            challengeCompleted,
            activeChallenge,
            levelUp,
            startNewChallenge,
            resetChallenge
        }}>
            {children}
        </challengesContext.Provider>

    );
}





