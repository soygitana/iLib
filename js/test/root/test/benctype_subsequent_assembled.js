/*
 * benctype_subsequent_assembled.js - benchmark the CType object with subsequent assembled formats
 *
 * Copyright © 2014-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var isSpace = require("../lib/isSpace.js");
var isDigit = require("../lib/isDigit.js");
var isAlpha = require("../lib/isAlpha.js");
var ilib = require("../lib/ilib.js");
var CType = require("../lib/CType.js");
ilib.data.plurals_en={one:{is:["n",1]}};
ilib.data.plurals_de={one:{is:["n",1]}};
ilib.data.plurals_fr={one:{and:[{within:["n",[[0,2]]]},{isnot:["n",2]}]}};

ilib.data.pseudomap = {"a":"à","c":"ç","d":"ð","e":"ë","g":"ğ","h":"ĥ","i":"í","j":"ĵ","k":"ķ","l":"ľ","n":"ñ","o":"õ","p":"þ","r":"ŕ","s":"š","t":"ţ","u":"ü","w":"ŵ","y":"ÿ","z":"ž","A":"Ã","B":"ß","C":"Ç","D":"Ð","E":"Ë","G":"Ĝ","H":"Ħ","I":"Ï","J":"Ĵ","K":"ĸ","L":"Ľ","N":"Ň","O":"Ø","R":"Ŗ","S":"Š","T":"Ť","U":"Ú","W":"Ŵ","Y":"Ŷ","Z":"Ż"};

ilib.data.localeinfo = {"calendar":"gregorian","clock":"24","currency":"USD","delimiter":{"quotationStart":"“","quotationEnd":"”","alternateQuotationStart":"‘","alternateQuotationEnd":"’"},"firstDayOfWeek":1,"numfmt":{"script":"Latn","decimalChar":",","groupChar":".","prigroupSize":3,"pctFmt":"{n}%","pctChar":"%","roundingMode":"halfdown","exponential":"e","currencyFormats":{"common":"{s}{n}","commonNegative":"{s}-{n}"}},"timezone":"Etc/UTC","units":"metric"};
ilib.data.localeinfo_en = {"clock":"12","language.name":"English","numfmt":{"decimalChar":".","groupChar":",","currencyFormats":{"commonNegative":"({s}{n})"}},"scripts":["Latn","Dsrt","Shaw"],"locale":"en"};
ilib.data.localeinfo_US = {"currency":"USD","firstDayOfWeek":0,"paperSizes":{"regular":"8x11"},"region.name":"United States","timezone":"America/New_York","units":"uscustomary","locale":"US"};
ilib.data.localeinfo_de = {"delimiter":{"quotationStart":"„","quotationEnd":"“","alternateQuotationStart":"‚","alternateQuotationEnd":"‘"},"language.name":"German","numfmt":{"exponential":"E","currencyFormats":{"common":"{n} {s}"},"pctFmt":"{n} %"},"paperSizes":{"regular":"A4","photo":"4x6"},"scripts":["Latn","Runr"],"locale":"de"};
ilib.data.localeinfo_DE = {"currency":"EUR","firstDayOfWeek":1,"region.name":"Germany","timezone":"Europe/Berlin","locale":"DE"};
ilib.data.localeinfo_fr = {"delimiter":{"quotationStart":"«","quotationEnd":"»","alternateQuotationStart":"«","alternateQuotationEnd":"»"},"language.name":"French","numfmt":{"groupChar":" ","exponential":"E","currencyFormats":{"common":"{n} {s}","commonNegative":"({n} {s})"},"pctFmt":"{n} %"},"paperSizes":{"regular":"A4","photo":"4x6"},"scripts":["Latn"],"locale":"fr"};
ilib.data.localeinfo_FR = {"currency":"EUR","firstDayOfWeek":1,"region.name":"France","timezone":"Europe/Paris","locale":"FR"};
ilib.data.localeinfo_zh = {"clock":"12","language.name":"Chinese","native_numfmt":{"script":"Hani","decimalChar":".","groupChar":",","pctChar":"%","exponential":"E","prigroupSize":3,"currencyFormats":{"common":"{s}{n}","commonNegative":"({s}{n})"},"pctFmt":"{n}%","roundingMode":"halfdown","useNative":true,"digits":"〇一二三四五六七八九"},"numfmt":{"decimalChar":".","groupChar":",","exponential":"E","useNative":false,"currencyFormats":{"commonNegative":"({s}{n})"}},"scripts":["Hans","Hant","Bopo","Phag"],"locale":"zh"};
ilib.data.localeinfo_TW = {"currency":"TWD","firstDayOfWeek":0,"region.name":"Taiwan","timezone":"Asia/Taipei","locale":"TW"};

ilib.data.ctype_z = {"Zs":[[32],[160],[5760],[6158],[8192,8202],[8239],[8287],[12288]],"Zl":[[8232]],"Zp":[[8233]]};
ilib.data.ctype_l = {"Lu":[[65,90],[192,214],[216,222],[256],[258],[260],[262],[264],[266],[268],[270],[272],[274],[276],[278],[280],[282],[284],[286],[288],[290],[292],[294],[296],[298],[300],[302],[304],[306],[308],[310],[313],[315],[317],[319],[321],[323],[325],[327],[330],[332],[334],[336],[338],[340],[342],[344],[346],[348],[350],[352],[354],[356],[358],[360],[362],[364],[366],[368],[370],[372],[374],[376,377],[379],[381],[385,386],[388],[390,391],[393,395],[398,401],[403,404],[406,408],[412,413],[415,416],[418],[420],[422,423],[425],[428],[430,431],[433,435],[437],[439,440],[444],[452],[455],[458],[461],[463],[465],[467],[469],[471],[473],[475],[478],[480],[482],[484],[486],[488],[490],[492],[494],[497],[500],[502,504],[506],[508],[510],[512],[514],[516],[518],[520],[522],[524],[526],[528],[530],[532],[534],[536],[538],[540],[542],[544],[546],[548],[550],[552],[554],[556],[558],[560],[562],[570,571],[573,574],[577],[579,582],[584],[586],[588],[590],[880],[882],[886],[902],[904,906],[908],[910,911],[913,929],[931,939],[975],[978,980],[984],[986],[988],[990],[992],[994],[996],[998],[1000],[1002],[1004],[1006],[1012],[1015],[1017,1018],[1021,1071],[1120],[1122],[1124],[1126],[1128],[1130],[1132],[1134],[1136],[1138],[1140],[1142],[1144],[1146],[1148],[1150],[1152],[1162],[1164],[1166],[1168],[1170],[1172],[1174],[1176],[1178],[1180],[1182],[1184],[1186],[1188],[1190],[1192],[1194],[1196],[1198],[1200],[1202],[1204],[1206],[1208],[1210],[1212],[1214],[1216,1217],[1219],[1221],[1223],[1225],[1227],[1229],[1232],[1234],[1236],[1238],[1240],[1242],[1244],[1246],[1248],[1250],[1252],[1254],[1256],[1258],[1260],[1262],[1264],[1266],[1268],[1270],[1272],[1274],[1276],[1278],[1280],[1282],[1284],[1286],[1288],[1290],[1292],[1294],[1296],[1298],[1300],[1302],[1304],[1306],[1308],[1310],[1312],[1314],[1316],[1318],[1329,1366],[4256,4293],[4295],[4301],[7680],[7682],[7684],[7686],[7688],[7690],[7692],[7694],[7696],[7698],[7700],[7702],[7704],[7706],[7708],[7710],[7712],[7714],[7716],[7718],[7720],[7722],[7724],[7726],[7728],[7730],[7732],[7734],[7736],[7738],[7740],[7742],[7744],[7746],[7748],[7750],[7752],[7754],[7756],[7758],[7760],[7762],[7764],[7766],[7768],[7770],[7772],[7774],[7776],[7778],[7780],[7782],[7784],[7786],[7788],[7790],[7792],[7794],[7796],[7798],[7800],[7802],[7804],[7806],[7808],[7810],[7812],[7814],[7816],[7818],[7820],[7822],[7824],[7826],[7828],[7838],[7840],[7842],[7844],[7846],[7848],[7850],[7852],[7854],[7856],[7858],[7860],[7862],[7864],[7866],[7868],[7870],[7872],[7874],[7876],[7878],[7880],[7882],[7884],[7886],[7888],[7890],[7892],[7894],[7896],[7898],[7900],[7902],[7904],[7906],[7908],[7910],[7912],[7914],[7916],[7918],[7920],[7922],[7924],[7926],[7928],[7930],[7932],[7934],[7944,7951],[7960,7965],[7976,7983],[7992,7999],[8008,8013],[8025],[8027],[8029],[8031],[8040,8047],[8120,8123],[8136,8139],[8152,8155],[8168,8172],[8184,8187],[8450],[8455],[8459,8461],[8464,8466],[8469],[8473,8477],[8484],[8486],[8488],[8490,8493],[8496,8499],[8510,8511],[8517],[8579],[11264,11310],[11360],[11362,11364],[11367],[11369],[11371],[11373,11376],[11378],[11381],[11390,11392],[11394],[11396],[11398],[11400],[11402],[11404],[11406],[11408],[11410],[11412],[11414],[11416],[11418],[11420],[11422],[11424],[11426],[11428],[11430],[11432],[11434],[11436],[11438],[11440],[11442],[11444],[11446],[11448],[11450],[11452],[11454],[11456],[11458],[11460],[11462],[11464],[11466],[11468],[11470],[11472],[11474],[11476],[11478],[11480],[11482],[11484],[11486],[11488],[11490],[11499],[11501],[11506],[42560],[42562],[42564],[42566],[42568],[42570],[42572],[42574],[42576],[42578],[42580],[42582],[42584],[42586],[42588],[42590],[42592],[42594],[42596],[42598],[42600],[42602],[42604],[42624],[42626],[42628],[42630],[42632],[42634],[42636],[42638],[42640],[42642],[42644],[42646],[42786],[42788],[42790],[42792],[42794],[42796],[42798],[42802],[42804],[42806],[42808],[42810],[42812],[42814],[42816],[42818],[42820],[42822],[42824],[42826],[42828],[42830],[42832],[42834],[42836],[42838],[42840],[42842],[42844],[42846],[42848],[42850],[42852],[42854],[42856],[42858],[42860],[42862],[42873],[42875],[42877,42878],[42880],[42882],[42884],[42886],[42891],[42893],[42896],[42898],[42912],[42914],[42916],[42918],[42920],[42922],[65313,65338],[66560,66599],[119808,119833],[119860,119885],[119912,119937],[119964],[119966,119967],[119970],[119973,119974],[119977,119980],[119982,119989],[120016,120041],[120068,120069],[120071,120074],[120077,120084],[120086,120092],[120120,120121],[120123,120126],[120128,120132],[120134],[120138,120144],[120172,120197],[120224,120249],[120276,120301],[120328,120353],[120380,120405],[120432,120457],[120488,120512],[120546,120570],[120604,120628],[120662,120686],[120720,120744],[120778]],"Ll":[[97,122],[181],[223,246],[248,255],[257],[259],[261],[263],[265],[267],[269],[271],[273],[275],[277],[279],[281],[283],[285],[287],[289],[291],[293],[295],[297],[299],[301],[303],[305],[307],[309],[311,312],[314],[316],[318],[320],[322],[324],[326],[328,329],[331],[333],[335],[337],[339],[341],[343],[345],[347],[349],[351],[353],[355],[357],[359],[361],[363],[365],[367],[369],[371],[373],[375],[378],[380],[382,384],[387],[389],[392],[396,397],[402],[405],[409,411],[414],[417],[419],[421],[424],[426,427],[429],[432],[436],[438],[441,442],[445,447],[454],[457],[460],[462],[464],[466],[468],[470],[472],[474],[476,477],[479],[481],[483],[485],[487],[489],[491],[493],[495,496],[499],[501],[505],[507],[509],[511],[513],[515],[517],[519],[521],[523],[525],[527],[529],[531],[533],[535],[537],[539],[541],[543],[545],[547],[549],[551],[553],[555],[557],[559],[561],[563,569],[572],[575,576],[578],[583],[585],[587],[589],[591,659],[661,687],[881],[883],[887],[891,893],[912],[940,974],[976,977],[981,983],[985],[987],[989],[991],[993],[995],[997],[999],[1001],[1003],[1005],[1007,1011],[1013],[1016],[1019,1020],[1072,1119],[1121],[1123],[1125],[1127],[1129],[1131],[1133],[1135],[1137],[1139],[1141],[1143],[1145],[1147],[1149],[1151],[1153],[1163],[1165],[1167],[1169],[1171],[1173],[1175],[1177],[1179],[1181],[1183],[1185],[1187],[1189],[1191],[1193],[1195],[1197],[1199],[1201],[1203],[1205],[1207],[1209],[1211],[1213],[1215],[1218],[1220],[1222],[1224],[1226],[1228],[1230,1231],[1233],[1235],[1237],[1239],[1241],[1243],[1245],[1247],[1249],[1251],[1253],[1255],[1257],[1259],[1261],[1263],[1265],[1267],[1269],[1271],[1273],[1275],[1277],[1279],[1281],[1283],[1285],[1287],[1289],[1291],[1293],[1295],[1297],[1299],[1301],[1303],[1305],[1307],[1309],[1311],[1313],[1315],[1317],[1319],[1377,1415],[7424,7467],[7531,7543],[7545,7578],[7681],[7683],[7685],[7687],[7689],[7691],[7693],[7695],[7697],[7699],[7701],[7703],[7705],[7707],[7709],[7711],[7713],[7715],[7717],[7719],[7721],[7723],[7725],[7727],[7729],[7731],[7733],[7735],[7737],[7739],[7741],[7743],[7745],[7747],[7749],[7751],[7753],[7755],[7757],[7759],[7761],[7763],[7765],[7767],[7769],[7771],[7773],[7775],[7777],[7779],[7781],[7783],[7785],[7787],[7789],[7791],[7793],[7795],[7797],[7799],[7801],[7803],[7805],[7807],[7809],[7811],[7813],[7815],[7817],[7819],[7821],[7823],[7825],[7827],[7829,7837],[7839],[7841],[7843],[7845],[7847],[7849],[7851],[7853],[7855],[7857],[7859],[7861],[7863],[7865],[7867],[7869],[7871],[7873],[7875],[7877],[7879],[7881],[7883],[7885],[7887],[7889],[7891],[7893],[7895],[7897],[7899],[7901],[7903],[7905],[7907],[7909],[7911],[7913],[7915],[7917],[7919],[7921],[7923],[7925],[7927],[7929],[7931],[7933],[7935,7943],[7952,7957],[7968,7975],[7984,7991],[8000,8005],[8016,8023],[8032,8039],[8048,8061],[8064,8071],[8080,8087],[8096,8103],[8112,8116],[8118,8119],[8126],[8130,8132],[8134,8135],[8144,8147],[8150,8151],[8160,8167],[8178,8180],[8182,8183],[8458],[8462,8463],[8467],[8495],[8500],[8505],[8508,8509],[8518,8521],[8526],[8580],[11312,11358],[11361],[11365,11366],[11368],[11370],[11372],[11377],[11379,11380],[11382,11387],[11393],[11395],[11397],[11399],[11401],[11403],[11405],[11407],[11409],[11411],[11413],[11415],[11417],[11419],[11421],[11423],[11425],[11427],[11429],[11431],[11433],[11435],[11437],[11439],[11441],[11443],[11445],[11447],[11449],[11451],[11453],[11455],[11457],[11459],[11461],[11463],[11465],[11467],[11469],[11471],[11473],[11475],[11477],[11479],[11481],[11483],[11485],[11487],[11489],[11491,11492],[11500],[11502],[11507],[11520,11557],[11559],[11565],[42561],[42563],[42565],[42567],[42569],[42571],[42573],[42575],[42577],[42579],[42581],[42583],[42585],[42587],[42589],[42591],[42593],[42595],[42597],[42599],[42601],[42603],[42605],[42625],[42627],[42629],[42631],[42633],[42635],[42637],[42639],[42641],[42643],[42645],[42647],[42787],[42789],[42791],[42793],[42795],[42797],[42799,42801],[42803],[42805],[42807],[42809],[42811],[42813],[42815],[42817],[42819],[42821],[42823],[42825],[42827],[42829],[42831],[42833],[42835],[42837],[42839],[42841],[42843],[42845],[42847],[42849],[42851],[42853],[42855],[42857],[42859],[42861],[42863],[42865,42872],[42874],[42876],[42879],[42881],[42883],[42885],[42887],[42892],[42894],[42897],[42899],[42913],[42915],[42917],[42919],[42921],[43002],[64256,64262],[64275,64279],[65345,65370],[66600,66639],[119834,119859],[119886,119892],[119894,119911],[119938,119963],[119990,119993],[119995],[119997,120003],[120005,120015],[120042,120067],[120094,120119],[120146,120171],[120198,120223],[120250,120275],[120302,120327],[120354,120379],[120406,120431],[120458,120485],[120514,120538],[120540,120545],[120572,120596],[120598,120603],[120630,120654],[120656,120661],[120688,120712],[120714,120719],[120746,120770],[120772,120777],[120779]],"Lt":[[453],[456],[459],[498],[8072,8079],[8088,8095],[8104,8111],[8124],[8140],[8188]],"Lm":[[688,705],[710,721],[736,740],[748],[750],[884],[890],[1369],[1600],[1765,1766],[2036,2037],[2042],[2074],[2084],[2088],[2417],[3654],[3782],[4348],[6103],[6211],[6823],[7288,7293],[7468,7530],[7544],[7579,7615],[8305],[8319],[8336,8348],[11388,11389],[11631],[11823],[12293],[12337,12341],[12347],[12445,12446],[12540,12542],[40981],[42232,42237],[42508],[42623],[42775,42783],[42864],[42888],[43000,43001],[43471],[43632],[43741],[43763,43764],[65392],[65438,65439],[94099,94111]],"Lo":[[170],[186],[443],[448,451],[660],[1488,1514],[1520,1522],[1568,1599],[1601,1610],[1646,1647],[1649,1747],[1749],[1774,1775],[1786,1788],[1791],[1808],[1810,1839],[1869,1957],[1969],[1994,2026],[2048,2069],[2112,2136],[2208],[2210,2220],[2308,2361],[2365],[2384],[2392,2401],[2418,2423],[2425,2431],[2437,2444],[2447,2448],[2451,2472],[2474,2480],[2482],[2486,2489],[2493],[2510],[2524,2525],[2527,2529],[2544,2545],[2565,2570],[2575,2576],[2579,2600],[2602,2608],[2610,2611],[2613,2614],[2616,2617],[2649,2652],[2654],[2674,2676],[2693,2701],[2703,2705],[2707,2728],[2730,2736],[2738,2739],[2741,2745],[2749],[2768],[2784,2785],[2821,2828],[2831,2832],[2835,2856],[2858,2864],[2866,2867],[2869,2873],[2877],[2908,2909],[2911,2913],[2929],[2947],[2949,2954],[2958,2960],[2962,2965],[2969,2970],[2972],[2974,2975],[2979,2980],[2984,2986],[2990,3001],[3024],[3077,3084],[3086,3088],[3090,3112],[3114,3123],[3125,3129],[3133],[3160,3161],[3168,3169],[3205,3212],[3214,3216],[3218,3240],[3242,3251],[3253,3257],[3261],[3294],[3296,3297],[3313,3314],[3333,3340],[3342,3344],[3346,3386],[3389],[3406],[3424,3425],[3450,3455],[3461,3478],[3482,3505],[3507,3515],[3517],[3520,3526],[3585,3632],[3634,3635],[3648,3653],[3713,3714],[3716],[3719,3720],[3722],[3725],[3732,3735],[3737,3743],[3745,3747],[3749],[3751],[3754,3755],[3757,3760],[3762,3763],[3773],[3776,3780],[3804,3807],[3840],[3904,3911],[3913,3948],[3976,3980],[4096,4138],[4159],[4176,4181],[4186,4189],[4193],[4197,4198],[4206,4208],[4213,4225],[4238],[4304,4346],[4349,4680],[4682,4685],[4688,4694],[4696],[4698,4701],[4704,4744],[4746,4749],[4752,4784],[4786,4789],[4792,4798],[4800],[4802,4805],[4808,4822],[4824,4880],[4882,4885],[4888,4954],[4992,5007],[5024,5108],[5121,5740],[5743,5759],[5761,5786],[5792,5866],[5888,5900],[5902,5905],[5920,5937],[5952,5969],[5984,5996],[5998,6000],[6016,6067],[6108],[6176,6210],[6212,6263],[6272,6312],[6314],[6320,6389],[6400,6428],[6480,6509],[6512,6516],[6528,6571],[6593,6599],[6656,6678],[6688,6740],[6917,6963],[6981,6987],[7043,7072],[7086,7087],[7098,7141],[7168,7203],[7245,7247],[7258,7287],[7401,7404],[7406,7409],[7413,7414],[8501,8504],[11568,11623],[11648,11670],[11680,11686],[11688,11694],[11696,11702],[11704,11710],[11712,11718],[11720,11726],[11728,11734],[11736,11742],[12294],[12348],[12353,12438],[12447],[12449,12538],[12543],[12549,12589],[12593,12686],[12704,12730],[12784,12799],[13312,19893],[19968,40908],[40960,40980],[40982,42124],[42192,42231],[42240,42507],[42512,42527],[42538,42539],[42606],[42656,42725],[43003,43009],[43011,43013],[43015,43018],[43020,43042],[43072,43123],[43138,43187],[43250,43255],[43259],[43274,43301],[43312,43334],[43360,43388],[43396,43442],[43520,43560],[43584,43586],[43588,43595],[43616,43631],[43633,43638],[43642],[43648,43695],[43697],[43701,43702],[43705,43709],[43712],[43714],[43739,43740],[43744,43754],[43762],[43777,43782],[43785,43790],[43793,43798],[43808,43814],[43816,43822],[43968,44002],[44032,55203],[55216,55238],[55243,55291],[63744,64109],[64112,64217],[64285],[64287,64296],[64298,64310],[64312,64316],[64318],[64320,64321],[64323,64324],[64326,64433],[64467,64829],[64848,64911],[64914,64967],[65008,65019],[65136,65140],[65142,65276],[65382,65391],[65393,65437],[65440,65470],[65474,65479],[65482,65487],[65490,65495],[65498,65500],[65536,65547],[65549,65574],[65576,65594],[65596,65597],[65599,65613],[65616,65629],[65664,65786],[66176,66204],[66208,66256],[66304,66334],[66352,66368],[66370,66377],[66432,66461],[66464,66499],[66504,66511],[66640,66717],[67584,67589],[67592],[67594,67637],[67639,67640],[67644],[67647,67669],[67840,67861],[67872,67897],[67968,68023],[68030,68031],[68096],[68112,68115],[68117,68119],[68121,68147],[68192,68220],[68352,68405],[68416,68437],[68448,68466],[68608,68680],[69635,69687],[69763,69807],[69840,69864],[69891,69926],[70019,70066],[70081,70084],[71296,71338],[73728,74606],[77824,78894],[92160,92728],[93952,94020],[94032],[110592,110593],[126464,126467],[126469,126495],[126497,126498],[126500],[126503],[126505,126514],[126516,126519],[126521],[126523],[126530],[126535],[126537],[126539],[126541,126543],[126545,126546],[126548],[126551],[126553],[126555],[126557],[126559],[126561,126562],[126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[131072,173782],[173824,177972],[177984,178205],[194560,195101]]};
ilib.data.ctype_c = {"Cn":[[888,889],[895,899],[907],[909],[930],[1320,1328],[1367,1368],[1376],[1416],[1419,1422],[1424],[1480,1487],[1515,1519],[1525,1535],[1541],[1564,1565],[1806],[1867,1868],[1970,1983],[2043,2047],[2094,2095],[2111],[2140,2141],[2143,2207],[2209],[2221,2275],[2303],[2424],[2432],[2436],[2445,2446],[2449,2450],[2473],[2481],[2483,2485],[2490,2491],[2501,2502],[2505,2506],[2511,2518],[2520,2523],[2526],[2532,2533],[2556,2560],[2564],[2571,2574],[2577,2578],[2601],[2609],[2612],[2615],[2618,2619],[2621],[2627,2630],[2633,2634],[2638,2640],[2642,2648],[2653],[2655,2661],[2678,2688],[2692],[2702],[2706],[2729],[2737],[2740],[2746,2747],[2758],[2762],[2766,2767],[2769,2783],[2788,2789],[2802,2816],[2820],[2829,2830],[2833,2834],[2857],[2865],[2868],[2874,2875],[2885,2886],[2889,2890],[2894,2901],[2904,2907],[2910],[2916,2917],[2936,2945],[2948],[2955,2957],[2961],[2966,2968],[2971],[2973],[2976,2978],[2981,2983],[2987,2989],[3002,3005],[3011,3013],[3017],[3022,3023],[3025,3030],[3032,3045],[3067,3072],[3076],[3085],[3089],[3113],[3124],[3130,3132],[3141],[3145],[3150,3156],[3159],[3162,3167],[3172,3173],[3184,3191],[3200,3201],[3204],[3213],[3217],[3241],[3252],[3258,3259],[3269],[3273],[3278,3284],[3287,3293],[3295],[3300,3301],[3312],[3315,3329],[3332],[3341],[3345],[3387,3388],[3397],[3401],[3407,3414],[3416,3423],[3428,3429],[3446,3448],[3456,3457],[3460],[3479,3481],[3506],[3516],[3518,3519],[3527,3529],[3531,3534],[3541],[3543],[3552,3569],[3573,3584],[3643,3646],[3676,3712],[3715],[3717,3718],[3721],[3723,3724],[3726,3731],[3736],[3744],[3748],[3750],[3752,3753],[3756],[3770],[3774,3775],[3781],[3783],[3790,3791],[3802,3803],[3808,3839],[3912],[3949,3952],[3992],[4029],[4045],[4059,4095],[4294],[4296,4300],[4302,4303],[4681],[4686,4687],[4695],[4697],[4702,4703],[4745],[4750,4751],[4785],[4790,4791],[4799],[4801],[4806,4807],[4823],[4881],[4886,4887],[4955,4956],[4989,4991],[5018,5023],[5109,5119],[5789,5791],[5873,5887],[5901],[5909,5919],[5943,5951],[5972,5983],[5997],[6001],[6004,6015],[6110,6111],[6122,6127],[6138,6143],[6159],[6170,6175],[6264,6271],[6315,6319],[6390,6399],[6429,6431],[6444,6447],[6460,6463],[6465,6467],[6510,6511],[6517,6527],[6572,6575],[6602,6607],[6619,6621],[6684,6685],[6751],[6781,6782],[6794,6799],[6810,6815],[6830,6911],[6988,6991],[7037,7039],[7156,7163],[7224,7226],[7242,7244],[7296,7359],[7368,7375],[7415,7423],[7655,7675],[7958,7959],[7966,7967],[8006,8007],[8014,8015],[8024],[8026],[8028],[8030],[8062,8063],[8117],[8133],[8148,8149],[8156],[8176,8177],[8181],[8191],[8293,8297],[8306,8307],[8335],[8349,8351],[8379,8399],[8433,8447],[8586,8591],[9204,9215],[9255,9279],[9291,9311],[9984],[11085,11087],[11098,11263],[11311],[11359],[11508,11512],[11558],[11560,11564],[11566,11567],[11624,11630],[11633,11646],[11671,11679],[11687],[11695],[11703],[11711],[11719],[11727],[11735],[11743],[11836,11903],[11930],[12020,12031],[12246,12271],[12284,12287],[12352],[12439,12440],[12544,12548],[12590,12592],[12687],[12731,12735],[12772,12783],[12831],[13055],[19894,19903],[40909,40959],[42125,42127],[42183,42191],[42540,42559],[42648,42654],[42744,42751],[42895],[42900,42911],[42923,42999],[43052,43055],[43066,43071],[43128,43135],[43205,43213],[43226,43231],[43260,43263],[43348,43358],[43389,43391],[43470],[43482,43485],[43488,43519],[43575,43583],[43598,43599],[43610,43611],[43644,43647],[43715,43738],[43767,43776],[43783,43784],[43791,43792],[43799,43807],[43815],[43823,43967],[44014,44015],[44026,44031],[55204,55215],[55239,55242],[55292,55295],[64110,64111],[64218,64255],[64263,64274],[64280,64284],[64311],[64317],[64319],[64322],[64325],[64450,64466],[64832,64847],[64912,64913],[64968,65007],[65022,65023],[65050,65055],[65063,65071],[65107],[65127],[65132,65135],[65141],[65277,65278],[65280],[65471,65473],[65480,65481],[65488,65489],[65496,65497],[65501,65503],[65511],[65519,65528],[65534,65535],[65548],[65575],[65595],[65598],[65614,65615],[65630,65663],[65787,65791],[65795,65798],[65844,65846],[65931,65935],[65948,65999],[66046,66175],[66205,66207],[66257,66303],[66335],[66340,66351],[66379,66431],[66462],[66500,66503],[66518,66559],[66718,66719],[66730,67583],[67590,67591],[67593],[67638],[67641,67643],[67645,67646],[67670],[67680,67839],[67868,67870],[67898,67902],[67904,67967],[68024,68029],[68032,68095],[68100],[68103,68107],[68116],[68120],[68148,68151],[68155,68158],[68168,68175],[68185,68191],[68224,68351],[68406,68408],[68438,68439],[68467,68471],[68480,68607],[68681,69215],[69247,69631],[69710,69713],[69744,69759],[69826,69839],[69865,69871],[69882,69887],[69941],[69956,70015],[70089,70095],[70106,71295],[71352,71359],[71370,73727],[74607,74751],[74851,74863],[74868,77823],[78895,92159],[92729,93951],[94021,94031],[94079,94094],[94112,110591],[110594,118783],[119030,119039],[119079,119080],[119262,119295],[119366,119551],[119639,119647],[119666,119807],[119893],[119965],[119968,119969],[119971,119972],[119975,119976],[119981],[119994],[119996],[120004],[120070],[120075,120076],[120085],[120093],[120122],[120127],[120133],[120135,120137],[120145],[120486,120487],[120780,120781],[120832,126463],[126468],[126496],[126499],[126501,126502],[126504],[126515],[126520],[126522],[126524,126529],[126531,126534],[126536],[126538],[126540],[126544],[126547],[126549,126550],[126552],[126554],[126556],[126558],[126560],[126563],[126565,126566],[126571],[126579],[126584],[126589],[126591],[126602],[126620,126624],[126628],[126634],[126652,126703],[126706,126975],[127020,127023],[127124,127135],[127151,127152],[127167,127168],[127184],[127200,127231],[127243,127247],[127279],[127340,127343],[127387,127461],[127491,127503],[127547,127551],[127561,127567],[127570,127743],[127777,127791],[127798],[127869,127871],[127892,127903],[127941],[127947,127967],[127985,127999],[128063],[128065],[128248],[128253,128255],[128318,128319],[128324,128335],[128360,128506],[128577,128580],[128592,128639],[128710,128767],[128884,131071],[173783,173823],[177973,177983],[178206,194559],[195102,917504],[917506,917535],[917632,917759],[918000,983039],[1048574,1048575],[1114110,1114111]],"Cc":[[0,31],[127,159]],"Cf":[[173],[1536,1540],[1757],[1807],[8203,8207],[8234,8238],[8288,8292],[8298,8303],[65279],[65529,65531],[69821],[119155,119162],[917505],[917536,917631]],"Co":[[57344,63743],[983040,1048573],[1048576,1114109]],"Cs":[[55296,57343]]};
ilib.data.ctype_p = {"Pd":[[45],[1418],[1470],[5120],[6150],[8208,8213],[11799],[11802],[11834,11835],[12316],[12336],[12448],[65073,65074],[65112],[65123],[65293]],"Ps":[[40],[91],[123],[3898],[3900],[5787],[8218],[8222],[8261],[8317],[8333],[9001],[10088],[10090],[10092],[10094],[10096],[10098],[10100],[10181],[10214],[10216],[10218],[10220],[10222],[10627],[10629],[10631],[10633],[10635],[10637],[10639],[10641],[10643],[10645],[10647],[10712],[10714],[10748],[11810],[11812],[11814],[11816],[12296],[12298],[12300],[12302],[12304],[12308],[12310],[12312],[12314],[12317],[64830],[65047],[65077],[65079],[65081],[65083],[65085],[65087],[65089],[65091],[65095],[65113],[65115],[65117],[65288],[65339],[65371],[65375],[65378]],"Pe":[[41],[93],[125],[3899],[3901],[5788],[8262],[8318],[8334],[9002],[10089],[10091],[10093],[10095],[10097],[10099],[10101],[10182],[10215],[10217],[10219],[10221],[10223],[10628],[10630],[10632],[10634],[10636],[10638],[10640],[10642],[10644],[10646],[10648],[10713],[10715],[10749],[11811],[11813],[11815],[11817],[12297],[12299],[12301],[12303],[12305],[12309],[12311],[12313],[12315],[12318,12319],[64831],[65048],[65078],[65080],[65082],[65084],[65086],[65088],[65090],[65092],[65096],[65114],[65116],[65118],[65289],[65341],[65373],[65376],[65379]],"Pc":[[95],[8255,8256],[8276],[65075,65076],[65101,65103],[65343]],"Po":[[33,35],[37,39],[42],[44],[46,47],[58,59],[63,64],[92],[161],[167],[182,183],[191],[894],[903],[1370,1375],[1417],[1472],[1475],[1478],[1523,1524],[1545,1546],[1548,1549],[1563],[1566,1567],[1642,1645],[1748],[1792,1805],[2039,2041],[2096,2110],[2142],[2404,2405],[2416],[2800],[3572],[3663],[3674,3675],[3844,3858],[3860],[3973],[4048,4052],[4057,4058],[4170,4175],[4347],[4960,4968],[5741,5742],[5867,5869],[5941,5942],[6100,6102],[6104,6106],[6144,6149],[6151,6154],[6468,6469],[6686,6687],[6816,6822],[6824,6829],[7002,7008],[7164,7167],[7227,7231],[7294,7295],[7360,7367],[7379],[8214,8215],[8224,8231],[8240,8248],[8251,8254],[8257,8259],[8263,8273],[8275],[8277,8286],[11513,11516],[11518,11519],[11632],[11776,11777],[11782,11784],[11787],[11790,11798],[11800,11801],[11803],[11806,11807],[11818,11822],[11824,11833],[12289,12291],[12349],[12539],[42238,42239],[42509,42511],[42611],[42622],[42738,42743],[43124,43127],[43214,43215],[43256,43258],[43310,43311],[43359],[43457,43469],[43486,43487],[43612,43615],[43742,43743],[43760,43761],[44011],[65040,65046],[65049],[65072],[65093,65094],[65097,65100],[65104,65106],[65108,65111],[65119,65121],[65128],[65130,65131],[65281,65283],[65285,65287],[65290],[65292],[65294,65295],[65306,65307],[65311,65312],[65340],[65377],[65380,65381],[65792,65794],[66463],[66512],[67671],[67871],[67903],[68176,68184],[68223],[68409,68415],[69703,69709],[69819,69820],[69822,69825],[69952,69955],[70085,70088],[74864,74867]],"Pi":[[171],[8216],[8219,8220],[8223],[8249],[11778],[11780],[11785],[11788],[11804],[11808]],"Pf":[[187],[8217],[8221],[8250],[11779],[11781],[11786],[11789],[11805],[11809]]};

function testCTypeLoaderL(results) {
	CType._load("ctype_l", true);
	
	var tt = new TimedTest({
		name: "CType-assembled-loader-l-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_l", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderZ(results) {
	CType._load("ctype_z", true);
	
	var tt = new TimedTest({
		name: "CType-assembled-loader-z-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_z", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderC(results) {
	CType._load("ctype_c", true);
	
	var tt = new TimedTest({
		name: "CType-assembled-loader-c-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_c", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderP(results) {
	CType._load("ctype_p", true);
	
	var tt = new TimedTest({
		name: "CType-assembled-loader-p-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_p", true);
		}
	});
	
	tt.run(results);
}

function testCTypeisAlpha(results) {
	isAlpha("a");
	isAlpha(";");

	var tt = new TimedTest({
		name: "CType-assembled-isAlpha-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(isAlpha("a"));
			assertFalse(isAlpha(";"));
		}
	});
	
	tt.run(results);
}

function testCTypeisDigit(results) {
	isDigit("5");
	isDigit("g");

	var tt = new TimedTest({
		name: "CType-assembled-isAlpha-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(isDigit("5"));
			assertFalse(isDigit("g"));
		}
	});
	
	tt.run(results);
}

function testCTypeisSpace(results) {
	isSpace(" ");
	isSpace("g");

	var tt = new TimedTest({
		name: "CType-assembled-isSpace-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(isSpace(" "));
			assertFalse(isSpace("g"));
		}
	});
	
	tt.run(results);
}
