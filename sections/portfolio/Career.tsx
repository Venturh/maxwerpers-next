import useTranslation from 'next-translate/useTranslation';
import { CareerCard, SectionHeader } from 'components';
import { Career as CareerType, career } from 'content';

const Career = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('portfolio:experience')}
        subtitle={t('portfolio:experienceSub')}
      />
      <ul className="w-full divide-y divide-accentBg md:divide-y-0">
        {career.map((c: CareerType, index) => (
          <CareerCard
            key={index}
            last={index === career.length - 1}
            career={c}
          />
        ))}
      </ul>
    </div>
  );
};

export default Career;