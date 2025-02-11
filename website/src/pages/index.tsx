import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'
import Translate from '@docusaurus/core/lib/client/exports/Translate'

function HomepageHeader () {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <img src="img/logo.svg" width="300px"/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg margin--sm"
                        to="/docs/introduction">
                        <Translate description="Home page link to docs section">
                            Get Started
                        </Translate>
                    </Link>
                    <Link
                        className="button button--primary button--lg margin--sm"
                        to="/blog"
                    >
                        <Translate description="Home page link to announcements section">Announcements</Translate>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home (): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title="Free and open source comics/mangas media server"
            description="Free and open source comics/mangas media server">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    )
}
