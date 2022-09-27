import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <fieldset>
        <legend>
          <form>
            <input
              name="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
            <input
              name="cardDescription"
              data-testid="description-input"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
            <input
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
            <input
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
            <input
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            {!hasTrunfo && (
              <input
                name="cardTrunfo"
                data-testid="trunfo-input"
                type="checkBox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />)}
            {hasTrunfo && (
              <p>Você já tem um Super Trunfo em seu baralho</p>)}
            <button
              type="button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar

            </button>

          </form>
        </legend>
      </fieldset>
    );
  }
}

Form.propTypes = ({
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}).isRequired;

export default Form;
