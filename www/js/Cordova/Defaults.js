"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultsFromJSON = void 0;
/// <amd-module name="scandit-cordova-datacapture-id.Defaults"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Camera_Related_1 = require("scandit-cordova-datacapture-core.Camera+Related");
const Common_1 = require("scandit-cordova-datacapture-core.Common");
const defaultsFromJSON = (json) => {
    return {
        IdCapture: {
            RecommendedCameraSettings: Camera_Related_1.CameraSettings
                .fromJSON(json.IdCapture.RecommendedCameraSettings),
            IdCaptureOverlayDefaults: {
                defaultCapturedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth,
                },
                defaultLocalizedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth,
                },
                defaultRejectedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth,
                },
            },
        },
    };
};
exports.defaultsFromJSON = defaultsFromJSON;
