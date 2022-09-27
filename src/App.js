import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      savedCards: [],
    });
  }

  onSaveButtonClick = (element) => {
    element.preventDefault();
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo,
    } = this.state;
    const pushedCards = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((prev) => ({ savedCards: [...prev.savedCards, pushedCards] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: '' });
    return cardTrunfo ? this.setState({ hasTrunfo: true }) : null;
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;
    const checkName = cardName.length > 0;
    const checkcardDescription = cardDescription.length > 0;
    const checkcardImage = cardImage.length > 0;
    const checkcardAttr1 = cardAttr1 <= Number('90') && cardAttr1 >= 0
    && cardAttr1 !== '';
    const checkcardAttr2 = cardAttr2 <= Number('90') && cardAttr2 >= 0
    && cardAttr2 !== '';
    const checkcardAttr3 = cardAttr3 <= Number('90') && cardAttr3 >= 0
    && cardAttr3 !== '';
    const checkTot = (Number(cardAttr1) + Number(cardAttr2)
     + Number(cardAttr3)) <= Number('210');

    return checkName && checkcardDescription && checkcardImage
    && checkcardAttr1 && checkcardAttr2 && checkcardAttr3 && checkTot;
  };

  removeCard = (event) => {
    const { savedCards, hasTrunfo } = this.state;
    const getCards = savedCards;
    const remove = Number(event.target.id);
    getCards.splice(remove, 1);
    this.setState({ savedCards: getCards });
    return hasTrunfo ? this.setState({ hasTrunfo: false }) : null;
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo, savedCards } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ !this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { savedCards.map((element, key) => (
          <Card
            key={ key }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardImage={ element.cardImage }
            cardRare={ element.cardRare }
            cardTrunfo={ element.cardTrunfo }
            removeCard={ this.removeCard }
            button
            index={ key }
          />
        )) }

      </div>
    );
  }
}

export default App;
