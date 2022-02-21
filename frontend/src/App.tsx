// Use.
import { useAppContext } from './context';
import { Context } from './type';
import {
  SignInForm,
  ContractForm,
  CustomerForm,
  InterventionForm,
} from './screen';
import { Layout } from './ui';

const App = () => {
  const { screen } = useAppContext() as Context;

  return (
    <Layout>
      {screen === 'signin' && <SignInForm />}
      {screen === 'add_contract' && <ContractForm />}
      {screen === 'add_customer' && <CustomerForm />}
      {screen === 'add_intervention' && <InterventionForm />}
    </Layout>
  );
};

export { App };
