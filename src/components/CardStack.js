import './CardStack.css';

import Card from './Card';

function CardStack(props) {
    const { allCards, activeCard, active } = props;

    const cardCopy = [...allCards];

    // Remove the active card
    cardCopy.splice(active, 1);
    // Remove the placeholder card
    cardCopy.splice(0, 1);

    // Show all cards except the active card
    const cardItems = cardCopy.map(card => <Card key={card.id} id={card.id} allCards={card} activeCard={activeCard} />)

    return (
        <section className='cards'>
            {cardItems}
        </section>
    )
}

export default CardStack;