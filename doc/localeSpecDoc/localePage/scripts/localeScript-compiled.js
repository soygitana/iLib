$(function(){var d=parent.document.all.iframeName.value||"en-GB";console.log("transferredLocale: ",d);ilib.setLocale(d);var d=ilib.getLocale(),f=new LocaleInfo(d),b="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");$("#systemLocale").text(d);$("#localedescription").text(f.getLanguageName()+" , "+f.getRegionName()+" ("+f.getScript()+")");$("#defaultCalendar").text(f.getCalendar());$("#clock").text(f.getClock());$("#defaultCurrency").text(f.getCurrency());$("#weekStart").text(b[f.getFirstDayOfWeek()]);
$("#weekendStart").text(b[f.getWeekEndStart()]);$("#weekendEnd").text(b[f.getWeekEndEnd()]);var e=[],b=[],c=[],h=[],k=[],l=[],m=[],g=[],a=["full","long","medium","short"],r="jan feb mar apr may jun jul aug sep oct nov dec etc".split(" "),n="sun mon tue wed thu fri sat".split(" "),p=0,q=0;for(i=0;7>i;i++)for(e[i]="am-ET"===d?new DateFactory({year:2015,month:8,day:i+7,type:f.getCalendar()}):new DateFactory({year:2015,month:8,day:i+2,type:f.getCalendar()}),j=0;4>j;j++)b[j]=new DateFmt({locale:d,date:"w",
length:a[j],useNative:!1,timezone:"local"}),c[i]=b[j].format(e[i]),h[p]=c[i],m[p]=n[i]+a[j],p++;n="am-ET"===d||"en-ET"===d?13:12;for(i=0;i<n;i++)for(e[i]=new DateFactory({month:i+1,type:f.getCalendar()}),j=0;4>j;j++)b[j]=new DateFmt({locale:d,date:"m",length:a[j],useNative:!1,timezone:"local"}),c[i]=b[j].format(e[i]),k[q]=c[i],l[q]=r[i]+a[j],q++;for(i=0;i<m.length+1;i++)$("#"+m[i]).text(h[i]);for(i=0;i<l.length+1;i++)$("#"+l[i]).text(k[i]);"am-ET"!==d&&"en-ET"!==d||$("#extraLength").text("13");e=
[];c=0;b=DateFmt.getMeridiemsRange({locale:d});for(i=0;i<b.length;i++)e[i]="<tr><td id='rangea"+c.toString()+"' /><td id='stringa"+c.toString()+"' />",$("#meridiemTable").append(e[c]),$("#rangea"+c).text(b[i].start+" ~ "+b[i].end),$("#stringa"+c).text(b[i].name),c++;e=new GregorianDate({locale:d,year:2015,month:8,day:5,hour:13,minute:45,second:0});for(c=i=0;4>i;i++,c++)b[i]=new DateFmt({locale:d,type:"datetime",length:a[i],useNative:!1,timezone:"local"}),g[c]=b[i],$("#dt"+a[i]).text(a[i]),$("#dt"+
a[i]+"Fmt").text(g[i].template),$("#dt"+a[i]+"Sample").text(g[i].format(e));h=[];for(c=i=0;4>i;i++,c++){b[i]=new DateFmt({locale:d,type:"date",date:"dmwy",length:a[i],useNative:!1,timezone:"local"});g[c]=b[i];$("#date"+a[i]).text(a[i]);h[i]=g[i].template;$("#date"+a[i]+"Fmt").text(h[i]);for(j=k=0;j<h[i].length;j++)"M"===h[i][j]&&k++;switch(k){case 4:$("#date"+a[i]+"Fmt").css("color","red");break;case 3:$("#date"+a[i]+"Fmt").css("color","#DAA520");break;case 2:$("#date"+a[i]+"Fmt").css("color","green");
break;case 1:$("#date"+a[i]+"Fmt").css("color","blue");break;default:$("#date"+a[i]+"Fmt").css("color","#4B0082")}$("#date"+a[i]+"Sample").text(g[i].format(e))}for(c=i=0;4>i;i++,c++)b[i]=new DateFmt({locale:d,type:"time",time:"ahmsz",length:a[i],useNative:!1,timezone:"local"}),g[c]=b[i],$("#time"+a[i]).text(a[i]),$("#time"+a[i]+"Fmt").text(g[i].template),"full"===a[i]&&(-1!==g[i].template.indexOf("H")?$("#time"+a[i]+"Fmt").css("color","#FF1493"):$("#time"+a[i]+"Fmt").css("color","#00BFFF")),$("#time"+
a[i]+"Sample").text(g[i].format(e));e=new DateFactory({year:2011,month:11,day:20,hour:13,minute:45,second:0,type:f.getCalendar()});h=new DateFactory({year:2013,month:1,day:31,hour:14,minute:30,second:0,type:f.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:d,length:a[i],useNative:!1}),g[c]=b[i],$("#daterng"+a[i]).text(a[i]),$("#daterng"+a[i]+"Sample").text(g[i].format(e,h));durationNumberSample={"af-Za":[1,2],"sq-AL":[1,16],"sq-ME":[1,17],"am-ET":[1,18],"ar-DZ":[1,2,3,11,100],"ar-BH":[1,
2,10,26,102],"ar-DJ":[1,2,103,26,200],"ar-EG":[1,2,110,112,202],"ar-IQ":[1,2,3,11,100],"ar-JO":[1,2,103,99],"ar-KW":[1,2,3,11,100],"ar-LB":[1,2,3,11,100],"ar-LY":[1,2,3,11,100],"ar-MR":[1,2,3,11,100],"ar-MA":[1,2,3,11,100],"ar-OM":[1,2,3,11,100],"ar-QA":[1,2,3,11,100],"ar-SA":[1,2,3,11,100],"ar-SD":[1,2,3,11,100],"ar-SY":[1,2,3,11,100],"ar-TN":[1,2,3,11,100],"ar-AE":[1,2,3,11,100],"ar-YE":[1,2,3,11,100],"as-IN":[1,2],"bn-IN":[1,18],"bs-BA":[1,4,5],"bs-ME":[1,2,21],"bg-BG":[1,2],"zh-Hans-CN":[1],"zh-Hans-MY":[15],
"zh-Hans-SG":[16],"zh-Hant-HK":[2],"zh-Hant-TW":[1],"hr-HR":[1,2,5],"hr-ME":[1,4,19],"cs-CZ":[1,2],"da-DK":[1,2],"nl-BE":[1,2],"nl-NL":[1,2],"en-AM":[1,2],"en-AU":[1,16],"en-AZ":[1,17],"en-CA":[1,2],"en-CN":[1,2],"en-ET":[1,2],"en-GM":[1,2],"en-GE":[1,2],"en-GH":[1,2],"en-GB":[1,2],"en-HK":[1,2],"en-IS":[1,2],"en-IN":[1,2],"en-IE":[1,2],"en-JP":[1,2],"en-KE":[1,2],"en-LR":[1,2],"en-MW":[1,2],"en-MY":[1,2],"en-MX":[1,2],"en-MM":[1,2],"en-NZ":[1,2],"en-NG":[1,2],"en-PK":[1,2],"en-PH":[1,2],"en-PR":[1,
2],"en-KR":[1,2],"en-RW":[1,2],"en-SL":[1,2],"en-SG":[1,2],"en-ZA":[1,2],"en-LK":[1,2],"en-SD":[1,2],"en-TW":[1,2],"en-UG":[1,2],"en-TZ":[1,2],"en-US":[1,2],"en-ZM":[1,2],"et-EE":[1,2],"fa-AF":[1,2],"fa-IR":[1,18],"fi-FI":[1,17],"fr-DZ":[1,2],"fr-BE":[1,16],"fr-BJ":[1,17],"fr-BF":[1,2],"fr-CM":[1,16],"fr-CA":[1,17],"fr-CF":[1,2],"fr-CG":[1,16],"fr-CD":[1,17],"fr-DJ":[1,2],"fr-GQ":[1,16],"fr-FR":[1,17],"fr-GA":[1,2],"fr-GN":[1,16],"fr-CI":[1,17],"fr-LB":[1,2],"fr-LU":[1,16],"fr-ML":[1,17],"fr-RW":[1,
2],"fr-SN":[1,16],"fr-CH":[1,17],"fr-TG":[1,2],"ga-IE":[1,2,3,7,11],"de-AT":[1,2],"de-DE":[1,16],"de-LU":[1,17],"de-CH":[1,2],"el-CY":[1,2],"el-GR":[1,17],"gu-IN":[1,2],"ha-Latn-NG":[1,2],"he-IL":[1,2],"hi-IN":[1,2],"hu-HU":[1,17],"id-ID":[1,2],"it-IT":[1,2],"it-CH":[1,17],"ja-JP":[1,16],"kn-IN":[1,2],"kk-KZ":[1,2],"ko-KR":[1,2],"ku-IQ":[1,2],"lv-LV":[10,21,9],"lt-LT":[21,9,11],"mk-MK":[1,2],"ms-MY":[1,2],"ms-SG":[1,2],"ml-IN":[1,2],"mr-IN":[1,18],"mn-Cyrl-MN":[1,2,3],"nb-NO":[1,2],"or-IN":[1,17],
"pa-IN":[1,2],"pa-Arab-PK":[1,18],"pl-PL":[1,2,5],"pt-AO":[1,2],"pt-BR":[1,17],"pt-CV":[1,18],"pt-GQ":[1,2],"pt-PT":[1,17],"ro-RO":[1,2,20],"ru-BY":[1,2,5],"ru-GE":[21,4,19],"ru-KZ":[31,22,20],"ru-KG":[41,24,25],"ru-RU":[31,32,19],"ru-UA":[1,2,5],"sr-Latn-RS":[1,2,5],"sr-Cyrl-RS":[1,4,20],"sk-SK":[1,2,5],"sl-SI":[1,2,3,5],"es-AR":[1,2],"es-BO":[1,16],"es-CA":[1,17],"es-CL":[1,2],"es-CO":[1,16],"es-CR":[1,17],"es-DO":[1,2],"es-EC":[1,16],"es-SV":[1,17],"es-GQ":[1,2],"es-GT":[1,16],"es-HN":[1,17],"es-MX":[1,
2],"es-NI":[1,16],"es-PA":[1,17],"es-PY":[1,2],"es-PE":[1,16],"es-PH":[1,17],"es-PR":[1,2],"es-ES":[1,16],"es-US":[1,17],"es-UY":[1,2],"es-VE":[1,16],"sv-FI":[1,2],"sv-SE":[1,17],"ta-IN":[1,2],"te-IN":[1,16],"th-TH":[1,16],"tr-AM":[1,2],"tr-AZ":[1,16],"tr-CY":[1,17],"tr-TR":[1,2],"uk-UA":[1,2,5],"ur-IN":[1,2],"ur-PK":[1,17],"uz-Latn-UZ":[1,2],"vi-VN":[1,2]};b=durationNumberSample[d];e=[];timeRow=[];for(i=0;i<b.length;i++)for(j=c=0;4>j;j++)e[j]="<tr class='gradeA'><td id=subject"+a[j]+"num"+i+" /><td id=durFmtLength"+
a[j]+"num"+i+" /><td id=durFmtResult"+a[j]+"num"+i+"/>",$("#durationTable").append(e[j]),timeRow[j]="<tr class='gradeA'><td id=timesubject"+a[j]+"num"+i+" /><td id=timedurFmtLength"+a[j]+"num"+i+" /><td id=timedurFmtResult"+a[j]+"num"+i+"/>",$("#durationTimeTable").append(timeRow[j]),c++;durDate=[];rangefmt=[];durfmtArray=[];timerangefmt=[];timedurfmtArray=[];for(i=0;i<b.length;i++)for(c=j=0;4>j;j++,c++)rangefmt[j]=new DurationFmt({locale:d,style:"text",length:a[j],useNative:!1}),durfmtArray[c]=rangefmt[j],
$("#durFmtLength"+a[j]+"num"+i).text(a[j]),durationDateSample={year:b[i],month:b[i],week:b[i],day:b[i]},$("#durFmtResult"+a[j]+"num"+i).text(durfmtArray[j].format(durationDateSample).toString()),timerangefmt[j]=new DurationFmt({locale:d,style:"clock",length:a[j],useNative:!1}),timedurfmtArray[c]=rangefmt[j],$("#timedurFmtLength"+a[j]+"num"+i).text(a[j]),durationDateSample={year:b[i],month:b[i],week:b[i],day:b[i]},$("#timedurFmtResult"+a[j]+"num"+i).text(durfmtArray[j].format(durationDateSample).toString());
$("#subjectfullnum0").attr("rowSpan",4*b.length);$("#subjectfullnum0").text("Date");$("#timesubjectfullnum0").attr("rowSpan",4*b.length);$("#timesubjectfullnum0").text("Time");for(i=1;i<b.length;i++)for(j=0;4>j;j++)$("#subject"+a[j]+"num"+i).remove(),$("#timesubject"+a[j]+"num"+i).remove();$("#subjectlongnum0").remove();$("#subjectmediumnum0").remove();$("#subjectshortnum0").remove();$("#timesubjectlongnum0").remove();$("#timesubjectmediumnum0").remove();$("#timesubjectshortnum0").remove();b=new NumFmt({locale:d,
type:"standard"});$("#numDecimalSymbol").text(f.getDecimalSeparator());$("#numDecimal").text(b.format(1.734));b=new NumFmt({locale:d,style:"standard"});$("#numGroupSymbol").text(f.getGroupingSeparator());$("#numGroupFmt").text(b.format(1.234567894E8));b=new NumFmt({locale:d,type:"percentage"});$("#numPercentSymbol").text(f.getPercentageSymbol());$("#numPercent").text(b.format(34));b=new NumFmt({locale:d,type:"currency",currency:f.getCurrency()});$("#numCurrencySymbol").text(b.sign);$("#numCurrency").text(b.format(57.05));
b=new NumFmt({locale:d});$("#numPlus").text(b.format(572));$("#numMinus").text(b.format(-37));phoneNumberList={"de-DE":["038852123456","0033112345678","016512345678"],"de-LU":["501234","00352123456","661234567"],"en-AU":["0287654321","001661256781234","0419212345"],"en-GB":["02034523434","0033112345678","0751234567"],"en-HK":["61234567","00133112345678","61234567"],"en-IE":["040412345678","0033112345678","0851234567"],"en-IN":["01112345678","00911112345678","9127654321"],"en-NZ":["033452343","006431234567",
"0211234567"],"en-SG":["61234567","00133112345678","81234567"],"en-US":["4563453434","01133112345678"],"es-ES":["912123456","0034957123456","616846357"],"es-MX":["015512345678","0033112345678","04412345678"],"fr-FR":["0412345678","0033112345678","0612345678"],"it-IT":["096212345678","00390612345678","3991234567"],"ja-JP":["0152410670","01014084567890","09017901357"],"ko-KR":["03134523434","00233112345678","01012345678"],"nl-BE":["0601234567","003221234567","0491234567"],"nl-NL":["0255123456","0031201234567",
"0612345678"],"pt-BR":["0211123456789","004114084567890","923456789"],"ru-RU":["88122345678","81014084567890","89012345678"],"zh-Hans-CN":["010 12345678","0033112345678","15005179573"],"zh-CN":["010 12345678","0033112345678","15005179573"],"zh-Hant-TW":["039606537","00214084567890","0912345678"],"zh-TW":["039606537","00214084567890","0912345678"]};e=[];f=["local","international","mobile"];a=phoneNumberList[d];if(void 0!==a){for(i=0;i<a.length;i++)for(j=c=0;j<a[i].length;j++)e[j]="<tr class='gradeA'><td id="+
f[i]+"subject"+c+" /><td id="+f[i]+"inputNum"+c+" /><td id="+f[i]+"partialFmt"+c+"/><td id="+f[i]+"wholeFmt"+c+" />",$("#phoneNumTable").append(e[c]),c++;g=[];e=[];b=new PhoneFmt({locale:d});c=[];h=[];for(i=0;i<a.length;i++)for(j=0;j<a[i].length;j++)g[j]=a[i].substring(0,j+1),0===i?($("#localinputNum"+j).text(g[j]),e[j]=new PhoneNumber(g[j],{locale:d}),h[j]=b.format(e[j],{partial:!0}),$("#localpartialFmt"+j).text(h[j]),c[j]=b.format(e[j]),$("#localwholeFmt"+j).text(c[j])):1===i?($("#internationalinputNum"+
j).text(g[j]),e[j]=new PhoneNumber(g[j],{locale:d}),h[j]=b.format(e[j],{partial:!0}),$("#internationalpartialFmt"+j).text(h[j]),c[j]=b.format(e[j]),$("#internationalwholeFmt"+j).text(c[j])):2===i&&($("#mobileinputNum"+j).text(g[j]),e[j]=new PhoneNumber(g[j],{locale:d}),h[j]=b.format(e[j],{partial:!0}),$("#mobilepartialFmt"+j).text(h[j]),c[j]=b.format(e[j]),$("#mobilewholeFmt"+j).text(c[j]));for(i=0;i<a.length;i++)for($("#"+f[i]+"subject0").attr("rowSpan",a[i].length),$("#"+f[i]+"subject0").text(f[i]),
j=1;j<a[i].length;j++)$("#"+f[i]+"subject"+j).remove()}else e[0]="<tr><td colspan='4' align='center'>Not supported yet </td>",$("#phoneNumTable").append(e[0]);$("tr").addClass("gradeA");$("td").addClass("table-border-underine")});
