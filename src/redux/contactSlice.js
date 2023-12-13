import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {fetchContacts, addContact, deleteContact} from './operations';



const contactBook = {
    items:[],
    isLoading: false,
    error: null}

    const handlPending = (state)=> {
      state.isLoading = true}


    const handlFulfilledGet = (state, action)=>{
      state.items = action.payload;
    }
    const handlFulfilledAdd = (state, action)=>{
      state.items.push(action.payload);
    }
    const handlFulfilledDelete = (state, action)=>{
    state.items = state.items.filter(item => item.id !== action.payload.id);
    }

    const handlFulfilled = (state)=>{
      state.isLoading = false;
      state.error = null;
    }
    const handlReject =(state, action)=>{
      state.isLoading = false;
      state.error = action.payload;
    }

    const contactSlice = createSlice({
          name:'contact',
          initialState: contactBook,
          
        extraReducers:
      builder=>{
        builder.addCase(fetchContacts.fulfilled, handlFulfilledGet)
        .addCase(addContact.fulfilled, handlFulfilledAdd)
        .addCase(deleteContact.fulfilled, handlFulfilledDelete)
        .addMatcher(isAnyOf(fetchContacts.pending,
          addContact.pending,
          deleteContact.pending), handlPending)
        .addMatcher(isAnyOf(fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected), handlReject)
        .addMatcher(isAnyOf(fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled), handlFulfilled)
      }
    })

  export const contactReduser = contactSlice.reducer;

