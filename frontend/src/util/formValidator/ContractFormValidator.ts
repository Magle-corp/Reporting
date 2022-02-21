// Use.
import * as Yup from 'yup';

const ContractFormValidator = Yup.object({
  customer: Yup.string().required('champ requis'),
  contractType: Yup.string().required('champ requis'),
  description: Yup.string()
    .min(3, 'minimum 3 caractères')
    .max(40, 'maximum 40 caractères')
    .required('champ requis'),
  rate: Yup.number()
    .min(0, 'minimum 0')
    .max(100, 'maximum 100 caractères')
    .positive()
    .required('champ requis'),
});

export { ContractFormValidator };
