import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import SiteMetadata from "../site-metadata";
import { SWRConfig } from "swr";

type StaticProps = {
    fallback: {};
};

export const getStaticProps: GetStaticProps = async () => {
    const [] = await Promise.all([]);
    return {
        props: {},
        revalidate: 60 * 60 * 1000,
    };
};

const StoryPreview: NextPage<StaticProps> = ({ fallback }) => (
    <>
        <Head>
            <title>ultrasound.money</title>
            <meta name="description" content={SiteMetadata.description} />
            <meta
                name="keywords"
                content="ultra sound money, ethereum, ETH, sound money, fee burn, EIP-1559"
            />
            <meta property="og:title" content={SiteMetadata.title} />
            <meta property="og:description" content={SiteMetadata.description} />
            {/* When sharing the site on twitter, twitter adds our metadata, this adds title value, so we remove it. To not spend a lot of time removing our metadata from every shared link we're disabling twitter metadata for now.*/}
            <meta property="og:url" content="https://ultrasound.money" />
            {/* This serves our Plausible analytics script. We use cloudflare workers to make this possible. The name is intentionally vague as suggested in the Plausible docs.*/}
        </Head>

        <Script
            defer
            data-domain="ultrasound.money"
            data-api="https://ultrasound.money/cfw/event"
            src="https://ultrasound.money/cfw/script.js"
        />
        <SWRConfig
            value={{
                fallback,
            }}
        >
            <div>
                story code has been moved to root/archive, move from there to root/src
                as needed
            </div>
        </SWRConfig>
    </>
);
