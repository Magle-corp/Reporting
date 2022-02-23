// Use.
import * as Yup from 'yup';

/**
 * Formik + Yup validator schema form Intervention form.
 */
const InterventionFormValidator = Yup.object({
  customerId: Yup.string().required('champ requis'),
  contractId: Yup.string().required('champ requis'),
  date: Yup.date().required('champ requis'),
  quantity: Yup.number()
    .min(0, 'minimum 0')
    .max(100, 'maximum 100 caractères')
    .positive()
    .required('champ requis'),
});

export { InterventionFormValidator };
