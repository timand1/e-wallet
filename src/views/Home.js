import './Home.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Top from '../components/Top';
import Card from '../components/Card';
import CardStack from '../components/CardStack';


function Home(props) {
    const { allCards } = props;
    const navigate = useNavigate();

    // Set the newly added card as active
    const [active, setActive] = useState(allCards.length - 1);

    function activeCard(e) {
        const activeId = parseInt(e.target.id)
        setActive(activeId)
    }

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
            <button className="button" onClick={() => { navigate('/add-card') }}>ADD A NEW CARD</button>
        </section >
    )
}
// style={{ marginTop: allCards.length > 5 ? '9rem' : 'auto' }}
export default Home;