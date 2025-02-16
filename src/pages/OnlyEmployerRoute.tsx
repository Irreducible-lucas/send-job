import { useEffect, useState } from "react";
import { useAppSelector } from "../rtk/hooks";
import { useNavigate } from "react-router-dom";


const OnlyEmployerRoute = ({ children }: any) => {
    const auth = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.token) {
            navigate("/login", { replace: true });
        } else if (!auth.currentUser || auth.currentUser.role === "seeker") {
            navigate("/", { replace: true });
        }
    }, [auth, navigate]);

    // Render children only when auth is loaded and valid
    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
}

export default OnlyEmployerRoute