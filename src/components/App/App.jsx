import React, { Component } from 'react';
import { Divider, Grid, Segment, Container, Icon } from 'semantic-ui-react'
import CClock from './CClock/CClock';
import Header from './Header/Header';
import PersonItem from './PersonItem/PersonItem';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
              <CClock />
          </Grid.Column>

          <Grid.Column>
              <PersonItem />
              <PersonItem />
          </Grid.Column>
        </Grid>
        <Divider vertical>
          <Icon name='external alternate'/>
        </Divider>
      </Segment>
      </Container>
    );
  }
}

export default App;
