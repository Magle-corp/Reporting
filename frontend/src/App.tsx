// Use.
import { useAppContext } from './context';
import { Context } from './type';
import { SignInForm, ContractForm } from './screen';
import { Layout } from './ui';

const App = () => {
  const { screen } = useAppContext() as Context;

  return (
    <Layout>
      {screen === 'signin' && <SignInForm />}
      {screen === 'add_contract' && <ContractForm />}
    </Layout>
  );
};

export { App };
