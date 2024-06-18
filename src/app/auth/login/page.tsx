import LoginFormSection from "../../../containers/auth-page/login-page/form-section";
import React, { FC } from "react";

interface LoginPageProps { }

// Maybe it is a good idea to separate login and register
const LoginPage: FC<LoginPageProps> = ({ }) => {
    return (
        <main>
            <LoginFormSection />
        </main>
    );
};

export default LoginPage;