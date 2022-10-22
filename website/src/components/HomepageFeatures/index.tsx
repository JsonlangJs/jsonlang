import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sharing Logic',
    Svg: require('@site/static/img/mainlogo.svg').default,
    description: (
      <>
        It can be stored in the database and rendered to the Frontend-Side to execute/run some business logic
      </>
    ),
  },
  {
    title: 'Sync & Async',
    Svg: require('@site/static/img/mainlogo.svg').default,
    description: (
      <>
        All Rules/Methods can be synchronous or asynchronous, which allowing you to execute any kind of logic
      </>
    ),
  },
  {
    title: 'Extendable',
    Svg: require('@site/static/img/mainlogo.svg').default,
    description: (
      <>
        Easy to add new synchronous or asynchronous rules
      </>
    ),
  },
  {
    title: 'Builder [In Progress]',
    Svg: require('@site/static/img/mainlogo.svg').default,
    description: (
      <>
        Powerful Builder to build the Json in an easy way
      </>
    ),
  },
  {
    title: 'Tracking & Logs [In Progress]',
    Svg: require('@site/static/img/mainlogo.svg').default,
    description: (
      <>
        Real Time logs for all succeeded or failed tasks in runtime. 
        UI to mentor all running instances and retry the failed tasks  
      </>
    ),
  },
  {
    title: 'Workflow [In Progress]',
    Svg: require('@site/static/img/mainlogo.svg').default,
    description: (
      <>
        It Can work as a workflow 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
