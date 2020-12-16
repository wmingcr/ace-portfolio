import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Heyao Liu</h2>
            <img
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/131744810_217557026490591_8329519444058341009_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=3FiajJF22SwAX8yjgew&_nc_ht=scontent-sjc3-1.xx&oh=32e848aba7b77eb50fc8df4f435095b5&oe=60006BC6"
              alt="avatar"
              style={{height: '255px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
              {/**/`Feel free to contact me by any ways`}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (408) 759-0175
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (408) 759-0175
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    liu.heyao@northeastern.edu
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-wechat" aria-hidden="true"/>
                    4087590175
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
