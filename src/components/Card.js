import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  validateTrunfo = (valor) => { if (valor) { return 'Super Trunfo'; } };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        <div className="nameImage">
          <p data-testid="name-card">{cardName}</p>
          <img src={ cardImage } data-testid="image-card" alt={ cardName } />
        </div>
        <div className="attributes">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>
        <div className="footer">
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {cardTrunfo && (
            <p data-testid="trunfo-card">
              Super Trunfo

            </p>
          )}
        </div>
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