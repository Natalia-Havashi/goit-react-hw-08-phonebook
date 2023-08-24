import { Contact } from "components/Contact/Contact"
import { ContactList } from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import { Container } from "components/styled.styled"


const ContactsPage = () => {
    return (
        <Container>
        <h1>PhoneBook</h1>
        <Contact />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList />
      </Container>
    )
}
export default ContactsPage;