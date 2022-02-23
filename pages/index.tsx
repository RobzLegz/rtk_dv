import Head from "next/head"
import HomeContainer from "../src/components/HomeContainer";
import Navigation from "../src/components/Navigation";

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>RTK dzīve</title>
        <meta name="description" content="Skolēnu veidots informācijas avots par Rīgas Tehniskajā koledžā notiekošo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <HomeContainer />
    </div>
  )
}
