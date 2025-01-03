import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/convert?access_key=605563735f4b984a1325b8b4b18d2be5", {
        from,
        to,
        amount,
      });
      console.log("Axios Response:", response);
      setResult(response.data);
    } catch (error) {
      console.error("Conversion Error:", error.message);
      alert("Failed to convert currency.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Currency Converter</h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="from" className="block text-sm/6 font-medium text-gray-900">From:</label>
              <div className="mt-2">
                <input 
                  id="from"
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                  className="block w-full rounded-md white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            
          </form>
          <label className="labelInput" htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className="labelInput" htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className="labelInput" htmlFor="amount">Amount:</label>
          <input className="inputForm"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="buttonForm" onClick={handleConvert} disabled={loading}>
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>

      {result && (
        <div className={styles.result}>
          <p>
            {amount} {from} = {result.result.toFixed(2)} {to}
          </p>
          {/* <p>Exchange Rate: {result.rate.toFixed(4)}</p> */}
        </div>
      )}
    </div>
  );
}

// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div
//         className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
//       >
//         <main className={styles.main}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           />
//           <ol>
//             <li>
//               Get started by editing <code>pages/index.js</code>.
//             </li>
//             <li>Save and see your changes instantly.</li>
//           </ol>

//           <div className={styles.ctas}>
//             <a
//               className={styles.primary}
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 className={styles.logo}
//                 src="/vercel.svg"
//                 alt="Vercel logomark"
//                 width={20}
//                 height={20}
//               />
//               Deploy now
//             </a>
//             <a
//               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.secondary}
//             >
//               Read our docs
//             </a>
//           </div>
//         </main>
//         <footer className={styles.footer}>
//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/file.svg"
//               alt="File icon"
//               width={16}
//               height={16}
//             />
//             Learn
//           </a>
//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/window.svg"
//               alt="Window icon"
//               width={16}
//               height={16}
//             />
//             Examples
//           </a>
//           <a
//             href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/globe.svg"
//               alt="Globe icon"
//               width={16}
//               height={16}
//             />
//             Go to nextjs.org →
//           </a>
//         </footer>
//       </div>
//     </>
//   );
// }
