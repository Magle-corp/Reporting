import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSubmit,
  Text,
} from '../../ui';

const SignIn = () => {
  return (
    <div>
      <StyledForm>
        <StyledLabel>
          <Text variant="h4">Identifiant</Text>
          <StyledInput type="text" isValid={null} />
        </StyledLabel>
        <StyledLabel>
          <Text variant="h4">Mot de passe</Text>
          <StyledInput type="text" isValid={null} />
        </StyledLabel>
      </StyledForm>
      <StyledSubmit type="submit" value="Envoyer" isValid={false} />
    </div>
  );
};

export { SignIn };
