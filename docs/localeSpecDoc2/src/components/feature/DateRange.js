import React from 'react';

class DateRange extends React.Component {
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
                    <td rowspan="4">within 3 days <br/><br/>
                    Year, month, and date ar same. <br/> but time is different </td>
                    <td id="cfmt0full"/><td id="cfmt0fullFmt"/><td id="cfmt0fullSample"/>
                </tr>
                <tr><td id="cfmt0long"/><td id="cfmt0longFmt"/><td id="cfmt0longSample"/></tr>
                <tr><td id="cfmt0medium"/><td id="cfmt0mediumFmt"/><td id="cfmt0mediumSample"/></tr>
                <tr><td id="cfmt0short"/><td id="cfmt0shortFmt"/><td id="cfmt0shortSample"/></tr>
                <tr>
                    <td rowspan="4">within 3 days <br/><br/>
                        Year and month are same, <br />but date and time are different
                    </td><td id="cfmt1full"/><td id="cfmt1fullFmt"/><td id="cfmt1fullSample"/>
                </tr>
                <tr><td id="cfmt1long"/><td id="cfmt1longFmt"/><td id="cfmt1longSample"/></tr>
                <tr><td id="cfmt1medium"/><td id="cfmt1mediumFmt"/><td id="cfmt1mediumSample"/></tr>
                <tr><td id="cfmt1short"/><td id="cfmt1shortFmt"/><td id="cfmt1shortSample"/></tr>
    
                    <tr>
                        <td rowspan="4">within 3 days <br/><br/>
                             Year is same, <br/>but month, date, and time are different.
                        </td><td id="cfmt2full"/><td id="cfmt2fullFmt"/><td id="cfmt2fullSample"/>
                    </tr>
                    <tr><td id="cfmt2long"/><td id="cfmt2longFmt"/><td id="cfmt2longSample"/></tr>
                    <tr><td id="cfmt2medium"/><td id="cfmt2mediumFmt"/><td id="cfmt2mediumSample"/></tr>
                    <tr><td id="cfmt2short"/><td id="cfmt2shortFmt"/><td id="cfmt2shortSample"/></tr>
    
                    <tr>
                        <td rowspan="4">within 3 days <br/><br/>
                            Year, month, date, and time are all different.
                        </td><td id="cfmt3full"/><td id="cfmt3fullFmt"/><td id="cfmt3fullSample"/>
                    </tr>
                    <tr><td id="cfmt3long"/><td id="cfmt3longFmt"/><td id="cfmt3longSample"/></tr>
                    <tr><td id="cfmt3medium"/><td id="cfmt3mediumFmt"/><td id="cfmt3mediumSample"/></tr>
                    <tr><td id="cfmt3short"/><td id="cfmt3shortFmt"/><td id="cfmt3shortSample"/></tr>
                <tr>
                <td rowspan="4">within 730 (2 yeaers) days <br/><br/>
                    Year and month are the same,<br/> but date is different.
                </td><td id="cfmt10full"/><td id="cfmt10fullFmt"/><td id="cfmt10fullSample"/>
                </tr>
                <tr><td id="cfmt10long"/><td id="cfmt10longFmt"/><td id="cfmt10longSample"/></tr>
                <tr><td id="cfmt10medium"/><td id="cfmt10mediumFmt"/><td id="cfmt10mediumSample"/></tr>
                <tr><td id="cfmt10short"/><td id="cfmt10shortFmt"/><td id="cfmt10shortSample"/></tr>
            <tr>
                <td rowspan="4">within 730 days (2 yeaers) <br/><br/>
                    Year is the same, <br/>but month, date, and time are different.
                </td><td id="cfmt11full"/><td id="cfmt11fullFmt"/><td id="cfmt11fullSample"/>
            </tr>
            <tr><td id="cfmt11long"/><td id="cfmt11longFmt"/><td id="cfmt11longSample"/></tr>
            <tr><td id="cfmt11medium"/><td id="cfmt11mediumFmt"/><td id="cfmt11mediumSample"/></tr>
            <tr><td id="cfmt11short"/><td id="cfmt11shortFmt"/><td id="cfmt11shortSample"/></tr>

            <tr>
                <td rowspan="4">within 730 days (2 yeaers) <br/><br/>
                    All fields are different.
                </td><td id="cfmt12full"/><td id="cfmt12fullFmt"/><td id="cfmt12fullSample"/>
            </tr>
            <tr><td id="cfmt12long"/><td id="cfmt12longFmt"/><td id="cfmt12longSample"/></tr>
            <tr><td id="cfmt12medium"/><td id="cfmt12mediumFmt"/><td id="cfmt12mediumSample"/></tr>
            <tr><td id="cfmt12short"/><td id="cfmt12shortFmt"/><td id="cfmt12shortSample"/></tr>

            <tr>
                <td rowspan="4">within 3650 days (10 yeaers) <br/><br/>
                    All fields are different.
                </td><td id="cfmt20full"/><td id="cfmt20fullFmt"/><td id="cfmt20fullSample"/>
            </tr>
            <tr><td id="cfmt20long"/><td id="cfmt20longFmt"/><td id="cfmt20longSample"/></tr>
            <tr><td id="cfmt20medium"/><td id="cfmt20mediumFmt"/><td id="cfmt20mediumSample"/></tr>
            <tr><td id="cfmt20short"/><td id="cfmt20shortFmt"/><td id="cfmt20shortSample"/></tr>

            <tr>
                <td rowspan="4">longer than 10 years <br/><br/>
                    All fields are different.
                </td><td id="cfmt30full"/><td id="cfmt30fullFmt"/><td id="cfmt30fullSample"/>
            </tr>
            <tr><td id="cfmt30long"/><td id="cfmt30longFmt"/><td id="cfmt30longSample"/></tr>
            <tr><td id="cfmt30medium"/><td id="cfmt30mediumFmt"/><td id="cfmt30mediumSample"/></tr>
            <tr><td id="cfmt30short"/><td id="cfmt30shortFmt"/><td id="cfmt30shortSample"/></tr>
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

export default DateRange;