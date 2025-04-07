'use client';

import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import CusttomButton from "../forms/CusttomButton";

import apiService from "@/app/services/ApiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState<string[]>([]);

    const sumbitLogin = async () => {
        const formData = {
            email: email,
            password: password,
        }

        const response = await apiService.post('/api/auth/login/', formData);
        if (response.access) {

            handleLogin(response.user.pk, response.access, response.refresh);

            loginModal.close();
            router.push('/')
        } else{
            seterror(response.non_field_erros);
        }
    }

    
    const content = (
        <>

            <form className="space-y-4">
                <input
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Your Email Address"
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />
                <input
                    placeholder="Your Password"
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                {error.map((err, index) => (
                    <div key={index} className="p-5 bg-red-500 text-white rounded-xl opacity-80">
                        {err}
                    </div>
                ))}
               <CusttomButton className="w-100"
                    label="Submit"
                    onClick={sumbitLogin}
                />
            </form>
        </>
    );

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    );
};

export default LoginModal;
