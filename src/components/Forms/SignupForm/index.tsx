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
import { useGlobalData } from "../../../../contexts/GlobalDataContext";

interface SignupFormProps { }
const SignupForm: FC<SignupFormProps> = ({ }) => {
    const router = useRouter();
    const { gdata, setGData } = useGlobalData();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

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
        } else if (!confirm_password) {
            showSweetAlert({
                title: 'Validataion Error',
                text: "Please fill confirm password field!",
                icon: 'error',
            });
            return false;
        } else if (password !== confirm_password) {
            showSweetAlert({
                title: 'Validataion Error',
                text: "Password and confirm password should be match!",
                icon: 'error',
            });
            return false;
        }

        return true;
    }

    const RegisterUser = async () => {
        const endpoint_url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`

        var validate_result = validate();

        if (validate_result) {
            // loading begin
            setGData(currentData => ({ ...currentData, isLoading: true }));

            try {
                const response = await axios.post(endpoint_url, {
                    "email": email,
                    "password": password,
                    "password2": confirm_password
                })

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
                        router.push("/auth/login")
                    });
                }
            } catch (error) {
                showSweetAlert({
                    title: 'Signup Error!',
                    text: 'Sign up failed',
                    icon: 'error',
                });
            }

            // loading end
            setGData(currentData => ({ ...currentData, isLoading: false }));
        }
    }

    return (
        <>
            <div className="w-full mx-auto px-[50px] py-8">
                <h1 className="text-3xl text-text-basic font-bold mb-6">Create an account</h1>
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
                    <div>
                        <Input
                            label="Confirm Password"
                            type="password"
                            name="confirm-password"
                            value={confirm_password}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                            direction="column"
                        />
                    </div>
                </div>
                <div className="items-center my-2 text-text-grey">
                    By signing up, you agree to our
                    <Link href="/terms-of-service" className="mx-1 text-sm font-medium text-text-cyan hover:underline dark:text-blue-500">Terms of Service</Link>
                    and
                    <Link href="/data-policy" className="ml-1 text-sm font-medium text-text-cyan hover:underline dark:text-blue-500">Data Policy</Link>
                    .
                </div>

                <div className="flex flex-row-reverse">
                    <Button
                        variant="primary"
                        onClick={() => RegisterUser()}
                        color="bg-bg-pink hover:opacity-90"
                        className="mt-4" >
                        <p className="font-normal">Create Account</p>
                    </Button>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center">
                <p className="text-sm text-center font-light text-text-basic dark:text-gray-400">
                    Already have an account? <Link href="/auth/login" className="font-medium text-text-cyan hover:underline dark:text-blue-500">Login instead</Link>
                </p>
            </div>
        </>
    );
};

export default SignupForm;