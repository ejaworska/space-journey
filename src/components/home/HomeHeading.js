import React, { Component } from 'react';
import { Box, Link } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';

const TitleBox = styled(Box)({
    fontSize: "1.3rem",
    letterSpacing: '2px',
    color: '#fff',
    marginBottom: '14%',
});

const HomeLink = styled(Link)({
    margin: theme.spacing(1),
    fontWeight: 'bold',
});

class HomeHeading extends Component {
    render() { 
        return ( 
            <TitleBox>
                Set out on a space journey with us, using 
                <HomeLink href={'https://data.nasa.gov/'}>
                    NASA
                </HomeLink>
                free data!
            </TitleBox>
         );
    }
}
 
export default HomeHeading;