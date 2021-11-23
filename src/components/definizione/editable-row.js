import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="nome"
          value={editFormData.nome}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an descrizione..."
          name="descrizione"
          value={editFormData.descrizione}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a nomeUnita1..."
          name="nomeUnita1"
          value={editFormData.nomeUnita1}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an tipoDato1..."
          name="tipoDato1"
          value={editFormData.tipoDato1}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an unitaMisura1..."
          name="unitaMisura1"
          value={editFormData.unitaMisura1}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter a nomeUnita2..."
          name="nomeUnita2"
          value={editFormData.nomeUnita2}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an tipoDato2..."
          name="tipoDato2"
          value={editFormData.tipoDato2}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an unitaMisura2..."
          name="unitaMisura2"
          value={editFormData.unitaMisura2}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter a nomeUnita3..."
          name="nomeUnita3"
          value={editFormData.nomeUnita3}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an tipoDato3..."
          name="tipoDato3"
          value={editFormData.tipoDato3}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an unitaMisura3..."
          name="unitaMisura3"
          value={editFormData.unitaMisura3}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter a nomeUnita4..."
          name="nomeUnita4"
          value={editFormData.nomeUnita4}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an tipoDato4..."
          name="tipoDato4"
          value={editFormData.tipoDato4}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an unitaMisura4..."
          name="unitaMisura4"
          value={editFormData.unitaMisura4}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter a nomeUnita5..."
          name="nomeUnita5"
          value={editFormData.nomeUnita5}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an tipoDato5..."
          name="tipoDato5"
          value={editFormData.tipoDato5}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an unitaMisura5..."
          name="unitaMisura5"
          value={editFormData.unitaMisura5}
          onChange={handleEditFormChange}
        ></input>
      </td>

    </tr>
  );
};

export default EditableRow;