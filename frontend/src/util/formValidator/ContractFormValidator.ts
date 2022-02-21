// Use.
import * as Yup from 'yup';

/**
 * Formik + Yup validator schema form Contract form.
 */
const ContractFormValidator = Yup.object({
  customerId: Yup.string().required('champ requis'),
  contractTypeId: Yup.string().required('champ requis'),
  description: Yup.string()
    .min(3, 'minimum 3 caractères')
    .max(40, 'maximum 40 caractères')
    .required('champ requis'),
  rate: Yup.number()
    .min(0, 'minimum 0')
    .max(100, 'maximum 100')
    .positive()
    .required('champ requis'),
});

export { ContractFormValidator };
