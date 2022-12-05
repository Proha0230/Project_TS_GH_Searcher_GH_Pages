// Компонент одного элемента из Инфо пользователя, такие как твиттер геоположение, работа, саит

import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,
}

export const InfoItem = ({icon, isLink, text }: InfoItemProps) => {

  // Проверка есть ли текст в данном поле, если нет то выдаст надпись Not Availible
  const currentText = text || "Not Available";

  let currentHref = "";

  // Проверка на то ссылка или просто текст - startsWish - начало содержимого в поле 
  if(isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  };

  return (
    <div className={`${styles.infoItem} ${text ? "" : `${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ?(
          <a
          href={currentHref}
          target="_blank"
          rel='noreferrer'
          className={styles.link}
          >
            {currentText.slice(0,35)}
          </a>
        ) : "ㅤ" + currentText } 
        {/* вставлен прозрачный символ для отступа */}
      </div>
    </div>
  );
};
