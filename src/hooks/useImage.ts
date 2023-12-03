import React from 'react';

import { Attachments, FileLabel } from 'src/types';
import { resizeImage } from 'src/utils/lib';

export type Files = Attachments['files'];

export const useImage = (
  cb: (currentLabel: FileLabel, file?: File) => void
) => {
  const uploadImage = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentLabel: FileLabel
  ) => {
    const file = event.target.files?.[0];

    event.target.value = '';

    if (!file) {
      return;
    }

    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      resizeImage(file).then((resizeImage) => cb(currentLabel, resizeImage));

      return;
    }

    cb(currentLabel, file);
  };

  const deleteImage = (currentLabel: FileLabel) => console.log(currentLabel);

  return {
    uploadImage,
    deleteImage,
  };
};
