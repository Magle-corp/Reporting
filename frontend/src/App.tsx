// Use.
import { useAppContext } from './context';
import { Context } from './type';
import { SignInForm, ContractForm, CustomerForm } from './screen';
import { Layout } from './ui';

const App = () => {
  const { screen } = useAppContext() as Context;

  return (
    <Layout>
      {screen === 'signin' && <SignInForm />}
      {screen === 'add_contract' && <ContractForm />}
      {screen === 'add_customer' && <CustomerForm />}
    </Layout>
  );
};

export { App };
