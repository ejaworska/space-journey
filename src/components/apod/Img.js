import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const style={ margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%'};

class Img extends Component {
        render() { 
        const { url, title } = this.props.data;
        return ( 
            <img src={url} alt={title} style={style}/>
         );
    }
}
 
Img.propTypes = {
    data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    data: state.apodReducer.data,
})
 
export default connect(mapStateToProps, {})(Img);