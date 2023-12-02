import {
  FormikConfig,
  FormikValues,
  useFormik as useOriginalHook,
} from 'formik';
import React, { useState } from 'react';

type Props<Values> = {
  initialValues: FormikConfig<Values>['initialValues'];
  onSubmit: FormikConfig<Values>['onSubmit'];
  validationSchema: FormikConfig<Values>['validationSchema'];
};

export const useFormik = <Values extends FormikValues = FormikValues>(
  props: Props<Values>
) => {
  const [validateOnChange, setValidateOnChange] = useState(false);

  const formik = useOriginalHook<Values>({
    validateOnChange,
    ...props,
    onSubmit: props.onSubmit,
  });

  return {
    ...formik,
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => {
      formik.handleSubmit(e);
      setValidateOnChange(true);
    },
  };
};
