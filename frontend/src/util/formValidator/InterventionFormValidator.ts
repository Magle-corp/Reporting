// Use.
import * as Yup from 'yup';

const InterventionFormValidator = Yup.object({
  customer: Yup.string().required('champ requis'),
  contract: Yup.string().required('champ requis'),
  date: Yup.date().required('champ requis'),
  quantity: Yup.number()
    .min(0, 'minimum 0')
    .max(100, 'maximum 100 caractères')
    .positive()
    .required('champ requis'),
});

export { InterventionFormValidator };
