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

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
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
      </div>
    );
  }
}

export default App;
