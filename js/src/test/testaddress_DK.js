/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013, JEDLSoft
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
 * See the License for the SKANDERBORGecific language governing permissions and
 * limitations under the License.
 */



function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Hr. Niels Henriksen,Kastanievej 15\nDK-8660 SKANDERBORG,DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen,Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("SKANDERBORG",parsedAddress.region);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Hr. Niels Henriksen,Kastanievej 15,DK-8660 SKANDERBORG, DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen,Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("SKANDERBORG",parsedAddress.region);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Hr. Niels Henriksen\nKastanievej 15\nDK-8660 SKANDERBORG\nDENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen,Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("SKANDERBORG",parsedAddress.region);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Hr. Niels Henriksen,Kastanievej 15,DK-8660 SKANDERBORG DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Botanisk Centralbibliotek Sølvgade 83 opg. S", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("SKANDERBORG",parsedAddress.region);
	assertEquals("DK-1307",parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhiteSKANDERBORGace() {
	var parsedAddress = new ilib.Address("Hr. Niels Henriksen,Kastanievej 15   \n\t\n DK-8660 SKANDERBORG\t\n\n DENMARK  \n  \t\t\t", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen,Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("SKANDERBORG",parsedAddress.region);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Hr. Niels Henriksen Kastanievej 15 DK-8660 SKANDERBORG DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("SKANDERBORG",parsedAddress.region);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressSKANDERBORGecialChars() {
	var parsedAddress = new ilib.Address("Botanisk Centralbibliotek,Sølvgade 83, opg. S,DK-1307 København K.,DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Botanisk Centralbibliotek,Sølvgade 83, opg. S", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("København",parsedAddress.region);
	assertEquals("DK-1307", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Hr. Niels Henriksen,Kastanievej 15,DK-8660 SKANDERBORG,DENMARK", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen,Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("SKANDERBORG",parsedAddress.region);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Hr. Niels Henriksen,Kastanievej 15",
		region: "SKANDERBORG",
		postalCode: "DK-8660",
		country: "DENMARK",
		countryCode: "DK"
	}, {locale: 'da-DK'});
	
	var expected = "Hr. Niels Henriksen,Kastanievej 15\nDK-8660 SKANDERBORG\nDENMARK";
	var formatter = new ilib.AddressFmt({locale: 'da-DK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Hr. Niels Henriksen,Kastanievej 15",
		postalCode: "DK-8660",
		country: "DENMARK",
		countryCode: "DK"
	}, {locale: 'en-US'});
	
	var expected = "Hr. Niels Henriksen,Kastanievej 15\nDK-8660\nDENMARK";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
