// Use.
import { Text, Container } from '../ui';

interface Props {
  isValid: boolean;
}

/**
 * Provide component ActionsFeedBack.
 *
 * @param isValid
 *    boolean, depend on the form submission status.
 */
const ActionsFeedBack = ({ isValid }: Props) => {
  return (
    <>
      {isValid ? (
        <Container direction="horizontal">
          <Text>Enregistré</Text>
        </Container>
      ) : (
        <Container direction="horizontal">
          <Text>Un problème est survenu</Text>
        </Container>
      )}
    </>
  );
};

export { ActionsFeedBack };
