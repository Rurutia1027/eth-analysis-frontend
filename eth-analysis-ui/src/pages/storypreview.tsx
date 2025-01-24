import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import SiteMetadata from "../site-metadata";
import { SWRConfig } from "swr";

type StaticProps = {
    fallback: Record<string, unknown>;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
    // Simulate fetching or leave as an empty Promise.all for now.
    await Promise.all([]);

    return {
        props: {
            fallback: {}, // Default fallback value
        },
        revalidate: 60 * 60 * 1000, // 1 hour revalidation
    };
};

const StoryPreview: NextPage<StaticProps> = ({ fallback = {} }) => (
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
            <meta property="og:url" content="https://ultrasound.money" />
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

export default StoryPreview;