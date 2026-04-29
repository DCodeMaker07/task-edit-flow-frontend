import * as Yup from 'yup';

export const projectSchema = Yup.object({
  name: Yup.string()
    .required('Project name is required')
    .min(3, 'Minimum 3 characters'),
  description: Yup.string().optional(),
  status: Yup.string().required(),
});