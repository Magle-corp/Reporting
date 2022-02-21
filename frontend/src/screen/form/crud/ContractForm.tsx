// Use.
import { useFormik } from 'formik';
import { useQuery, useMutation } from 'react-query';
import { ContractFormValidator, getItems, postItem } from '../../../util';
import { Contract, Customer, ContractType } from '../../../type';
import { ActionsFeedBack } from '../../../component';
import {
  StyledContainer,
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
      customerId: '',
      contractTypeId: '',
      description: '',
      rate: '',
    },
    validationSchema: ContractFormValidator,
    onSubmit: (values) => {
      values.rate = values.rate.toString();
      mutate(values);
    },
  });

  const { mutate, isSuccess, reset } = useMutation(async (values: Contract) => {
    await postItem('/contracts', values);
  });

  const { data: dataCustomers } = useQuery('customers', () =>
    getItems('/customers')
  );
  const customers = (dataCustomers?.data as Customer[]) || [];

  const { data: dataContractTypes } = useQuery('contract_types', () =>
    getItems('/contract_types')
  );
  const contractTypes = (dataContractTypes?.data as ContractType[]) || [];

  return (
    <StyledContainer spacing="30px">
      {isSuccess && <ActionsFeedBack isValid={true} />}
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
        <StyledLabel htmlFor="contractTypeId">
          <Text variant="h4">Type de contract</Text>
          <StyledSelect
            id="contractTypeId"
            isValid={
              formik.touched.contractTypeId
                ? !formik.errors.contractTypeId
                : null
            }
            {...formik.getFieldProps('contractTypeId')}
          >
            <option value="default">selectionner un type de contrat</option>
            {contractTypes.map((contractType) => (
              <option
                key={contractType.title + '_' + Math.random() * 10}
                value={`/api/contract_types/${contractType.id}`}
              >
                {contractType.title} - {contractType.description}
              </option>
            ))}
          </StyledSelect>
          {formik.touched.contractTypeId && formik.errors.contractTypeId && (
            <Text>{formik.errors.contractTypeId}</Text>
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
            formik.touched.customerId &&
            !formik.errors.customerId &&
            formik.touched.contractTypeId &&
            !formik.errors.contractTypeId &&
            formik.touched.description &&
            !formik.errors.description &&
            formik.touched.rate &&
            !formik.errors.rate
          }
        />
      </StyledForm>
    </StyledContainer>
  );
};

export { ContractForm };
