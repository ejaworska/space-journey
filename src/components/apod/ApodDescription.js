import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Box } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';

const Title = styled(Box)({
    textAlign: 'left',
    fontStyle: 'italic',
    marginBottom: '4%',
    color: theme.palette.text.primary,
});

const Explanation = styled(Box)({
    textAlign: 'justify',
    color: theme.palette.text.primary,
});

class ApodDescription extends Component {
    render() { 
        const { explanation, title } = this.props.data;
        return ( 
            <Typography component="div">
                <Title >
                    {title}
                </Title>
                <Explanation>
                    {explanation}
                </Explanation>
            </Typography>
         );
    }
}
 
ApodDescription.propTypes = {
    data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    data: state.apodReducer.data,
})
 
export default connect(mapStateToProps, {})(ApodDescription);