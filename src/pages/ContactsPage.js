import { Contact } from "components/Contact/Contact"
import { ContactList } from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import { Container } from "components/styled.styled"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { fetchContacts } from "redux/Contacts/actions"



export const ContactsPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])
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
