import React, { Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'



class CatEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedCat: {
                name: this.props.cat.name,
                age: this.props.cat.age,
                enjoys: this.props.cat.enjoys,
                image: this.props.cat.image
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { updatedCat } = this.state
        updatedCat[e.target.name] = e.target.value
        this.setState({ updatedCat: updatedCat})
    }
    handleSubmit = () => {   
        this.props.updateCat(this.state.updatedCat, this.props.cat.id)
        this.setState({ submitted: true })
    }

    render() {
        return (
            <>

              <h2>Update your Prowlfile</h2>

              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={ this.state.updatedCat.name }
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="age">Age</Label>
                  <Input
                    type="text"
                    name="age"
                    onChange={this.handleChange}
                    value={ this.state.updatedCat.age }
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="enjoys">Enjoys</Label>
                  <Input
                    type="text"
                    name="enjoys"
                    onChange={this.handleChange}
                    value={ this.state.updatedCat.enjoys }
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="image">Image URL</Label>
                  <Input
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                    value={ this.state.updatedCat.image }
                  />
                </FormGroup>
                <Button onClick={this.handleSubmit} name="submit">
                  Update right meow!
                </Button>
                { this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`}/> }
                </Form>
            </>
        )
    }
}

export default CatEdit