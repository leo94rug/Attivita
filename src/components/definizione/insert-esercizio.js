import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../../data/mockup-esercizi.json";
import ReadOnlyRow from "./readonly-row.js";
import EditableRow from "./editable-row.js";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const InsertEsercizio = ({ elencoAttivita }) => {
  const [contacts, setContacts] = useState(data);
  const [attivita, setAttvita] = useState("");

  const [editFormData, setEditFormData] = useState({
    nome: "",
    descrizione: "",
    nomeUnita1: "",
    tipoDato1: "",
    unitaMisura1: "",
    nomeUnita2: "",
    tipoDato2: "",
    unitaMisura2: "",
    nomeUnita3: "",
    tipoDato3: "",
    unitaMisura3: "",
    nomeUnita4: "",
    tipoDato4: "",
    unitaMisura4: "",
    nomeUnita5: "",
    tipoDato5: "",
    unitaMisura5: "",
    id: "",
    idAttività: ""
  });

  const [newFormData, setNewFormData] = useState({
    nome: "",
    descrizione: "",
    nomeUnita1: "",
    tipoDato1: "",
    unitaMisura1: "",
    nomeUnita2: "",
    tipoDato2: "",
    unitaMisura2: "",
    nomeUnita3: "",
    tipoDato3: "",
    unitaMisura3: "",
    nomeUnita4: "",
    tipoDato4: "",
    unitaMisura4: "",
    nomeUnita5: "",
    tipoDato5: "",
    unitaMisura5: "",
    id: "",
    idAttivita: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const localNewFormData = { ...editFormData };
    localNewFormData[fieldName] = fieldValue;
    setEditFormData(localNewFormData);
  };

  const handleAttivitaChange = (event) => {
    
    event.preventDefault();
    setAttvita(event.target.value);
  };

  const handleNewFormChange = (event) => {
    
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const localNewFormData = { ...newFormData };
    localNewFormData[fieldName] = fieldValue;
    setNewFormData(localNewFormData);
  };

  const handleSubmit = (event) => {
    
    if (editContactId == null) {
      handleAddFormSubmit(event);
    } else {
      handleEditFormSubmit(event);
    }
  }
  const handleAddFormSubmit = (event) => {
    
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      idAttivita: attivita,
      nome: newFormData.nome,
      descrizione: newFormData.descrizione,
      nomeUnita1: newFormData.nomeUnita1,
      tipoDato1: newFormData.tipoDato1,
      unitaMisura1: newFormData.unitaMisura1,
      nomeUnita2: newFormData.nomeUnita2,
      tipoDato2: newFormData.tipoDato2,
      unitaMisura2: newFormData.unitaMisura2,
      nomeUnita3: newFormData.nomeUnita3,
      tipoDato3: newFormData.tipoDato3,
      unitaMisura3: newFormData.unitaMisura3,
      nomeUnita4: newFormData.nomeUnita4,
      tipoDato4: newFormData.tipoDato4,
      unitaMisura4: newFormData.unitaMisura4,
      nomeUnita5: newFormData.nomeUnita5,
      tipoDato5: newFormData.tipoDato5,
      unitaMisura5: newFormData.unitaMisura5
    };
debugger;

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    const clearNewFormData = {
      nome: "",
      descrizione: "",
      nomeUnita1: "",
      tipoDato1: "",
      unitaMisura1: "",
      nomeUnita2: "",
      tipoDato2: "",
      unitaMisura2: "",
      nomeUnita3: "",
      tipoDato3: "",
      unitaMisura3: "",
      nomeUnita4: "",
      tipoDato4: "",
      unitaMisura4: "",
      nomeUnita5: "",
      tipoDato5: "",
      unitaMisura5: "",
      id: "",
      idAttivita: ""
    };
    setNewFormData(clearNewFormData);
  };

  const handleEditFormSubmit = (event) => {
    
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      idAttivita: editFormData.idAttivita,
      nome: editFormData.nome,
      descrizione: editFormData.descrizione,
      nomeUnita1: editFormData.nomeUnita1,
      tipoDato1: editFormData.tipoDato1,
      unitaMisura1: editFormData.unitaMisura1,
      nomeUnita2: editFormData.nomeUnita2,
      tipoDato2: editFormData.tipoDato2,
      unitaMisura2: editFormData.unitaMisura2,
      nomeUnita3: editFormData.nomeUnita3,
      tipoDato3: editFormData.tipoDato3,
      unitaMisura3: editFormData.unitaMisura3,
      nomeUnita4: editFormData.nomeUnita4,
      tipoDato4: editFormData.tipoDato4,
      unitaMisura4: editFormData.unitaMisura4,
      nomeUnita5: editFormData.nomeUnita5,
      tipoDato5: editFormData.tipoDato5,
      unitaMisura5: editFormData.unitaMisura5
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      idAttivita: contact.idAttivita,
      nome: contact.nome,
      descrizione: contact.descrizione,
      nomeUnita1: contact.nomeUnita1,
      tipoDato1: contact.tipoDato1,
      unitaMisura1: contact.unitaMisura1,
      nomeUnita2: contact.nomeUnita2,
      tipoDato2: contact.tipoDato2,
      unitaMisura2: contact.unitaMisura2,
      nomeUnita3: contact.nomeUnita3,
      tipoDato3: contact.tipoDato3,
      unitaMisura3: contact.unitaMisura3,
      nomeUnita4: contact.nomeUnita4,
      tipoDato4: contact.tipoDato4,
      unitaMisura4: contact.unitaMisura4,
      nomeUnita5: contact.nomeUnita5,
      tipoDato5: contact.tipoDato5,
      unitaMisura5: contact.unitaMisura5
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  const items = elencoAttivita.map((attivita) => (
    <MenuItem value={attivita.id} key={attivita.id}>{attivita.nome}</MenuItem>
  ));
  return (
    <div className="app-container">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="idAttivita"
        value={attivita}
        label="Attivita"
        onChange={(event) => {
          handleAttivitaChange(event);

        }}
      >
        {items}
      </Select>
      
        <div>
          <form onSubmit={handleSubmit}>

            <table>
              <tbody>
                <Fragment>

                  <EditableRow
                    editFormData={newFormData}
                    handleEditFormChange={handleNewFormChange}
                    handleCancelClick={handleCancelClick}
                  />

                </Fragment>
              </tbody>
            </table>
          </form>
          <form onSubmit={handleSubmit}>
            <table>          <thead>
              <tr>
                <th>Nome</th>
                <th>Descrizione</th>
                <th>Nome unita 1</th>
                <th>Tipo dato unita 1</th>
                <th>Unità di misura 1</th>
                <th>Nome unita 2</th>
                <th>Tipo dato unita 2</th>
                <th>Unità di misura 2</th>
                <th>Nome unita 3</th>
                <th>Tipo dato unita 3</th>
                <th>Unità di misura 3</th>
                <th>Nome unita 4</th>
                <th>Tipo dato unita 4</th>
                <th>Unità di misura 4</th>
                <th>Nome unita 5</th>
                <th>Tipo dato unita 5</th>
                <th>Unità di misura 5</th>
              </tr>
            </thead>
              <tbody>
                {contacts.filter((esercizio) => {
                  console.log(esercizio.id + " " + esercizio.idAttivita + " " + attivita);
                  return esercizio.idAttivita == attivita;
                }).map((contact) => (
                  <Fragment>

                    {editContactId === contact.id ? (
                      <EditableRow
                        key = {contact.id}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        key = {contact.id}
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>

            </table>
          </form>
        </div>
    </div>
  );
};

export default InsertEsercizio;