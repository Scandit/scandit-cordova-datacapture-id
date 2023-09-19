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
                .fromJSON(json.RecommendedCameraSettings),
            IdCaptureOverlayDefaults: {
                defaultCapturedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.IdCaptureOverlay.DefaultCapturedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.IdCaptureOverlay.DefaultCapturedBrush.strokeColor),
                    strokeWidth: json.IdCaptureOverlay.DefaultCapturedBrush.strokeWidth,
                },
                defaultLocalizedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.IdCaptureOverlay.DefaultLocalizedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.IdCaptureOverlay.DefaultLocalizedBrush.strokeColor),
                    strokeWidth: json.IdCaptureOverlay.DefaultLocalizedBrush.strokeWidth,
                },
                defaultRejectedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.IdCaptureOverlay.DefaultRejectedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.IdCaptureOverlay.DefaultRejectedBrush.strokeColor),
                    strokeWidth: json.IdCaptureOverlay.DefaultRejectedBrush.strokeWidth,
                },
            },
        },
    };
};
exports.defaultsFromJSON = defaultsFromJSON;
