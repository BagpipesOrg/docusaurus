import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Wiki',
    Svg: require('@site/static/img/bagpipesSvg.svg').default,
    description: (
      <>
	Drag and drop together a transaction flow in minutes.     
</>
    ),
  },
  {
    title: 'SDK',
    Svg: require('@site/static/img/bagpipesSvg.svg').default,
    description: (
      <>
      Interact with your scenarios using our Json HTTP api in whatever programming language you want. 
	</>
    ),
  },
  {
    title: 'Self Host Bagpipes',
    Svg: require('@site/static/img/bagpipesSvg.svg').default,
    description: (
      <>
        Run and persist your scenarios on your own infrastructure.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
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
