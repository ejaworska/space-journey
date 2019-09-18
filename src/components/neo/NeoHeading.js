import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import DateRangeSelector from './DateRangeSelector';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';

const TitleBox = styled(Box)({
    fontSize: "1.5rem",
    letterSpacing: '2px',
    color: theme.palette.text.primary,
});

const DateBox = styled(Box)({
    letterSpacing: '2px',
    marginBottom: '8px',
    color: theme.palette.text.primary,
});

class NeoHeading extends Component {
    
    render() { 
        return ( 
            <Box m={2}>
                <TitleBox>Near Earth Objects</TitleBox>
                <DateBox>
                    <DateRangeSelector />
                </DateBox>
            </Box>
         );
    }
}
   
export default NeoHeading;