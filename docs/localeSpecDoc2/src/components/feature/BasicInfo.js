import React from 'react';
import LocaleInfo from 'ilib/lib/LocaleInfo';
import ScriptInfo from 'ilib/lib/ScriptInfo';

class BasicInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            locale:"",
            localeDescription:""
        }

        this.locale = "ko-KR";
        const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.li = new LocaleInfo("ko-KR");
        this.scinfo = new ScriptInfo(this.li.getScript());
        //this.getData();

    }
    componentDidMount() {
        console.log("componentDidMount!!", this.locale);
        //this.state.localedescription = this.li.getLanguageName() + " , " + this.li.getRegionName() + " (" + this.li.getScript() + ")";
        this.locale = "ko-KR";
        this.li = new LocaleInfo("ko-KR");
        this.setState((prevState)=> {
            const fullName = this.li.getLanguageName() + " , " + this.li.getRegionName() + " (" + this.li.getScript() + ")";
            console.log("fullName: ", fullName);
            return {
                localeDescription: fullName
            }
        });
    }
    render() {
        console.log("BasicInfo: render");
        const subjectList = [
            "System Locale",
            "Locale Description",
            "Script Direction",
            "Default Calendar",
            "Clock",
            "Currency",
            "Week Start at",
            "Weekend Start at",
            "Weekend End at",
        ]
        const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (
            <div>
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr><th>Subject</th><th>Info</th></tr>
                    </thead>
                <tbody>
                    <tr><td className="" >{subjectList[0]}</td><td id="systemLocale" /></tr>
                    <tr><td>{subjectList[1]}</td><td id="localedescription" />{this.state.localedescription}</tr>
                    <tr><td>{subjectList[2]}</td><td id="scriptDirection" /></tr>
                    <tr><td>{subjectList[3]}</td><td  id="defaultCalendar" /></tr>
                    <tr><td>{subjectList[4]}</td><td id="clock" /></tr>
                    <tr><td>{subjectList[5]}</td><td id="defaultCurrency" /></tr>
                    <tr><td>{subjectList[6]}</td><td id="weekStart" /></tr>
                    <tr><td>{subjectList[7]}</td><td id="weekendStart" /></tr>
                    <tr><td>{subjectList[8]}</td><td id="weekendEnd" /></tr>
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

export default BasicInfo;