import Card from 'react-bootstrap/Card';
import ButtonItem from './Button';

export default function CardLocs({ nameLoc, loc }) {
    return (
        <Card style={{
            margin: '0',
            border: '1px solid grey',
            borderRadius: '0.1em',
            margin: '0.5em 1em'}}>
            <Card.Body>
                        <Card.Subtitle style={{
                            fontSize: '1.25em'
                        }}>{nameLoc}</Card.Subtitle>
                        <Card.Text>
                            {loc}
                        </Card.Text>
                        <ButtonItem title="Add to Wishlist"></ButtonItem>
            </Card.Body>
        </Card>
    );
  }