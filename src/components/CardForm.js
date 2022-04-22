import './CardForm.css';

import { useState } from 'react';

function CardForm(props) {
    let { addNewCard, allCards, setNewCard } = props;

    const [cardHolder, setCardHolder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardValid, setCardValid] = useState('');
    const [cardCcv, setCardCcv] = useState('');
    const [cardVendor, setCardVendor] = useState('');

    function createNewCard() {
        setNewCard({
            cardholder: cardHolder,
            cardnumber: cardNumber,
            valid: cardValid,
            ccv: cardCcv,
            vendor: cardVendor,
            id: cardNumber
        })
    };

    return (
        <form onSubmit={addNewCard} className='card__form'>
            <article className="input__container">
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <input type="text" name="cardNumber" id="cardholderName" minLength={16} maxLength={16} required onKeyUp={(event) => setCardNumber(event.target.value)} />
            </article>

            <article className="input__container">
                <label htmlFor="cardholderName">CARDHOLDER NAME</label>
                <input type="text" name="cardholderName" id="cardholderName" placeholder={'FIRSTNAME LASTNAME'} maxLength={20} required onKeyUp={(event) => setCardHolder(event.target.value)} />
            </article>
            <article className='input__container input__container--row'>
                <article className="input__container">
                    <label htmlFor="valid">VALID THRU</label>
                    <input type="date" name="valid" id="valid" required onChange={(event) => setCardValid(event.target.value)} />
                </article>
                <article className="input__container">
                    <label htmlFor="ccv">CCV</label>
                    <input type="text" name="ccv" id="ccv" minLength={3} maxLength={3} required onKeyUp={(event) => setCardCcv(event.target.value)} />
                </article>
            </article>

            <article className="input__container">
                <label htmlFor="vendor">VENDOR</label>
                <select name="vendor" id="vendor" defaultValue={'DEFAULT'} required onClick={(event) => setCardVendor(event.target.value)}>
                    <option disabled value="DEFAULT"> -- select an option -- </option>
                    <option value="Ninja">NINJA BANK</option>
                    <option value="Bitcoin">BITCOIN INC</option>
                    <option value="Blockchain">BLOCK CHAIN INC</option>
                    <option value="Evil">EVIL CORP</option>
                </select>
            </article>
            <button type="submit" className="button button__add" onClick={createNewCard} >ADD CARD</button>
        </form>
    )
}

export default CardForm;