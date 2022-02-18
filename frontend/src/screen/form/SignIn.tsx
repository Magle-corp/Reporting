// Use.
import { useFormik } from 'formik';
import { SignInValidator } from '../../util';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSubmit,
  Text,
} from '../../ui';

/**
 * Provide screen SignIn.
 */
const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      id: '',
      password: '',
    },
    validationSchema: SignInValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="id">
          <Text variant="h4">Identifiant</Text>
          <StyledInput
            id="id"
            type="text"
            isValid={formik.touched.id ? !formik.errors.id : null}
            {...formik.getFieldProps('id')}
          />
          {formik.touched.id && formik.errors.id && (
            <Text>{formik.errors.id}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="password">
          <Text variant="h4">Mot de passe</Text>
          <StyledInput
            id="password"
            type="password"
            isValid={formik.touched.password ? !formik.errors.password : null}
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <Text>{formik.errors.password}</Text>
          )}
        </StyledLabel>
        <StyledSubmit
          type="submit"
          value="Envoyer"
          isValid={
            formik.touched.id &&
            !formik.errors.id &&
            formik.touched.password &&
            !formik.errors.password
              ? true
              : null
          }
        />
      </StyledForm>
    </div>
  );
};

export { SignIn };
