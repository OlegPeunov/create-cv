import * as S from './PersonalInfo.styled';
import { Card } from '../Card/Card';
import { Input } from '../Input/Input';
import { Upload } from 'antd';

import { useState } from 'react';
import type { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const FormPersonalInfo = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = info => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, url => {
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <S.ButtonUpload type="button">
      <S.ButtonText>Выберите ваш аватар</S.ButtonText>
    </S.ButtonUpload>
  );

  return (
    <Card title="Персональная информация">
      <Input title="Персональная информация" />
      <Input title="Место жительства" />
      <Input title="Номер телефона" />
      <S.EntryTitle>Дата рождения</S.EntryTitle>
      <S.StyledDatePicker placeholder="День рождения" />
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={() => false}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Card>
  );
};
