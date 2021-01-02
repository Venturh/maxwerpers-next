import clsx from 'clsx';

type Props = {
  className?: string;
  children: React.ReactNode;
  barPosition?: 'left' | 'bottom' | 'none';
  outline?: boolean;
};

const BaseCard = ({ children, barPosition, className, outline }: Props) => (
  <div
    className={clsx(
      'relative w-full shadow-sm px-2 py-1 rounded-lg bg-secondaryBg',
      { 'pl-6': barPosition === 'left', 'border border-accentBg': outline },
      className
    )}
  >
    {children}
    <div
      className={clsx('absolute  rounded-sm bg-brand', {
        'bottom-0 w-full h-1': barPosition === 'bottom',
        'top-0 left-0 w-1.5 h-full': barPosition === 'left',
        hidden: barPosition === 'none',
      })}
    />
  </div>
);

export default BaseCard;
