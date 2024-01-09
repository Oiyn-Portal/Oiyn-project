import React from 'react';

import { Banner } from 'src/components/atoms/Banner';
import { Categories } from 'src/components/organisms/Categories';
import { ListGames } from 'src/components/organisms/ListGames';
import { Page } from 'src/components/organisms/Page';
import { SearchForm } from 'src/components/organisms/forms/SearchForm';

import styles from 'src/components/routes/pages/Main/styles.module.css';

const Main: React.FC = () => (
  <Page template="main">
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav>
          <div className={styles.oneBanner}>
            <Banner />
          </div>

          <Categories />

          <div className={styles.twoBanner}>
            <Banner />
          </div>
        </nav>

        <main className={styles.main}>
          <div className={styles.threeBanner}>
            <Banner />
          </div>

          <SearchForm />

          <div className={styles.listWrapper}>
            <ListGames />
          </div>
        </main>
      </div>
    </div>
  </Page>
);

export default Main;
