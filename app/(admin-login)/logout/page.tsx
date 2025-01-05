"use client";

import { logout } from "@/actions/auth";
import React, { useEffect } from "react";

export default function Logout() {
    useEffect(() => {
        // defaults to the global scope
        logout();
    }, []);
    return <div>Logout</div>;
}