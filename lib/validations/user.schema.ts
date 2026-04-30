import * as Yup from 'yup';

export const userSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Minimum 2 characters'),
  role: Yup.string().required('Role is required'),
});

export const userUpdateSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Minimum 2 characters'),
  role: Yup.string().required('Role is required'),
});

export const userCreateSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Minimum 2 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Minimum 6 characters'),
  role: Yup.string().required('Role is required'),
});
