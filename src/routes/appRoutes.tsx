import { Route, Routes } from "react-router";

import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}