// Use.
import { useFormik } from 'formik';
import { SignInFormValidator } from '../../util';
import { Form, Label, Input, Submit, Text } from '../../ui';

/**
 * Provide screen SignInForm.
 */
const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      id: '',
      password: '',
    },
    validationSchema: SignInFormValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="id">
          <Text variant="h4">Identifiant</Text>
          <Input
            id="id"
            type="text"
            isValid={formik.touched.id ? !formik.errors.id : null}
            {...formik.getFieldProps('id')}
          />
          {formik.touched.id && formik.errors.id && (
            <Text>{formik.errors.id}</Text>
          )}
        </Label>
        <Label htmlFor="password">
          <Text variant="h4">Mot de passe</Text>
          <Input
            id="password"
            type="password"
            isValid={formik.touched.password ? !formik.errors.password : null}
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <Text>{formik.errors.password}</Text>
          )}
        </Label>
        <Submit
          type="submit"
          value="Envoyer"
          isValid={
            formik.touched.id &&
            !formik.errors.id &&
            formik.touched.password &&
            !formik.errors.password
          }
        />
      </Form>
    </div>
  );
};

export { SignInForm };
