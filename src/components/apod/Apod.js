import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchApodOfDate } from '../../helpers/actions/apodActions';
import { startLoading, stopLoading } from '../../helpers/actions/actions';
import { Grid, Paper, Box } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';
import Img from './Img';
import ApodHeading from './ApodHeading';
import ApodDescription from './ApodDescription';
import moment from 'moment';
import CircularIndeterminate from '../ProgressView';

const Container = styled(Box)({
    padding: theme.spacing(3),
});

const Content = styled(Paper)({
    padding: theme.spacing(5),
});

class Apod extends Component {

    componentDidMount = async () => {
        const date = moment().format('YYYY-MM-DD');
        this.props.startLoading();
        await this.props.fetchApodOfDate(date);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.isLoading === this.props.isLoading ) {
            this.props.stopLoading();
        }
    }

    apodView = () => {
        return (
            <Container>
                <ApodHeading />
                <Content>
                <Grid container justify="space-around" spacing={5}>
                    <Grid item xs={6}>
                        <Img />
                    </Grid>
                    <Grid item xs={6}>
                        <ApodDescription />
                    </Grid>
                </Grid>
                </Content>
            </Container> 
        );
    }

    render() {   
        const { isLoading } = this.props;
        return ( 
            <React.Fragment>
                {isLoading ? <CircularIndeterminate /> : this.apodView() } 
            </React.Fragment>       
        );
    }
}

Apod.propTypes = {
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    clickedImg: PropTypes.bool.isRequired,
    fetchApodOfDate: PropTypes.func.isRequired,
    startLoading: PropTypes.func.isRequired,
    stopLoading: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    data: state.apodReducer.data,
    isLoading: state.apodReducer.isLoading,
    clickedImg: state.apodReducer.clickedImg,
})
 
export default connect(mapStateToProps, { fetchApodOfDate, startLoading, stopLoading })(Apod);