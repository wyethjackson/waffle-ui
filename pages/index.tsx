import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date';
import Badge from 'react-bootstrap/Badge';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import type { NextPage } from "next";
// import { useWallet } from '@meshsdk/react';
// import { CardanoWallet } from '@meshsdk/react';

export default function Home({ allPostsData = [] }) {
  // const { connected, wallet } = useWallet();
  // const [assets, setAssets] = useState<null | any>(null);
  // const [loading, setLoading] = useState<boolean>(false);

  // async function getAssets() {
  //   if (wallet) {
  //     setLoading(true);
  //     const _assets = await wallet.getAssets();
  //     setAssets(_assets);
  //     setLoading(false);
  //   }
  // }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction] <Badge bg="secondary">New</Badge></p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <div>
      <h1>Connect Wallet</h1>
      {/*<CardanoWallet />*/}
      {/*{connected && (*/}
      {/*  <>*/}
      {/*    <h1>Get Wallet Assets</h1>*/}
      {/*    {assets ? (*/}
      {/*      <pre>*/}
      {/*        <code className="language-js">*/}
      {/*          {JSON.stringify(assets, null, 2)}*/}
      {/*        </code>*/}
      {/*      </pre>*/}
      {/*    ) : (*/}
      {/*      <button*/}
      {/*        type="button"*/}
      {/*        onClick={() => getAssets()}*/}
      {/*        disabled={loading}*/}
      {/*        style={{*/}
      {/*          margin: "8px",*/}
      {/*          backgroundColor: loading ? "orange" : "grey",*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        Get Wallet Assets*/}
      {/*      </button>*/}
      {/*    )}*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
