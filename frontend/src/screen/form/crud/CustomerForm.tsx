// Use.
import { MouseEvent } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useAppContext } from '../../../context';
import {
  CustomerFormValidator,
  getScreensByRoute,
  postItem,
} from '../../../util';
import { Context, Customer } from '../../../type';
import { ActionsFeedBack } from '../../../component';
import { Container, Form, Input, Label, Submit, Text } from '../../../ui';

/**
 * Provide screen CustomerForm.
 */
const CustomerForm = () => {
  const { screen, setScreen, authorizedScreens } = useAppContext() as Context;

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

  const handleSave = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    formik.handleSubmit();
    reset();
    setScreen(getScreensByRoute(screen, authorizedScreens, ['overview'])[0]);
  };

  const handleSaveContinue = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    formik.handleSubmit();
    setTimeout(() => reset(), 4000);
  };

  return (
    <Container spacing={50} direction="vertical">
      <Text variant="h3">{screen.label}</Text>
      {isSuccess && <ActionsFeedBack isValid={true} />}
      <Form>
        <Label htmlFor="name">
          <Text variant="h4">Nom</Text>
          <Input
            id="name"
            type="text"
            isValid={formik.touched.name ? !formik.errors.name : null}
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <Text variant="p">{formik.errors.name}</Text>
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
            <Text variant="p">{formik.errors.surname}</Text>
          )}
        </Label>
        <Container direction="horizontal" spacing={20}>
          <Submit
            type="submit"
            value="Créer et continuer"
            onClick={handleSaveContinue}
            isValid={
              formik.touched.name &&
              !formik.errors.name &&
              formik.touched.surname &&
              !formik.errors.surname
            }
          />
          <Submit
            type="submit"
            value="Créer"
            onClick={handleSave}
            isValid={
              formik.touched.name &&
              !formik.errors.name &&
              formik.touched.surname &&
              !formik.errors.surname
            }
          />
        </Container>
      </Form>
    </Container>
  );
};

export { CustomerForm };
