import * as S from '../Card.styled';
import Card from '../Card/Card';
import InputBlock from '../InputBlock/InputBlock';
import { Upload } from 'antd';

import { useState } from 'react';
import type { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

function FormPersonalInfo() {
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
    <button style={{ border: 0, background: 'none' }} type="button">
      <div style={{ marginTop: 8 }}>Выберите ваш аватар</div>
    </button>
  );

  return (
    <Card title="Персональная информация">
      <InputBlock title="Персональная информация"></InputBlock>
      <InputBlock title="Место жительства"></InputBlock>
      <InputBlock title="Номер телефона"></InputBlock>
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
}

export default FormPersonalInfo;
