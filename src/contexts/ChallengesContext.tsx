import { createContext, ReactNode, useState } from 'react';
export const challengesContext = createContext({});


interface ChallengeProviderProps {
    children: ReactNode;
}
export function ChallengeProvider({ children }: ChallengeProviderProps) {

    const [level, setLevel] = useState(1);
    function levelUp() {
        setLevel(level + 1)
    }


    return (
        <challengesContext.Provider value={{ level, levelUp }}>
            {children}
        </challengesContext.Provider>

    );
}





