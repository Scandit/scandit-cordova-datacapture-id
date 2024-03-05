"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCaptureOverlay = exports.IdCaptureSession = exports.IdCaptureError = void 0;
/// <amd-module name="scandit-cordova-datacapture-id.IdCapture+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const CapturedId_1 = require("scandit-cordova-datacapture-id.CapturedId");
const Enums_1 = require("scandit-cordova-datacapture-id.Enums");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
const Viewfinder_1 = require("scandit-cordova-datacapture-core.Viewfinder");
const Cordova_1 = require("scandit-cordova-datacapture-id.Cordova");
class IdCaptureError {
    get type() {
        return this._type;
    }
    get message() {
        return this._message;
    }
    static fromJSON(json) {
        const error = new IdCaptureError();
        error._type = json.type;
        error._message = json.message;
        return error;
    }
}
exports.IdCaptureError = IdCaptureError;
class IdCaptureSession {
    get newlyCapturedId() {
        return this._newlyCapturedId;
    }
    get frameSequenceId() {
        return this._frameSequenceId;
    }
    get localizedOnlyId() {
        return this._localizedOnlyId;
    }
    get newlyRejectedId() {
        return this._newlyRejectedId;
    }
    static fromJSON(json) {
        const session = new IdCaptureSession();
        if (json.newlyCapturedId) {
            session._newlyCapturedId = CapturedId_1.CapturedId.fromJSON(json.newlyCapturedId);
        }
        if (json.localizedOnlyId) {
            session._localizedOnlyId = CapturedId_1.LocalizedOnlyId.fromJSON(json.localizedOnlyId);
        }
        if (json.newlyRejectedId) {
            session._newlyRejectedId = CapturedId_1.LocalizedOnlyId.fromJSON(json.newlyRejectedId);
        }
        session._frameSequenceId = json.frameSequenceId;
        session._error = json.error ? IdCaptureError.fromJSON(json.error) : null;
        return session;
    }
}
exports.IdCaptureSession = IdCaptureSession;
class IdCaptureOverlay extends Serializeable_1.DefaultSerializeable {
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
        this._idLayout = Enums_1.IdLayout.Auto;
        this._idLayoutStyle = Enums_1.IdLayoutStyle.Rounded;
        this._defaultCapturedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor, Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor, Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth);
        this._defaultLocalizedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor, Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor, Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth);
        this._defaultRejectedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor, Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor, Cordova_1.Cordova.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth);
        this._capturedBrush = this._defaultCapturedBrush;
        this._localizedBrush = this._defaultLocalizedBrush;
        this._rejectedBrush = this._defaultRejectedBrush;
        this._idLayoutLineStyle = Enums_1.IdLayoutLineStyle.Light;
    }
    setIdLayout(idLayout) {
        this._idLayout = idLayout;
        this.idCapture.didChange();
    }
    get idLayoutStyle() {
        return this._idLayoutStyle;
    }
    set idLayoutStyle(style) {
        this._idLayoutStyle = style;
        this.idCapture.didChange();
    }
    get idLayoutLineStyle() {
        return this._idLayoutLineStyle;
    }
    set idLayoutLineStyle(lineStyle) {
        this._idLayoutLineStyle = lineStyle;
        this.idCapture.didChange();
    }
    get capturedBrush() {
        return this._capturedBrush;
    }
    set capturedBrush(brush) {
        this._capturedBrush = brush;
        this.idCapture.didChange();
    }
    get localizedBrush() {
        return this._localizedBrush;
    }
    set localizedBrush(brush) {
        this._localizedBrush = brush;
        this.idCapture.didChange();
    }
    get rejectedBrush() {
        return this._rejectedBrush;
    }
    set rejectedBrush(brush) {
        this._rejectedBrush = brush;
        this.idCapture.didChange();
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
}
__decorate([
    Serializeable_1.ignoreFromSerialization
], IdCaptureOverlay.prototype, "idCapture", void 0);
__decorate([
    (0, Serializeable_1.nameForSerialization)('idLayout')
], IdCaptureOverlay.prototype, "_idLayout", void 0);
__decorate([
    (0, Serializeable_1.nameForSerialization)('idLayoutStyle')
], IdCaptureOverlay.prototype, "_idLayoutStyle", void 0);
__decorate([
    (0, Serializeable_1.nameForSerialization)('capturedBrush')
], IdCaptureOverlay.prototype, "_capturedBrush", void 0);
__decorate([
    (0, Serializeable_1.nameForSerialization)('localizedBrush')
], IdCaptureOverlay.prototype, "_localizedBrush", void 0);
__decorate([
    (0, Serializeable_1.nameForSerialization)('rejectedBrush')
], IdCaptureOverlay.prototype, "_rejectedBrush", void 0);
__decorate([
    (0, Serializeable_1.nameForSerialization)('idLayoutLineStyle')
], IdCaptureOverlay.prototype, "_idLayoutLineStyle", void 0);
exports.IdCaptureOverlay = IdCaptureOverlay;
