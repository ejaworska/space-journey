import React, { Component } from 'react';
import theme from '../../helpers/theme';
import HomeHeading from './HomeHeading';
import { styled } from '@material-ui/styles';
import { Paper, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Container = styled(Box)({
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
});

const Content = styled(Box)({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center",
    height: '5vw'
});

const Description = styled(Box)({
    padding: theme.spacing(3), 
    maxWidth: '80%',
    textAlign: 'center',
    letterSpacing: '1px',
});

const DescriptionPaper = styled(Paper)({
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '80%',
    marginBottom: '5%',
})

class Home extends Component {

    render() { 
        return ( 
            <Container>
            <Content>
                <HomeHeading />
                <DescriptionPaper elevation={5}>
                    <Description>

                    <Box m={5} p={1}>
                    <Button variant="outlined" href='/apod'>
                        Expolore the Universe!
                    </Button>
                    <Box textAlign="center" pt={2} pb={1}>
                        Each day a different photograph of the Universe is featured, along with a brief 
                        explanation written by a professional astronomer
                    </Box>               
                    </Box>     
                
                    <Box m={5} p={1}>
                    <Button variant="outlined" href='/neo'>
                        Meet the newcomers!
                    </Button>
                    <Box textAlign="center" pt={2} pb={1}>
                        Retrieve a list of Asteroids based on their closest approach date to Earth
                    </Box>    
                    </Box>

                    </Description>  
                </DescriptionPaper>
            </Content>
            
            <Box >
                <img style={{maxWidth: '100%', height: 'auto'}} src={require('../../img/night.jpg')} alt='milky way'/>
            </Box>
            </Container> 
            );
    }
}
 
export default Home;