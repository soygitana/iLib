import React from 'react';

const Title = (props) => {
    return(
        <div>
            <h3>{props.text}</h3>
        </div>
    );
}

/*
featureTitle.propTypes = {
    text:PropTypes.string
};
*/

export default Title;
