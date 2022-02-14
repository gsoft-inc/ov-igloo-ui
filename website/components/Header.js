import Link from 'next/link';
import Image from 'next/image';

import brand from '../svg/brand.svg';

export default function Header({ children }) {
  return (
    <header className="io-header">
      <div className="io-header__content">
        <Link href="/">
          <a className="io-link-icon io-link-brand" href="/">
            <Image src={brand} />
          </a>
        </Link>
        {children}
      </div>
    </header>
  );
}
