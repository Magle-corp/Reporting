// Use.
import { MouseEvent } from 'react';
import { useFormik } from 'formik';
import { useQuery, useMutation } from 'react-query';
import { useAppContext } from '../../../context';
import {
  ContractFormValidator,
  getItems,
  postItem,
  getScreensByRouteAndArgs,
} from '../../../util';
import { Contract, Customer, ContractType, Context } from '../../../type';
import { ActionsFeedBack } from '../../../component';
import {
  Container,
  Form,
  Input,
  Label,
  Select,
  Submit,
  Text,
} from '../../../ui';

/**
 * Provide screen ContractForm.
 */
const ContractForm = () => {
  const { screen, setScreen, authorizedScreens } = useAppContext() as Context;

  const { data: dataCustomers } = useQuery('customers', () =>
    getItems('/customers')
  );
  const customers = (dataCustomers?.data as Customer[]) || [];

  const { data: dataContractTypes } = useQuery('contract_types', () =>
    getItems('/contract_types')
  );
  const contractTypes = (dataContractTypes?.data as ContractType[]) || [];

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

  const handleSave = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    formik.handleSubmit();
    reset();
    setScreen(
      getScreensByRouteAndArgs(screen, authorizedScreens, ['overview'])[0]
    );
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
        <Label htmlFor="customerId">
          <Text variant="h4">Client</Text>
          <Select
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
          </Select>
          {formik.touched.customerId && formik.errors.customerId && (
            <Text variant="p">{formik.errors.customerId}</Text>
          )}
        </Label>
        <Label htmlFor="contractTypeId">
          <Text variant="h4">Type de contract</Text>
          <Select
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
          </Select>
          {formik.touched.contractTypeId && formik.errors.contractTypeId && (
            <Text variant="p">{formik.errors.contractTypeId}</Text>
          )}
        </Label>
        <Label htmlFor="description">
          <Text variant="h4">Description</Text>
          <Input
            id="description"
            type="text"
            isValid={
              formik.touched.description ? !formik.errors.description : null
            }
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description && (
            <Text variant="p">{formik.errors.description}</Text>
          )}
        </Label>
        <Label htmlFor="rate">
          <Text variant="h4">Salaire</Text>
          <Input
            id="rate"
            type="number"
            isValid={formik.touched.rate ? !formik.errors.rate : null}
            {...formik.getFieldProps('rate')}
          />
          {formik.touched.rate && formik.errors.rate && (
            <Text variant="p">{formik.errors.rate}</Text>
          )}
        </Label>
        <Container direction="horizontal" spacing={20}>
          <Submit
            type="submit"
            value="Créer et continuer"
            onClick={handleSaveContinue}
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
          <Submit
            type="submit"
            value="Créer"
            onClick={handleSave}
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
        </Container>
      </Form>
    </Container>
  );
};

export { ContractForm };
