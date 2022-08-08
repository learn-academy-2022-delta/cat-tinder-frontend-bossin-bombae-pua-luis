import React, { Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


class CatShow extends Component {
    render() {
        let { cat } =this.props
        return (
            <>
                <Card key= {cat.id}>
                    <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{textAlign: 'center', fontSize: 30}}>Hi my name is {cat.name}!</CardTitle>
                        <CardSubtitle style={{textAlign: 'center', fontSize: 30}}>I am {cat.age} years old.</CardSubtitle>
                        <CardText style={{textAlign: 'center', fontSize: 30}}>
                            {cat.enjoys}
                        </CardText>
                        <NavLink to={`/catedit/${this.props.cat.id}`}>
                        <Button>Update Cat</Button>
                        </NavLink>
                        &nbsp; &nbsp;
                        <NavLink to={"/catindex"}>
                        <Button onClick={() => this.props.deleteCat(cat.id)}>Delete Cat</Button>
                        </NavLink>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default CatShow