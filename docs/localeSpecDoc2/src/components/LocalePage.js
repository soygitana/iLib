import React from "react";
import FeatureTitle from "./feature/Title"
import BasicInfo from "./feature/BasicInfo"
import NumberFmt from "./feature/NumberFmt"

const titleList = [
    "Basic Information",
    "Names of the Day and Months",
    "Range of the Meridiem Units",
    "Date Format: Date/Time",
    "Date Format: Date Range",
    "Date Format: Date Range",
    "Date Format: Number",
    "Date Format: Phone Number"
]

const LocalePage = (props) => {
    return (
        <div> 
            <FeatureTitle text={titleList[0]} />
            <BasicInfo />
            <FeatureTitle text={titleList[1]} />
            <FeatureTitle text={titleList[2]} />
            <FeatureTitle text={titleList[3]} />
            <FeatureTitle text={titleList[4]} />
            <FeatureTitle text={titleList[5]} />
            <FeatureTitle text={titleList[6]} />
            <NumberFmt />
            <FeatureTitle text={titleList[7]} />
        </div>
    );
}

export default LocalePage;