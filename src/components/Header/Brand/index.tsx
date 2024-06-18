import React from 'react';
import Link from "next/link";

interface HeaderBrandProps {
}

const HeaderBrand: React.FC<HeaderBrandProps> = ({
}) => {
    return (
        <div className="">
            <div className="flex items-center justify-between px-[50px]">
                {/* Logo */}
                <Link className="block" href="/">
                    <p className="text-text-basic text-6xl pt-8">Ramped</p>
                </Link>
            </div>
        </div>
    );
};

export default HeaderBrand;