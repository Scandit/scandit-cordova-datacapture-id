"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCaptureListenerProxy = void 0;
const IdCapture_Related_1 = require("scandit-cordova-datacapture-id.IdCapture+Related");
const Cordova_1 = require("scandit-cordova-datacapture-id.Cordova");
var IdCaptureListenerEvent;
(function (IdCaptureListenerEvent) {
    IdCaptureListenerEvent["DidCapture"] = "IdCaptureListener.didCaptureId";
    IdCaptureListenerEvent["DidLocalize"] = "IdCaptureListener.didLocalizeId";
    IdCaptureListenerEvent["DidReject"] = "IdCaptureListener.didRejectId";
})(IdCaptureListenerEvent || (IdCaptureListenerEvent = {}));
class IdCaptureListenerProxy {
    static forIdCapture(idCapture) {
        const proxy = new IdCaptureListenerProxy();
        proxy.idCapture = idCapture;
        proxy.initialize();
        return proxy;
    }
    initialize() {
        this.subscribeListener();
    }
    subscribeListener() {
        IdCaptureListenerProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeIdCaptureListener, null);
    }
    notifyListeners(event) {
        const done = () => {
            return { enabled: this.idCapture.isEnabled };
        };
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return done();
        }
        this.idCapture.listeners.forEach((listener) => {
            switch (event.name) {
                case IdCaptureListenerEvent.DidCapture:
                    if (listener.didCaptureId) {
                        listener.didCaptureId(this.idCapture, IdCapture_Related_1.IdCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    if (!event.shouldNotifyWhenFinished) {
                        IdCaptureListenerProxy.cordovaExec(null, null, Cordova_1.CordovaFunction.FinishCallback, [
                            { 'finishCallbackID': IdCaptureListenerEvent.DidCapture, 'result': { 'enabled': this.idCapture.isEnabled } }
                        ]);
                    }
                    break;
                case IdCaptureListenerEvent.DidLocalize:
                    if (listener.didLocalizeId) {
                        listener.didLocalizeId(this.idCapture, IdCapture_Related_1.IdCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    if (!event.shouldNotifyWhenFinished) {
                        IdCaptureListenerProxy.cordovaExec(null, null, Cordova_1.CordovaFunction.FinishCallback, [
                            { 'finishCallbackID': IdCaptureListenerEvent.DidLocalize, 'result': { 'enabled': this.idCapture.isEnabled } }
                        ]);
                    }
                    break;
                case IdCaptureListenerEvent.DidReject:
                    if (listener.didRejectId) {
                        listener.didRejectId(this.idCapture, IdCapture_Related_1.IdCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    IdCaptureListenerProxy.cordovaExec(null, null, Cordova_1.CordovaFunction.FinishCallback, [
                        { 'finishCallbackID': IdCaptureListenerEvent.DidReject, 'result': { 'enabled': this.idCapture.isEnabled } }
                    ]);
                    break;
            }
        });
        return done();
    }
}
exports.IdCaptureListenerProxy = IdCaptureListenerProxy;
IdCaptureListenerProxy.cordovaExec = Cordova_1.Cordova.exec;
