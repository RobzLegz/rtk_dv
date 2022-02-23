import Head from "next/head"
import Navigation from "../src/components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RTK dzīve</title>
        <meta name="description" content="Skolēnu veidots informācijas avots par Rīgas Tehniskajā koledžā notiekošo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
    </div>
  )
}
