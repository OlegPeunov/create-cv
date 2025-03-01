import { StyledDatePicker } from './DatePicker.styled';
import { DatePickerProps } from 'antd';

export const DatePicker: React.FC<DatePickerProps> = props => {
  return (
    <StyledDatePicker
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
