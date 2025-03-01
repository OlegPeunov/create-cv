import * as S from './Skills.styled';
import { Card } from '../../Card/Card';
import { FormItem } from '../../FormItem/FormItem';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const selectOptions = [
  { value: 'View', label: 'View' },
  { value: 'Typescript', label: 'Typescript' },
  { value: 'Sass/Scss', label: 'Sass/Scss' },
  { value: 'Styled components', label: 'Styled components' },
  { value: 'Material UI', label: 'Material UI' },
  { value: 'Webpack', label: 'Webpack' },
  { value: 'Rest API', label: 'Rest API' },
  { value: 'Vite', label: 'Vite' },
  { value: 'View', label: 'View' },
  { value: 'Angular', label: 'Angular' },
  { value: 'React', label: 'React' },
];

export const FormSkills: React.FC = () => {
  return (
    <Card title="Навыки">
      <FormItem title="Навыки">
        <S.select
          mode="tags"
          allowClear
          onChange={handleChange}
          placeholder="Выберите навыки"
          options={selectOptions}
        />
      </FormItem>
    </Card>
  );
};
