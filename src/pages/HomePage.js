import { Container, Paragraph, Title } from 'pages/styled.styled';

export const HomePage = () => {
  return (
    <Container>
      <Title>PhoneBook</Title>
      <Paragraph>
        This is your contact book. To add a contact Register or login!
      </Paragraph>
    </Container>
  );
};
