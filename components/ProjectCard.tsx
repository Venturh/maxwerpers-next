import Link from 'next/link';

import { Project } from 'lib/prismic';
import Label from './Label';
import clsx from 'clsx';

export const BaseCard = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={clsx(
      'relative w-full p-2 pl-6 rounded-lg bg-secondaryBg ',
      className
    )}
  >
    {children}
    <div className="absolute top-0 left-0 w-1.5 h-full rounded-sm bg-brand" />
  </div>
);

const ProjectCard = ({ name, headline, slug, buildWith }: Project) => (
  <BaseCard>
    <Link href={`/projects/${slug}`}>
      <a className="">
        <div className="text-xl"> {name}</div>
        <div>{headline}</div>
        <div className="flex mt-1 space-x-2">
          {buildWith.map(({ type }) => (
            <Label variant="default" key={type}>
              <div className="text-sm">{type}</div>
            </Label>
          ))}
        </div>
      </a>
    </Link>
  </BaseCard>
);

export default ProjectCard;
