import React, { Component } from 'react';
import PropTypes from 'prop-types';
import check from './Check.png';
import error from './error.png';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <section>
        <p className="title">ADICIONE NOVA CARTA</p>
        <div className="fieldset">
          <div className="nameTrue">
            <label htmlFor="name" className="name">
              Name:
              <input
                id="name"
                name="cardName"
                placeholder="Name"
                data-testid="name-input"
                type="text"
                value={ cardName }
                onChange={ onInputChange }
              />

            </label>
            {cardName.length >= 1
              ? <img src={ check } alt="b" className="check" />
              : <img src={ error } alt="b" className="error" />}
          </div>
          <div className="descriptionDiv">
            <label htmlFor="description" className="description">
              Descrição:
              <input
                cols="50"
                rows="10"
                className="descricao"
                id="description"
                name="cardDescription"
                data-testid="description-input"
                type="textarea"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
            {cardDescription.length >= 1
              ? <img src={ check } alt="b" className="check" />
              : <img src={ error } alt="b" className="error" />}
          </div>
          <div className="att1Div">
            <label className="att" htmlFor="att1">
              Health:
              <input
                id="att1"
                name="cardAttr1"
                data-testid="attr1-input"
                type="number"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            {cardAttr1.length >= 1
              ? <img src={ check } alt="b" className="check" />
              : <img src={ error } alt="b" className="error" />}
          </div>
          <div className="att2Div">
            <label className="att" htmlFor="att2">
              Mana:
              <input
                id="att2"
                name="cardAttr2"
                data-testid="attr2-input"
                type="number"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            {cardAttr2.length >= 1
              ? <img src={ check } alt="b" className="check" />
              : <img src={ error } alt="b" className="error" />}
          </div>
          <div className="att3Div">
            <label className="att" htmlFor="att3">
              Damage:
              <input
                id="att3"
                name="cardAttr3"
                data-testid="attr3-input"
                type="number"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
            {cardAttr3.length >= 1
              ? <img src={ check } alt="b" className="check" />
              : <img src={ error } alt="b" className="error" />}
          </div>
          <label className="att" htmlFor="imagem">
            Imagem:
            <input
              id="imagem"
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
            {cardImage.length >= 1
              ? <img src={ check } alt="b" className="check" />
              : <img src={ error } alt="b" className="error" />}
          </label>
          <label className="raridade" htmlFor="raridade">
            Raridade:
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              placeholder="selecione"
            >
              <option>Normal</option>
              <option>Raro</option>
              <option>Muito raro</option>
            </select>
          </label>
          <div className="checkButton">
            <div className="super">
              {!hasTrunfo && (
                <label htmlFor="superTrunfo" className="superTrunfo">
                  Esta carta será um Super Trunfo:
                  <input
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    type="checkBox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )}
              {hasTrunfo && (
                <p className="haveTrunfo">Você já tem um Super Trunfo em seu baralho</p>)}
              <button
                type="button"
                data-testid="save-button"
                disabled={ isSaveButtonDisabled }
                onClick={ onSaveButtonClick }
              >
                Salvar

              </button>
            </div>
          </div>
        </div>
      </section>
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
