var id = cordova.require('scandit-cordova-datacapture-id.Id');
var scanditCordovaDatacaptureCore = cordova.require('scandit-cordova-datacapture-core.Core');
var scanditDatacaptureFrameworksCore = cordova.require('scandit-cordova-datacapture-core.Core');

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
        this.eventEmitter.emit(id.IdCaptureListenerEvents.inCallback, enabled);
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
            { 'finishCallbackID': id.IdCaptureListenerEvents.didCapture, 'result': { 'enabled': isFinished } }
        ]);
    }
    finishDidRejectCallback(isFinished) {
        NativeIdCaptureListenerProxy.cordovaExec(null, null, CordovaFunction.FinishCallback, [
            { 'finishCallbackID': id.IdCaptureListenerEvents.didReject, 'result': { 'enabled': isFinished } }
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
            id.loadIdDefaults(defaultsJSON);
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

exports.AamvaBarcodeVerificationResult = id.AamvaBarcodeVerificationResult;
Object.defineProperty(exports, "AamvaBarcodeVerificationStatus", {
    enumerable: true,
    get: function () { return id.AamvaBarcodeVerificationStatus; }
});
exports.AamvaBarcodeVerifier = id.AamvaBarcodeVerifier;
exports.BarcodeResult = id.BarcodeResult;
exports.CapturedId = id.CapturedId;
Object.defineProperty(exports, "CapturedSides", {
    enumerable: true,
    get: function () { return id.CapturedSides; }
});
exports.DateResult = id.DateResult;
exports.DriverLicense = id.DriverLicense;
exports.FullDocumentScanner = id.FullDocumentScanner;
exports.HealthInsuranceCard = id.HealthInsuranceCard;
Object.defineProperty(exports, "IdAnonymizationMode", {
    enumerable: true,
    get: function () { return id.IdAnonymizationMode; }
});
exports.IdCapture = id.IdCapture;
Object.defineProperty(exports, "IdCaptureDocumentType", {
    enumerable: true,
    get: function () { return id.IdCaptureDocumentType; }
});
exports.IdCaptureFeedback = id.IdCaptureFeedback;
Object.defineProperty(exports, "IdCaptureListenerEvents", {
    enumerable: true,
    get: function () { return id.IdCaptureListenerEvents; }
});
exports.IdCaptureOverlay = id.IdCaptureOverlay;
Object.defineProperty(exports, "IdCaptureRegion", {
    enumerable: true,
    get: function () { return id.IdCaptureRegion; }
});
exports.IdCaptureSettings = id.IdCaptureSettings;
exports.IdCard = id.IdCard;
Object.defineProperty(exports, "IdImageType", {
    enumerable: true,
    get: function () { return id.IdImageType; }
});
exports.IdImages = id.IdImages;
Object.defineProperty(exports, "IdLayoutLineStyle", {
    enumerable: true,
    get: function () { return id.IdLayoutLineStyle; }
});
Object.defineProperty(exports, "IdLayoutStyle", {
    enumerable: true,
    get: function () { return id.IdLayoutStyle; }
});
Object.defineProperty(exports, "IdSide", {
    enumerable: true,
    get: function () { return id.IdSide; }
});
exports.MRZResult = id.MRZResult;
exports.Passport = id.Passport;
exports.ProfessionalDrivingPermit = id.ProfessionalDrivingPermit;
exports.RegionSpecific = id.RegionSpecific;
Object.defineProperty(exports, "RegionSpecificSubtype", {
    enumerable: true,
    get: function () { return id.RegionSpecificSubtype; }
});
Object.defineProperty(exports, "RejectionReason", {
    enumerable: true,
    get: function () { return id.RejectionReason; }
});
exports.ResidencePermit = id.ResidencePermit;
exports.SingleSideScanner = id.SingleSideScanner;
Object.defineProperty(exports, "TextHintPosition", {
    enumerable: true,
    get: function () { return id.TextHintPosition; }
});
exports.VIZResult = id.VIZResult;
exports.VehicleRestriction = id.VehicleRestriction;
exports.VisaIcao = id.VisaIcao;
