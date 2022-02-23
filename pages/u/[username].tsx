import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navigation from "../../src/components/Navigation";
import ProfileContainer from "../../src/components/ProfileContainer";

export default function Home() {
    const router = useRouter();

    const [username, setUsername] = useState<string | string[] | undefined>("");

    useEffect(() => {
        if(!username){
            setUsername(router.query.username);
        }
    }, [username, router, router.query, router.query.username])

    return (
        <div className="page">
            <Head>
                <title>RTK dzīve | {username}</title>
                <meta name="description" content="Skolēnu veidots informācijas avots par Rīgas Tehniskajā koledžā notiekošo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navigation />

            <ProfileContainer />
        </div>
    )
}