import { useState } from 'react';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { ExperianceItem } from './ExperianceItem/ExperianceItem';
import { ExpType } from '../../../types/types';

export const FormExperiance: React.FC = () => {
  const [experianceForms, setExperianceForms] = useState<Array<ExpType>>([
    { id: new Date().toISOString(), deletable: false },
  ]);

  const handleAddForm = () => {
    setExperianceForms(prevForms => [
      ...prevForms,
      { id: new Date().toISOString(), deletable: experianceForms.length > 0 },
    ]);
  };

  const handleFormRemove = (id: string) => {
    setExperianceForms(prevForms => prevForms.filter(form => form.id !== id));
  };

  return (
    <Card title="Опыт работы">
      {experianceForms.map((el, i) => (
        <ExperianceItem
          id={el.id}
          deletable={el.deletable}
          key={el.id}
          num={i + 1}
          onFormRemove={handleFormRemove}
        />
      ))}
      <Button text="Добавить еще" onClick={handleAddForm}></Button>
    </Card>
  );
};
