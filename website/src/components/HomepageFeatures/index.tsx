import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
    title: string;
    // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Organize',
        description: (
            <>
                Organize your CBZ, CBR, PDF and EPUB files in different libraries, collections or reading lists.
            </>
        ),
    },
    {
        title: 'Read',
        description: (
            <>
                Use the integrated Webreader, the Mihon extension, any OPDS reader, or other integrations.
            </>
        ),
    },
    {
        title: 'Manage',
        description: (
            <>
                Edit metadata for your series and books.
            </>
        ),
    },
]

function Feature ({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            {/*<div className="text--center">*/}
            {/*    <Svg className={styles.featureSvg} role="img"/>*/}
            {/*</div>*/}
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures (): JSX.Element {
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
    )
}
