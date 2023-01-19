import Link from 'next/link';
import Image from 'next/image';

export default function Header({ children, links, brand }) {
  const brandLink = (
    <Link href="/" className="io-link-icon io-link-brand">
      <Image src={brand} alt="Igloo branding" />
    </Link>
  );

  const externalLinks = (
    <ul className="io-nav__list io-external-link">
      {links.map((link, index) => {
        return (
          <li key={index.toString()} className="io-nav__item">
            <a className="io-link-icon" href={link.href} target="_blank">
              <Image src={link.icon} />
              <span className="is-hidden">{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
  return (
    <header className="io-header">
      {brandLink}
      {children}
      {externalLinks}
    </header>
  );
}
