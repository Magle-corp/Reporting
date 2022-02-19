// Use.
import { useQuery } from 'react-query';
import { useFormik } from 'formik';
import { getItems } from '../../../util/fetcher';
import { SignInValidator } from '../../../util';
import { Customer } from '../../../type';
import { StyledForm, StyledLabel, StyledSelect, Text } from '../../../ui';

/**
 * Provide screen ContractForm.
 */
const ContractForm = () => {
  const formik = useFormik({
    initialValues: {
      customer: '',
    },
    validationSchema: SignInValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { data } = useQuery('customers', () => getItems('/customers'));
  const customers = (data?.data as Customer[]) || [];

  return (
    <div>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="customer">
          <Text variant="h4">Client</Text>
          <StyledSelect id="customer">
            <option value="default">selectionner un client</option>
            {customers.map((customer) => (
              <option
                key={customer.name + '_' + Math.random() * 10}
                value={customer.id}
              >
                {customer.name} {customer.surname}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        {/*{formik.values.customer && (*/}
        {/*  <StyledLabel htmlFor="customer">*/}
        {/*    <Text variant="h4">Client</Text>*/}
        {/*    <StyledSelect id="customer">*/}
        {/*      <option value="default">selectionner un client</option>*/}
        {/*      {customers.map((customer) => (*/}
        {/*        <option*/}
        {/*          key={customer.name + '_' + Math.random() * 10}*/}
        {/*          value={customer.id}*/}
        {/*        >*/}
        {/*          {customer.name} {customer.surname}*/}
        {/*        </option>*/}
        {/*      ))}*/}
        {/*    </StyledSelect>*/}
        {/*  </StyledLabel>*/}
        {/*)}*/}
        {/*<StyledSubmit*/}
        {/*  type="submit"*/}
        {/*  value="Envoyer"*/}
        {/*  isValid={*/}
        {/*    formik.touched.id &&*/}
        {/*    !formik.errors.id &&*/}
        {/*    formik.touched.password &&*/}
        {/*    !formik.errors.password*/}
        {/*      ? true*/}
        {/*      : null*/}
        {/*  }*/}
        {/*/>*/}
      </StyledForm>
    </div>
  );
};

export { ContractForm };
