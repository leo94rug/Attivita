import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
      <td>{contact.nome}</td>
      <td>{contact.descrizione}</td>
      <td>{contact.nomeUnita1}</td>
      <td>{contact.tipoDato1}</td>
      <td>{contact.unitaMisura1}</td>
      <td>{contact.nomeUnita2}</td>
      <td>{contact.tipoDato2}</td>
      <td>{contact.unitaMisura2}</td>
      <td>{contact.nomeUnita3}</td>
      <td>{contact.tipoDato3}</td>
      <td>{contact.unitaMisura3}</td>
      <td>{contact.nomeUnita4}</td>
      <td>{contact.tipoDato4}</td>
      <td>{contact.unitaMisura4}</td>
      <td>{contact.nomeUnita5}</td>
      <td>{contact.tipoDato5}</td>
      <td>{contact.unitaMisura5}</td>

    </tr>
  );
};

export default ReadOnlyRow;