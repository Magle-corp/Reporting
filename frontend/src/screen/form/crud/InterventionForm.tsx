// Use.
import { useFormik } from 'formik';
import { InterventionFormValidator } from '../../../util';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledSubmit,
  Text,
} from '../../../ui';
import { useQuery } from 'react-query';
import { getItems } from '../../../util/fetcher';
import { Customer, Contract } from '../../../type';

/**
 * Provide screen InterventionForm.
 */
const InterventionForm = () => {
  const formik = useFormik({
    initialValues: {
      customer: '',
      contract: '',
      date: '',
      quantity: '',
    },
    validationSchema: InterventionFormValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { data: dataCustomers } = useQuery('customers', () =>
    getItems('/customers')
  );
  const customers = (dataCustomers?.data as Customer[]) || [];

  const { data: dataContracts } = useQuery('contracts', () =>
    getItems('/contracts')
  );
  const contracts = (dataContracts?.data as Contract[]) || [];

  return (
    <div>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="customer">
          <Text variant="h4">Client</Text>
          <StyledSelect
            id="customer"
            isValid={formik.touched.customer ? !formik.errors.customer : null}
            {...formik.getFieldProps('customer')}
          >
            <option value="default">selectionner un client</option>
            {customers.map((customer) => (
              <option
                key={customer.name + '_' + Math.random() * 10}
                value={customer.id}
                label={customer.name}
              >
                {customer.name} {customer.surname}
              </option>
            ))}
          </StyledSelect>
          {formik.touched.customer && formik.errors.customer && (
            <Text>{formik.errors.customer}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="contract">
          <Text variant="h4">Client</Text>
          <StyledSelect
            id="contract"
            isValid={formik.touched.contract ? !formik.errors.contract : null}
            {...formik.getFieldProps('contract')}
          >
            <option value="default">selectionner un client</option>
            {contracts.map((contract) => (
              <option
                key={contract.description + '_' + Math.random() * 10}
                value={contract.id}
                label={contract.description}
              >
                {contract.description}
              </option>
            ))}
          </StyledSelect>
          {formik.touched.contract && formik.errors.contract && (
            <Text>{formik.errors.contract}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="date">
          <Text variant="h4">Date</Text>
          <StyledInput
            id="date"
            type="date"
            isValid={formik.touched.date ? !formik.errors.date : null}
            {...formik.getFieldProps('date')}
          />
          {formik.touched.date && formik.errors.date && (
            <Text>{formik.errors.date}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="quantity">
          <Text variant="h4">Quantité</Text>
          <StyledInput
            id="quantity"
            type="number"
            isValid={formik.touched.quantity ? !formik.errors.quantity : null}
            {...formik.getFieldProps('quantity')}
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <Text>{formik.errors.quantity}</Text>
          )}
        </StyledLabel>
        <StyledSubmit
          type="submit"
          value="Envoyer"
          isValid={
            formik.touched.customer &&
            !formik.errors.customer &&
            formik.touched.contract &&
            !formik.errors.contract &&
            formik.touched.date &&
            !formik.errors.date &&
            formik.touched.quantity &&
            !formik.errors.quantity
              ? true
              : null
          }
        />
      </StyledForm>
    </div>
  );
};

export { InterventionForm };
