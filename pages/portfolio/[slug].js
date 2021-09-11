import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Portfolio.module.scss';
import {useContentful} from "../../hooks/useContentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

/* eslint-disable */
const renderOptions = {
    renderNode: {
        [INLINES.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "blogPost") {
                return (
                    <a href={`/blog/${node.data.target.fields.slug}`}>            {node.data.target.fields.title}
                    </a>
                );
            }
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                return (
                    <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
                );
            }

            if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
                return (
                    <iframe
                        src={node.data.target.fields.embedUrl}
                        height="100%"
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        title={node.data.target.fields.title}
                        allowFullScreen={true}
                    />
                );
            }
        },

        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            // render the EMBEDDED_ASSET as you need
            return (
                <img
                    src={`https://${node.data.target.fields.file.url}`}
                    alt={node.data.target.fields.description}
                />
            );
        },
    },
};
/* eslint-enable */

function PortfolioItem(props) {
    const {item} = props;
    if(!item) return <div className="container">Loading</div>
    const {fields: {title, claytonContent, link}} = item;
    const featureImage = item?.fields.media[0];
    return (
        <div>
            <Head>
                <title>{title} | Clayton Smith&apos;s Portfolio</title>
                <meta name="description" content="Full Stack Developer with over 10 years experience in web & mobile."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div className={styles.hero}>
                    <div className="container">
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.imageContainer}>
                                <Image src={'https:' + featureImage.fields.file.url} alt={featureImage.fields.title} width={500} height={500}  layout="responsive" objectFit="contain"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.contentContainer}>
                                {documentToReactComponents(claytonContent, renderOptions)}
                                {link && <a href={link + '?ref=clayton.software'} target="_blank" rel="nofollow noreferrer" className="btn btn-primary">Visit {title}</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    // eslint-disable-next-line
    const cfClient = useContentful();
    const {items} = await cfClient.getEntries({
        'content_type': 'portfolioItem',
        'fields.clayton': 'true',
        'fields.slug': context.params.slug
    });

    const item = items[0];
    if(!item) {
        return {
            notFound: true
        }
    }
    return {
        props: {item},
        revalidate: 3600
    }
}

export async function getStaticPaths(context) {
    // eslint-disable-next-line
    const cfClient = useContentful();
    const {items} = await cfClient.getEntries({
        'content_type': 'portfolioItem',
        'fields.clayton': 'true'
    });
    const paths = items.map(({fields: {slug}}) => ({ params: {slug} }));
    return {
        paths,
        fallback: true
    }
}

export default PortfolioItem;
