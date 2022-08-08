import React, { Component} from 'react'
import { Card, CardImg, CardText, CardDeck, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom'


class CatIndex extends Component {
    render() {
        return (
        <>
            <h1>Find your purrfect match!</h1>
            
            <div className='cardDeck'>
                <Row sm="3">
                {this.props.cats && this.props.cats.map(cat => {
                    return(
                        <Card key ={cat.id}>
                          <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                          <CardBody>
                            <NavLink to={`/catshow/${cat.id}`}>
                            <Button>Full Prowlfile</Button>
                            </NavLink>
                          </CardBody>
                        </Card>
                    )
                })}
                </Row>
            </div>
        </>
        
        )
    }
}

export default CatIndex