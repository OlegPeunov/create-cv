import * as S from './Education.styled';
import { Card } from '../../Card/Card';
import { FormItem } from '../../FormItem/FormItem';
import { Input } from '../../Input/Input';
import { DatePicker } from '../../DatePicker/DatePicker';
import { educationSlice } from '../../../store/reducers/EducationSlice';
import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import dayjs, { Dayjs } from 'dayjs';

export const FormEducation: React.FC = () => {
  const { setInputInstitution, setGraduationDate, setDegree } =
    educationSlice.actions;
  const dispatch = useAppDispatch();

  const handleChangeInstitution = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputInstitution(event.target.value));
  };

  const handleDegreeChange = (value: string) => {
    dispatch(setDegree(String(value)));
  };

  return (
    <Card title="Образование">
      <FormItem title="Учреждение">
        <Input placeholder="Учреждение" onChange={handleChangeInstitution} />
      </FormItem>
      <FormItem title="Дата окончания">
        <DatePicker
          placeholder="Дата окончания"
          onChange={(date: Dayjs) =>
            dispatch(setGraduationDate(`${dayjs(date).format('DD.MM.YYYY')}`))
          }
        />
      </FormItem>
      <FormItem title="Степень">
        <S.select
          defaultValue="Бакалавр"
          onChange={handleDegreeChange}
          options={[
            { value: 'Бакалавр', label: 'Бакалавр' },
            { value: 'Магистратура', label: 'Магистратура' },
          ]}
        />
      </FormItem>
    </Card>
  );
};
