// Use.
import { Context } from './type';
import {
  ItemOverView,
  CustomerForm,
  ContractForm,
  InterventionForm,
  SignInForm,
} from './screen';
import { Broom, Contract, Customer } from './theme/icon';

/**
 * Navigation items.
 */
const availableScreens: Context['authorizedScreens'] = [
  {
    label: 'Connexion',
    route: 'signin',
    args: 'overview',
    authenticated: false,
    component: <SignInForm />,
  },
  {
    label: 'Clients',
    route: 'customer',
    args: 'overview',
    authenticated: true,
    component: <ItemOverView />,
    icon: <Customer size={20} />,
  },
  {
    label: 'Ajouter un client',
    route: 'customer',
    args: 'add',
    authenticated: true,
    component: <CustomerForm />,
  },
  {
    label: 'Liste clients',
    route: 'customer',
    args: 'list',
    authenticated: true,
    component: <></>,
  },
  {
    label: 'Contrats',
    route: 'contract',
    args: 'overview',
    authenticated: true,
    component: <ItemOverView />,
    icon: <Contract size={20} />,
  },
  {
    label: 'Ajouter un contrat',
    route: 'contract',
    args: 'add',
    authenticated: true,
    component: <ContractForm />,
  },
  {
    label: 'Liste contrats',
    route: 'contract',
    args: 'list',
    authenticated: true,
    component: <></>,
  },
  {
    label: 'Interventions',
    route: 'intervention',
    args: 'overview',
    authenticated: true,
    component: <ItemOverView />,
    icon: <Broom size={20} />,
  },
  {
    label: 'Créer une intervention',
    route: 'intervention',
    args: 'add',
    authenticated: true,
    component: <InterventionForm />,
  },
  {
    label: 'Liste interventions',
    route: 'intervention',
    args: 'list',
    authenticated: true,
    component: <></>,
  },
];

export { availableScreens };
