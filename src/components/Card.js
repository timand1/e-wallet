import './Card.css';
import { useState, useEffect } from 'react';
import ChipDark from './assets/chip-dark.svg';
import ChipLight from './assets/chip-light.svg';
import Bitcoin from './assets/vendor-bitcoin.svg';
import Blockchain from './assets/vendor-blockchain.svg';
import Evil from './assets/vendor-evil.svg';
import Ninja from './assets/vendor-ninja.svg';

function Card(props) {
    const { allCards, activeCard } = props;

    const [cardColor, setCardColor] = useState('#D0D0D0');
    const [cardVendor, setCardVendor] = useState(Bitcoin);

    useEffect(() => {
        if (allCards.vendor === 'Bitcoin') {
            setCardColor('#FFAE34');
            setCardVendor(Bitcoin);
        } else if (allCards.vendor === 'Ninja') {
            setCardColor('#222222');
            setCardVendor(Ninja);
        } else if (allCards.vendor === 'Blockchain') {
            setCardColor('#8B58F9');
            setCardVendor(Blockchain);
        } else if (allCards.vendor === 'Evil') {
            setCardColor('#F33355');
            setCardVendor(Evil);
        } else {
            setCardColor('#D0D0D0');
            setCardVendor(Bitcoin);
        }
    }, [allCards.vendor]);

    const colorStyle = { color: (allCards.vendor === 'Bitcoin' || allCards.vendor === 'AddCard') ? '#000000' : '#FFFFFF' };
    const colorStyleLabel = { color: (allCards.vendor === 'Bitcoin' || allCards.vendor === 'AddCard') ? '#000000b6' : '#ffffffa4' };
    const cardNum = allCards.cardnumber.replace(/\d{4}(?=.)/g, '$& ');
    const validDate = (allCards.valid.length === 5) ? allCards.valid : allCards.valid.substring(2, 7).replace('-', '/');

    return (
        <section className='card'
            id={allCards.id}
            onClick={activeCard}
            style={{ backgroundColor: cardColor }}
        >
            <header className='card__logos'>
                <img src={(allCards.vendor === 'Ninja') ? ChipLight : ChipDark} alt="Chip dark" />
                <img src={cardVendor} alt={allCards.vendor} />
            </header>

            <p className="card__text card__number" style={colorStyle} >{cardNum}</p>

            <article className="card__text-container">
                <article className='card__text-label'>
                    <p className="card__text card__label" style={colorStyleLabel} >CARDHOLDER NAME</p>
                    <p className="card__text" style={colorStyle} >{allCards.cardholder}</p>
                </article>
                <article className='card__text-label'>
                    <p className="card__text card__label" style={colorStyleLabel} >VALID THRU</p>
                    <p className="card__text card__text--valid" style={colorStyle} >{validDate}</p>
                </article>
            </article>
        </section>
    )
}

export default Card;