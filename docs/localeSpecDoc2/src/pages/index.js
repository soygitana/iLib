import React from "react";
import { Link } from "gatsby"
import {withPrefix} from 'gatsby-link';

import Layout from "../components/Layout";
import LocalePage from "../components/LocalePage";

const localelist = {
      "Arabic - Egypt":"ar-EG",
      "Arabic - Iraq":"ar-IQ",
      "Arabic - Morocco":"ar-MA",
      "Assamese - India":"as-IN",
      "Azerbaijani - Azerbaijan":"az-Latn-AZ",
      "Bulgarian - Bulgaria":"bg-BG",
      "Bengali - India":"bn-IN", 
      "Bosnian - Bosnia Herzegovina":"bs-Latn-BA",
      "Bosnian - Montenegro":"bs-Latn-ME",
      "Czech - Czech Republic":"cs-CZ",
      "Danish - Denmark":"da-DK",
      "German - Austria":"de-AT",
      "German - Switzerland":"de-CH",
      "German - Germany":"de-DE",
      "German - Luxembourg":"de-LU",
      "Greek - Cyprus":"el-CY",
      "Greek - Greece":"el-GR",
      "English - Armenia" : "en-AM",
      "English - Australia":"en-AU",
      "English - Azerbaijan":"en-AZ",
      "English - Canada":"en-CA",
      "English - United Kingdom":"en-GB",
      "English - Ghana":"en-GH",
      "English - Hong Kong SAR China":"en-HK",
      "English - Ireland":"en-IE",
      "English - India":"en-IN",
      "English - Iceland":"en-IS",
      "English - Japan":"en-JP",
      "English - South Korea":"en-KR",
      "English - Kenya":"en-KE",
      "English - Sri Lanka":"en-LK",
      "English - Myanmar (Burma)":"en-MM",
      "English - Malawi":"en-MW",
      "English - Malaysia":"en-MY",
      "English - Nigeria":"en-NG",
      "English - New Zealand":"en-NZ",
      "English - Philippines":"en-PH",
      "English - Puerto Rico":"en-PR",
      "English - Singapore":"en-SG",
      "English - United States":"en-US",
      "English - Uganda":"en-UG",
      "English - South Africa":"en-ZA",
      "English - Zambia":"en-ZM",
      "Spanish - Argentina":"es-AR",
      "Spanish - Bolivia":"es-BO",
      "Spanish - Chile":"es-CL",
      "Spanish - Colombia":"es-CO",
      "Spanish - Dominican Republic":"es-DO",
      "Spanish - Ecuador":"es-EC",
      "Spanish - Spain":"es-ES",
      "Spanish - Guatamala":"es-GT",
      "Spanish - Honduras":"es-HN",
      "Spanish - Mexico":"es-MX",
      "Spanish - Nicaragua":"es-NI",
      "Spanish - Panama":"es-PA",
      "Spanish - Peru":"es-PE",
      "Spanish - Puerto Rico":"es-PR",
      "Spanish - Paraguay":"es-PY",
      "Spanish - El Salvador":"es-SV",
      "Spanish - United States":"es-US",
      "Spanish - Uruguay":"es-UY",
      "Spanish - Venezuela":"es-VE",
      "Estonian - Estonia":"et-EE",
      "Persian - Afghanistan":"fa-AF",
      "Persian - Iran":"fa-IR",
      "Finnish - Finland":"fi-FI",
      "French - Belgium":"fr-BE",
      "French - Canada":"fr-CA",
      "French - Switzerland":"fr-CH",
      "French - France":"fr-FR",
      "French - Luxembourg":"fr-LU",
      "Irish - Ireland":"ga-IE",
      "Gujarati - India":"gu-IN",
      "Hebrew - Israel":"he-IL",
      "Hindi - India":"hi-IN",
      "Croatian - Croatia":"hr-HR",
      "Croatian - Montenegro":"hr-ME",
      "Hungarian - Hungary":"hu-HU",
      "Indonesian - Indonesia":"id-ID",
      "Icelandic - Iceland":"is-IS",
      "Italian - Switzerland":"it-CH",
      "Italian - Italy":"it-IT",
      "Japanese - Japan":"ja-JP",
      "Kazakh - Kazakhstan":"kk-KZ",
      "Kannada - India":"kn-IN",
      "Khmer - Cambodia":"km-KH",
      "Korean - South Korea":"ko-KR",
      "Kurdish - Iraq":"ku-Arab-IQ",
      "Lithuanian - Lithuania":"lt-LT",
      "Latvian - Latvia":"lv-LV",
      "Macedonian - Former Yugoslav Republic of Macedonia":"mk-MK",
      "Malayalam - India":"ml-IN",
      "Marathi - India":"mr-IN",
      "Malay - Malaysia":"ms-Latn-MY",
      "Norwegian - Norway":"nb-NO",
      "Dutch - Belgium":"nl-BE",
      "Dutch - Netherlands":"nl-NL",
      "Punjabi - India":"pa-Guru-IN",
      "Polish - Poland":"pl-PL",
      "Portuguese - Brazil":"pt-BR",
      "Portuguese - Portugal":"pt-PT",
      "Romanian - Romania":"ro-RO",
      "Serbian - Cyrl -Serbia":"sr-Cyrl-RS",
      "Serbian - Latn - Serbia":"sr-Latn-RS",
      "Russian - Belarus":"ru-BY",
      "Russian - Kyrgyzstan":"ru-KG",
      "Russian - Kazakhstan":"ru-KZ",
      "Russian - Georgia":"ru-GE",
      "Russian - Russia":"ru-RU",
      "Russian - Ukraine":"ru-UA",
      "Sinhala - Sri Lanka":"si-LK",
      "Slovak - Slovakia":"sk-SK",
      "Slovene - Slovenia":"sl-SI",
      "Swahili - Kenya":"sw-Latn-KE",
      "Albanian - Albania":"sq-AL", 
      "Albanian - Montenegro":"sq-ME",
      "Swedish - Finland":"sv-FI",
      "Swedish - Sweden":"sv-SE",
      "Tamil - India":"ta-IN",
      "Telugu - India":"te-IN",
      "Thai - Thailand":"th-TH",
      "Turkish - Armenia":"tr-AM",
      "Turkish - Azerbaijan":"tr-AZ",
      "Turkish - Cyprus":"tr-CY",
      "Turkish - Turkey":"tr-TR",
      "Ukrainian - Ukraine":"uk-UA",
      "Urdu - India":"ur-IN",
      "Uzbek - Latn - Uzbekistan":"uz-Latn-UZ",
      "Vietnamese - Vietnam":"vi-VN",
      "Chinese - Hans - China":"zh-Hans-CN",
      "Chinese - Hant -  Hong Kong SAR China":"zh-Hant-HK",
      "Chinese - Hant - Taiwan":"zh-Hant-TW",
      "English - Georgia":"en-GE",
      "English - China":"en-CN",
      "English - Mexico":"en-MX",
      "English - Taiwan":"en-TW",
      "Mongolian - Mongolia":"mn-Cyrl-MN",
      "Spanish - Canada":"es-CA",
      "Afrikaans - South Africa":"af-ZA",
      "Amharic - Ethiopia":"am-ET",
      "Hausa - Nigeria":"ha-Latn-NG",
      "Odia - India":"or-IN",
      "Arabic - United Arab Emirates":"ar-AE",
      "Arabic - Bahrain":"ar-BH",
      "Arabic - Djibouti":"ar-DJ",
      "Arabic - Algeria":"ar-DZ",
      "Arabic - Jordan":"ar-JO",
      "Arabic - Kuwait":"ar-KW", 
      "Arabic - Lebanon":"ar-LB", 
      "Arabic - Libya":"ar-LY",
      "Arabic - Mauritania":"ar-MR",
      "Arabic - Oman":"ar-OM",
      "Arabic - Qatar":"ar-QA",
      "Arabic - Saudi Arabia":"ar-SA",
      "Arabic - Sudan":"ar-SD",
      "Arabic - Syria":"ar-SY",
      "Arabic - Tunisia":"ar-TN",
      "Arabic - Yemen":"ar-YE",
      "English - Ethiopia":"en-ET",
      "English - Gambia":"en-GM",
      "English - Liberia":"en-LR",
      "English - Pakistan":"en-PK",
      "English - Rwanda":"en-RW",
      "English - Sudan":"en-SD",
      "English - Sierra Leone":"en-SL",
      "English - Tanzania":"en-TZ",
      "Spanish - Costa Rica":"es-CR",
      "Spanish - Equatorial Guinea":"es-GQ",
      "Spanish - Philippines":"es-PH",
      "French - Burkina Faso":"fr-BF",
      "French - Benin":"fr-BJ",
      "French - Democratic Republic of the Congo":"fr-CD",
      "French - Central African Republic":"fr-CF",
      "French - Congo":"fr-CG",
      "French - Ivory Coast":"fr-CI",
      "French - Cameroon":"fr-CM",
      "French - Equatorial Guinea":"fr-GQ",
      "French - Djibouti":"fr-DJ",
      "French - Algeria":"fr-DZ",
      "French - Gabon":"fr-GA",
      "French - Guinea":"fr-GN",
      "French - Lebanon":"fr-LB",
      "French - Mali":"fr-ML",
      "French - Rwanda":"fr-RW",
      "French - Senegal":"fr-SN",
      "French - Togo":"fr-TG",
      "Malay - Singapore":"ms-Latn-SG",
      "Punjabi - Pakistan":"pa-Arab-PK",
      "Portuguese - Angola":"pt-AO",
      "Portuguese - Equitorial Guinea":"pt-GQ",
      "Portuguese - Cape Verde":"pt-CV",
      "Urdu - Pakistan":"ur-PK",
      "Chinese - Hans - Singapore":"zh-Hans-SG",
      "Chinese - Hans - Malaysia":"zh-Hans-MY"
};
 
const createINode = (selectedLocale) => {
    console.log("createINode!!", selectedLocale);
}

const Left = (props) => {
  const objKeys = Object.keys(localelist);
  
  const onClickedItem = (e) => {
    let clickedItem = e.target.innerHTML;
    let clickedItemValue = localelist[clickedItem];
    console.log(clickedItem, clickedItemValue);
    createINode(clickedItemValue);
  }; 

  return (
    <div style={{            
            height:"800px",
            overflowY : 'scroll'
        }}
        >  
        {objKeys.map(function(item, index) {
            return <div onClick={onClickedItem} key={localelist[item]}>{item}</div>;
            
        })}
    </div>
     
    )
}
/*
<h1>Hi peopledfsfsfsdf</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    ./localePage/localeRef.html
    <Iframe src="./localePage/localeRef.html" title="title!" id="localeref" width="500px" height="800px" frameBorder="0" />  
    <IframeComponent src="https://angular-todolist-materialui.stackblitz.io/" height="800px" width="500px"/>
    <iframe src={withPrefix('/static/index.html')} width="600px" height="800px"/>
    <iframe src={withPrefix('/static/index.html')} width="500px" height="800px"/>      
*/

const IndexPage = () => (
  <Layout Left={Left()} LocalePage={LocalePage()}>
  </Layout>
)

export default IndexPage
