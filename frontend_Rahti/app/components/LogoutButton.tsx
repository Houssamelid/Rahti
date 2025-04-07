'use client';

import { useRouter } from "next/navigation";
import { resetAuthCookies } from '../lib/actions';
import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const submitLogout = async () => {
       
        await resetAuthCookies(); // Ensure the function is awaited if it's async
        router.push('/');
    };

    return (
        <MenuLink
            label="Log Out"
            onClick={submitLogout} // Fixed `onclick` to `onClick`
        />
    );
};

export default LogoutButton;
