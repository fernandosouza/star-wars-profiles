import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);

  const onSubmit = () => {
    // fetch('https://fe-case-study.vercel.app/api/', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: 'souzatest@test.com',
    //     password: ''
    //   })
    // })
  };

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Star War Profiles</title>
      </Head>

      <main>
        <h1>Star War Profiles</h1>

        <section>
          <h1>Sign up</h1>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
