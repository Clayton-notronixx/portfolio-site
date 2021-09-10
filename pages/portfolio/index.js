import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Portfolio.module.scss';
import {useContentful} from "../../hooks/useContentful";

function Portfolio(props) {
    const {items = []} = props;
    return (
        <div>
            <Head>
                <title>Clayton Smith&apos;s Portfolio</title>
                <meta name="description" content="Full Stack Developer with over 10 years experience in web & mobile."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div className={styles.hero}>
                    <div className="container">
                        <h1>My Work</h1>
                        <p>I&apos;ve had the chance to work on some incredible projects.</p>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className="container">
                        <div className="row">
                            {items.map(item => {
                                const featureImage = item.fields.media[0]
                                return <div key={item.sys.id} className="col-md-4">
                                    <Link href={'/portfolio/' + item.fields.slug}>
                                        <a className={styles.item}>
                                            <div style={{width:'100%', height: 250, position:'relative'}}>
                                                <Image src={'https:' + featureImage.fields.file.url} alt={featureImage.fields.title} layout="fill" objectFit="cover"/>
                                            </div>
                                            <h4 className={styles.itemTitle}>{item.fields.title}</h4>
                                        </a>
                                    </Link>
                                </div>
                            })}
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
        'order': 'fields.projectDate'
    })
    return {
        props: {items},
        revalidate: 60
    }
}

export default Portfolio;
