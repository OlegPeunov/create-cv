import * as S from './PersonalInfo.styled';
import { Card } from '../../Card/Card';
import { FormItem } from '../../FormItem/FormItem';
import { Input } from '../../Input/Input';
import { DatePicker } from '../../DatePicker/DatePicker';
import { Upload } from 'antd';
import { useState, ChangeEvent } from 'react';
import type { GetProp, UploadProps } from 'antd';
import { personalInfoSlice } from '../../../store/reducers/PersonalInfoSlice';
import { useAppDispatch } from '../../../hooks/redux';
import dayjs, { Dayjs } from 'dayjs';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const FormPersonalInfo: React.FC = () => {
  const {
    setInputName,
    setInputLocation,
    setInputPhone,
    setBirthday,
    setAvatar,
  } = personalInfoSlice.actions;
  const [previewImage, setPreviewImage] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChange: UploadProps['onChange'] = async info => {
    getBase64(info.file as FileType, url => {
      setPreviewImage(url);
      dispatch(setAvatar(url));
    });
  };

  const uploadButton = (
    <S.ButtonUpload type="button">
      {previewImage === '' ? (
        <S.ButtonText>Выберите ваш аватар</S.ButtonText>
      ) : (
        <S.AvatarPreview src={previewImage} alt="your avatar" />
      )}
    </S.ButtonUpload>
  );

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputName(event.target.value));
  };

  const handleChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputLocation(event.target.value));
  };

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputPhone(event.target.value));
  };

  return (
    <Card title="Персональная информация">
      <FormItem title="ФИО">
        <Input placeholder="ФИО" onChange={handleChangeName} />
      </FormItem>
      <FormItem title="Место жительства">
        <Input placeholder="Место жительства" onChange={handleChangeLocation} />
      </FormItem>
      <FormItem title="Номер телефона">
        <Input placeholder="Номер телефона" onChange={handleChangePhone} />
      </FormItem>
      <FormItem title="Дата рождения">
        <DatePicker
          placeholder="День рождения"
          onChange={(date: Dayjs) =>
            dispatch(setBirthday(`${dayjs(date).format('DD.MM.YYYY')}`))
          }
        />
      </FormItem>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={() => false}
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
    </Card>
  );
};


