import React from "react";
import FeatureTitle from "./feature/Title"
import BasicInfo from "./feature/BasicInfo"
import DateTranslation from "./feature/DateTranslation"
import Meridiem from "./feature/Meridiem"
import DateFmt from "./feature/DateFmt"
import DateRange from "./feature/DateRange"
import DateDuration from "./feature/DateDuration"
import NumberFmt from "./feature/NumberFmt"
import PhoneFmt from "./feature/PhoneFmt"

const titleList = [
    "Basic Information",
    "Names of the Day and Months",
    "Range of the Meridiem Units",
    "Date Format: Date/Time",
    "Date Format: Date Range",
    "Date Format: Date/Time Duration",
    "Date Format: Number",
    "Date Format: Phone Number"
]

const LocalePage = (props) => {
    return (
        <div style={{
            height:"1000px",
            weight: "900px",
            overflowY : 'scroll'
        }}
        >
            <FeatureTitle text={titleList[0]} />
            <BasicInfo />

            <FeatureTitle text={titleList[1]} />
            <DateTranslation />

            <FeatureTitle text={titleList[2]} />
            <Meridiem />

            <FeatureTitle text={titleList[3]} />
            <DateFmt />

            <FeatureTitle text={titleList[4]} />
            <DateRange />

            <FeatureTitle text={titleList[5]} />
            <DateDuration />

            <FeatureTitle text={titleList[6]} />
            <NumberFmt />

            <FeatureTitle text={titleList[7]} />
            <PhoneFmt />
        </div>
    );
}

export default LocalePage;