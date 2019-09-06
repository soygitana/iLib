import React from 'react';

class PhoneFmt extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("componentDidMount!!", this.locale);
    }
    render() {
        return (
            <div>
                <table id="phonenumTable" cellpadding="0" cellspacing="0" class="display">
                <thead>
                    <tr><th>Phone Number Category </th><th>Input</th><th>Output-partial number</th><th>Output-whole number </th></tr>
                </thead>
                <tbody id="phoneNumTable"></tbody>
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

export default PhoneFmt;