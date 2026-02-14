import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '',
    Svg: require('@site/static/img/heart.svg').default,
    description: (
      <>
        Даже если я когда-то<br/>
        Этого не говорю,<br/>
        Знай, что я тебя безумно,<br/>
        Очень искренне люблю.<br/>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/heart-svgrepo-com.svg').default,
    description: (
      <>
        С Днем влюбленных поздравляю.<br/>
        В такт сердца наши стучат,<br/>
        И часы, когда мы вместе,<br/>
        Очень-очень быстро мчат.<br/>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/fox-svgrepo-com.svg').default,
    description: (
      <>
        На Земле, такой огромной,<br/>
        Встретились мы ведь не зря.<br/>
        Ты всех ближе и дороже,<br/>
        Всех любимей для меня.<br/>
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
        {/* <Heading as="h3">{title}</Heading> */}
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
