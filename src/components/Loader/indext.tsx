'use client';

import React from 'react';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

export default function Loading() {
    const { gdata, setGData } = useGlobalData();
    return (
        <>
            {
                gdata.isLoading &&
                <div className="w-screen h-screen" style={{ position: 'fixed', backgroundColor: "hsl(0deg 0% 13% / 40%)", zIndex: '10000' }}>
                    <div role="status" className="fixed mr-5" style={{ top: '45%', right: '45%', translate: "transform:(-50%, -50%)" }}>
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            }
        </>
    );
};
