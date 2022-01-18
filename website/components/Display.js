import Image from 'next/image';

export default function Display({ icon, children }) {
  return (
    <div className="io-display">
      <div className="io-display__icon">
        <Image layout="intrinsic" src={icon} />
      </div>
      {children}
    </div>
  );
}
