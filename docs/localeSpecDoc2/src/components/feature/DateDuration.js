import React from 'react';

class DateDuration extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("componentDidMount!!", this.locale);
    }
    render() {
        return (
            <div>
            </div>  
        )
    }
}

/*
featureTitle.propTypes = {
    text:PropTypes.string
};
*/

export default DateDuration;