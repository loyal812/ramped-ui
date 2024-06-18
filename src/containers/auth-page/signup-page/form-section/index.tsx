import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";
import SignupForm from "../../../../components/Forms/SignupForm";
import HeaderBrand from "@/components/Header/Brand";

interface SignupFormSectionProps { }

const SignupFormSection: FC<SignupFormSectionProps> = ({ }) => {
    return (
        <main className="bg-bg-white">

            <div className="relative md:flex">

                {/* Content */}
                <div className="md:w-1/2 h-screen">
                    <div className="h-full grid content-stretch">

                        <HeaderBrand />
                        <SignupForm />

                    </div>
                </div>

                {/* Image and Text Wrapper */}
                <div className="hidden md:flex md:flex-col justify-center items-center absolute top-0 bottom-0 right-0 md:w-1/2 h-screen bg-bg-basic" aria-hidden="true">
                    {/* Image */}
                    <Image className="object-cover" src="/images/auth_page/people_pc.png" width="670" height="670" alt="Authentication" priority />
                </div>

            </div>

        </main>
    );
};

export default SignupFormSection;
