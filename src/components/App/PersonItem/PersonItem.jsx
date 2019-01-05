import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import imagen from './jenny.jpg';

class PersonItem extends Component {
  render() {
    return (
        <Card
            href='#card-example-link-card'
            fluid
            >
            <Card.Content
                textAlign = 'center'
                >
                <Image size='tiny' floated='left' src={imagen} circular/>
                <Card.Header><h1>Matthew Harris</h1></Card.Header>
                <Card.Meta><h2>Funcionario</h2></Card.Meta>
                <Card.Meta>Tercera Secretaria</Card.Meta>
            </Card.Content>
        </Card>
    );
  }
}

export default PersonItem;