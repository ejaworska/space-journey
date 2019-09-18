import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import DateSelector from './DateSelector';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';

const TitleBox = styled(Box)({
    fontSize: "1.5rem",
    letterSpacing: '2px',
    color: theme.palette.text.primary,
})

const DateBox = styled(Box)({
    letterSpacing: '2px',
    color: theme.palette.text.primary,
})

class ApodHeading extends Component {
    render() { 
        const { date } = this.props.data;
        return ( 
            <Box m={2}>
                <TitleBox>Astronomy Picture of the Day</TitleBox>
                <DateBox>
                    { date }<DateSelector />
                </DateBox>
            </Box>
         );
    }
}
 
ApodHeading.propTypes = {
    data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    data: state.apodReducer.data,
})
 
export default connect(mapStateToProps, {})(ApodHeading);