import React from 'react';

class DateTranslation extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("componentDidMount!!", this.locale);
    }
    render() {
        return (
            <div>
                <table cellpadding ="0" cellspacing ="0">
                    <thead>
                    <tr>
                        <th>Days and Months</th><th>delimiter</th><th>Full</th><th>Long</th><th>Medium</th><th>Short</th>
                    </tr>
                    </thead>
                <tbody>
                    <tr>
                      <td rowspan="7">Weekday</td>
                      <td>0</td><td id="sunfull" /><td id="sunlong"/><td id="sunmedium"/><td id="sunshort"/>
                    </tr>
                    <tr><td>1</td><td id="monfull" /><td id="monlong"/><td id="monmedium"/><td id="monshort"/></tr>
                    <tr><td>2</td><td id="tuefull" /><td id="tuelong"/><td id="tuemedium"/><td id="tueshort"/></tr>
                    <tr><td>3</td><td id="wedfull" /><td id="wedlong"/><td id="wedmedium"/><td id="wedshort"/></tr>
                    <tr><td>4</td><td id="thufull" /><td id="thulong"/><td id="thumedium"/><td id="thushort"/></tr>
                    <tr><td>5</td><td id="frifull" /><td id="frilong"/><td id="frimedium"/><td id="frishort"/></tr>
                    <tr><td>6</td><td id="satfull" /><td id="satlong"/><td id="satmedium"/><td id="satshort"/></tr>
                    <tr>
                        <td rowspan="13">Month</td><td>1</td><td id="janfull"/><td id="janlong"/><td id="janmedium"/><td id="janshort"/>
                    </tr>
                    <tr><td>2</td><td id="febfull"/><td id="feblong"/><td id="febmedium"/><td id="febshort"/></tr>
                    <tr><td>3</td><td id="marfull"/><td id="marlong"/><td id="marmedium"/><td id="marshort"/></tr>
                    <tr><td>4</td><td id="aprfull"/><td id="aprlong"/><td id="aprmedium"/><td id="aprshort"/></tr>
                    <tr><td>5</td><td id="mayfull"/><td id="maylong"/><td id="maymedium"/><td id="mayshort"/></tr>
                    <tr><td>6</td><td id="junfull"/><td id="junlong"/><td id="junmedium"/><td id="junshort"/></tr>
                    <tr><td>7</td><td id="julfull"/><td id="jullong"/><td id="julmedium"/><td id="julshort"/></tr>
                    <tr><td>8</td><td id="augfull"/><td id="auglong"/><td id="augmedium"/><td id="augshort"/></tr>
                    <tr><td>9</td><td id="sepfull"/><td id="seplong"/><td id="sepmedium"/><td id="sepshort"/></tr>
                    <tr><td>10</td><td id="octfull"/><td id="octlong"/><td id="octmedium"/><td id="octshort"/></tr>
                    <tr><td>11</td><td id="novfull"/><td id="novlong"/><td id="novmedium"/><td id="novshort"/></tr>
                    <tr><td>12</td><td id="decfull"/><td id="declong"/><td id="decmedium"/><td id="decshort"/></tr>
                    <tr><td id="extraLength"></td><td id="etcfull"/><td id="etclong"/><td id="etcmedium"/><td id="etcshort"/></tr>
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

export default DateTranslation;