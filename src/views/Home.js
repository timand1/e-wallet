import './Home.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Top from '../components/Top';
import Card from '../components/Card';
import CardStack from '../components/CardStack';


function Home(props) {
    const { allCards, cards, setAllCards } = props;
    const navigate = useNavigate();

    // Set the newly added card as active
    const [active, setActive] = useState(allCards.length - 1);

    function activeCard(e) {
        // Finding index of the clicked card and set it as active
        const activeId = allCards.findIndex((cardId => cardId.id === e.target.id));
        setActive(activeId);
    }

    function removeCard() {
        // If only the placeholder card remains, stop the deletefunction
        if (cards.length > 1) {
            cards.splice(active, 1);
            localStorage.setItem("cards", JSON.stringify(cards));
            // If only the placeholder card remains, set it to the active card
            setAllCards(cards);
            if (cards.length > 1) {
                setActive(1);
            } else {
                setActive(0);
            };
        } else {
            return;
        }
    };

    return (
        <section className='home'>
            <Top headLine={'E-WALLET'} subHeadLine={'ACTIVE CARD'} />
            <article>
                {allCards.length === 1 && <Card allCards={allCards[active]} />}
                {allCards.length > 1 &&
                    <Card allCards={allCards[active]} />}

                {allCards.length > 2 && <article>
                    <CardStack allCards={allCards} activeCard={activeCard} active={active} />
                </article>}
            </article>
            <article className="buttons">
                <button className="button" onClick={(removeCard)} >DELETE</button>
                <button className="button" onClick={() => { navigate('/add-card') }}>ADD CARD</button>
            </article>
        </section >
    )
}

export default Home;