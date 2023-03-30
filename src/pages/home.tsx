import Head from "next/head";
import React, { useEffect } from "react";
import Button from "@/components/Button";

export default function Home() {
    const [user, setUser]: any = React.useState({});

    useEffect(() => {
      const userInfoFromStorage: any = localStorage.getItem('userInfo')
      const parsedUserInfo = JSON.parse(userInfoFromStorage) || null
      setUser(parsedUserInfo);
    }, [])

    const handelLogout = () => {
      localStorage.clear()
      window.location.href = '/'
    }

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
                    <div className="grow min-h-64 border-2 border-black w-full md:p-10">
                        <p className="text-xl text-bold mb-5">
                          Email: {user?.email}
                        </p>
                        <p className="text-xl text-bold">
                          Username: {user?.username}
                        </p>
                        <Button onClick={handelLogout}>Log out</Button>
                    </div>
                </div>
            </main>
        </>
    );
}
