// контейнер в который мы обвалакиваем все компоненты содержимого что у нас есть.
// это дает возможность использовать пропсы во всех дочерних элементах этого контейнера
// а т.к. мы обволакиваем им все - то в любом нашем компоненте есть возможность исп. пропсы
import React from 'react';
import {ReactNode} from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode,
 }

export const Container = ({ children }: ContainerProps) => (
  <div className = {styles.container}>
    {children}
  </div>
);
