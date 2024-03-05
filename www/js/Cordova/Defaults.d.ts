/// <amd-module name="scandit-cordova-datacapture-id.Defaults" />
import { CameraSettings } from 'Camera+Related';
import { CameraSettingsDefaultsJSON, IdCaptureOverlayDefaults, IdCaptureOverlayDefaultsJSON } from 'CoreDefaults';
export interface Defaults {
    IdCapture: {
        RecommendedCameraSettings: CameraSettings;
        IdCaptureOverlayDefaults: IdCaptureOverlayDefaults;
    };
}
export interface DefaultsJSON {
    RecommendedCameraSettings: CameraSettingsDefaultsJSON;
    IdCaptureOverlay: IdCaptureOverlayDefaultsJSON;
}
export declare const defaultsFromJSON: (json: DefaultsJSON) => Defaults;
