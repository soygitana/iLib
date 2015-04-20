var ilib=require("./ilib.js");
if(!ilib.CType)ilib.CType={};if(!ilib._roundFnc)ilib._roundFnc={};
if(!ilib.Date)ilib.Date=require("./DateFactory.js");
if(!ilib.Cal)ilib.Cal=require("./CalendarFactory.js");
if(!ilib.Measurement)ilib.Measurement=require("./MeasurementFactory.js");
if(!ilib.shallowCopy){ilib.shallowCopy=function(source, target){ilib.extend(ilib, require("./JSUtils.js"));return ilib.shallowCopy(source, target);};ilib.shallowCopy.stub=true;}
if(!ilib.deepCopy){ilib.deepCopy=function(from, to){ilib.extend(ilib, require("./JSUtils.js"));return ilib.deepCopy(from, to);};ilib.deepCopy.stub=true;}
if(!ilib.mapString){ilib.mapString=function(str, map){ilib.extend(ilib, require("./JSUtils.js"));return ilib.mapString(str, map);};ilib.mapString.stub=true;}
if(!ilib.indexOf){ilib.indexOf=function(array, obj){ilib.extend(ilib, require("./JSUtils.js"));return ilib.indexOf(array, obj);};ilib.indexOf.stub=true;}
if(!ilib.toHexString){ilib.toHexString=function(string, limit){ilib.extend(ilib, require("./JSUtils.js"));return ilib.toHexString(string, limit);};ilib.toHexString.stub=true;}
if(!ilib.isDate){ilib.isDate=function(object){ilib.extend(ilib, require("./JSUtils.js"));return ilib.isDate(object);};ilib.isDate.stub=true;}
if(!ilib.merge){ilib.merge=function(object1, object2, replace, name1, name2){ilib.extend(ilib, require("./JSUtils.js"));return ilib.merge(object1, object2, replace, name1, name2);};ilib.merge.stub=true;}
if(!ilib.isEmpty){ilib.isEmpty=function(obj){ilib.extend(ilib, require("./JSUtils.js"));return ilib.isEmpty(obj);};ilib.isEmpty.stub=true;}
if(!ilib.hashCode){ilib.hashCode=function(obj){ilib.extend(ilib, require("./JSUtils.js"));return ilib.hashCode(obj);};ilib.hashCode.stub=true;}
if(!ilib.Locale){ilib.Locale=function(language, region, variant, script){ilib.Locale=require("./Locale.js");return new ilib.Locale(language, region, variant, script);};ilib.Locale.stub=true;}
if(!ilib.mergeLocData){ilib.mergeLocData=function(prefix, locale, replaceArrays, returnOne){ilib.extend(ilib, require("./Utils.js"));return ilib.mergeLocData(prefix, locale, replaceArrays, returnOne);};ilib.mergeLocData.stub=true;}
if(!ilib.getLocFiles){ilib.getLocFiles=function(locale, name){ilib.extend(ilib, require("./Utils.js"));return ilib.getLocFiles(locale, name);};ilib.getLocFiles.stub=true;}
if(!ilib.loadData){ilib.loadData=function(params){ilib.extend(ilib, require("./Utils.js"));return ilib.loadData(params);};ilib.loadData.stub=true;}
if(!ilib.LocaleInfo){ilib.LocaleInfo=function(locale, options){ilib.LocaleInfo=require("./LocaleInfo.js");return new ilib.LocaleInfo(locale, options);};ilib.LocaleInfo.stub=true;}
if(!ilib.signum){ilib.signum=function(num){ilib.extend(ilib, require("./MathUtils.js"));return ilib.signum(num);};ilib.signum.stub=true;}
if(!ilib.mod){ilib.mod=function(dividend, modulus){ilib.extend(ilib, require("./MathUtils.js"));return ilib.mod(dividend, modulus);};ilib.mod.stub=true;}
if(!ilib.amod){ilib.amod=function(dividend, modulus){ilib.extend(ilib, require("./MathUtils.js"));return ilib.amod(dividend, modulus);};ilib.amod.stub=true;}
if(!ilib.String){ilib.String=function(string){ilib.String=require("./IString.js");return new ilib.String(string);};ilib.String.stub=true;}
if(!ilib.Cal.newInstance){ilib.Cal.newInstance=function(options){ilib.Cal.newInstance=require("./CalendarFactory.js");return ilib.Cal.newInstance(options);};ilib.Cal.newInstance.stub=true;}
if(!ilib.Cal.getCalendars){ilib.Cal.getCalendars=function(){ilib.Cal.getCalendars=require("./CalendarFactory.js").getCalendars;return ilib.Cal.getCalendars();};ilib.Cal.getCalendars.stub=true;}
if(!ilib.Cal.Gregorian){ilib.Cal.Gregorian=function(options){ilib.Cal.Gregorian=require("./GregorianCal.js");return new ilib.Cal.Gregorian(options);};ilib.Cal.Gregorian.stub=true;}
if(!ilib.JulianDay){ilib.JulianDay=function(num){ilib.JulianDay=require("./JulianDay.js");return new ilib.JulianDay(num);};ilib.JulianDay.stub=true;}
if(!ilib.Date.RataDie){ilib.Date.RataDie=function(params){ilib.Date.RataDie=require("./RataDie.js");return new ilib.Date.RataDie(params);};ilib.Date.RataDie.stub=true;}
if(!ilib.Date.GregRataDie){ilib.Date.GregRataDie=function(params){ilib.Date.GregRataDie=require("./GregRataDie.js");return new ilib.Date.GregRataDie(params);};ilib.Date.GregRataDie.stub=true;}
if(!ilib.TimeZone){ilib.TimeZone=function(options){ilib.TimeZone=require("./TimeZone.js");return new ilib.TimeZone(options);};ilib.TimeZone.stub=true;}
if(!ilib.TimeZone.getAvailableIds){ilib.TimeZone.getAvailableIds=function(country, sync, onLoad){ilib.TimeZone=require("./TimeZone.js");return ilib.TimeZone.getAvailableIds(country, sync, onLoad);};ilib.TimeZone.getAvailableIds.stub=true;}
if(!ilib.bsearch){ilib.bsearch=function(target, arr, comparator){ilib.extend(ilib, require("./SearchUtils.js"));return ilib.bsearch(target, arr, comparator);};ilib.bsearch.stub=true;}
if(!ilib.bisectionSearch){ilib.bisectionSearch=function(target, low, high, precision, func){ilib.extend(ilib, require("./SearchUtils.js"));return ilib.bisectionSearch(target, low, high, precision, func);};ilib.bisectionSearch.stub=true;}
if(!ilib.Date.GregDate){ilib.Date.GregDate=function(params){ilib.Date.GregDate=require("./GregorianDate.js");return new ilib.Date.GregDate(params);};ilib.Date.GregDate.stub=true;}
if(!ilib.Date.newInstance){ilib.Date.newInstance=function(options){ilib.Date.newInstance=require("./DateFactory.js");return ilib.Date.newInstance(options);};ilib.Date.newInstance.stub=true;}
if(!ilib.Date._dateToIlib){ilib.Date._dateToIlib=function(dateLike){ilib.Date._dateToIlib=require("./DateFactory.js")._dateToIlib;return ilib.Date._dateToIlib(dateLike);};ilib.Date.newInstance.stub=true;}
if(!ilib.ResBundle){ilib.ResBundle=function(options){ilib.ResBundle=require("./ResBundle.js");return new ilib.ResBundle(options);};ilib.ResBundle.stub=true;}
if(!ilib.DateFmt){ilib.DateFmt=function(options){ilib.DateFmt=require("./DateFmt.js");return new ilib.DateFmt(options);};ilib.DateFmt.stub=true;}
if(!ilib.DateRngFmt){ilib.DateRngFmt=function(options){ilib.DateRngFmt=require("./DateRngFmt.js");return new ilib.DateRngFmt(options);};ilib.DateRngFmt.stub=true;}
if(!ilib.Cal.Hebrew){ilib.Cal.Hebrew=function(){ilib.Cal.Hebrew=require("./HebrewCal.js");return new ilib.Cal.Hebrew();};ilib.Cal.Hebrew.stub=true;}
if(!ilib.Date.HebrewDate){ilib.Date.HebrewDate=function(params){ilib.Date.HebrewDate=require("./HebrewDate.js");return new ilib.Date.HebrewDate(params);};ilib.Date.HebrewDate.stub=true;}
if(!ilib.Cal.Islamic){ilib.Cal.Islamic=function(){ilib.Cal.Islamic=require("./IslamicCal.js");return new ilib.Cal.Islamic();};ilib.Cal.Islamic.stub=true;}
if(!ilib.Date.IslamicDate){ilib.Date.IslamicDate=function(params){ilib.Date.IslamicDate=require("./IslamicDate.js");return new ilib.Date.IslamicDate(params);};ilib.Date.IslamicDate.stub=true;}
if(!ilib.Cal.Julian){ilib.Cal.Julian=function(){ilib.Cal.Julian=require("./JulianCal.js");return new ilib.Cal.Julian();};ilib.Cal.Julian.stub=true;}
if(!ilib.Date.JulDate){ilib.Date.JulDate=function(params){ilib.Date.JulDate=require("./JulianDate.js");return new ilib.Date.JulDate(params);};ilib.Date.JulDate.stub=true;}
if(!ilib.Cal.ThaiSolar){ilib.Cal.ThaiSolar=function(){ilib.Cal.ThaiSolar=require("./ThaiSolarCal.js");return new ilib.Cal.ThaiSolar();};ilib.Cal.ThaiSolar.stub=true;}
if(!ilib.Date.ThaiSolarDate){ilib.Date.ThaiSolarDate=function(params){ilib.Date.ThaiSolarDate=require("./ThaiSolarDate.js");return new ilib.Date.ThaiSolarDate(params);};ilib.Date.ThaiSolarDate.stub=true;}
if(!ilib.Date.initAstro){ilib.Date.initAstro=function(sync, loadParams, callback){ilib.extend(ilib.Date, require("./Astro.js"));return ilib.Date.initAstro(sync, loadParams, callback);};ilib.Date.initAstro.stub=true;}
if(!ilib.Date.PersAstroRataDie){ilib.Date.PersAstroRataDie=function(params){ilib.Date.PersAstroRataDie=require("./PersRataDie.js");return new ilib.Date.PersAstroRataDie(params);};ilib.Date.PersAstroRataDie.stub=true;}
if(!ilib.Cal.Persian){ilib.Cal.Persian=function(){ilib.Cal.Persian=require("./PersianCal.js");return new ilib.Cal.Persian();};ilib.Cal.Persian.stub=true;}
if(!ilib.Date.PersDate){ilib.Date.PersDate=function(params){ilib.Date.PersDate=require("./PersianDate.js");return new ilib.Date.PersDate(params);};ilib.Date.PersDate.stub=true;}
if(!ilib.Cal.PersianAlgo){ilib.Cal.PersianAlgo=function(){ilib.Cal.PersianAlgo=require("./PersianAlgoCal.js");return new ilib.Cal.PersianAlgo();};ilib.Cal.PersianAlgo.stub=true;}
if(!ilib.Date.PersAlgoDate){ilib.Date.PersAlgoDate=function(params){ilib.Date.PersAlgoDate=require("./PersianAlgoDate.js");return new ilib.Date.PersAlgoDate(params);};ilib.Date.PersAlgoDate.stub=true;}
if(!ilib.Date.PersAlgoRataDie){ilib.Date.PersAlgoRataDie=function(params){ilib.Date.PersAlgoRataDie=require("./PersAlgoRataDie.js");return new ilib.Date.PersAlgoRataDie(params);};ilib.Date.PersAlgoRataDie.stub=true;}
if(!ilib.Cal.Han){ilib.Cal.Han=function(params){ilib.Cal.Han=require("./HanCal.js");return new ilib.Cal.Han(params);};ilib.Cal.Han.stub=true;}
if(!ilib.Date.HanDate){ilib.Date.HanDate=function(params){ilib.Date.HanDate=require("./HanDate.js");return new ilib.Date.HanDate(params);};ilib.Date.HanDate.stub=true;}
if(!ilib.Date.HanRataDie){ilib.Date.HanRataDie=function(params){ilib.Date.HanRataDie=require("./HanRataDie.js");return new ilib.Date.HanRataDie(params);};ilib.Date.HanRataDie.stub=true;}
if(!ilib.Cal.Ethiopic){ilib.Cal.Ethiopic=function(){ilib.Cal.Ethiopic=require("./EthiopicCal.js");return new ilib.Cal.Ethiopic();};ilib.Cal.Ethiopic.stub=true;}
if(!ilib.Date.EthiopicDate){ilib.Date.EthiopicDate=function(params){ilib.Date.EthiopicDate=require("./EthiopicDate.js");return new ilib.Date.EthiopicDate(params);};ilib.Date.EthiopicDate.stub=true;}
if(!ilib.Date.EthiopicRataDie){ilib.Date.EthiopicRataDie=function(params){ilib.Date.EthiopicRataDie=require("./EthiopicRataDie.js");return new ilib.Date.EthiopicRataDie(params);};ilib.Date.EthiopicRataDie.stub=true;}
if(!ilib.Cal.Coptic){ilib.Cal.Coptic=function(){ilib.Cal.Coptic=require("./CopticCal.js");return new ilib.Cal.Coptic();};ilib.Cal.Coptic.stub=true;}
if(!ilib.Date.CopticDate){ilib.Date.CopticDate=function(params){ilib.Date.CopticDate=require("./CopticDate.js");return new ilib.Date.CopticDate(params);};ilib.Date.CopticDate.stub=true;}
if(!ilib.Date.CopticRataDie){ilib.Date.CopticRataDie=function(params){ilib.Date.CopticRataDie=require("./CopticRataDie.js");return new ilib.Date.CopticRataDie(params);};ilib.Date.CopticRataDie.stub=true;}
if(!ilib.CType.isDigit){ilib.CType.isDigit=function(ch){ilib.CType.isDigit=require("./isDigit.js");return ilib.CType.isDigit(ch);};ilib.CType.isDigit.stub=true;}
if(!ilib.CType.isSpace){ilib.CType.isSpace=function(ch){ilib.CType.isSpace=require("./isSpace.js");return ilib.CType.isSpace(ch);};ilib.CType.isSpace.stub=true;}
if(!ilib.Currency){ilib.Currency=function(options){ilib.Currency=require("./Currency.js");return new ilib.Currency(options);};ilib.Currency.stub=true;}
if(!ilib.Number){ilib.Number=function(str, options){ilib.Number=require("./INumber.js");return new ilib.Number(str, options);};ilib.Number.stub=true;}
if(!ilib.NumFmt){ilib.NumFmt=function(options){ilib.NumFmt=require("./NumFmt.js");return new ilib.NumFmt(options);};ilib.NumFmt.stub=true;}
if(!ilib.DurFmt){ilib.DurFmt=function(options){ilib.DurFmt=require("./DurationFmt.js");return new ilib.DurFmt(options);};ilib.DurFmt.stub=true;}
if(!ilib.CType.isAlpha){ilib.CType.isAlpha=function(ch){ilib.CType.isAlpha=require("./isAlpha.js");return ilib.CType.isAlpha(ch);};ilib.CType.isAlpha.stub=true;}
if(!ilib.CType.isAlnum){ilib.CType.isAlnum=function(ch){ilib.CType.isAlnum=require("./isAlnum.js");return ilib.CType.isAlnum(ch);};ilib.CType.isAlnum.stub=true;}
if(!ilib.CType.isAscii){ilib.CType.isAscii=function(ch){ilib.CType.isAscii=require("./isAscii.js");return ilib.CType.isAscii(ch);};ilib.CType.isAscii.stub=true;}
if(!ilib.CType.isBlank){ilib.CType.isBlank=function(ch){ilib.CType.isBlank=require("./isBlank.js");return ilib.CType.isBlank(ch);};ilib.CType.isBlank.stub=true;}
if(!ilib.CType.isCntrl){ilib.CType.isCntrl=function(ch){ilib.CType.isCntrl=require("./isCntrl.js");return ilib.CType.isCntrl(ch);};ilib.CType.isCntrl.stub=true;}
if(!ilib.CType.isGraph){ilib.CType.isGraph=function(ch){ilib.CType.isGraph=require("./isGraph.js");return ilib.CType.isGraph(ch);};ilib.CType.isGraph.stub=true;}
if(!ilib.CType.isIdeo){ilib.CType.isIdeo=function(ch){ilib.CType.isIdeo=require("./isIdeo.js");return ilib.CType.isIdeo(ch);};ilib.CType.isIdeo.stub=true;}
if(!ilib.CType.isLower){ilib.CType.isLower=function(ch){ilib.CType.isLower=require("./isLower.js");return ilib.CType.isLower(ch);};ilib.CType.isLower.stub=true;}
if(!ilib.CType.isPrint){ilib.CType.isPrint=function(ch){ilib.CType.isPrint=require("./isPrint.js");return ilib.CType.isPrint(ch);};ilib.CType.isPrint.stub=true;}
if(!ilib.CType.isPunct){ilib.CType.isPunct=function(ch){ilib.CType.isPunct=require("./isPunct.js");return ilib.CType.isPunct(ch);};ilib.CType.isPunct.stub=true;}
if(!ilib.CType.isUpper){ilib.CType.isUpper=function(ch){ilib.CType.isUpper=require("./isUpper.js");return ilib.CType.isUpper(ch);};ilib.CType.isUpper.stub=true;}
if(!ilib.CType.isXdigit){ilib.CType.isXdigit=function(ch){ilib.CType.isXdigit=require("./isXdigit.js");return ilib.CType.isXdigit(ch);};ilib.CType.isXdigit.stub=true;}
if(!ilib.CType.isScript){ilib.CType.isScript=function(ch, script){ilib.CType.isScript=require("./isScript.js");return ilib.CType.isScript(ch, script);};ilib.CType.isScript.stub=true;}
if(!ilib.ScriptInfo){ilib.ScriptInfo=function(script, options){ilib.ScriptInfo=require("./ScriptInfo.js");return new ilib.ScriptInfo(script, options);};ilib.ScriptInfo.stub=true;}
if(!ilib.Name){ilib.Name=function(name, options){ilib.Name=require("./Name.js");return new ilib.Name(name, options);};ilib.Name.stub=true;}
if(!ilib.NameFmt){ilib.NameFmt=function(options){ilib.NameFmt=require("./NameFmt.js");return new ilib.NameFmt(options);};ilib.NameFmt.stub=true;}
if(!ilib.Address){ilib.Address=function(freeformAddress, options){ilib.Address=require("./Address.js");return new ilib.Address(freeformAddress, options);};ilib.Address.stub=true;}
if(!ilib.AddressFmt){ilib.AddressFmt=function(options){ilib.AddressFmt=require("./AddressFmt.js");return new ilib.AddressFmt(options);};ilib.AddressFmt.stub=true;}
if(!ilib.GlyphString){ilib.GlyphString=function(str, options){ilib.GlyphString=require("./GlyphString.js");return new ilib.GlyphString(str, options);};ilib.GlyphString.stub=true;}
if(!ilib.NormString){ilib.NormString=function(str){ilib.NormString=require("./NormString.js");return new ilib.NormString(str);};ilib.NormString.stub=true;}
if(!ilib.CodePointSource){ilib.CodePointSource=function(str, ignorePunctuation){ilib.CodePointSource=require("./CodePointSource.js");return new ilib.CodePointSource(str, ignorePunctuation);};ilib.CodePointSource.stub=true;}
if(!ilib.ElementIterator){ilib.ElementIterator=function(source, map, keysize){ilib.ElementIterator=require("./ElementIterator.js");return new ilib.ElementIterator(source, map, keysize);};ilib.ElementIterator.stub=true;}
if(!ilib.Collator){ilib.Collator=function(options){ilib.Collator=require("./Collator.js");return new ilib.Collator(options);};ilib.Collator.stub=true;}
if(!ilib.LocaleMatcher){ilib.LocaleMatcher=function(options){ilib.LocaleMatcher=require("./LocaleMatcher.js");return new ilib.LocaleMatcher(options);};ilib.LocaleMatcher.stub=true;}
if(!ilib.CaseMapper){ilib.CaseMapper=function(options){ilib.CaseMapper=require("./CaseMapper.js");return new ilib.CaseMapper(options);};ilib.CaseMapper.stub=true;}
if(!ilib.NumPlan){ilib.NumPlan=function(options){ilib.NumPlan=require("./NumberingPlan.js");return new ilib.NumPlan(options);};ilib.NumPlan.stub=true;}
if(!ilib.PhoneLoc){ilib.PhoneLoc=function(options){ilib.PhoneLoc=require("./PhoneLocale.js");return new ilib.PhoneLoc(options);};ilib.PhoneLoc.stub=true;}
if(!ilib.StateHandler){ilib.StateHandler=function(){ilib.StateHandler=require("./PhoneHandlerFactory.js");return new ilib.StateHandler();};ilib.StateHandler.stub=true;}
if(!ilib._handlerFactory){ilib._handlerFactory=function(locale, plan){ilib._handlerFactory=require("./PhoneHandlerFactory.js");return ilib._handlerFactory(locale, plan);};ilib._handlerFactory.stub=true;}
if(!ilib.PhoneNumber){ilib.PhoneNumber=function(number, options){ilib.PhoneNumber=require("./PhoneNumber.js");return new ilib.PhoneNumber(number, options);};ilib.PhoneNumber.stub=true;}
if(!ilib.PhoneFmt){ilib.PhoneFmt=function(options){ilib.PhoneFmt=require("./PhoneFmt.js");return new ilib.PhoneFmt(options);};ilib.PhoneFmt.stub=true;}
if(!ilib.GeoLocator){ilib.GeoLocator=function(options){ilib.GeoLocator=require("./PhoneGeoLocator.js");return new ilib.GeoLocator(options);};ilib.GeoLocator.stub=true;}
if(!ilib.Measurement.Unknown){ilib.Measurement.Unknown=function(options){ilib.Measurement.Unknown=require("./UnknownUnit.js");return new ilib.Measurement.Unknown(options);};ilib.Measurement.Unknown.stub=true;}
if(!ilib.Measurement.Area){ilib.Measurement.Area=function(options){ilib.Measurement.Area=require("./AreaUnit.js");return new ilib.Measurement.Area(options);};ilib.Measurement.Area.stub=true;}
if(!ilib.Measurement.DigitalStorage){ilib.Measurement.DigitalStorage=function(options){ilib.Measurement.DigitalStorage=require("./DigitalStorageUnit.js");return new ilib.Measurement.DigitalStorage(options);};ilib.Measurement.DigitalStorage.stub=true;}
if(!ilib.Measurement.Energy){ilib.Measurement.Energy=function(options){ilib.Measurement.Energy=require("./EnergyUnit.js");return new ilib.Measurement.Energy(options);};ilib.Measurement.Energy.stub=true;}
if(!ilib.Measurement.FuelConsumption){ilib.Measurement.FuelConsumption=function(options){ilib.Measurement.FuelConsumption=require("./FuelConsumptionUnit.js");return new ilib.Measurement.FuelConsumption(options);};ilib.Measurement.FuelConsumption.stub=true;}
if(!ilib.Measurement.Length){ilib.Measurement.Length=function(options){ilib.Measurement.Length=require("./LengthUnit.js");return new ilib.Measurement.Length(options);};ilib.Measurement.Length.stub=true;}
if(!ilib.Measurement.Mass){ilib.Measurement.Mass=function(options){ilib.Measurement.Mass=require("./MassUnit.js");return new ilib.Measurement.Mass(options);};ilib.Measurement.Mass.stub=true;}
if(!ilib.Measurement.Temperature){ilib.Measurement.Temperature=function(options){ilib.Measurement.Temperature=require("./TemperatureUnit.js");return new ilib.Measurement.Temperature(options);};ilib.Measurement.Temperature.stub=true;}
if(!ilib.Measurement.Time){ilib.Measurement.Time=function(options){ilib.Measurement.Time=require("./TimeUnit.js");return new ilib.Measurement.Time(options);};ilib.Measurement.Time.stub=true;}
if(!ilib.Measurement.Speed){ilib.Measurement.Speed=function(options){ilib.Measurement.Speed=require("./VelocityUnit.js");return new ilib.Measurement.Speed(options);};ilib.Measurement.Speed.stub=true;}
if(!ilib.Measurement.Volume){ilib.Measurement.Volume=function(options){ilib.Measurement.Volume=require("./VolumeUnit.js");return new ilib.Measurement.Volume(options);};ilib.Measurement.Volume.stub=true;}
if(!ilib.UnitFmt){ilib.UnitFmt=function(options){ilib.UnitFmt=require("./UnitFmt.js");return new ilib.UnitFmt(options);};ilib.UnitFmt.stub=true;}
module.exports = ilib;
