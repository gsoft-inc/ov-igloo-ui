import Link from 'next/link';
import cx from 'classnames';

import Title from './Title';

export default function Card({
  inline,
  component,
  icon,
  title,
  description,
  link,
  className,
  featureFlag,
}) {
  const hasAction = typeof link === 'string' && !featureFlag;

  const card = (
    <div
      className={cx('io-card', className, {
        'io-card--inline': inline,
        'io-card--component': component,
      })}
    >
      <div className="io-card__img">{icon}</div>
      <div className="io-card__content">
        <Title as="h3" level={inline ? 4 : 3} className="io-card__title">
          {title}
        </Title>
        {description && <p className="io-card__description">{description}</p>}
      </div>
    </div>
  );
  return hasAction ? (
    <Link href={link}>
      <a className="io-card__link">{card}</a>
    </Link>
  ) : (
    card
  );
}
