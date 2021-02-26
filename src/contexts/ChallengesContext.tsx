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
    completeChallenge: () => void;
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
        setActiveChallenge(challenge); 5
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {

        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);

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
            resetChallenge,
            completeChallenge
        }}>
            {children}
        </challengesContext.Provider>

    );
}





