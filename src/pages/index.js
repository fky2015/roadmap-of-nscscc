import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>易于上手</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        从环境配置开始，一步一步介绍入门需要的工具与知识。本文档试图覆盖从龙芯杯预赛到决赛、从 CPU 的设计到下板中的绝大部分细节。
      </>
    ),
  },
  {
    title: <>最佳实践</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        由前人遇到的经验教训总结而成。这些文档不仅告诉你什么是对的，什么是更好的；还会说哪些方法不太可行，以及其中的缘由。
      </>
    ),
  },
  {
    title: <>海纳百川</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        本文档不仅记录了编写者个人的经验体会，也会链接到其他人已经已有的好的内容上。这也是本文档的目标之一：通过搜索，你能从这里跳转到互联网中其他的闪烁着光芒的地方。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
