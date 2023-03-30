import Head from "next/head";
import Loader from "@/components/Loader";
import React, { useEffect } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import * as INTERFACE from '@/dtos/index';
import axiosInstance from "@/config/axios";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    // check if userInfo authenticated
    useEffect(() => {
        const userInfoFromStorage = localStorage.getItem('userInfo')
        if (userInfoFromStorage) {
            window.location.href = '/home'
        }
    }, [])

    // clears error state in 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 2000);
    }, [error])

    // handles login api request
    async function handleLogin(payload: INTERFACE.LoginRequestInterface) {
        setLoading(true);
        try {
        
            const res = await axiosInstance.post('/auth/login', payload)
            if (res?.status === 200) {
                localStorage.setItem('userInfo', JSON.stringify(res.data.data))
                window.location.href = '/home'
            }
    
        } catch (error: any) {

            const e = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            setError(e);

        } finally {
            setLoading(false);
        }
    }

    // disables button if fields are empty
    const feildsLenght = (!email || !password)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen w-screen flex justify-center items-center p-5 md:p-10">
                <div className="flex flex-col max-w-lg w-full mx-auto">
                    <h1 className="text-bold text-3xl md:text-4xl mb-10">
                        Casava Project
                    </h1>
                    <div className="grow min-h-64 border-2 border-black w-full p-5 md:p-10">
                        <p className="text-xl text-bold mb-5">
                            Sign In To Your Account
                        </p>
                        {error && (
                            <h2 className="text-sm text-normal bg-red-200 py-4 px-4 mb-5 text-red-600">
                                {error}
                            </h2>
                        )}
                        <div
                            className="flex flex-col gap-y-4"
                        >
                            <Input
                                label="Email"
                                placeholder="test@email.com"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Password"
                                placeholder="Password"
                                name="password"
                                secure
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                            <Button disabled={feildsLenght} onClick={() => handleLogin({
                                email,
                                password
                            })}>Sign In</Button>
                            <div className="flex items-center justify-center">
                                <Link href="/" className="text-md text-bold mb-5 text-center w-fit ">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {loading && <Loader />}
        </>
    );
}
