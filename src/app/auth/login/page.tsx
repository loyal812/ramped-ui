'use client';

import LoginFormSection from "../../../containers/auth-page/login-page/form-section";
import React, { FC, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { showSweetAlert } from "../../../../utils/showSweetAlert";

interface LoginPageProps { }

const LoginPage: FC<LoginPageProps> = ({ }) => {
    const router = useRouter()

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
                // Token is valid, proceed with the request
                showSweetAlert({
                    title: 'Warning',
                    text: 'You are already logged in!',
                    icon: 'warning',
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // User clicked the confirm button
                        console.log('Confirmed!');
                        router.push("/dashboard")
                    }
                });
            }
        };

        fetchEmail();
    }, [router]);

    return (
        <main>
            <LoginFormSection />
        </main>
    );
};

export default LoginPage;