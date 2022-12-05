// компонент кнопки поиска Search. Его типизация дающая TS понимание что должно происходить
// по нажатию на нее

import styles from './Button.module.scss';

interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button = ({children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
