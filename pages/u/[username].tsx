import Head from "next/head"
import { useRouter } from "next/router";
import { useState } from "react";
import Navigation from "../../src/components/Navigation";

export default function Home() {
    const router = useRouter();

    const [username] = useState(router.query.username);

    return (
        <div className="page">
            <Head>
                <title>RTK dzīve | {username}</title>
                <meta name="description" content="Skolēnu veidots informācijas avots par Rīgas Tehniskajā koledžā notiekošo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navigation />

        </div>
    )
}