// Use.
import { MouseEvent } from 'react';
import { useFormik } from 'formik';
import { useQuery, useMutation } from 'react-query';
import { useAppContext } from '../../../context';
import {
  InterventionFormValidator,
  getItems,
  postItem,
  getScreensByRouteAndArgs,
} from '../../../util';
import { Intervention, Customer, Contract, Context } from '../../../type';
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
 * Provide screen InterventionForm.
 */
const InterventionForm = () => {
  const { screen, setScreen, authorizedScreens } = useAppContext() as Context;

  const { data: dataCustomers } = useQuery('customers', () =>
    getItems('/customers')
  );
  const customers = (dataCustomers?.data as Customer[]) || [];

  const { data: dataContracts } = useQuery('contracts', () =>
    getItems('/contracts')
  );
  const contracts = (dataContracts?.data as Contract[]) || [];

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
    },
  });

  const { mutate, isSuccess, reset } = useMutation(
    async (values: Intervention) => {
      await postItem('/interventions', values);
    }
  );

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
        <Label htmlFor="contractId">
          <Text variant="h4">Client</Text>
          <Select
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
          </Select>
          {formik.touched.contractId && formik.errors.contractId && (
            <Text variant="p">{formik.errors.contractId}</Text>
          )}
        </Label>
        <Label htmlFor="date">
          <Text variant="h4">Date</Text>
          <Input
            id="date"
            type="date"
            isValid={formik.touched.date ? !formik.errors.date : null}
            {...formik.getFieldProps('date')}
          />
          {formik.touched.date && formik.errors.date && (
            <Text variant="p">{formik.errors.date}</Text>
          )}
        </Label>
        <Label htmlFor="quantity">
          <Text variant="h4">Quantit??</Text>
          <Input
            id="quantity"
            type="number"
            isValid={formik.touched.quantity ? !formik.errors.quantity : null}
            {...formik.getFieldProps('quantity')}
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <Text variant="p">{formik.errors.quantity}</Text>
          )}
        </Label>
        <Container direction="horizontal" spacing={20}>
          <Submit
            type="submit"
            value="Cr??er et continuer"
            onClick={handleSaveContinue}
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
          <Submit
            type="submit"
            value="Cr??er"
            onClick={handleSave}
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
        </Container>
      </Form>
    </Container>
  );
};

export { InterventionForm };
