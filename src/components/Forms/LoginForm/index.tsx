"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';
import { validateEmail } from "../../../../utils";
import Button from "@/components/Buttons";
import Input from "@/components/InputForms";
import axios from 'axios'

interface LoginFormProps { }
const LoginForm: FC<LoginFormProps> = ({ }) => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function validate() {
        if (!email) {
            setMessage("Please fill email field!")
            alert("Please fill email field!")
            return false;
        } else if (!validateEmail(email)) {
            setMessage("Invalid email format.")
            alert("Invalid email format.")
            return false;
        } else if (!password) {
            setMessage("Please fill password field!")
            alert("Please fill password field!")
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
                    setMessage(response.data.error);
                } else if (response.data.message) {
                    setMessage(response.data.message);
                }
            } catch (error) {
                setMessage('Sign in failed');
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