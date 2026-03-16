import React from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading';
import styles from './styles.module.css'
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
    {
        title: translate({
            message: 'Organize',
            id: 'homepage.features.organize.title',
        }),
        Svg: '',
        description: (
            <Translate id="homepage.features.organize.text">
                Organize your CBZ, CBR, PDF and EPUB files in different libraries, collections or reading lists.
            </Translate>
        ),
    },
    {
        title: translate({
            message: 'Read',
            id: 'homepage.features.read.title',
        }),
        Svg: '',
        description: (
            <Translate id="homepage.features.read.text">
                Use the integrated Webreader, the Mihon extension, any OPDS reader, or other integrations.
            </Translate>
        ),
    },
    {
        title: translate({
            message: 'Manage',
            id: 'homepage.features.manage.title',
        }),
        Svg: '',
        description: (
            <Translate id="homepage.features.manage.text">
                Edit metadata for your series and books.
            </Translate>
        ),
    },
]

function Feature ({ title, Svg, description }) {
    return (
        <div className={clsx('col col--4')}>
            {/*<div className="text--center">*/}
            {/*    <Svg className={styles.featureSvg} role="img"/>*/}
            {/*</div>*/}
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
