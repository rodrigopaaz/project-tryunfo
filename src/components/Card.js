import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fine from './veryFine.png';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      button, removeCard, index, classe } = this.props;
    return (
      <div className="card">
        <div className="div2">
          <div className="nameImage">
            {cardTrunfo && <div className="trufo">
              <p className="h4">Super Trunfo</p>
              <img src={ fine } alt="fine" className="fine" />
            </div>}
            <p
              data-testid="name-card"
              className="name_card"
              style={ cardName ? { border: '1px solid red' } : null }
            >
              {cardName}

            </p>
            <p className="card_image">
              <img
                style={ cardImage ? { border: '1px solid red' } : null }
                src={ cardImage }
                data-testid="image-card"
                alt={ cardName }
              />

            </p>
          </div>
          <div className="footer">
            <p className="descriptionCard" data-testid="description-card">{ cardDescription }</p>

            <div className="attributes">
              <div />
              <p data-testid="attr1-card">
                <span>Health:</span>
                { cardAttr1 }
              </p>
              <p data-testid="attr2-card">
                <span>Mana:</span>
                { cardAttr2 }
              </p>
              <p data-testid="attr3-card">
                <span>Damage:</span>
                { cardAttr3 }
              </p>
            </div>
            <div className="card_footer">
              {cardTrunfo && (
                <p data-testid="trunfo-card">
                  Super Trunfo
                </p>
              )}

              <p data-testid="rare-card">{ cardRare }</p>
            </div>
          </div>
        </div>
        {button && (
          <button
            className="btn__excluir"
            id={ index }
            type="button"
            onClick={ removeCard }
            data-testid="delete-button"
          >
            Excluir
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = ({
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,

}).isRequired;

export default Card;
