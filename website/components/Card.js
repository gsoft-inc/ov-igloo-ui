import Link from 'next/link';
import cx from 'classnames';

import Title from './Title';

export default function Card({
  inline,
  icon,
  title,
  description,
  link,
  className,
  featureFlag,
}) {
  const hasAction = typeof link === 'string' && !featureFlag;

  const card = (
    <div className={cx('io-card', className, { 'io-card--inline': inline })}>
      <div className="io-card__img">{icon}</div>
      <div className="io-card__content">
        <Title as="h3" level={3} className="io-card__title">
          {title}
        </Title>
        <p className="io-card__description">{description}</p>
      </div>
    </div>
  );
  return hasAction ? (
    <Link href={link}>
      <a>{card}</a>
    </Link>
  ) : (
    card
  );
}
