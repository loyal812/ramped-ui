import DashboardContainer from "../../containers/dashboard";
import React, { FC } from "react";

interface DashboardPageProps { }

const DashboardPage: FC<DashboardPageProps> = ({ }) => {
    return (
        <main>
            <DashboardContainer />
        </main>
    );
};

export default DashboardPage;