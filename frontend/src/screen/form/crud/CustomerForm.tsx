// Use.
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { CustomerFormValidator, postItem } from '../../../util';
import { Customer } from '../../../type';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmit,
  Text,
} from '../../../ui';

/**
 * Provide screen CustomerForm.
 */
const CustomerForm = () => {
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

  const { mutate, isSuccess, isError } = useMutation(
    async (values: Customer) => {
      await postItem('/customers', values);
    }
  );

  return (
    <div>
      {isSuccess && <p>SUCCES</p>}
      {isError && <p>ERROR</p>}
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="name">
          <Text variant="h4">Nom</Text>
          <StyledInput
            id="name"
            type="text"
            isValid={formik.touched.name ? !formik.errors.name : null}
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <Text>{formik.errors.name}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="surname">
          <Text variant="h4">Nom</Text>
          <StyledInput
            id="surname"
            type="text"
            isValid={formik.touched.surname ? !formik.errors.surname : null}
            {...formik.getFieldProps('surname')}
          />
          {formik.touched.surname && formik.errors.surname && (
            <Text>{formik.errors.surname}</Text>
          )}
        </StyledLabel>
        <StyledSubmit
          type="submit"
          value="Envoyer"
          isValid={
            formik.touched.name &&
            !formik.errors.name &&
            formik.touched.surname &&
            !formik.errors.surname
              ? true
              : null
          }
        />
      </StyledForm>
    </div>
  );
};

export { CustomerForm };
