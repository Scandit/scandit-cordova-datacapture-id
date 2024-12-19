import { IdCaptureProxy } from 'scandit-datacapture-frameworks-id';
export declare class NativeIdCaptureProxy implements IdCaptureProxy {
    private static get cordovaExec();
    createContextForBarcodeVerification(contextJSON: string): Promise<void>;
    resetMode(): Promise<void>;
    verifyCapturedIdAsync(capturedId: string): Promise<string | null>;
    setModeEnabledState(enabled: boolean): void;
    updateIdCaptureMode(modeJson: string): Promise<void>;
    applyIdCaptureModeSettings(newSettingsJson: string): Promise<void>;
    updateIdCaptureOverlay(overlayJson: string): Promise<void>;
    updateFeedback(feedbackJson: string): Promise<void>;
}
