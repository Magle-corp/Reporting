// Use.
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useAppContext } from '../../../context';
import { CustomerFormValidator, postItem } from '../../../util';
import { Context, Customer } from '../../../type';
import { ActionsFeedBack } from '../../../component';
import { Container, Form, Input, Label, Submit, Text } from '../../../ui';

/**
 * Provide screen CustomerForm.
 */
const CustomerForm = () => {
  const { screen } = useAppContext() as Context;

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
    },
    validationSchema: CustomerFormValidator,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const { mutate, isSuccess, reset } = useMutation(async (values: Customer) => {
    await postItem('/customers', values);
  });

  return (
    <Container spacing={50} direction="vertical" center={true}>
      <Text variant="h3">{screen.label}</Text>
      {isSuccess && <ActionsFeedBack isValid={true} />}
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="name">
          <Text variant="h4">Nom</Text>
          <Input
            id="name"
            type="text"
            isValid={formik.touched.name ? !formik.errors.name : null}
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <Text>{formik.errors.name}</Text>
          )}
        </Label>
        <Label htmlFor="surname">
          <Text variant="h4">Prénom</Text>
          <Input
            id="surname"
            type="text"
            isValid={formik.touched.surname ? !formik.errors.surname : null}
            {...formik.getFieldProps('surname')}
          />
          {formik.touched.surname && formik.errors.surname && (
            <Text>{formik.errors.surname}</Text>
          )}
        </Label>
        <Submit
          type="submit"
          value="Créer"
          isValid={
            formik.touched.name &&
            !formik.errors.name &&
            formik.touched.surname &&
            !formik.errors.surname
          }
        />
      </Form>
    </Container>
  );
};

export { CustomerForm };
