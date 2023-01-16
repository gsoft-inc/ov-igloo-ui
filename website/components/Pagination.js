import Link from 'next/link';

export default function Pagination({ page, type, link }) {
  return (
    <div className="io-pagination__item">
      <Link href={link} className="io-pagination__link">
        {type === 'preview' ? 'Previous' : 'Next'}
        <span className="io-pagination__label">{page}</span>
      </Link>
    </div>
  );
}
