// Use.
import * as Yup from 'yup';

const SignInFormValidator = Yup.object({
  id: Yup.string()
    .min(3, 'minimum 3 caractères')
    .max(25, 'maximum 25 caractères')
    .required('champ requis'),
  password: Yup.string()
    .min(3, 'minimum 3 caractères')
    .max(40, 'maximum 40 caractères')
    .required('champ requis'),
});

export { SignInFormValidator };
