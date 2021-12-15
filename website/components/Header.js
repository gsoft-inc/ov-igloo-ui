import Link from 'next/link';
import Image from 'next/image';

import brand from '../svg/brand.svg';

export default function Header({ children }) {
  return (
    <header className="io-header">
      <Link href="/">
        <a className="io-link-icon" href="/">
          <Image src={brand} />
        </a>
      </Link>
      {children}
    </header>
  );
}
