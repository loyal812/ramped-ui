'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Button from '@/components/Buttons';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

interface HeaderBrandProps {
}

const HeaderBrand: React.FC<HeaderBrandProps> = ({
}) => {
    const router = useRouter();

    const [is_valid, setValid] = useState(false)

    useEffect(() => {
        const fetchEmail = async () => {
            let token = Cookies.get('authToken')

            const response = await fetch('/api/verifyToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            const res = await response.json();

            if (response.ok && res.valid) {
                setValid(true)
            }
        };

        fetchEmail();
    }, []);

    const Logout = () => {
        Cookies.remove('authToken');
        router.push('/auth/login'); // Redirect to the login page
    }

    return (
        <div className="">
            <div className="flex items-center justify-between px-[50px]">
                {/* Logo */}
                <Link className="block" href="/">
                    <p className="text-text-basic text-6xl pt-8">Ramped</p>
                </Link>

                {is_valid &&
                    <Button
                        variant="primary"
                        color="bg-bg-pink hover:opacity-90"
                        onClick={() => Logout()}
                        className="" >
                        <p className="font-normal">Logout</p>
                    </Button>
                }
            </div>
        </div>
    );
};

export default HeaderBrand;

{/* <HeaderBrand color="bg-green-500 hover:bg-green-700 text-white" onClick={() => console.log('Green HeaderBrand clicked!')}>
    Custom Green HeaderBrand
</HeaderBrand> */}