"use client"

import Image from "next/image";
import React, { FC, useState } from "react";
import Link from "next/link";
import HeaderBrand from "@/components/Header/Brand";
import Input from "@/components/InputForms";
import Button from "@/components/Buttons";
import Table from "@/components/Table";

interface DashboardContainerProps { }

const DashboardContainer: FC<DashboardContainerProps> = ({ }) => {
    const [search, setSearch] = useState("");

    const data = [
        { job_name: 'Licensed Professional Counselor', company_name: "LifeStance Health", min_salary: '$90,000', max_salary: "$114,000", salary_type: "Annual" },
        { job_name: 'Property Manager', company_name: "WinnCompanies", min_salary: '$18', max_salary: "$23", salary_type: "Hourly" },
    ];

    const columns = [
        { header: 'Job Name', key: 'job_name' },
        { header: 'Company Name', key: 'company_name' },
        { header: 'Minimum Compensation', key: 'min_salary' },
        { header: 'Maximum Compensation', key: 'max_salary' },
        { header: 'Compensation Type', key: 'salary_type' },
    ];

    const retrieveJob = () => {

    }

    return (
        <main className="bg-bg-white">

            <div className="relative">

                {/* Content */}
                <div className="w-full h-screen space-y-4">
                    <HeaderBrand />

                    <div className="space-y-4">
                        <div className="flex justify-center gap-4">
                            <Input
                                label=""
                                type="text"
                                name="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Job title"
                                direction="column"
                            />

                            <Button
                                variant="primary"
                                color="bg-bg-pink hover:opacity-90"
                                onClick={() => retrieveJob()}
                                className="" >
                                <p className="font-normal">Search</p>
                            </Button>
                        </div>

                        <div>
                            <Table data={data} columns={columns} />
                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default DashboardContainer;
