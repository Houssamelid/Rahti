'use client';

import { useState } from "react";
import Modal from "./Modal";
import CusttomButton from "../forms/CusttomButton";
import useSignupModel from "@/app/hooks/useSignupModal";
import { useRouter } from 'next/navigation'
import apiService from "@/app/services/ApiService";
import { handleLogin } from "@/app/lib/actions";


const SignupModal = () => {
    const router = useRouter();
    const SignupModal = useSignupModel();
    const [email, setemail] = useState('');
    const [password1, setpassword1] = useState('');
    const [password2, setpassword2] = useState('');
    const [error, seterror] = useState<string[]>([]);

    //submit function

    const sumbitSignup = async () => {
        const formData = {
            name: 'Houssam',
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', formData);

        if (response.access) {

            handleLogin(response.user.pk, response.access, response.refresh);

            SignupModal.close();
            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            seterror(tmpErrors);
        }
    }

    const content = (
        <>

            <form action={sumbitSignup} className="space-y-4">
                <input
                    placeholder="Your Email Address"
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />
                <input
                    placeholder="Your Password"
                    onChange={(e) => setpassword1(e.target.value)}
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                <input
                    placeholder="Repeat  Password"
                    onChange={(e) => setpassword2(e.target.value)}
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
                    onClick={sumbitSignup}
                />
            </form>
        </>
    );

    return (
        <Modal
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Sign up"
            content={content}
        />
    );
};

export default SignupModal;


