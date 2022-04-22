import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

function AddCard(props) {
    const { addNewCard, allCards, setNewCard } = props;

    return (
        <section>
            <Top headLine={'ADD A NEW BANK CARD'} subHeadLine={'NEW CARD'} />
            <Card allCards={allCards[0]} />
            <CardForm addNewCard={addNewCard} allCards={allCards} setNewCard={setNewCard} />

        </section>
    )
}

export default AddCard;