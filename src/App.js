import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import dota2 from './components/dota2.png';

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
      cardRare: 'Normal',
      cardTrunfo: '',
      hasTrunfo: false,
      savedCards: [
        {
          cardName: 'Sven',
          cardDescription: 'The Rogue Knight lives by two creeds: Honor, as ordained by his own personal code, and Solitude. Always eager to charge into a fight. Using his iron gauntlet, he launches a Storm Hammer, stunning grouped enemies as he transports himself into battle, then closes in to cut them down with Great Cleave. ',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '41',
          cardImage: 'https://wallpaperaccess.com/full/3928848.jpg',
          cardRare: 'Normal',
          cardTrunfo: '',
        },
        {
          cardName: 'Anti-Mage',
          cardDescription: ' Slashes his foes with mana-draining attacks. Among the ascetic monks of Turstarkuri, only a young acolyte was fortunate enough to escape the fallen legion\'s assault on the monastery. Now, vowing to eliminate not only the magic of the Dead God, the Anti-Mage returns to eradicate magic altogether. With sheer focus, he Counters Spells thrown at him, returning them to their senders.',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '29',
          cardImage: 'https://estnn.com/wp-content/uploads/2021/12/d2anitmage-747x420.jpg',
          cardRare: 'normal',
          cardTrunfo: '',
        },
        {
          cardName: 'Rikki',
          cardDescription: ' Remains permanently invisible until the moment to strike. Leaving his past life behind, Riki escaped the royal grounds using his own Cloak-and-Dagger methods. Stealthy and fond of killing from behind, Riki throws down a dense Smoke Screen, blinding and choking foes as he takes them by surprise with Blink Strike.',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '41',
          cardImage: 'http://static1.squarespace.com/static/59af2189c534a58c97bd63b3/59b15e689f8dce2f6a674f7f/5ad8a1520e2e728c58db13f1/1581442028723/Covert+Saboteur+loading+screen+Riki+Dota+2.jpg?format=1500w',
          cardRare: 'normal',
          cardTrunfo: '',
        },
        {
          cardName: 'Crystal Maiden',
          cardDescription: ' Unleashes a high damage blizzard upon her foes. Wherever Rylai went, the cold went with her. Fields and orchards withered in her wake, leaving her parents no choice but to pack her off to Icewrack, a realm in the frigid north. Under the tutelage of a hermit wizard, Rylai learned to imprison her enemies with a Thick Block of Ice, holding them in place as she Freezes the Ground. ',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '28',
          cardImage: 'https://i.pinimg.com/originals/21/f7/94/21f7944845c60da55a196a51aff2b200.jpg',
          cardRare: 'normal',
          cardTrunfo: '',
        },
      ],
      saved: [
        {
          cardName: 'Sven',
          cardDescription: 'The Rogue Knight lives by two creeds: Honor, as ordained by his own personal code, and Solitude. Always eager to charge into a fight. Using his iron gauntlet, he launches a Storm Hammer, stunning grouped enemies as he transports himself into battle, then closes in to cut them down with Great Cleave. ',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '41',
          cardImage: 'https://wallpaperaccess.com/full/3928848.jpg',
          cardRare: 'Normal',
          cardTrunfo: '',
        },
        {
          cardName: 'Anti-Mage',
          cardDescription: ' Slashes his foes with mana-draining attacks. Among the ascetic monks of Turstarkuri, only a young acolyte was fortunate enough to escape the fallen legion\'s assault on the monastery. Now, vowing to eliminate not only the magic of the Dead God, the Anti-Mage returns to eradicate magic altogether. With sheer focus, he Counters Spells thrown at him, returning them to their senders.',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '29',
          cardImage: 'https://estnn.com/wp-content/uploads/2021/12/d2anitmage-747x420.jpg',
          cardRare: 'normal',
          cardTrunfo: '',
        },
        {
          cardName: 'Rikki',
          cardDescription: ' Remains permanently invisible until the moment to strike. Leaving his past life behind, Riki escaped the royal grounds using his own Cloak-and-Dagger methods. Stealthy and fond of killing from behind, Riki throws down a dense Smoke Screen, blinding and choking foes as he takes them by surprise with Blink Strike.',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '41',
          cardImage: 'http://static1.squarespace.com/static/59af2189c534a58c97bd63b3/59b15e689f8dce2f6a674f7f/5ad8a1520e2e728c58db13f1/1581442028723/Covert+Saboteur+loading+screen+Riki+Dota+2.jpg?format=1500w',
          cardRare: 'normal',
          cardTrunfo: '',
        },
        {
          cardName: 'Crystal Maiden',
          cardDescription: ' Unleashes a high damage blizzard upon her foes. Wherever Rylai went, the cold went with her. Fields and orchards withered in her wake, leaving her parents no choice but to pack her off to Icewrack, a realm in the frigid north. Under the tutelage of a hermit wizard, Rylai learned to imprison her enemies with a Thick Block of Ice, holding them in place as she Freezes the Ground. ',
          cardAttr1: '75',
          cardAttr2: '75',
          cardAttr3: '28',
          cardImage: 'https://i.pinimg.com/originals/21/f7/94/21f7944845c60da55a196a51aff2b200.jpg',
          cardRare: 'normal',
          cardTrunfo: '',
        },
      ],
      check: false,
    });
  }

  onSaveButtonClick = (element) => {
    element.preventDefault();
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, saved, savedCards,
    } = this.state;
    console.log(savedCards);
    const pushedCards = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((prev) => ({ savedCards: [...prev.savedCards, pushedCards] }));
    this.setState((prev) => ({ saved: [...prev.saved, pushedCards] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
    });
    console.log(saved);
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

  filterByName = (filtro) => {
    const { savedCards, saved } = this.state;
    const { value } = filtro.target;
    const filtered = savedCards.filter((element) => element.cardName
      .includes(value));
    return value.length > 0
      ? this.setState({ savedCards: filtered })
      : this.setState({ savedCards: saved });
  };

  filterByRare = (filtro) => {
    const { savedCards, saved } = this.state;
    const { value } = filtro.target;
    const filtered = savedCards.filter((element) => element.cardRare
      .startsWith(value));
    return value !== 'todas'
      ? this.setState({ savedCards: filtered })
      : this.setState({ savedCards: saved });
  };

  classe = () => {
    const { cardTrunfo } = this.state;
    console.log(cardTrunfo);
    return cardTrunfo ? 'div2Trunfo'
      : 'div2';
  };

  filterByTrunfo = (filtro) => {
    const { savedCards, saved } = this.state;
    const { value } = filtro.target;
    this.setState({ check: true });
    const filtered = savedCards.filter((element) => element.cardTrunfo === true);
    return value !== 'todas'
      ? this.setState({ savedCards: filtered })
      : this.setState({ savedCards: saved });
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
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, savedCards, check } = this.state;
    console.log(this.classe());
    return (
      <div className="principal">
        <img src={ dota2 } alt="dota" className="dota2" />
        <div className="header">
          <div className="div_form">
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

          </div>
          <div className="preview">
            <p className="title">PRÉ-VISUALIZAÇÃO</p>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              classe={ this.classe() }
            />
          </div>
        </div>
        <div className="filtro">
          Filtros de Busca:
          <input
            placeholder="Nome da carta"
            type="text"
            data-testid="name-filter"
            onChange={ this.filterByName }
            disabled={ check }
          />
          <select
            placeholder="Raridade"
            type="text"
            data-testid="rare-filter"
            onChange={ this.filterByRare }
            disabled={ check }
          >
            <option value="" hidden selected>
              Raridade
            </option>
            <option>Todas</option>
            <option>Normal</option>
            <option>Raro</option>
            <option>Muito raro</option>

          </select>
          <label htmlFor="check">
            Super Trunfo
            <input
              name="cardTrunfo"
              data-testid="trunfo-filter"
              type="checkBox"
              checked={ check }
              onChange={ this.filterByTrunfo }
            />
          </label>
        </div>
        <div className="saved_cards">
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
      </div>
    );
  }
}

export default App;
