import { selectError, selectIsLoading } from 'redux/selects';
import {useDispatch, useSelector } from 'react-redux';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { TitleContacts } from 'components/App.styled';
import { ContactsList } from 'components/Contacts/Contacts';
import { FilterConctacts } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function ContactsPage(){
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
    
    return (
        <div>
           {isLoading && (<p>...isLoading</p>) }
           {error && (<p>Error</p>)}

           <SectionTitle title="Phonebook"/>
           <FormAddContact/>
           <TitleContacts>Contacts</TitleContacts>
           <FilterConctacts/>
           <ContactsList/>

        </div>
    )
    
}