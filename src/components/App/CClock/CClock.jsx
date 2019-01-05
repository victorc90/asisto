import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { Grid, Container } from 'semantic-ui-react'

class CClock extends Component {
  render() {
    return (
      <Grid 
        verticalAlign='middle'
        style={{height: '87vh'}}
        >
        <Grid.Row>
          <Grid.Column>
            <Container
              textAlign='center'
              >
              <h1>
                <Clock 
                  format="h:mm:ss A" 
                  ticking={true} 
                  interval={1000}
                  style={{fontSize: '3.0em'}}
                />
              </h1>
              <Clock
                format={'dddd DD/MM/YYYY'}
                style={{fontSize: '1.5em'}}
              />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CClock;