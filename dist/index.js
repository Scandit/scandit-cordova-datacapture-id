var scanditDatacaptureFrameworksCore = cordova.require('scandit-cordova-datacapture-core.Scandit').__ScanditCore;
var scanditCordovaDatacaptureCore = cordova.require('scandit-cordova-datacapture-core.Scandit');

class DateResult {
    get day() { return this.json.day; }
    get month() { return this.json.month; }
    get year() { return this.json.year; }
    get localDate() {
        return new Date(this.json.year, this.json.month ? this.json.month - 1 : 1, this.json.day || 1);
    }
    get utcDate() {
        return new Date(Date.UTC(this.json.year, this.json.month ? this.json.month - 1 : 1, this.json.day || 1));
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const dateResult = new DateResult();
        dateResult.json = json;
        return dateResult;
    }
}

exports.IdAnonymizationMode = void 0;
(function (IdAnonymizationMode) {
    IdAnonymizationMode["None"] = "none";
    IdAnonymizationMode["FieldsOnly"] = "fieldsOnly";
    IdAnonymizationMode["ImagesOnly"] = "imagesOnly";
    IdAnonymizationMode["FieldsAndImages"] = "fieldsAndImages";
})(exports.IdAnonymizationMode || (exports.IdAnonymizationMode = {}));

exports.IdImageType = void 0;
(function (IdImageType) {
    IdImageType["Face"] = "face";
    IdImageType["CroppedDocument"] = "croppedDocument";
    IdImageType["Frame"] = "frame";
})(exports.IdImageType || (exports.IdImageType = {}));

exports.CapturedSides = void 0;
(function (CapturedSides) {
    CapturedSides["FrontOnly"] = "frontOnly";
    CapturedSides["FrontAndBack"] = "frontAndBack";
})(exports.CapturedSides || (exports.CapturedSides = {}));

exports.TextHintPosition = void 0;
(function (TextHintPosition) {
    TextHintPosition["AboveViewfinder"] = "aboveViewfinder";
    TextHintPosition["BelowViewfinder"] = "belowViewfinder";
})(exports.TextHintPosition || (exports.TextHintPosition = {}));

exports.RejectionReason = void 0;
(function (RejectionReason) {
    RejectionReason["NotAcceptedDocumentType"] = "notAcceptedDocumentType";
    RejectionReason["InvalidFormat"] = "invalidFormat";
    RejectionReason["DocumentVoided"] = "documentVoided";
    RejectionReason["Timeout"] = "timeout";
    RejectionReason["SingleImageNotRecognized"] = "singleImageNotRecognized";
    RejectionReason["DocumentExpired"] = "documentExpired";
    RejectionReason["DocumentExpiresSoon"] = "documentExpiresSoon";
    RejectionReason["NotRealIdCompliant"] = "notRealIdCompliant";
    RejectionReason["HolderUnderage"] = "holderUnderage";
    RejectionReason["ForgedAamvaBarcode"] = "forgedAamvaBarcode";
    RejectionReason["InconsistentData"] = "inconsistentData";
})(exports.RejectionReason || (exports.RejectionReason = {}));

exports.IdCaptureRegion = void 0;
(function (IdCaptureRegion) {
    IdCaptureRegion["Any"] = "any";
    IdCaptureRegion["EuAndSchengen"] = "euAndSchengen";
    IdCaptureRegion["Aruba"] = "aruba";
    IdCaptureRegion["Afghanistan"] = "afghanistan";
    IdCaptureRegion["Angola"] = "angola";
    IdCaptureRegion["Anguilla"] = "anguilla";
    IdCaptureRegion["AlandIslands"] = "alandIslands";
    IdCaptureRegion["Albania"] = "albania";
    IdCaptureRegion["Andorra"] = "andorra";
    IdCaptureRegion["Uae"] = "uae";
    IdCaptureRegion["Argentina"] = "argentina";
    IdCaptureRegion["Armenia"] = "armenia";
    IdCaptureRegion["AmericanSamoa"] = "americanSamoa";
    IdCaptureRegion["Antarctica"] = "antarctica";
    IdCaptureRegion["FrenchSouthernTerritories"] = "frenchSouthernTerritories";
    IdCaptureRegion["AntiguaAndBarbuda"] = "antiguaAndBarbuda";
    IdCaptureRegion["Australia"] = "australia";
    IdCaptureRegion["Austria"] = "austria";
    IdCaptureRegion["Azerbaijan"] = "azerbaijan";
    IdCaptureRegion["Burundi"] = "burundi";
    IdCaptureRegion["Belgium"] = "belgium";
    IdCaptureRegion["Benin"] = "benin";
    IdCaptureRegion["BonaireSintEustatiusAndSaba"] = "bonaireSintEustatiusAndSaba";
    IdCaptureRegion["BurkinaFaso"] = "burkinaFaso";
    IdCaptureRegion["Bangladesh"] = "bangladesh";
    IdCaptureRegion["Bulgaria"] = "bulgaria";
    IdCaptureRegion["Bahrain"] = "bahrain";
    IdCaptureRegion["Bahamas"] = "bahamas";
    IdCaptureRegion["BosniaHerzegovina"] = "bosniaHerzegovina";
    IdCaptureRegion["SaintBarthelemy"] = "saintBarthelemy";
    IdCaptureRegion["Belarus"] = "belarus";
    IdCaptureRegion["Belize"] = "belize";
    IdCaptureRegion["Bermuda"] = "bermuda";
    IdCaptureRegion["Bolivia"] = "bolivia";
    IdCaptureRegion["Brazil"] = "brazil";
    IdCaptureRegion["Barbados"] = "barbados";
    IdCaptureRegion["BruneiDarussalam"] = "bruneiDarussalam";
    IdCaptureRegion["Bhutan"] = "bhutan";
    IdCaptureRegion["BouvetIsland"] = "bouvetIsland";
    IdCaptureRegion["Botswana"] = "botswana";
    IdCaptureRegion["Car"] = "car";
    IdCaptureRegion["Canada"] = "canada";
    IdCaptureRegion["CocosIslands"] = "cocosIslands";
    IdCaptureRegion["Switzerland"] = "switzerland";
    IdCaptureRegion["Chile"] = "chile";
    IdCaptureRegion["China"] = "china";
    IdCaptureRegion["CoteIvoire"] = "coteIvoire";
    IdCaptureRegion["Cameroon"] = "cameroon";
    IdCaptureRegion["DemocraticRepublicOfCongo"] = "democraticRepublicOfCongo";
    IdCaptureRegion["Congo"] = "congo";
    IdCaptureRegion["CookIslands"] = "cookIslands";
    IdCaptureRegion["Colombia"] = "colombia";
    IdCaptureRegion["Comoros"] = "comoros";
    IdCaptureRegion["CaboVerde"] = "caboVerde";
    IdCaptureRegion["CostaRica"] = "costaRica";
    IdCaptureRegion["Cuba"] = "cuba";
    IdCaptureRegion["Curacao"] = "curacao";
    IdCaptureRegion["ChristmasIsland"] = "christmasIsland";
    IdCaptureRegion["CaymanIslands"] = "caymanIslands";
    IdCaptureRegion["Cyprus"] = "cyprus";
    IdCaptureRegion["Czechia"] = "czechia";
    IdCaptureRegion["Germany"] = "germany";
    IdCaptureRegion["Djibouti"] = "djibouti";
    IdCaptureRegion["Dominica"] = "dominica";
    IdCaptureRegion["Denmark"] = "denmark";
    IdCaptureRegion["DominicanRepublic"] = "dominicanRepublic";
    IdCaptureRegion["Algeria"] = "algeria";
    IdCaptureRegion["Ecuador"] = "ecuador";
    IdCaptureRegion["Egypt"] = "egypt";
    IdCaptureRegion["Eritrea"] = "eritrea";
    IdCaptureRegion["WesternSahara"] = "westernSahara";
    IdCaptureRegion["Spain"] = "spain";
    IdCaptureRegion["Estonia"] = "estonia";
    IdCaptureRegion["Ethiopia"] = "ethiopia";
    IdCaptureRegion["Finland"] = "finland";
    IdCaptureRegion["Fiji"] = "fiji";
    IdCaptureRegion["FalklandIslands"] = "falklandIslands";
    IdCaptureRegion["France"] = "france";
    IdCaptureRegion["FaroeIslands"] = "faroeIslands";
    IdCaptureRegion["Micronesia"] = "micronesia";
    IdCaptureRegion["Gabon"] = "gabon";
    IdCaptureRegion["Uk"] = "uk";
    IdCaptureRegion["Georgia"] = "georgia";
    IdCaptureRegion["Guernsey"] = "guernsey";
    IdCaptureRegion["Ghana"] = "ghana";
    IdCaptureRegion["Gibraltar"] = "gibraltar";
    IdCaptureRegion["Guinea"] = "guinea";
    IdCaptureRegion["Guadeloupe"] = "guadeloupe";
    IdCaptureRegion["Gambia"] = "gambia";
    IdCaptureRegion["GuineaBissau"] = "guineaBissau";
    IdCaptureRegion["EquatorialGuinea"] = "equatorialGuinea";
    IdCaptureRegion["Greece"] = "greece";
    IdCaptureRegion["Grenada"] = "grenada";
    IdCaptureRegion["Greenland"] = "greenland";
    IdCaptureRegion["Guatemala"] = "guatemala";
    IdCaptureRegion["FrenchGuiana"] = "frenchGuiana";
    IdCaptureRegion["Guam"] = "guam";
    IdCaptureRegion["Guyana"] = "guyana";
    IdCaptureRegion["HongKong"] = "hongKong";
    IdCaptureRegion["HeardIslandAndMcDonaldIslands"] = "heardIslandAndMcDonaldIslands";
    IdCaptureRegion["Honduras"] = "honduras";
    IdCaptureRegion["Croatia"] = "croatia";
    IdCaptureRegion["Haiti"] = "haiti";
    IdCaptureRegion["Hungary"] = "hungary";
    IdCaptureRegion["Indonesia"] = "indonesia";
    IdCaptureRegion["IsleOfMan"] = "isleOfMan";
    IdCaptureRegion["India"] = "india";
    IdCaptureRegion["BritishIndianOceanTerritory"] = "britishIndianOceanTerritory";
    IdCaptureRegion["Ireland"] = "ireland";
    IdCaptureRegion["Iran"] = "iran";
    IdCaptureRegion["Iraq"] = "iraq";
    IdCaptureRegion["Iceland"] = "iceland";
    IdCaptureRegion["Israel"] = "israel";
    IdCaptureRegion["Italy"] = "italy";
    IdCaptureRegion["Jamaica"] = "jamaica";
    IdCaptureRegion["Jersey"] = "jersey";
    IdCaptureRegion["Jordan"] = "jordan";
    IdCaptureRegion["Japan"] = "japan";
    IdCaptureRegion["Kazakhstan"] = "kazakhstan";
    IdCaptureRegion["Kenya"] = "kenya";
    IdCaptureRegion["Kyrgyzstan"] = "kyrgyzstan";
    IdCaptureRegion["Cambodia"] = "cambodia";
    IdCaptureRegion["Kiribati"] = "kiribati";
    IdCaptureRegion["SaintKittsAndNevis"] = "saintKittsAndNevis";
    IdCaptureRegion["SouthKorea"] = "southKorea";
    IdCaptureRegion["Kuwait"] = "kuwait";
    IdCaptureRegion["Lao"] = "lao";
    IdCaptureRegion["Lebanon"] = "lebanon";
    IdCaptureRegion["Liberia"] = "liberia";
    IdCaptureRegion["Libya"] = "libya";
    IdCaptureRegion["SaintLucia"] = "saintLucia";
    IdCaptureRegion["Liechtenstein"] = "liechtenstein";
    IdCaptureRegion["SriLanka"] = "sriLanka";
    IdCaptureRegion["Lesotho"] = "lesotho";
    IdCaptureRegion["Lithuania"] = "lithuania";
    IdCaptureRegion["Luxembourg"] = "luxembourg";
    IdCaptureRegion["Latvia"] = "latvia";
    IdCaptureRegion["Macao"] = "macao";
    IdCaptureRegion["FrenchSaintMartin"] = "frenchSaintMartin";
    IdCaptureRegion["Morocco"] = "morocco";
    IdCaptureRegion["Monaco"] = "monaco";
    IdCaptureRegion["Moldova"] = "moldova";
    IdCaptureRegion["Madagascar"] = "madagascar";
    IdCaptureRegion["Maldives"] = "maldives";
    IdCaptureRegion["Mexico"] = "mexico";
    IdCaptureRegion["MarshallIslands"] = "marshallIslands";
    IdCaptureRegion["NorthMacedonia"] = "northMacedonia";
    IdCaptureRegion["Mali"] = "mali";
    IdCaptureRegion["Malta"] = "malta";
    IdCaptureRegion["Myanmar"] = "myanmar";
    IdCaptureRegion["Montenegro"] = "montenegro";
    IdCaptureRegion["Mongolia"] = "mongolia";
    IdCaptureRegion["NorthernMarianaIslands"] = "northernMarianaIslands";
    IdCaptureRegion["Mozambique"] = "mozambique";
    IdCaptureRegion["Mauritania"] = "mauritania";
    IdCaptureRegion["Montserrat"] = "montserrat";
    IdCaptureRegion["Martinique"] = "martinique";
    IdCaptureRegion["Mauritius"] = "mauritius";
    IdCaptureRegion["Malawi"] = "malawi";
    IdCaptureRegion["Malaysia"] = "malaysia";
    IdCaptureRegion["Mayotte"] = "mayotte";
    IdCaptureRegion["Namibia"] = "namibia";
    IdCaptureRegion["NewCaledonia"] = "newCaledonia";
    IdCaptureRegion["Niger"] = "niger";
    IdCaptureRegion["NorfolkIsland"] = "norfolkIsland";
    IdCaptureRegion["Nigeria"] = "nigeria";
    IdCaptureRegion["Nicaragua"] = "nicaragua";
    IdCaptureRegion["Niue"] = "niue";
    IdCaptureRegion["Netherlands"] = "netherlands";
    IdCaptureRegion["Norway"] = "norway";
    IdCaptureRegion["Nepal"] = "nepal";
    IdCaptureRegion["Nauru"] = "nauru";
    IdCaptureRegion["NewZealand"] = "newZealand";
    IdCaptureRegion["Oman"] = "oman";
    IdCaptureRegion["Pakistan"] = "pakistan";
    IdCaptureRegion["Panama"] = "panama";
    IdCaptureRegion["Pitcairn"] = "pitcairn";
    IdCaptureRegion["Peru"] = "peru";
    IdCaptureRegion["Philippines"] = "philippines";
    IdCaptureRegion["Palau"] = "palau";
    IdCaptureRegion["PapuaNewGuinea"] = "papuaNewGuinea";
    IdCaptureRegion["Poland"] = "poland";
    IdCaptureRegion["PuertoRico"] = "puertoRico";
    IdCaptureRegion["NorthKorea"] = "northKorea";
    IdCaptureRegion["Portugal"] = "portugal";
    IdCaptureRegion["Paraguay"] = "paraguay";
    IdCaptureRegion["Palestine"] = "palestine";
    IdCaptureRegion["FrenchPolynesia"] = "frenchPolynesia";
    IdCaptureRegion["Qatar"] = "qatar";
    IdCaptureRegion["Reunion"] = "reunion";
    IdCaptureRegion["Romania"] = "romania";
    IdCaptureRegion["Russia"] = "russia";
    IdCaptureRegion["Rwanda"] = "rwanda";
    IdCaptureRegion["SaudiArabia"] = "saudiArabia";
    IdCaptureRegion["Sudan"] = "sudan";
    IdCaptureRegion["Senegal"] = "senegal";
    IdCaptureRegion["Singapore"] = "singapore";
    IdCaptureRegion["SouthGeorgiaAndTheSouthSandwichIslands"] = "southGeorgiaAndTheSouthSandwichIslands";
    IdCaptureRegion["SaintHelena"] = "saintHelena";
    IdCaptureRegion["SvalbardAndJanMayen"] = "svalbardAndJanMayen";
    IdCaptureRegion["SolomonIslands"] = "solomonIslands";
    IdCaptureRegion["SierraLeone"] = "sierraLeone";
    IdCaptureRegion["ElSalvador"] = "elSalvador";
    IdCaptureRegion["SanMarino"] = "sanMarino";
    IdCaptureRegion["Somalia"] = "somalia";
    IdCaptureRegion["SaintPierreAndMiquelon"] = "saintPierreAndMiquelon";
    IdCaptureRegion["Serbia"] = "serbia";
    IdCaptureRegion["SouthSudan"] = "southSudan";
    IdCaptureRegion["SaoTomeAndPrincipe"] = "saoTomeAndPrincipe";
    IdCaptureRegion["Suriname"] = "suriname";
    IdCaptureRegion["Slovakia"] = "slovakia";
    IdCaptureRegion["Slovenia"] = "slovenia";
    IdCaptureRegion["Sweden"] = "sweden";
    IdCaptureRegion["Eswatini"] = "eswatini";
    IdCaptureRegion["DutchSintMaarten"] = "dutchSintMaarten";
    IdCaptureRegion["Seychelles"] = "seychelles";
    IdCaptureRegion["Syria"] = "syria";
    IdCaptureRegion["TurksAndCaicosIslands"] = "turksAndCaicosIslands";
    IdCaptureRegion["Chad"] = "chad";
    IdCaptureRegion["Togo"] = "togo";
    IdCaptureRegion["Thailand"] = "thailand";
    IdCaptureRegion["Tajikistan"] = "tajikistan";
    IdCaptureRegion["Tokelau"] = "tokelau";
    IdCaptureRegion["Turkmenistan"] = "turkmenistan";
    IdCaptureRegion["TimorLeste"] = "timorLeste";
    IdCaptureRegion["Tonga"] = "tonga";
    IdCaptureRegion["TrinidadAndTobago"] = "trinidadAndTobago";
    IdCaptureRegion["Tunisia"] = "tunisia";
    IdCaptureRegion["Turkey"] = "turkey";
    IdCaptureRegion["Tuvalu"] = "tuvalu";
    IdCaptureRegion["Taiwan"] = "taiwan";
    IdCaptureRegion["Tanzania"] = "tanzania";
    IdCaptureRegion["Uganda"] = "uganda";
    IdCaptureRegion["Ukraine"] = "ukraine";
    IdCaptureRegion["UsMinorOutlyingIslands"] = "usMinorOutlyingIslands";
    IdCaptureRegion["Uruguay"] = "uruguay";
    IdCaptureRegion["Us"] = "us";
    IdCaptureRegion["Uzbekistan"] = "uzbekistan";
    IdCaptureRegion["HolySee"] = "holySee";
    IdCaptureRegion["SaintVincentAndTheGrenadines"] = "saintVincentAndTheGrenadines";
    IdCaptureRegion["Venezuela"] = "venezuela";
    IdCaptureRegion["BritishVirginIslands"] = "britishVirginIslands";
    IdCaptureRegion["UsVirginIslands"] = "usVirginIslands";
    IdCaptureRegion["Vietnam"] = "vietnam";
    IdCaptureRegion["Vanuatu"] = "vanuatu";
    IdCaptureRegion["WallisAndFutuna"] = "wallisAndFutuna";
    IdCaptureRegion["Samoa"] = "samoa";
    IdCaptureRegion["Kosovo"] = "kosovo";
    IdCaptureRegion["Yemen"] = "yemen";
    IdCaptureRegion["SouthAfrica"] = "southAfrica";
    IdCaptureRegion["Zambia"] = "zambia";
    IdCaptureRegion["Zimbabwe"] = "zimbabwe";
})(exports.IdCaptureRegion || (exports.IdCaptureRegion = {}));

exports.RegionSpecificSubtype = void 0;
(function (RegionSpecificSubtype) {
    RegionSpecificSubtype["UsBorderCrossingCard"] = "usBorderCrossingCard";
    RegionSpecificSubtype["ChinaExitEntryPermit"] = "chinaExitEntryPermit";
    RegionSpecificSubtype["UsGlobalEntryCard"] = "usGlobalEntryCard";
    RegionSpecificSubtype["ChinaMainlandTravelPermitTaiwan"] = "chinaMainlandTravelPermitTaiwan";
    RegionSpecificSubtype["UsNexusCard"] = "usNexusCard";
    RegionSpecificSubtype["ChinaMainlandTravelPermitHongKongMacau"] = "chinaMainlandTravelPermitHongKongMacau";
    RegionSpecificSubtype["ApecBusinessTravelCard"] = "apecBusinessTravelCard";
    RegionSpecificSubtype["PakistanAfghanCitizenCard"] = "pakistanAfghanCitizenCard";
    RegionSpecificSubtype["SingaporeFinCard"] = "singaporeFinCard";
    RegionSpecificSubtype["UsGreenCard"] = "usGreenCard";
    RegionSpecificSubtype["MalaysiaIkad"] = "malaysiaIkad";
    RegionSpecificSubtype["MalaysiaMykad"] = "malaysiaMykad";
    RegionSpecificSubtype["MalaysiaMypr"] = "malaysiaMypr";
    RegionSpecificSubtype["MexicoConsularVoterId"] = "mexicoConsularVoterId";
    RegionSpecificSubtype["GermanyEid"] = "germanyEid";
    RegionSpecificSubtype["UsCommonAccessCard"] = "usCommonAccessCard";
    RegionSpecificSubtype["PhilippinesMultipurposeId"] = "philippinesMultipurposeId";
    RegionSpecificSubtype["MalaysiaMykas"] = "malaysiaMykas";
    RegionSpecificSubtype["MalaysiaMykid"] = "malaysiaMykid";
    RegionSpecificSubtype["MalaysiaMytentera"] = "malaysiaMytentera";
    RegionSpecificSubtype["MexicoProfessionalId"] = "mexicoProfessionalId";
    RegionSpecificSubtype["MalaysiaRefugeeId"] = "malaysiaRefugeeId";
    RegionSpecificSubtype["CanadaTribalId"] = "canadaTribalId";
    RegionSpecificSubtype["UsUniformedServicesId"] = "usUniformedServicesId";
    RegionSpecificSubtype["UsVeteranId"] = "usVeteranId";
    RegionSpecificSubtype["PhilippinesWorkPermit"] = "philippinesWorkPermit";
    RegionSpecificSubtype["SingaporeWorkPermit"] = "singaporeWorkPermit";
    RegionSpecificSubtype["UsWorkPermit"] = "usWorkPermit";
    RegionSpecificSubtype["PhilippinesSocialSecurityCard"] = "philippinesSocialSecurityCard";
    RegionSpecificSubtype["SwedenSocialSecurityCard"] = "swedenSocialSecurityCard";
    RegionSpecificSubtype["CanadaSocialSecurityCard"] = "canadaSocialSecurityCard";
    RegionSpecificSubtype["UsSocialSecurityCard"] = "usSocialSecurityCard";
    RegionSpecificSubtype["BelgiumMinorsId"] = "belgiumMinorsId";
    RegionSpecificSubtype["ColombiaMinorsId"] = "colombiaMinorsId";
    RegionSpecificSubtype["PeruMinorsId"] = "peruMinorsId";
    RegionSpecificSubtype["BoliviaMinorsId"] = "boliviaMinorsId";
    RegionSpecificSubtype["HungaryAddressCard"] = "hungaryAddressCard";
    RegionSpecificSubtype["UkAsylumRequest"] = "ukAsylumRequest";
    RegionSpecificSubtype["CanadaCitizenshipCertificate"] = "canadaCitizenshipCertificate";
    RegionSpecificSubtype["SingaporeEmploymentPass"] = "singaporeEmploymentPass";
    RegionSpecificSubtype["CanadaMinorsPublicServicesCard"] = "canadaMinorsPublicServicesCard";
    RegionSpecificSubtype["MalaysiaMypolis"] = "malaysiaMypolis";
    RegionSpecificSubtype["PhilippinesNbiClearance"] = "philippinesNbiClearance";
    RegionSpecificSubtype["IndiaPanCard"] = "indiaPanCard";
    RegionSpecificSubtype["PhilippinesPostalId"] = "philippinesPostalId";
    RegionSpecificSubtype["PakistanProofOfRegistration"] = "pakistanProofOfRegistration";
    RegionSpecificSubtype["SingaporeSPass"] = "singaporeSPass";
    RegionSpecificSubtype["SwedenSisId"] = "swedenSisId";
    RegionSpecificSubtype["ColombiaTemporaryProtectionPermit"] = "colombiaTemporaryProtectionPermit";
    RegionSpecificSubtype["UsTwicCard"] = "usTwicCard";
    RegionSpecificSubtype["UsWeaponPermit"] = "usWeaponPermit";
    RegionSpecificSubtype["CanadaWeaponPermit"] = "canadaWeaponPermit";
    RegionSpecificSubtype["IrelandPublicServicesCard"] = "irelandPublicServicesCard";
    RegionSpecificSubtype["CanadaPublicServicesCard"] = "canadaPublicServicesCard";
    RegionSpecificSubtype["PakistanConsularId"] = "pakistanConsularId";
    RegionSpecificSubtype["GuatemalaConsularId"] = "guatemalaConsularId";
    RegionSpecificSubtype["MexicoConsularId"] = "mexicoConsularId";
    RegionSpecificSubtype["PhilippinesTaxId"] = "philippinesTaxId";
    RegionSpecificSubtype["MexicoTaxId"] = "mexicoTaxId";
    RegionSpecificSubtype["ChinaOneWayPermit"] = "chinaOneWayPermit";
    RegionSpecificSubtype["UsMedicalMarijuanaCard"] = "usMedicalMarijuanaCard";
    RegionSpecificSubtype["UsMunicipalId"] = "usMunicipalId";
    RegionSpecificSubtype["AustraliaAsicCard"] = "australiaAsicCard";
    RegionSpecificSubtype["UaeVehicleRegistrationCard"] = "uaeVehicleRegistrationCard";
})(exports.RegionSpecificSubtype || (exports.RegionSpecificSubtype = {}));

exports.IdSide = void 0;
(function (IdSide) {
    IdSide["Front"] = "front";
    IdSide["Back"] = "back";
})(exports.IdSide || (exports.IdSide = {}));

class IdImages {
    constructor() {
        this.json = null;
    }
    get face() { var _a, _b, _c; return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.face) !== null && _c !== void 0 ? _c : null; }
    get frame() { var _a, _b, _c; return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.frame) !== null && _c !== void 0 ? _c : null; }
    getFrame(side) {
        var _a, _b, _c, _d, _e, _f;
        switch (side) {
            case exports.IdSide.Front:
                return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.frame) !== null && _c !== void 0 ? _c : null;
            case exports.IdSide.Back:
                return (_f = (_e = (_d = this.json) === null || _d === void 0 ? void 0 : _d.back) === null || _e === void 0 ? void 0 : _e.frame) !== null && _f !== void 0 ? _f : null;
        }
    }
    getCroppedDocument(side) {
        var _a, _b, _c, _d, _e, _f;
        switch (side) {
            case exports.IdSide.Front:
                return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.croppedDocument) !== null && _c !== void 0 ? _c : null;
            case exports.IdSide.Back:
                return (_f = (_e = (_d = this.json) === null || _d === void 0 ? void 0 : _d.back) === null || _e === void 0 ? void 0 : _e.croppedDocument) !== null && _f !== void 0 ? _f : null;
        }
    }
    static fromJSON(json) {
        const result = new IdImages();
        if (json != null) {
            result.json = json;
        }
        return result;
    }
}

function getIdDefaults() {
    return scanditDatacaptureFrameworksCore.FactoryMaker.getInstance('IdDefaults');
}
function parseIdDefaults(jsonDefaults) {
    const idDefaults = {
        IdCapture: {
            Feedback: {
                idCaptured: scanditDatacaptureFrameworksCore.Feedback.fromJSON(JSON.parse(jsonDefaults.IdCaptureFeedback).idCaptured),
                idRejected: scanditDatacaptureFrameworksCore.Feedback.fromJSON(JSON.parse(jsonDefaults.IdCaptureFeedback).idRejected),
            },
            RecommendedCameraSettings: scanditDatacaptureFrameworksCore.CameraSettings
                .fromJSON(jsonDefaults.RecommendedCameraSettings),
            IdCaptureOverlayDefaults: {
                defaultCapturedBrush: {
                    fillColor: scanditDatacaptureFrameworksCore.Color
                        .fromJSON(jsonDefaults.IdCaptureOverlay.DefaultCapturedBrush.fillColor),
                    strokeColor: scanditDatacaptureFrameworksCore.Color
                        .fromJSON(jsonDefaults.IdCaptureOverlay.DefaultCapturedBrush.strokeColor),
                    strokeWidth: jsonDefaults.IdCaptureOverlay.DefaultCapturedBrush.strokeWidth,
                },
                defaultLocalizedBrush: {
                    fillColor: scanditDatacaptureFrameworksCore.Color
                        .fromJSON(jsonDefaults.IdCaptureOverlay.DefaultLocalizedBrush.fillColor),
                    strokeColor: scanditDatacaptureFrameworksCore.Color
                        .fromJSON(jsonDefaults.IdCaptureOverlay.DefaultLocalizedBrush.strokeColor),
                    strokeWidth: jsonDefaults.IdCaptureOverlay.DefaultLocalizedBrush.strokeWidth,
                },
                defaultRejectedBrush: {
                    fillColor: scanditDatacaptureFrameworksCore.Color
                        .fromJSON(jsonDefaults.IdCaptureOverlay.DefaultRejectedBrush.fillColor),
                    strokeColor: scanditDatacaptureFrameworksCore.Color
                        .fromJSON(jsonDefaults.IdCaptureOverlay.DefaultRejectedBrush.strokeColor),
                    strokeWidth: jsonDefaults.IdCaptureOverlay.DefaultRejectedBrush.strokeWidth,
                },
            },
            IdCaptureSettings: {
                anonymizationMode: jsonDefaults.IdCaptureSettings.anonymizationMode,
                rejectVoidedIds: jsonDefaults.IdCaptureSettings.rejectVoidedIds,
                decodeBackOfEuropeanDrivingLicense: jsonDefaults.IdCaptureSettings.decodeBackOfEuropeanDrivingLicense,
            },
        },
    };
    return idDefaults;
}

function loadIdDefaults(jsonDefaults) {
    const idDefaults = parseIdDefaults(jsonDefaults);
    scanditDatacaptureFrameworksCore.FactoryMaker.bindInstanceIfNotExists('IdDefaults', idDefaults);
}

exports.AamvaBarcodeVerificationStatus = void 0;
(function (AamvaBarcodeVerificationStatus) {
    AamvaBarcodeVerificationStatus["Authentic"] = "authentic";
    AamvaBarcodeVerificationStatus["LikelyForged"] = "maybeForged";
    AamvaBarcodeVerificationStatus["Forged"] = "forged";
})(exports.AamvaBarcodeVerificationStatus || (exports.AamvaBarcodeVerificationStatus = {}));

class AamvaBarcodeVerificationResult {
    /**
     * @deprecated
     */
    get allChecksPassed() { return this.json.allChecksPassed; }
    get status() {
        return this._status;
    }
    static fromJSON(json) {
        const result = new AamvaBarcodeVerificationResult();
        result.json = json;
        switch (result.json.verificationStatus) {
            case "authentic":
                result._status = exports.AamvaBarcodeVerificationStatus.Authentic;
                break;
            case "maybeForged":
                result._status = exports.AamvaBarcodeVerificationStatus.LikelyForged;
                break;
            case "forged":
                result._status = exports.AamvaBarcodeVerificationStatus.Forged;
                break;
        }
        return result;
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class IdCaptureController extends scanditDatacaptureFrameworksCore.BaseController {
    static forIdCapture(idCapture) {
        const controller = new IdCaptureController();
        controller.idCapture = idCapture;
        return controller;
    }
    constructor() {
        super('IdCaptureProxy');
    }
    reset() {
        return this._proxy.resetMode();
    }
    createContextForBarcodeVerification(context) {
        return this._proxy.createContextForBarcodeVerification(JSON.stringify(context.toJSON()));
    }
    verifyCapturedIdAsync(capturedId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._proxy.verifyCapturedIdAsync(capturedId);
            if (result == null) {
                return null;
            }
            return result.data;
        });
    }
    setModeEnabledState(enabled) {
        this._proxy.setModeEnabledState(enabled);
    }
    updateIdCaptureMode() {
        return this._proxy.updateIdCaptureMode(JSON.stringify(this.idCapture.toJSON()));
    }
    applyIdCaptureModeSettings(newSettings) {
        return this._proxy.applyIdCaptureModeSettings(JSON.stringify(newSettings.toJSON()));
    }
    updateIdCaptureOverlay(overlay) {
        return this._proxy.updateIdCaptureOverlay(JSON.stringify(overlay.toJSON()));
    }
    updateFeedback(feedback) {
        return this._proxy.updateFeedback(JSON.stringify(feedback.toJSON()));
    }
}

exports.IdCaptureListenerEvents = void 0;
(function (IdCaptureListenerEvents) {
    IdCaptureListenerEvents["inCallback"] = "IdCaptureListener.inCallback";
    IdCaptureListenerEvents["didCapture"] = "IdCaptureListener.didCaptureId";
    IdCaptureListenerEvents["didReject"] = "IdCaptureListener.didRejectId";
})(exports.IdCaptureListenerEvents || (exports.IdCaptureListenerEvents = {}));

class MRZResult {
    get documentCode() { return this.json.documentCode; }
    get namesAreTruncated() { return this.json.namesAreTruncated; }
    get optional() { return this.json.optional; }
    get optional1() { return this.json.optional1; }
    get capturedMrz() { return this.json.capturedMrz; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    get renewalTimes() { return this.json.renewalTimes; }
    get fullNameSimplifiedChinese() { return this.json.fullNameSimplifiedChinese; }
    get omittedCharacterCountInGbkName() { return this.json.omittedCharacterCountInGbkName; }
    get omittedNameCount() { return this.json.omittedNameCount; }
    get issuingAuthorityCode() { return this.json.issuingAuthorityCode; }
    get passportIssuerIso() { return this.json.passportIssuerIso; }
    get passportNumber() { return this.json.passportNumber; }
    get passportDateOfExpiry() {
        return DateResult.fromJSON(this.json.passportDateOfExpiry);
    }
    static fromJSON(json) {
        const result = new MRZResult();
        result.json = json;
        return result;
    }
}

class CommonCapturedIdFields {
    get firstName() { return this.json.firstName; }
    get lastName() { return this.json.lastName; }
    get fullName() { return this.json.fullName; }
    get secondaryLastName() { return this.json.secondaryLastName; }
    get sex() { return this.json.sex; }
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    get age() { return this.json.age; }
    get isExpired() { return this.json.isExpired; }
    get nationality() { return this.json.nationality; }
    get address() { return this.json.address; }
    get documentAdditionalNumber() { return this.json.documentAdditionalNumber; }
    get documentType() { return this.json.documentType; }
    get documentSubtype() { return this.json.documentSubtype; }
    get documentNumber() { return this.json.documentNumber; }
    get issuingCountry() { return this.json.issuingCountry; }
    get issuingCountryIso() { return this.json.issuingCountryIso; }
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json, existingInstance) {
        if (json === null) {
            return null;
        }
        const firstName = json.firstName;
        const lastName = json.lastName;
        const fullName = json.fullName;
        const secondaryLastName = json.secondaryLastName;
        const sex = json.sex;
        const dateOfBirth = DateResult.fromJSON(json.dateOfBirth);
        const age = json.age;
        const isExpired = json.isExpired;
        const nationality = json.nationality;
        const address = json.address;
        const documentType = json.documentType;
        const documentSubtype = json.documentSubtype;
        const documentNumber = json.documentNumber;
        const issuingCountry = json.issuingCountry;
        const issuingCountryIso = json.issuingCountryIso;
        const dateOfExpiry = DateResult.fromJSON(json.dateOfExpiry);
        const dateOfIssue = DateResult.fromJSON(json.dateOfIssue);
        if (existingInstance) {
            if (!existingInstance.firstName) {
                json.firstName = firstName;
            }
            if (!existingInstance.lastName) {
                json.lastName = lastName;
            }
            if (!existingInstance.fullName) {
                json.fullName = fullName;
            }
            if (!existingInstance.secondaryLastName) {
                json.secondaryLastName = secondaryLastName;
            }
            if (!existingInstance.sex) {
                json.sex = sex;
            }
            if (!existingInstance.dateOfBirth) {
                json.dateOfBirth = dateOfBirth;
            }
            if (!existingInstance.age) {
                json.age = age;
            }
            if (!existingInstance.isExpired) {
                json.isExpired = isExpired;
            }
            if (!existingInstance.nationality) {
                json.nationality = nationality;
            }
            if (!existingInstance.address) {
                json.address = address;
            }
            if (!existingInstance.documentType) {
                json.documentType = documentType;
            }
            if (!existingInstance.documentSubtype) {
                json.documentSubtype = documentSubtype;
            }
            if (!existingInstance.documentNumber) {
                json.documentNumber = documentNumber;
            }
            if (!existingInstance.issuingCountry) {
                json.issuingCountry = issuingCountry;
            }
            if (!existingInstance.issuingCountryIso) {
                json.issuingCountryIso = issuingCountryIso;
            }
            if (!existingInstance.dateOfExpiry) {
                json.dateOfExpiry = dateOfExpiry;
            }
            if (!existingInstance.dateOfIssue) {
                json.dateOfIssue = dateOfIssue;
            }
        }
        const object = new CommonCapturedIdFields();
        object.json = json;
        return object;
    }
}

class VIZResult {
    get additionalAddressInformation() { return this.json.additionalAddressInformation; }
    get additionalNameInformation() { return this.json.additionalNameInformation; }
    get documentAdditionalNumber() { return this.json.documentAdditionalNumber; }
    get employer() { return this.json.employer; }
    get issuingAuthority() { return this.json.issuingAuthority; }
    get issuingJurisdiction() { return this.json.issuingJurisdiction; }
    get issuingJurisdictionIso() { return this.json.issuingJurisdictionIso; }
    get maritalStatus() { return this.json.maritalStatus; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    get placeOfBirth() { return this.json.placeOfBirth; }
    get profession() { return this.json.profession; }
    get race() { return this.json.race; }
    get religion() { return this.json.religion; }
    get residentialStatus() { return this.json.residentialStatus; }
    get capturedSides() { return this.json.capturedSides; }
    get isBackSideCaptureSupported() { return this.json.isBackSideCaptureSupported; }
    get bloodType() { return this.json.bloodType; }
    get sponsor() { return this.json.sponsor; }
    get mothersName() { return this.json.mothersName; }
    get fathersName() { return this.json.fathersName; }
    get passportNumber() { return this.json.passportNumber; }
    get visaNumber() { return this.json.visaNumber; }
    get firstName() { return this.json.firstName; }
    get lastName() { return this.json.lastName; }
    get secondaryLastName() { return this.json.secondaryLastName; }
    get fullName() { return this.json.fullName; }
    static fromJSON(json) {
        const result = new VIZResult();
        result.json = json;
        return result;
    }
}

class ProfessionalDrivingPermit {
    get dateOfExpiry() { return DateResult.fromJSON(this.json.dateOfExpiry); }
    get codes() { return this.json.codes; }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new ProfessionalDrivingPermit();
        object.json = json;
        return object;
    }
}

class VehicleRestriction {
    get vehicleCode() { return this.json.vehicleCode; }
    get vehicleRestriction() { return this.json.vehicleRestriction; }
    get dateOfIssue() { return DateResult.fromJSON(this.json.dateOfIssue); }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new VehicleRestriction();
        object.json = json;
        return object;
    }
}

class BarcodeResult {
    constructor(json) {
        this.json = json;
    }
    static fromJSON(json) {
        return new BarcodeResult(json);
    }
    get aamvaVersion() {
        return this.json.aamvaVersion;
    }
    get aliasFamilyName() {
        return this.json.aliasFamilyName;
    }
    get aliasGivenName() {
        return this.json.aliasGivenName;
    }
    get aliasSuffixName() {
        return this.json.aliasSuffixName;
    }
    get bloodType() {
        return this.json.bloodType;
    }
    get branchOfService() {
        return this.json.branchOfService;
    }
    get cardInstanceIdentifier() {
        return this.json.cardInstanceIdentifier;
    }
    get cardRevisionDate() {
        return DateResult.fromJSON(this.json.cardRevisionDate);
    }
    get categories() {
        return this.json.categories;
    }
    get champusEffectiveDate() {
        return DateResult.fromJSON(this.json.champusEffectiveDate);
    }
    get champusExpiryDate() {
        return DateResult.fromJSON(this.json.champusExpiryDate);
    }
    get citizenshipStatus() {
        return this.json.citizenshipStatus;
    }
    get civilianHealthCareFlagCode() {
        return this.json.civilianHealthCareFlagCode;
    }
    get civilianHealthCareFlagDescription() {
        return this.json.civilianHealthCareFlagDescription;
    }
    get commissaryFlagCode() {
        return this.json.commissaryFlagCode;
    }
    get commissaryFlagDescription() {
        return this.json.commissaryFlagDescription;
    }
    get countryOfBirth() {
        return this.json.countryOfBirth;
    }
    get countryOfBirthIso() {
        return this.json.countryOfBirthIso;
    }
    get deersDependentSuffixCode() {
        return this.json.deersDependentSuffixCode;
    }
    get deersDependentSuffixDescription() {
        return this.json.deersDependentSuffixDescription;
    }
    get directCareFlagCode() {
        return this.json.directCareFlagCode;
    }
    get directCareFlagDescription() {
        return this.json.directCareFlagDescription;
    }
    get documentCopy() {
        return this.json.documentCopy;
    }
    get documentDiscriminatorNumber() {
        return this.json.documentDiscriminatorNumber;
    }
    get driverNamePrefix() {
        return this.json.driverNamePrefix;
    }
    get driverNameSuffix() {
        return this.json.driverNameSuffix;
    }
    get driverRestrictionCodes() {
        return this.json.driverRestrictionCodes;
    }
    get ediPersonIdentifier() {
        return this.json.ediPersonIdentifier;
    }
    get endorsementsCode() {
        return this.json.endorsementsCode;
    }
    get exchangeFlagCode() {
        return this.json.exchangeFlagCode;
    }
    get exchangeFlagDescription() {
        return this.json.exchangeFlagDescription;
    }
    get eyeColor() {
        return this.json.eyeColor;
    }
    get familySequenceNumber() {
        return this.json.familySequenceNumber;
    }
    get firstNameTruncation() {
        return this.json.firstNameTruncation;
    }
    get firstNameWithoutMiddleName() {
        return this.json.firstNameWithoutMiddleName;
    }
    get formNumber() {
        return this.json.formNumber;
    }
    get genevaConventionCategory() {
        return this.json.genevaConventionCategory;
    }
    get hairColor() {
        return this.json.hairColor;
    }
    get heightCm() {
        return this.json.heightCm;
    }
    get heightInch() {
        return this.json.heightInch;
    }
    get iin() {
        return this.json.iin;
    }
    get identificationType() {
        return this.json.identificationType;
    }
    get issuingJurisdiction() {
        return this.json.issuingJurisdiction;
    }
    get issuingJurisdictionIso() {
        return this.json.issuingJurisdictionIso;
    }
    get jpegData() {
        return this.json.jpegData;
    }
    get jurisdictionVersion() {
        return this.json.jurisdictionVersion;
    }
    get lastNameTruncation() {
        return this.json.lastNameTruncation;
    }
    get licenseCountryOfIssue() {
        return this.json.licenseCountryOfIssue;
    }
    get middleName() {
        return this.json.middleName;
    }
    get middleNameTruncation() {
        return this.json.middleNameTruncation;
    }
    get mwrFlagCode() {
        return this.json.mwrFlagCode;
    }
    get mwrFlagDescription() {
        return this.json.mwrFlagDescription;
    }
    get payGrade() {
        return this.json.payGrade;
    }
    get payPlanCode() {
        return this.json.payPlanCode;
    }
    get payPlanGradeCode() {
        return this.json.payPlanGradeCode;
    }
    get personDesignatorDocument() {
        return this.json.personDesignatorDocument;
    }
    get personDesignatorTypeCode() {
        return this.json.personDesignatorTypeCode;
    }
    get personMiddleInitial() {
        return this.json.personMiddleInitial;
    }
    get personalIdNumber() {
        return this.json.personalIdNumber;
    }
    get personalIdNumberType() {
        return this.json.personalIdNumberType;
    }
    get personnelCategoryCode() {
        return this.json.personnelCategoryCode;
    }
    get personnelEntitlementConditionType() {
        return this.json.personnelEntitlementConditionType;
    }
    get placeOfBirth() {
        return this.json.placeOfBirth;
    }
    get professionalDrivingPermit() {
        return ProfessionalDrivingPermit.fromJSON(this.json.professionalDrivingPermit);
    }
    get race() {
        return this.json.race;
    }
    get rank() {
        return this.json.rank;
    }
    get relationshipCode() {
        return this.json.relationshipCode;
    }
    get relationshipDescription() {
        return this.json.relationshipDescription;
    }
    get restrictionsCode() {
        return this.json.restrictionsCode;
    }
    get securityCode() {
        return this.json.securityCode;
    }
    get serviceCode() {
        return this.json.serviceCode;
    }
    get sponsorFlag() {
        return this.json.sponsorFlag;
    }
    get sponsorName() {
        return this.json.sponsorName;
    }
    get sponsorPersonDesignatorIdentifier() {
        return this.json.sponsorPersonDesignatorIdentifier;
    }
    get statusCode() {
        return this.json.statusCode;
    }
    get statusCodeDescription() {
        return this.json.statusCodeDescription;
    }
    get vehicleClass() {
        return this.json.vehicleClass;
    }
    get vehicleRestrictions() {
        return this.json.vehicleRestrictions.map(json => VehicleRestriction.fromJSON(json));
    }
    get version() {
        return this.json.version;
    }
    get weightKg() {
        return this.json.weightKg;
    }
    get weightLbs() {
        return this.json.weightLbs;
    }
    get isRealId() {
        return this.json.isRealId;
    }
    get barcodeDataElements() {
        return this.json.barcodeDataElements;
    }
}

exports.IdCaptureDocumentType = void 0;
(function (IdCaptureDocumentType) {
    IdCaptureDocumentType["IdCard"] = "idCard";
    IdCaptureDocumentType["DriverLicense"] = "driverLicense";
    IdCaptureDocumentType["Passport"] = "passport";
    IdCaptureDocumentType["VisaIcao"] = "visaIcao";
    IdCaptureDocumentType["RegionSpecific"] = "regionSpecific";
    IdCaptureDocumentType["ResidencePermit"] = "residencePermit";
    IdCaptureDocumentType["HealthInsuranceCard"] = "healthInsuranceCard";
})(exports.IdCaptureDocumentType || (exports.IdCaptureDocumentType = {}));

class DriverLicense extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(region) {
        super();
        this._documentType = exports.IdCaptureDocumentType.DriverLicense;
        this._region = region;
    }
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === exports.IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === exports.IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === exports.IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === exports.IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === exports.IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === exports.IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === exports.IdCaptureDocumentType.HealthInsuranceCard;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('region')
], DriverLicense.prototype, "_region", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentType')
], DriverLicense.prototype, "_documentType", void 0);

class HealthInsuranceCard extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(region) {
        super();
        this._documentType = exports.IdCaptureDocumentType.HealthInsuranceCard;
        this._region = region;
    }
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === exports.IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === exports.IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === exports.IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === exports.IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === exports.IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === exports.IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === exports.IdCaptureDocumentType.HealthInsuranceCard;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('region')
], HealthInsuranceCard.prototype, "_region", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentType')
], HealthInsuranceCard.prototype, "_documentType", void 0);

class IdCard extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(region) {
        super();
        this._documentType = exports.IdCaptureDocumentType.IdCard;
        this._region = region;
    }
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === exports.IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === exports.IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === exports.IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === exports.IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === exports.IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === exports.IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === exports.IdCaptureDocumentType.HealthInsuranceCard;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('region')
], IdCard.prototype, "_region", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentType')
], IdCard.prototype, "_documentType", void 0);

class Passport extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(region) {
        super();
        this._documentType = exports.IdCaptureDocumentType.Passport;
        this._region = region;
    }
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === exports.IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === exports.IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === exports.IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === exports.IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === exports.IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === exports.IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === exports.IdCaptureDocumentType.HealthInsuranceCard;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('region')
], Passport.prototype, "_region", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentType')
], Passport.prototype, "_documentType", void 0);

class RegionSpecific extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(subtype) {
        super();
        this._documentType = exports.IdCaptureDocumentType.RegionSpecific;
        this._region = exports.IdCaptureRegion.Any;
        this._documentSubtype = subtype;
    }
    get region() {
        return this._region;
    }
    get subtype() {
        return this._documentSubtype;
    }
    get isIdCard() {
        return this._documentType === exports.IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === exports.IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === exports.IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === exports.IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === exports.IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === exports.IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === exports.IdCaptureDocumentType.HealthInsuranceCard;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('region')
], RegionSpecific.prototype, "_region", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentSubtype')
], RegionSpecific.prototype, "_documentSubtype", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentType')
], RegionSpecific.prototype, "_documentType", void 0);

class ResidencePermit extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(region) {
        super();
        this._documentType = exports.IdCaptureDocumentType.ResidencePermit;
        this._region = region;
    }
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === exports.IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === exports.IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === exports.IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === exports.IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === exports.IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === exports.IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === exports.IdCaptureDocumentType.HealthInsuranceCard;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('region')
], ResidencePermit.prototype, "_region", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentType')
], ResidencePermit.prototype, "_documentType", void 0);

class VisaIcao extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(region) {
        super();
        this._documentType = exports.IdCaptureDocumentType.VisaIcao;
        this._region = region;
    }
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === exports.IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === exports.IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === exports.IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === exports.IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === exports.IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === exports.IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === exports.IdCaptureDocumentType.HealthInsuranceCard;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('region')
], VisaIcao.prototype, "_region", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('documentType')
], VisaIcao.prototype, "_documentType", void 0);

class CapturedId {
    constructor() {
        this._document = null;
    }
    get firstName() { return this.commonCapturedFields.firstName; }
    get lastName() { return this.commonCapturedFields.lastName; }
    get fullName() { return this.commonCapturedFields.fullName; }
    get secondaryLastName() { return this.commonCapturedFields.secondaryLastName; }
    get sex() { return this.commonCapturedFields.sex; }
    get dateOfBirth() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfBirth);
    }
    get age() { return this.json.age; }
    get isExpired() { return this.json.isExpired; }
    get nationality() { return this.commonCapturedFields.nationality; }
    get address() { return this.commonCapturedFields.address; }
    get document() { return this._document; }
    get issuingCountryIso() { return this.commonCapturedFields.issuingCountryIso; }
    get issuingCountry() { return this.commonCapturedFields.issuingCountry; }
    get documentAdditionalNumber() { return this.commonCapturedFields.documentAdditionalNumber; }
    get documentNumber() { return this.commonCapturedFields.documentNumber; }
    get dateOfExpiry() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfExpiry);
    }
    get dateOfIssue() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfIssue);
    }
    get barcode() {
        if (this._barcodeResult == null && this.json.barcodeResult != null) {
            this._barcodeResult = BarcodeResult.
                fromJSON(this.json.barcodeResult);
        }
        return this._barcodeResult;
    }
    get mrzResult() {
        if (this._mrzResult == null && this.json.mrzResult != null) {
            this._mrzResult = MRZResult.fromJSON(this.json.mrzResult);
        }
        return this._mrzResult;
    }
    get vizResult() {
        if (this._vizResult == null && this.json.vizResult != null) {
            this._vizResult = VIZResult.fromJSON(this.json.vizResult);
        }
        return this._vizResult;
    }
    isIdCard() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isIdCard) === true;
    }
    isDriverLicense() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isDriverLicense) === true;
    }
    isPassport() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isPassport) === true;
    }
    isVisaIcao() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isVisaIcao) === true;
    }
    isRegionSpecific(subtype) {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isRegionSpecific) === true && this.document.subtype === subtype;
    }
    isResidencePermit() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isResidencePermit) === true;
    }
    isHealthInsuranceCard() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isHealthInsuranceCard) === true;
    }
    get images() {
        return this._images;
    }
    static fromJSON(json) {
        const result = new CapturedId();
        result.json = json;
        if (json.barcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.barcodeResult, result.commonCapturedFields);
        }
        if (json.mrzResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.mrzResult, result.commonCapturedFields);
        }
        if (json.vizResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.vizResult, result.commonCapturedFields);
        }
        if (result.commonCapturedFields && result.commonCapturedFields.documentType) {
            result._document = this.getDocument(result.issuingCountry, result.commonCapturedFields.documentType, result.commonCapturedFields.documentSubtype);
        }
        result._images = IdImages.fromJSON(json.imageInfo);
        return result;
    }
    static getDocument(issuingCountry, documentType, documentSubtype) {
        switch (documentType) {
            case exports.IdCaptureDocumentType.DriverLicense:
                return new DriverLicense(issuingCountry);
            case exports.IdCaptureDocumentType.HealthInsuranceCard:
                return new HealthInsuranceCard(issuingCountry);
            case exports.IdCaptureDocumentType.IdCard:
                return new IdCard(issuingCountry);
            case exports.IdCaptureDocumentType.Passport:
                return new Passport(issuingCountry);
            case exports.IdCaptureDocumentType.RegionSpecific:
                if (!documentSubtype) {
                    throw new Error('documentSubtype cannot be null for RegionSpecific documents.');
                }
                return new RegionSpecific(documentSubtype);
            case exports.IdCaptureDocumentType.ResidencePermit:
                return new ResidencePermit(issuingCountry);
            case exports.IdCaptureDocumentType.VisaIcao:
                return new VisaIcao(issuingCountry);
            default:
                throw new Error(`Unknown document type ${documentType}`);
        }
    }
}

class IdCaptureListenerController {
    get _proxy() {
        return scanditDatacaptureFrameworksCore.FactoryMaker.getInstance('IdCaptureListenerProxy');
    }
    static forIdCapture(idCapture) {
        const controller = new IdCaptureListenerController();
        controller.idCapture = idCapture;
        controller._proxy.isModeEnabled = () => idCapture.isEnabled;
        return controller;
    }
    constructor() {
        this.eventEmitter = scanditDatacaptureFrameworksCore.FactoryMaker.getInstance('EventEmitter');
    }
    subscribeListener() {
        this._proxy.subscribeDidCaptureListener();
        this._proxy.subscribeDidRejectListener();
        this.eventEmitter.on(exports.IdCaptureListenerEvents.inCallback, (value) => {
            this.idCapture.isInListenerCallback = value;
        });
        this.eventEmitter.on(exports.IdCaptureListenerEvents.didCapture, (data) => {
            const event = scanditDatacaptureFrameworksCore.EventDataParser.parse(data);
            if (event === null) {
                console.error('IdCaptureListenerController didCapture payload is null');
                return;
            }
            const captureId = CapturedId.fromJSON(JSON.parse(event.id));
            this.notifyListenersOfDidCapture(captureId);
            this._proxy.finishDidCaptureCallback(this.idCapture.isEnabled);
        });
        this.eventEmitter.on(exports.IdCaptureListenerEvents.didReject, (data) => {
            const event = scanditDatacaptureFrameworksCore.EventDataParser.parse(data);
            if (event === null) {
                console.error('IdCaptureListenerController didReject payload is null');
                return;
            }
            let rejectedId = null;
            if (event.id != null) {
                rejectedId = CapturedId.fromJSON(JSON.parse(event.id));
            }
            this.notifyListenersOfDidReject(rejectedId, event.rejectionReason);
            this._proxy.finishDidRejectCallback(this.idCapture.isEnabled);
        });
    }
    unsubscribeListener() {
        this._proxy.unregisterListenerForEvents();
        this.eventEmitter.removeAllListeners(exports.IdCaptureListenerEvents.inCallback);
        this.eventEmitter.removeAllListeners(exports.IdCaptureListenerEvents.didCapture);
        this.eventEmitter.removeAllListeners(exports.IdCaptureListenerEvents.didReject);
    }
    notifyListenersOfDidCapture(captureId) {
        const mode = this.idCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didCaptureId) {
                listener.didCaptureId(this.idCapture, captureId);
            }
        });
        mode.isInListenerCallback = false;
    }
    notifyListenersOfDidReject(captureId, rejectionReason) {
        const mode = this.idCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didRejectId) {
                listener.didRejectId(this.idCapture, captureId, rejectionReason);
            }
        });
        mode.isInListenerCallback = false;
    }
}

class IdCaptureFeedback extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    static get defaultFeedback() {
        return new IdCaptureFeedback(IdCaptureFeedback.idDefaults.IdCapture.Feedback.idCaptured, IdCaptureFeedback.idDefaults.IdCapture.Feedback.idRejected);
    }
    get idCaptured() {
        return this._idCaptured;
    }
    set idCaptured(idCaptured) {
        this._idCaptured = idCaptured;
        this.updateFeedback();
    }
    get idRejected() {
        return this._idRejected;
    }
    set idRejected(idRejected) {
        this._idRejected = idRejected;
        this.updateFeedback();
    }
    static fromJSON(json) {
        const idCaptured = scanditDatacaptureFrameworksCore.Feedback.fromJSON(json.idCaptured);
        const idRejected = scanditDatacaptureFrameworksCore.Feedback.fromJSON(json.idRejected);
        return new IdCaptureFeedback(idCaptured, idRejected);
    }
    static get idDefaults() {
        return getIdDefaults();
    }
    updateFeedback() {
        var _a;
        (_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateFeedback(this);
    }
    constructor(idCaptured, idRejected) {
        super();
        this.controller = null;
        this._idCaptured = IdCaptureFeedback.idDefaults.IdCapture.Feedback.idCaptured;
        this._idRejected = IdCaptureFeedback.idDefaults.IdCapture.Feedback.idRejected;
        this.idCaptured = idCaptured;
        this.idRejected = idRejected;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCaptureFeedback.prototype, "controller", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('idCaptured')
], IdCaptureFeedback.prototype, "_idCaptured", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('idRejected')
], IdCaptureFeedback.prototype, "_idRejected", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCaptureFeedback, "idDefaults", null);

class IdCapture extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        this.controller.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this._feedback.controller = this.controller;
        this.controller.updateFeedback(feedback);
    }
    static get recommendedCameraSettings() {
        return new scanditDatacaptureFrameworksCore.CameraSettings(IdCapture.idCaptureDefaults.IdCapture.RecommendedCameraSettings);
    }
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        if (newContext == null) {
            this.listenerController.unsubscribeListener();
        }
        else if (this.privateContext == null) {
            this.listenerController.subscribeListener();
        }
        this.privateContext = newContext;
    }
    static get idCaptureDefaults() {
        return scanditDatacaptureFrameworksCore.FactoryMaker.getInstance('IdDefaults');
    }
    static forContext(context, settings) {
        const idCapture = new IdCapture();
        idCapture.settings = settings;
        if (context) {
            context.addMode(idCapture);
        }
        return idCapture;
    }
    constructor() {
        super();
        this.type = 'idCapture';
        this._isEnabled = true;
        this._feedback = IdCaptureFeedback.defaultFeedback;
        this.privateContext = null;
        this.listeners = [];
        this.isInListenerCallback = false;
        this.controller = IdCaptureController.forIdCapture(this);
        this.listenerController = IdCaptureListenerController.forIdCapture(this);
        this.feedback.controller = this.controller;
    }
    applySettings(settings) {
        this.settings = settings;
        return this.controller.applyIdCaptureModeSettings(settings);
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    reset() {
        return this.controller.reset();
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCapture.prototype, "_isEnabled", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('feedback')
], IdCapture.prototype, "_feedback", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCapture.prototype, "privateContext", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCapture.prototype, "listeners", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCapture.prototype, "controller", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCapture.prototype, "listenerController", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCapture.prototype, "isInListenerCallback", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCapture, "idCaptureDefaults", null);

exports.IdLayoutLineStyle = void 0;
(function (IdLayoutLineStyle) {
    IdLayoutLineStyle["Light"] = "light";
    IdLayoutLineStyle["Bold"] = "bold";
})(exports.IdLayoutLineStyle || (exports.IdLayoutLineStyle = {}));

exports.IdLayoutStyle = void 0;
(function (IdLayoutStyle) {
    IdLayoutStyle["Rounded"] = "rounded";
    IdLayoutStyle["Square"] = "square";
})(exports.IdLayoutStyle || (exports.IdLayoutStyle = {}));

class IdCaptureOverlay extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    static get idCaptureDefaults() {
        return scanditDatacaptureFrameworksCore.FactoryMaker.getInstance('IdDefaults');
    }
    static withIdCapture(idCapture) {
        return IdCaptureOverlay.withIdCaptureForView(idCapture, null);
    }
    static withIdCaptureForView(idCapture, view) {
        const overlay = new IdCaptureOverlay();
        overlay.idCapture = idCapture;
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    constructor() {
        super();
        this.type = 'idCapture';
        this._idLayoutStyle = exports.IdLayoutStyle.Rounded;
        this._idLayoutLineStyle = exports.IdLayoutLineStyle.Light;
        this._textHintPosition = exports.TextHintPosition.AboveViewfinder;
        this._showTextHints = true;
        this._defaultCapturedBrush = new scanditDatacaptureFrameworksCore.Brush(IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor, IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor, IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth);
        this._defaultLocalizedBrush = new scanditDatacaptureFrameworksCore.Brush(IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor, IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor, IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth);
        this._defaultRejectedBrush = new scanditDatacaptureFrameworksCore.Brush(IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor, IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor, IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth);
        this._capturedBrush = this._defaultCapturedBrush;
        this._localizedBrush = this._defaultLocalizedBrush;
        this._rejectedBrush = this._defaultRejectedBrush;
        this._frontSideTextHint = null;
        this._backSideTextHint = null;
    }
    setFrontSideTextHint(text) {
        this._frontSideTextHint = text;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    setBackSideTextHint(text) {
        this._backSideTextHint = text;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    get idLayoutStyle() {
        return this._idLayoutStyle;
    }
    set idLayoutStyle(style) {
        this._idLayoutStyle = style;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    get idLayoutLineStyle() {
        return this._idLayoutLineStyle;
    }
    set idLayoutLineStyle(lineStyle) {
        this._idLayoutLineStyle = lineStyle;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    get capturedBrush() {
        return this._capturedBrush;
    }
    set capturedBrush(brush) {
        this._capturedBrush = brush;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    get localizedBrush() {
        return this._localizedBrush;
    }
    set localizedBrush(brush) {
        this._localizedBrush = brush;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    get rejectedBrush() {
        return this._rejectedBrush;
    }
    set rejectedBrush(brush) {
        this._rejectedBrush = brush;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    get defaultCapturedBrush() {
        return this._defaultCapturedBrush;
    }
    get defaultLocalizedBrush() {
        return this._defaultLocalizedBrush;
    }
    get defaultRejectedBrush() {
        return this._defaultRejectedBrush;
    }
    get textHintPosition() {
        return this._textHintPosition;
    }
    set textHintPosition(position) {
        this._textHintPosition = position;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
    get showTextHints() {
        return this._showTextHints;
    }
    set showTextHints(enabled) {
        this._showTextHints = enabled;
        this.idCapture.controller.updateIdCaptureOverlay(this);
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCaptureOverlay.prototype, "idCapture", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCaptureOverlay.prototype, "view", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('idLayoutStyle')
], IdCaptureOverlay.prototype, "_idLayoutStyle", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('idLayoutLineStyle')
], IdCaptureOverlay.prototype, "_idLayoutLineStyle", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('textHintPosition')
], IdCaptureOverlay.prototype, "_textHintPosition", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('showTextHints')
], IdCaptureOverlay.prototype, "_showTextHints", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('capturedBrush')
], IdCaptureOverlay.prototype, "_capturedBrush", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('localizedBrush')
], IdCaptureOverlay.prototype, "_localizedBrush", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('rejectedBrush')
], IdCaptureOverlay.prototype, "_rejectedBrush", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('frontSideTextHint')
], IdCaptureOverlay.prototype, "_frontSideTextHint", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('backSideTextHint')
], IdCaptureOverlay.prototype, "_backSideTextHint", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCaptureOverlay, "idCaptureDefaults", null);

class SingleSideScanner extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor(barcode, machineReadableZone, visualInspectionZone) {
        super();
        this._isFull = false;
        this._barcode = barcode;
        this._machineReadableZone = machineReadableZone;
        this._visualInspectionZone = visualInspectionZone;
        this.options = {
            barcode: this._barcode,
            machineReadableZone: this._machineReadableZone,
            visualInspectionZone: this._visualInspectionZone
        };
    }
    get barcode() {
        return this._barcode;
    }
    get machineReadableZone() {
        return this._machineReadableZone;
    }
    get visualInspectionZone() {
        return this._visualInspectionZone;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('isFull')
], SingleSideScanner.prototype, "_isFull", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], SingleSideScanner.prototype, "_barcode", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], SingleSideScanner.prototype, "_machineReadableZone", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], SingleSideScanner.prototype, "_visualInspectionZone", void 0);

class FullDocumentScanner extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor() {
        super();
        this._isFull = true;
        this._barcode = true;
        this._machineReadableZone = true;
        this._visualInspectionZone = true;
        this.options = {
            barcode: this._barcode,
            machineReadableZone: this._machineReadableZone,
            visualInspectionZone: this._visualInspectionZone
        };
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.nameForSerialization('isFull')
], FullDocumentScanner.prototype, "_isFull", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], FullDocumentScanner.prototype, "_barcode", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], FullDocumentScanner.prototype, "_machineReadableZone", void 0);
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], FullDocumentScanner.prototype, "_visualInspectionZone", void 0);

class IdCaptureSettings extends scanditDatacaptureFrameworksCore.DefaultSerializeable {
    constructor() {
        super();
        this.properties = {};
        this.imageToResult = {};
        this.anonymizationMode = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.anonymizationMode;
        this.rejectVoidedIds = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectVoidedIds;
        this.decodeBackOfEuropeanDrivingLicense = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.decodeBackOfEuropeanDrivingLicense;
        this.acceptedDocuments = [];
        this.rejectedDocuments = [];
        this.scannerType = new SingleSideScanner(false, false, false);
    }
    static get idCaptureDefaults() {
        return scanditDatacaptureFrameworksCore.FactoryMaker.getInstance('IdDefaults');
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    setShouldPassImageTypeToResult(type, shouldPass) {
        this.imageToResult[type] = shouldPass;
    }
    getShouldPassImageTypeToResult(type) {
        return this.imageToResult[type] || false;
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], IdCaptureSettings, "idCaptureDefaults", null);

class AamvaBarcodeVerifier {
    constructor() {
        this.controller = new IdCaptureController();
    }
    static create(context) {
        const verifier = new AamvaBarcodeVerifier();
        return new Promise((resolve, reject) => {
            verifier
                .controller
                .createContextForBarcodeVerification(context)
                .then(() => {
                verifier.context = context;
                resolve(verifier);
            }, reject);
        });
    }
    verify(capturedId) {
        // Necessary for not exposing internal API on CapturedId, while only passing the private "json" property
        // to native iOS and Android.
        const capturedIdAsString = JSON.stringify(capturedId);
        const capturedIdJsonData = JSON.parse(capturedIdAsString).json;
        return new Promise((resolve, reject) => {
            this.controller
                .verifyCapturedIdAsync(JSON.stringify(capturedIdJsonData))
                .then((json) => {
                if (!json) {
                    resolve(AamvaBarcodeVerificationResult
                        .fromJSON(JSON.parse('{}')));
                }
                else {
                    resolve(AamvaBarcodeVerificationResult
                        .fromJSON(JSON.parse(json)));
                }
            }, reject);
        });
    }
}
__decorate([
    scanditDatacaptureFrameworksCore.ignoreFromSerialization
], AamvaBarcodeVerifier.prototype, "controller", void 0);

class NativeIdCaptureProxy {
    static get cordovaExec() {
        return Cordova.exec;
    }
    createContextForBarcodeVerification(contextJSON) {
        return new Promise((resolve, reject) => {
            NativeIdCaptureProxy.cordovaExec(resolve, reject, CordovaFunction.CreateContextForBarcodeVerification, [
                contextJSON,
            ]);
        });
    }
    resetMode() {
        return new Promise((resolve, reject) => {
            NativeIdCaptureProxy.cordovaExec(resolve, reject, CordovaFunction.ResetIdCapture, null);
        });
    }
    verifyCapturedIdAsync(capturedId) {
        return new Promise((resolve, reject) => {
            NativeIdCaptureProxy.cordovaExec(resolve, reject, CordovaFunction.VerifyCapturedIdAsync, [
                capturedId,
            ]);
        });
    }
    setModeEnabledState(enabled) {
        NativeIdCaptureProxy.cordovaExec(null, null, CordovaFunction.SetModeEnabledState, [{ 'enabled': enabled }]);
    }
    updateIdCaptureMode(modeJson) {
        return new Promise((resolve, reject) => {
            NativeIdCaptureProxy.cordovaExec(resolve, reject, CordovaFunction.UpdateIdCaptureMode, [modeJson]);
        });
    }
    applyIdCaptureModeSettings(newSettingsJson) {
        return new Promise((resolve, reject) => {
            NativeIdCaptureProxy.cordovaExec(resolve, reject, CordovaFunction.ApplyIdCaptureModeSettings, [newSettingsJson]);
        });
    }
    updateIdCaptureOverlay(overlayJson) {
        return new Promise((resolve, reject) => {
            NativeIdCaptureProxy.cordovaExec(resolve, reject, CordovaFunction.UpdateIdCaptureOverlay, [overlayJson]);
        });
    }
    updateFeedback(feedbackJson) {
        return new Promise((resolve, reject) => {
            NativeIdCaptureProxy.cordovaExec(resolve, reject, CordovaFunction.UpdateIdCaptureFeedback, [feedbackJson]);
        });
    }
}

class NativeIdCaptureListenerProxy extends scanditDatacaptureFrameworksCore.BaseNativeProxy {
    static get cordovaExec() {
        return Cordova.exec;
    }
    emitInCallback(enabled) {
        this.eventEmitter.emit(exports.IdCaptureListenerEvents.inCallback, enabled);
    }
    notifyListeners(event) {
        const done = () => {
            this.emitInCallback(false);
            return { enabled: this.isModeEnabled() };
        };
        this.emitInCallback(true);
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return done();
        }
        this.eventEmitter.emit(event.name, event.data);
        return done();
    }
    subscribeDidCaptureListener() {
        NativeIdCaptureListenerProxy.cordovaExec(this.notifyListeners.bind(this), null, CordovaFunction.SubscribeDidCaptureListener, null);
    }
    subscribeDidRejectListener() {
        NativeIdCaptureListenerProxy.cordovaExec(this.notifyListeners.bind(this), null, CordovaFunction.SubscribeDidRejectListener, null);
    }
    finishDidCaptureCallback(isFinished) {
        NativeIdCaptureListenerProxy.cordovaExec(null, null, CordovaFunction.FinishCallback, [
            { 'finishCallbackID': exports.IdCaptureListenerEvents.didCapture, 'result': { 'enabled': isFinished } }
        ]);
    }
    finishDidRejectCallback(isFinished) {
        NativeIdCaptureListenerProxy.cordovaExec(null, null, CordovaFunction.FinishCallback, [
            { 'finishCallbackID': exports.IdCaptureListenerEvents.didReject, 'result': { 'enabled': isFinished } }
        ]);
    }
    unregisterListenerForEvents() {
        NativeIdCaptureListenerProxy.cordovaExec(this.notifyListeners.bind(this), null, CordovaFunction.UnregisterListenerForEvents, null);
    }
}

function initIdProxies() {
    scanditDatacaptureFrameworksCore.FactoryMaker.bindLazyInstance('IdCaptureProxy', () => new NativeIdCaptureProxy());
    scanditDatacaptureFrameworksCore.FactoryMaker.bindLazyInstance('IdCaptureListenerProxy', () => new NativeIdCaptureListenerProxy());
}

// tslint:disable-next-line:variable-name
const Cordova = {
    pluginName: 'ScanditIdCapture',
    defaults: {},
    exec: (success, error, functionName, args) => scanditCordovaDatacaptureCore.cordovaExec(success, error, Cordova.pluginName, functionName, args),
};
function getDefaults() {
    return new Promise((resolve, reject) => {
        Cordova.exec((defaultsJSON) => {
            loadIdDefaults(defaultsJSON);
            initIdProxies();
            resolve();
        }, reject, 'getDefaults', null);
    });
}
function initializeCordovaId() {
    scanditCordovaDatacaptureCore.initializePlugin(Cordova.pluginName, getDefaults);
}
var CordovaFunction;
(function (CordovaFunction) {
    CordovaFunction["CreateContextForBarcodeVerification"] = "createContextForBarcodeVerification";
    CordovaFunction["SubscribeDidCaptureListener"] = "subscribeDidCaptureListener";
    CordovaFunction["SubscribeDidLocalizeListener"] = "subscribeDidLocalizeListener";
    CordovaFunction["SubscribeDidRejectListener"] = "subscribeDidRejectListener";
    CordovaFunction["SubscribeDidTimeOutListener"] = "subscribeDidTimeOutListener";
    CordovaFunction["UnregisterListenerForEvents"] = "unregisterListenerForEvents";
    CordovaFunction["SetModeEnabledState"] = "setModeEnabledState";
    CordovaFunction["ResetIdCapture"] = "resetIdCapture";
    CordovaFunction["VerifyCapturedId"] = "verifyCapturedId";
    CordovaFunction["VerifyCapturedIdAsync"] = "verifyCapturedIdAsync";
    CordovaFunction["VerifyVizMrz"] = "verifyVizMrz";
    CordovaFunction["FinishCallback"] = "finishCallback";
    CordovaFunction["UpdateIdCaptureMode"] = "updateIdCaptureMode";
    CordovaFunction["ApplyIdCaptureModeSettings"] = "applyIdCaptureModeSettings";
    CordovaFunction["UpdateIdCaptureOverlay"] = "updateIdCaptureOverlay";
    CordovaFunction["UpdateIdCaptureFeedback"] = "updateIdCaptureFeedback";
})(CordovaFunction || (CordovaFunction = {}));

initializeCordovaId();

exports.AamvaBarcodeVerificationResult = AamvaBarcodeVerificationResult;
exports.AamvaBarcodeVerifier = AamvaBarcodeVerifier;
exports.BarcodeResult = BarcodeResult;
exports.CapturedId = CapturedId;
exports.DateResult = DateResult;
exports.DriverLicense = DriverLicense;
exports.FullDocumentScanner = FullDocumentScanner;
exports.HealthInsuranceCard = HealthInsuranceCard;
exports.IdCapture = IdCapture;
exports.IdCaptureFeedback = IdCaptureFeedback;
exports.IdCaptureOverlay = IdCaptureOverlay;
exports.IdCaptureSettings = IdCaptureSettings;
exports.IdCard = IdCard;
exports.IdImages = IdImages;
exports.MRZResult = MRZResult;
exports.Passport = Passport;
exports.ProfessionalDrivingPermit = ProfessionalDrivingPermit;
exports.RegionSpecific = RegionSpecific;
exports.ResidencePermit = ResidencePermit;
exports.SingleSideScanner = SingleSideScanner;
exports.VIZResult = VIZResult;
exports.VehicleRestriction = VehicleRestriction;
exports.VisaIcao = VisaIcao;
