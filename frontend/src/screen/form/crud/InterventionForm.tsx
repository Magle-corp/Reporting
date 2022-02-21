// Use.
import { useFormik } from 'formik';
import { useQuery, useMutation } from 'react-query';
import { InterventionFormValidator, getItems, postItem } from '../../../util';
import { Intervention, Customer, Contract } from '../../../type';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledSubmit,
  Text,
} from '../../../ui';

/**
 * Provide screen InterventionForm.
 */
const InterventionForm = () => {
  const formik = useFormik({
    initialValues: {
      customerId: '',
      contractId: '',
      date: '',
      quantity: '',
    },
    validationSchema: InterventionFormValidator,
    onSubmit: (values) => {
      values.quantity = values.quantity.toString();
      mutate(values);
      reset();
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

  const { mutate, isSuccess, isError, reset } = useMutation(
    async (values: Intervention) => {
      await postItem('/interventions', values);
    }
  );

  return (
    <div>
      {isSuccess && <p>SUCCES</p>}
      {isError && <p>ERROR</p>}
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="customerId">
          <Text variant="h4">Client</Text>
          <StyledSelect
            id="customerId"
            isValid={
              formik.touched.customerId ? !formik.errors.customerId : null
            }
            {...formik.getFieldProps('customerId')}
          >
            <option value="default">selectionner un client</option>
            {customers.map((customer) => (
              <option
                key={customer.name + '_' + Math.random() * 10}
                value={`/api/customers/${customer.id}`}
                label={customer.name}
              >
                {customer.name} {customer.surname}
              </option>
            ))}
          </StyledSelect>
          {formik.touched.customerId && formik.errors.customerId && (
            <Text>{formik.errors.customerId}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="contractId">
          <Text variant="h4">Client</Text>
          <StyledSelect
            id="contractId"
            isValid={
              formik.touched.contractId ? !formik.errors.contractId : null
            }
            {...formik.getFieldProps('contractId')}
          >
            <option value="default">selectionner un client</option>
            {contracts.map((contract) => (
              <option
                key={contract.description + '_' + Math.random() * 10}
                value={`/api/contracts/${contract.id}`}
                label={contract.description}
              >
                {contract.description}
              </option>
            ))}
          </StyledSelect>
          {formik.touched.contractId && formik.errors.contractId && (
            <Text>{formik.errors.contractId}</Text>
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
            formik.touched.customerId &&
            !formik.errors.customerId &&
            formik.touched.contractId &&
            !formik.errors.contractId &&
            formik.touched.date &&
            !formik.errors.date &&
            formik.touched.quantity &&
            !formik.errors.quantity
          }
        />
      </StyledForm>
    </div>
  );
};

export { InterventionForm };
