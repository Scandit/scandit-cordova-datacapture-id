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
    IdCapture: {
        RecommendedCameraSettings: CameraSettingsDefaultsJSON;
        IdCaptureOverlayDefaults: IdCaptureOverlayDefaultsJSON;
    };
}
export declare const defaultsFromJSON: (json: DefaultsJSON) => Defaults;
