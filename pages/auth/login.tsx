import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, UserInfo } from "../../src/redux/slices/userSlice";

export default function Home() {
    const userInfo: UserInfo = useSelector(selectUser);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if(userInfo.loggedIn && userInfo.token){
            router.push("/");
        }
    }, [userInfo.loggedIn, dispatch, userInfo.token, router]);

    return (
        <div>
            <Head>
                <title>RTK dzīve | Login</title>
                <meta name="description" content="Skolēnu veidots informācijas avots par Rīgas Tehniskajā koledžā notiekošo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
