import * as S from './PersonalInfo.styled';
import { Card } from '../Card/Card';
import { FormItem } from '../FormItem/FormItem';
import { Input } from '../Input/Input';
import { Upload, DatePicker } from 'antd';

import { useState } from 'react';
import type { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const FormPersonalInfo = () => {
  const [previewImage, setPreviewImage] = useState<string>('');

  const handleChange: UploadProps['onChange'] = async info => {
    getBase64(info.file as FileType, url => {
      setPreviewImage(url);
    });
  };

  const uploadButton = (
    <S.ButtonUpload type="button">
      {previewImage === '' ? (
        <S.ButtonText>Выберите ваш аватар</S.ButtonText>
      ) : (
        (console.log(previewImage),
        (<S.AvatarPreview src={previewImage} alt="your avatar" />))
      )}
    </S.ButtonUpload>
  );

  return (
    <Card title="Персональная информация">
      <FormItem title="Персональная информация">
        <Input placeholder="Персональная информация" />
      </FormItem>
      <FormItem title="Место жительства">
        <Input placeholder="Место жительства" />
      </FormItem>
      <FormItem title="Номер телефона">
        <Input placeholder="Номер телефона" />
      </FormItem>
      <FormItem title="Дата рождения">
        <DatePicker placeholder="День рождения" />
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
