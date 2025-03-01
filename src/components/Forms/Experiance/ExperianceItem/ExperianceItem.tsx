import * as S from './ExperianceItem.styled';

import { FormItem } from '../../../FormItem/FormItem';
import { Input } from '../../../Input/Input';
import { DeleteOutlined } from '@ant-design/icons';

import { TextArea } from '../../../TextArea/TextArea';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

type ItemType = {
  id: string;
  deletable: boolean;
  num: number;
  onFormRemove: (id: string) => void;
};

export const ExperianceItem: React.FC<ItemType> = ({
  id,
  deletable,
  num,
  onFormRemove,
}) => {
  return (
    <S.Form>
      <S.StyledWorkplace>
        <S.StyledText>Место работы - {num}</S.StyledText>
        {deletable ? <DeleteOutlined onClick={() => onFormRemove(id)} /> : ''}
      </S.StyledWorkplace>
      <FormItem title="Компания">
        <Input placeholder="Компания" />
      </FormItem>
      <FormItem title="Должность">
        <Input placeholder="Должность" />
      </FormItem>
      <FormItem title="Преиод работы">
        <RangePicker placeholder={['Начало', 'Конец']} />
      </FormItem>
      <FormItem title="Описание">
        <TextArea />
      </FormItem>
    </S.Form>
  );
};
