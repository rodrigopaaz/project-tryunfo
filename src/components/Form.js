import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <fieldset>
        <legend>
          <form>
            <input
              data-testid="name-input"
              type="text"
            />
            <input
              data-testid="description-input"
              type="textarea"
            />
            <input
              data-testid="attr1-input"
              type="number"
            />
            <input
              data-testid="attr2-input"
              type="number"
            />
            <input
              data-testid="attr3-input"
              type="number"
            />
            <input
              data-testid="image-input"
              type="text"
            />
            <select
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <input
              data-testid="trunfo-input"
              type="checkBox"
            />
            <button type="button" data-testid="save-button">Salvar</button>

          </form>
        </legend>
      </fieldset>
    );
  }
}

export default Form;
