import Head from "next/head";
import Link from "next/link";
import Profile from "./profile";
import styles from "./layout.module.css";

const name = "Guido Rivoira";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;800&family=Prata&display=swap" rel="stylesheet" />

      </Head>
      
      <header className={styles.header}>
        {home ? (
          <>
            <Profile  height={144} width={144} alt={name} />
            <h1 className={`mb-0 font-prata`}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Profile height={120} width={120} alt={name} />
              </a>
            </Link>
            <h2 className='font-extrabold text-xl mt-3 font-prata'>
              <Link href="/">
                <a className='text-black'>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className='text-sm hover:font-semibold ml-1 hover:-ml-1 font-inter inline-block transition-all'>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
