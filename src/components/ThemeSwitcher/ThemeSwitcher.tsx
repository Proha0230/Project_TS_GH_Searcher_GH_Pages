// Компонент земсвитчера который импортирован в хэдер
import React from 'react';
import MoonIcon from 'assets/icon-moon.svg';
import SunIcon from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';


export const ThemeSwitcher = () => {
  
const [isDark, setDark] = useState(false);
const themeText = isDark ? 'Light' : 'Dark';
const ThemeIcon = isDark ? SunIcon : MoonIcon;

useEffect(()=>{
  document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
}, [isDark]);
  
  return (
  <div className={styles.switcher} onClick={()=> setDark(!isDark)}>
  <span>{themeText}</span>
  <ThemeIcon  />
  </div>
);
};
