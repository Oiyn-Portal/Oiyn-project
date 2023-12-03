import React from 'react';

import { Collapse } from 'src/components/molecules/Collapse';
import { CATEGORIES } from 'src/constants/ui';
import { Msg } from 'src/i18n/Msg';

import styles from 'src/components/organisms/Categories/styles.module.css';

export const Categories: React.FC = () => (
  <Collapse>
    <div className={styles.wrapper}>
      {CATEGORIES.map((el, index) => (
        <div key={`${el.value}_${index}`} className={styles.checkboxRect}>
          <input type="checkbox" id={`${el.value}_${index}`} />
          <label htmlFor={`${el.value}_${index}`}>
            <Msg id={el.msg} />
          </label>
        </div>
      ))}
    </div>
  </Collapse>
);
