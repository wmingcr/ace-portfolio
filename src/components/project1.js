import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project1 extends Component {
    render (){
        return(
            <div>
                {/* project #1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'}}>
                        React Project #1
                    </CardTitle>

                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>

                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }
}

export default Project1;