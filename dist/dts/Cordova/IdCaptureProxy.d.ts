import { IdCaptureProxy } from 'scandit-datacapture-frameworks-id';
import { NativeCallResult } from 'scandit-datacapture-frameworks-core';
export declare class NativeIdCaptureProxy implements IdCaptureProxy {
    private static get cordovaExec();
    createContextForBarcodeVerification(contextJSON: string): Promise<void>;
    resetMode(): Promise<void>;
    verifyCapturedIdAsync(capturedId: string): Promise<NativeCallResult | null>;
    setModeEnabledState(enabled: boolean): void;
    applyIdCaptureModeSettings(newSettingsJson: string): Promise<void>;
    updateIdCaptureMode(modeJson: string): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
}
