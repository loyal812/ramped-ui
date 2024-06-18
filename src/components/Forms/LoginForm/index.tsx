"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';
import { validateEmail } from "../../../../utils";
import Button from "@/components/Buttons";
import Input from "@/components/InputForms";
import axios from 'axios'
import { showSweetAlert } from "../../../../utils/showSweetAlert";

interface LoginFormProps { }
const LoginForm: FC<LoginFormProps> = ({ }) => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function validate() {
        if (!email) {
            showSweetAlert({
                title: 'Validataion Error',
                text: "Please fill email field!",
                icon: 'error',
            });
            return false;
        } else if (!validateEmail(email)) {
            showSweetAlert({
                title: 'Validataion Error',
                text: "Invalid email format!",
                icon: 'error',
            });
            return false;
        } else if (!password) {
            showSweetAlert({
                title: 'Validataion Error',
                text: "Please fill password field!",
                icon: 'error',
            });
            return false;
        }

        return true;
    }

    const SignIn = async () => {
        const endpoint_url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signin`

        var validate_result = validate();

        if (validate_result) {
            try {
                const response = await axios.post(endpoint_url, {
                    "email": email,
                    "password": password
                });
                if (response.data.error) {
                    showSweetAlert({
                        title: 'Validataion Error',
                        text: response.data.error,
                        icon: 'error',
                    });
                } else if (response.data.message) {
                    showSweetAlert({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success',
                    }).then(() => {
                        router.push("/dashboard")
                    });
                }
            } catch (error) {
                showSweetAlert({
                    title: 'Sign in Error!',
                    text: 'Sign in failed',
                    icon: 'error',
                });
            }
        }
    }

    return (
        <>
            <div className="w-full mx-auto px-[50px] py-8">
                <h1 className="text-3xl text-text-basic font-bold mb-6">Welcome back!</h1>
                <div className="space-y-4">
                    <div>
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@acme.com"
                            direction="column"
                        />
                    </div>
                    <div>
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            direction="column"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between my-6">
                    <div className="mr-1">
                        <Link href="/reset-password" className="text-sm font-medium text-text-cyan hover:underline dark:text-blue-500">Forgot Password?</Link>
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <Button
                        variant="primary"
                        color="bg-bg-pink hover:opacity-90"
                        onClick={() => SignIn()}
                        className="" >
                        <p className="font-normal">Sign In</p>
                    </Button>
                </div>
            </div>


            {/* Footer */}
            <div className="flex items-center justify-center">
                <p className="text-sm font-light text-text-basic dark:text-gray-400">
                    Don’t have an account yet? <Link href="/auth/register" className="font-medium text-text-cyan hover:underline dark:text-blue-500">Create an account</Link>
                </p>
            </div>
        </>
    );
};

export default LoginForm;