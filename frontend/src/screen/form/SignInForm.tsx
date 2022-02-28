// Use.
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useAppContext } from '../../context';
import { SignInFormValidator, postItem } from '../../util';
import { User, Context } from '../../type';
import { Form, Label, Input, Submit, Text, Container } from '../../ui';

/**
 * Provide screen SignInForm.
 */
const SignInForm = () => {
  const { screen } = useAppContext() as Context;

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignInFormValidator,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const { mutate, reset } = useMutation(async (values: User) => {
    // await postItem('/login', values);
    console.log(values);
    reset();
  });

  return (
    <Container spacing={50} direction="vertical" center={true}>
      <Text variant="h3">{screen.label}</Text>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="username">
          <Text variant="h4">Identifiant</Text>
          <Input
            id="username"
            type="text"
            isValid={formik.touched.username ? !formik.errors.username : null}
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username && (
            <Text variant="p">{formik.errors.username}</Text>
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
            <Text variant="p">{formik.errors.password}</Text>
          )}
        </Label>
        <Submit
          type="submit"
          value="Se connecter"
          isValid={
            formik.touched.username &&
            !formik.errors.username &&
            formik.touched.password &&
            !formik.errors.password
          }
        />
      </Form>
    </Container>
  );
};

export { SignInForm };
