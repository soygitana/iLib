import React from 'react';

class DateFmt extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("componentDidMount!!", this.locale);
    }
    render() {
        return (
            <div>
                <table cellpadding="0" cellspacing="0">
                <thead>
                    <tr><th>Date / Time</th><th>length</th><th>Output Format</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="4">Date / Time</td><td id="dtfull"/><td id="dtfullFmt"/><td id="dtfullSample"/>
                    </tr>
                    <tr><td id="dtlong"/><td id="dtlongFmt"/><td id="dtlongSample"/></tr>
                    <tr><td id="dtmedium"/><td id="dtmediumFmt"/><td id="dtmediumSample"/></tr>
                    <tr><td id="dtshort"/><td id="dtshortFmt"/><td id="dtshortSample"/></tr>
                    <tr><td rowspan="4">Date </td><td id="datefull"/><td id="datefullFmt"/><td id="datefullSample"/>
                    </tr>
                    <tr><td id="datelong"/><td id="datelongFmt"/><td id="datelongSample"/></tr>
                    <tr><td id="datemedium"/><td id="datemediumFmt"/><td id="datemediumSample"/></tr>
                    <tr><td id="dateshort"/><td id="dateshortFmt"/><td id="dateshortSample"/></tr>
                    <tr><td rowspan="4">Time </td><td id="timefull"/><td id="timefullFmt"/><td id="timefullSample"/></tr>
                    <tr><td id="timelong"/><td id="timelongFmt"/><td id="timelongSample"/></tr>
                    <tr><td id="timemedium"/><td id="timemediumFmt"/><td id="timemediumSample"/></tr>
                    <tr><td id="timeshort"/><td id="timeshortFmt"/><td id="timeshortSample"/></tr>
                </tbody>
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

export default DateFmt;