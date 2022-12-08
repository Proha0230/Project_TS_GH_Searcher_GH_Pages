// Общий компонент Информации о пользователе где включены иконки и информация о твиттере
// сайте геолокации и месте работы. методом перебора .map они все показываются.
// index добавляем просто так как метод map Требует или id или Index. его даже может и не быть 
// но в методе он нужен

import React from 'react';
import CompanyIcon from 'assets/icon-company.svg';
import LocationIcon from 'assets/icon-location.svg';
import TwitterIcon from 'assets/icon-twitter.svg';
import BlogIcon from 'assets/icon-website.svg';
import {InfoItem, InfoItemProps} from 'components/InfoItem';
import {LocalGithubUser} from 'types';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick <LocalGithubUser,
'blog' | 'company' | 'location' | 'twitter'> { }

export const UserInfo = ({blog, company,location,twitter }: UserInfoProps) => {
const items: InfoItemProps[] = [
  {
    icon:<LocationIcon />,
    text: location,
  },

  {
    icon:<BlogIcon />,
    text: blog,
    isLink: true,
  },

  {
    icon:<TwitterIcon />,
    text: twitter,
  },
  {
    icon:<CompanyIcon />,
    text: company,
  },
]

return(
  <div className={styles.userInfo}>
    {items.map((item,index)=>(
      <InfoItem {...item} key={index} />
    ))}
  </div>
);
}
