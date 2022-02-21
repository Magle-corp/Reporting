// Use.
import { useQuery } from 'react-query';
import { useFormik } from 'formik';
import { getItems } from '../../../util/fetcher';
import { ContractFormValidator } from '../../../util';
import { Customer, ContractTypes } from '../../../type';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledSubmit,
  Text,
} from '../../../ui';

/**
 * Provide screen ContractForm.
 */
const ContractForm = () => {
  const formik = useFormik({
    initialValues: {
      customer: '',
      contractType: '',
      description: '',
      rate: '',
    },
    validationSchema: ContractFormValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { data: dataCustomers } = useQuery('customers', () =>
    getItems('/customers')
  );
  const customers = (dataCustomers?.data as Customer[]) || [];

  const { data: dataContractTypes } = useQuery('contract_types', () =>
    getItems('/contract_types')
  );
  const contractTypes = (dataContractTypes?.data as ContractTypes[]) || [];

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
        <StyledLabel htmlFor="contractType">
          <Text variant="h4">Type de contract</Text>
          <StyledSelect
            id="contractType"
            isValid={
              formik.touched.contractType ? !formik.errors.contractType : null
            }
            {...formik.getFieldProps('contractType')}
          >
            <option value="default">selectionner un type de contrat</option>
            {contractTypes.map((contractType) => (
              <option
                key={contractType.title + '_' + Math.random() * 10}
                value={contractType.id}
              >
                {contractType.title} - {contractType.description}
              </option>
            ))}
          </StyledSelect>
          {formik.touched.contractType && formik.errors.contractType && (
            <Text>{formik.errors.contractType}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="description">
          <Text variant="h4">Description</Text>
          <StyledInput
            id="description"
            type="text"
            isValid={
              formik.touched.description ? !formik.errors.description : null
            }
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description && (
            <Text>{formik.errors.description}</Text>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="rate">
          <Text variant="h4">Salaire</Text>
          <StyledInput
            id="rate"
            type="number"
            isValid={formik.touched.rate ? !formik.errors.rate : null}
            {...formik.getFieldProps('rate')}
          />
          {formik.touched.rate && formik.errors.rate && (
            <Text>{formik.errors.rate}</Text>
          )}
        </StyledLabel>
        <StyledSubmit
          type="submit"
          value="Envoyer"
          isValid={
            formik.touched.customer &&
            !formik.errors.customer &&
            formik.touched.contractType &&
            !formik.errors.contractType &&
            formik.touched.description &&
            !formik.errors.description &&
            formik.touched.rate &&
            !formik.errors.rate
              ? true
              : null
          }
        />
      </StyledForm>
    </div>
  );
};

export { ContractForm };
