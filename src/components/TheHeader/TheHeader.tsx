// Компонент шапки (хэдэра) с названием приложения и земсвитчера (кнопка смены темы)

import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './TheHeader.module.scss';

export const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      GitHub Finder
    </div>
    <ThemeSwitcher/>
  </div>
);
