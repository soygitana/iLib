import React from 'react';

class NumberFmt extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("componentDidMount!!", this.locale);
    }
    render() {
        return (
            <div>
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr><th>Number</th><th>Output Format</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Decimal Seperator</td><td id="numDecimalSymbol"/><td id="numDecimal"/></tr>
                        <tr><td>Number Grouping</td><td id="numGroupSymbol"/><td id="numGroupFmt"/></tr>
                        <tr><td>Percent</td><td id="numPercentFmt"/><td id="numPercent"/></tr>
                        <tr><td>Negative Percent</td><td id="numNegativePercentFmt"/><td id="numNegativePercent"/></tr>
                        <tr><td>Currency</td><td id="numCurrencyFmt"/><td id="numCurrency"/></tr>
                        <tr><td>Negative Currency</td><td id="numNegativeCurrencyFmt"/><td id="numNegativeCurrency"/></tr>
                        <tr><td>Plus</td><td id="numFmt"/><td id="numPlus"/></tr>
                        <tr><td>Minus</td><td id="numNegativeFmt"/><td id="numMinus"/></tr>
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

export default NumberFmt;