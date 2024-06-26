import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";
import LoginForm from "../../../../components/Forms/LoginForm";
import HeaderBrand from "@/components/Header/Brand";

interface LoginFormSectionProps { }

const LoginFormSection: FC<LoginFormSectionProps> = ({ }) => {
    return (
        <main className="bg-bg-white">

            <div className="relative md:flex">

                {/* Content */}
                <div className="md:w-1/2 h-screen">
                    <div className="h-full grid content-stretch">

                        {/* Header */}
                        <HeaderBrand />
                        <LoginForm />

                    </div>
                </div>

                {/* Image and Text Wrapper */}
                <div className="hidden md:flex md:flex-col justify-center items-center absolute top-0 bottom-0 right-0 md:w-1/2 h-screen bg-bg-basic" aria-hidden="true">
                    {/* Image */}
                    <Image className="object-cover w-full h-full" src="/images/auth_page/auth_signin_bg.png" width="720" height="1110" alt="Authentication" priority />
                </div>

            </div>

        </main>
    );
};

export default LoginFormSection;
