/*
 * testSuiteDates.js - test suite for the date tests
 * 
 * Copyright © 2014, JEDLSoft
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

var cli = require('../testcli/runner.js');

function newSuite(path, include) {
	var suite = new cli.TestSuite("date/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
   		"testdatefmt_ar_SA.js",
		"testdatefmt_as_IN.js",
		"testdatefmt_bg.js",
		"testdatefmt_bn_IN.js",
		"testdatefmt_bs_Cyrl_BA.js",
		"testdatefmt_bs_Latn_BA.js",
		"testdatefmt_cs_CZ.js",
		"testdatefmt_da_DK.js",
		"testdatefmt_de_DE.js",
		"testdatefmt_el_GR.js", 
		"testdatefmt_en_CA.js",
		"testdatefmt_en_GB.js",
		"testdatefmt_en_IN.js",
		"testdatefmt_en_US.js",
		"testdatefmt_es_CO.js",
		"testdatefmt_es_ES.js",
		"testdatefmt_et_EE.js",
		"testdatefmt_fa_IR.js",
		"testdatefmt_fi_FI.js",
		"testdatefmt_fr_CA.js",
		"testdatefmt_fr_FR.js",
		"testdatefmt_ga_IE.js",
		"testdatefmt_gu_IN.js",
		"testdatefmt_he_IL.js",
		"testdatefmt_hi_IN.js",
		"testdatefmt_hr_HR.js",
		"testdatefmt_id_ID.js",
		"testdatefmt_it_IT.js",
		"testdatefmt_ja_JP.js",
		"testdatefmt.js",
		"testdatefmt_kk_Cyrl_KZ.js",
		"testdatefmt_kn_IN.js",
		"testdatefmt_ko_KR.js",
		//"testdatefmt_ku_Arab_IQ.js",
		"testdatefmt_lt_LT.js",
		"testdatefmt_lv_LV.js",
		"testdatefmt_mk_MK.js",
		"testdatefmt_mn_Cyrl_MN.js",
		"testdatefmt_ml_IN.js",
		"testdatefmt_mr_IN.js",
		"testdatefmt_ms_MY.js",
		"testdatefmt_nb_NO.js",
		"testdatefmt_nl_NL.js",
		"testdatefmt_pa_IN.js",
		"testdatefmt_pl_PL.js",
		"testdatefmt_pt_BR.js",
		"testdatefmtrange_ar_SA.js",
		"testdatefmtrange_as_IN.js",
		"testdatefmtrange_bg_BG.js",
		"testdatefmtrange_bn_IN.js",
		"testdatefmtrange_bs_Latn_BA.js",
		"testdatefmtrange_cs_CZ.js",
		"testdatefmtrange_da_DK.js",
		"testdatefmtrange_de_DE.js",
		"testdatefmtrange_el_GR.js",
		"testdatefmtrange_en_GB.js",
		"testdatefmtrange_en_SG.js",
		"testdatefmtrange_en_US.js",
		"testdatefmtrange_es_CO.js",
		"testdatefmtrange_es_ES.js",
		"testdatefmtrange_es_UY.js",
		"testdatefmtrange_es_VE.js",
		"testdatefmtrange_et_EE.js",
		"testdatefmtrange_fa_IR.js",
		"testdatefmtrange_fi_FI.js",
		"testdatefmtrange_fr_CA.js",
		"testdatefmtrange_fr_FR.js",
		"testdatefmtrange_ga_IE.js",
		"testdatefmtrange_gu_IN.js",
		"testdatefmtrange_he_IL.js",
		"testdatefmtrange_hi_IN.js",
		"testdatefmtrange_hr_HR.js",
		"testdatefmtrange_hu_HU.js",
		"testdatefmtrange_id_ID.js",
		"testdatefmtrange_it_IT.js",
		"testdatefmtrange_ja_JP.js",
		"testdatefmtrange.js",
		"testdatefmtrange_kk_Cyrl_KZ.js",
		"testdatefmtrange_kn_IN.js",
		"testdatefmtrange_ko_KR.js",
		//"testdatefmtrange_ku_Arab_IQ.js",
		"testdatefmtrange_lt_LT.js",
		"testdatefmtrange_lv_LV.js",
		"testdatefmtrange_mk_MK.js",
		"testdatefmtrange_ml_IN.js",
		"testdatefmtrange_mn_Cyrl_MN.js",
		"testdatefmtrange_mr_IN.js",
		"testdatefmtrange_ms_MY.js",
		"testdatefmtrange_nb_NO.js",
		"testdatefmtrange_nl_NL.js",
		"testdatefmtrange_pa_IN.js",
		"testdatefmtrange_pl_PL.js",
		"testdatefmtrange_pt_BR.js",
		"testdatefmtrange_pt_PT.js",
		"testdatefmtrange_ro_RO.js",
		"testdatefmtrange_ru_RU.js",
		"testdatefmtrange_sk_SK.js",
		"testdatefmtrange_sl_SI.js",
		"testdatefmtrange_sq_AL.js",
		"testdatefmtrange_sr_Latn_RS.js",
		"testdatefmtrange_sv_SE.js",
		"testdatefmtrange_ta_IN.js",
		"testdatefmtrange_te_IN.js",
		"testdatefmtrange_th_TH.js",
		"testdatefmtrange_tr_TR.js",
		"testdatefmtrange_uk_UA.js",
		"testdatefmtrange_ur_IN.js",
		"testdatefmtrange_uz_Cyrl_UZ.js",
		"testdatefmtrange_uz_Latn_UZ.js",
		"testdatefmtrange_vi_VN.js",
		"testdatefmtrange_zh_Hans_CN.js",
		"testdatefmtrange_zh_Hant_HK.js",
		"testdatefmtrange_zh_Hant_TW.js",
		"testdatefmt_ro_RO.js",
		"testdatefmt_ru_RU.js",
		"testdatefmt_sk_SK.js",
		"testdatefmt_sl_SI.js",
		"testdatefmt_sq_AL.js",
		"testdatefmt_sr_Latn_RS.js",
		"testdatefmt_sv_SE.js",
		"testdatefmt_ta_IN.js",
		"testdatefmt_te_IN.js",
		"testdatefmt_th_TH.js",
		"testdatefmt_tr_TR.js",
		"testdatefmt_uk_UA.js",
		"testdatefmt_ur_IN.js",
		"testdatefmt_uz_Cyrl_UZ.js",
		"testdatefmt_uz_Latn_UZ.js",
		"testdatefmt_vi_VN.js",
		"testdatefmt_zh_CN.js",
		"testdatefmt_zh_Hant_HK.js",
		"testdatefmt_zh_Hant_TW.js",
		"testdate.js",
		"testdurfmt.js",
		"testdurfmt_ar_SA.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}
