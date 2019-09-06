import React from 'react';

class Meridiems extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("componentDidMount!!", this.locale);
    }
    render() {
        return (
            <div>
                <table cellpadding="0" cellspacing="0" border="0" class="display">
                <thead>
                    <tr><th>Time Range</th><th>Meridiem</th></tr>
                </thead>
                <tbody id="meridiemTable"></tbody>
                </table>
            </div>  
        )
    }
}

/*
featureTitle.propTypes = {
    text:PropTypes.string
};
*/

export default Meridiems;