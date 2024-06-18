'use client';

// contexts/GlobalDataContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';
import Cookies from 'js-cookie';

interface GlobalData {
    // Define the shape of your global data here
    isLoading: boolean;
    token: string;
}

interface GlobalDataProps {
    children: ReactNode;
}

interface GlobalDataContextType {
    gdata: GlobalData;
    setGData: React.Dispatch<React.SetStateAction<GlobalData>>;
}

const GlobalDataContext = createContext<GlobalDataContextType | undefined>(undefined);

export const GlobalDataProvider: React.FC<GlobalDataProps> = ({ children }) => {
    const [gdata, setGData] = useState<GlobalData>({
        isLoading: false,
        token: Cookies.get('authToken') || ""
    });

    return (
        <GlobalDataContext.Provider value={{ gdata, setGData }}>
            {children}
        </GlobalDataContext.Provider>
    );
};

export const useGlobalData = (): GlobalDataContextType => {
    const context = useContext(GlobalDataContext);
    if (context === undefined) {
        throw new Error('useGlobalData must be used within a GlobalDataProvider');
    }
    return context;
};
