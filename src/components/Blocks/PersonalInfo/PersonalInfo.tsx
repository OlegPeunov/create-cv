import * as S from '../BlockComponents/BlockStyles/Block.styled';
import { message, Upload } from 'antd';

import { useState } from 'react';
import type { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

function FormPersonalInfo() {
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = info => {
    if (info.file.status === 'uploading') {
      return;
    }
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
    <>
      <S.BlockTitle>Персональная информация</S.BlockTitle>
      <S.Block>
        <S.EntryTitle>Фио</S.EntryTitle>
        <S.StyledInput placeholder="Фио" />
        <S.EntryTitle>Место жительства</S.EntryTitle>
        <S.StyledInput placeholder="Место жительства" />
        <S.EntryTitle>Номер телефона</S.EntryTitle>
        <S.StyledInput placeholder="Номер телефона" />
        <S.EntryTitle>Дата рождения</S.EntryTitle>
        <S.StyledDatePicker placeholder="День рождения" />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </S.Block>
    </>
  );
}

export default FormPersonalInfo;
