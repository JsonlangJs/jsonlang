import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src='img/mainlogo.svg' alt="JsonLang" width="20%" height="20%"/>
        <p className={styles.description}>Programming Language in JSON</p>
        <div>
          <a href="https://jsonlang.dev" target="_blank">
            <img alt="Programming Language" src="https://img.shields.io/badge/typescript-100%25-blue.svg" />
          </a>
          &nbsp;
          <a href="https://www.npmjs.com/package/jsonlang-js" target="_blank">
            <img alt="Version" src="https://img.shields.io/npm/v/jsonlang-js.svg" />
          </a>
          &nbsp;
          <a href="https://packagephobia.com/result?p=jsonlang-js" target="_blank">
            <img alt="Size" src="https://packagephobia.com/badge?p=jsonlang-js" />
          </a>
          &nbsp;
          <a href="https://www.npmjs.com/package/jsonlang-js" target="_blank">
            <img alt="Downloads" src="https://img.shields.io/npm/dy/jsonlang-js.svg" />
          </a>
          &nbsp;
          <a href="https://codecov.io/gh/ahmed-medhat-tawfiq/jsonlang-js" target="_blank">
            <img alt="Code Coverage" src="https://codecov.io/gh/ahmed-medhat-tawfiq/jsonlang-js/branch/master/graph/badge.svg?token=35JEA7G369" />
          </a>
          &nbsp;
          <a href="https://img.shields.io/snyk/vulnerabilities/npm/jsonlang-js" target="_blank">
            <img alt="Vulnerabilities" src="https://img.shields.io/snyk/vulnerabilities/npm/jsonlang-js" />
          </a>
        </div>
        <div>
        <a href="https://github.com/JsonlangJs/jsonlang-js/actions" target="_blank">
            <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/ahmed-medhat-tawfiq/jsonlang-js/deploy-package.yml?branch=master" />
          </a>
          &nbsp;
          <a href="https://github.com/JsonlangJs/jsonlang-js/graphs/commit-activity" target="_blank">
            <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2022.svg" />
          </a>
          &nbsp;
          <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fahmed-medhat-tawfiq%2Fjsonlang-js?ref=badge_shield" target="_blank">
            <img alt="License" src="https://img.shields.io/github/license/ahmed-medhat-tawfiq/jsonlang-js.svg" />
          </a>
          &nbsp;
          <a href="https://github.com/JsonlangJs/jsonlang-js/blob/master/LICENSE" target="_blank">
            <img alt="FOSSA Status" src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fahmed-medhat-tawfiq%2Fjsonlang-js.svg?type=shield" />
          </a>
          &nbsp;
          <a href="https://github.com/JsonlangJs/jsonlang-js/stargazers" target="_blank">
            <img alt="Star on GitHub" src="https://img.shields.io/github/stars/ahmed-medhat-tawfiq/jsonlang-js?style=social" />
          </a>
          &nbsp;
          <a href="https://github.com/sponsors/ahmed-medhat-tawfiq" target="_blank">
            <img alt="Github Sponsor" src="https://camo.githubusercontent.com/7d9333b097b2f54a8957d126ab82937811489c9b75c3850f609985cf94cd29fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2532302d53706f6e736f722532306d652532306f6e2532304769744875622d6f72616e6765" />
          </a>
        </div>
        <br/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <body className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.description}>It is a Typescript package that provides a simple JSON Programming Language, allowing you to execute a safe logic in Frontend or Backend (NodeJS). Furthermore, it can be stored in the database and rendered to the Frontend-Side to execute/run some business logic</p>
        <p className={styles.description}>JsonLang is designed to be extendable. You can define new rules with sync/async handlers</p>
      </div>
    </body>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={''}
      description="Json Programming Language">
      <HomepageHeader />
      <main>
        <MainContent />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
