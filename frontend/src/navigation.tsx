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
const availableScreens: Context['availableScreens'] = [
  {
    label: 'Connexion',
    route: 'signin',
    args: 'overview',
    component: <SignInForm />,
  },
  {
    label: 'Clients',
    route: 'customer',
    args: 'overview',
    component: <ItemOverView />,
    icon: <Customer size={20} />,
  },
  {
    label: 'Ajouter un client',
    route: 'customer',
    args: 'add',
    component: <CustomerForm />,
  },
  {
    label: 'Liste clients',
    route: 'customer',
    args: 'list',
    component: <></>,
  },
  {
    label: 'Contrats',
    route: 'contract',
    args: 'overview',
    component: <ItemOverView />,
    icon: <Contract size={20} />,
  },
  {
    label: 'Ajouter un contrat',
    route: 'contract',
    args: 'add',
    component: <ContractForm />,
  },
  {
    label: 'Liste contrats',
    route: 'contract',
    args: 'list',
    component: <></>,
  },
  {
    label: 'Interventions',
    route: 'intervention',
    args: 'overview',
    component: <ItemOverView />,
    icon: <Broom size={20} />,
  },
  {
    label: 'Créer une intervention',
    route: 'intervention',
    args: 'add',
    component: <InterventionForm />,
  },
  {
    label: 'Liste interventions',
    route: 'intervention',
    args: 'list',
    component: <></>,
  },
];

export { availableScreens };
