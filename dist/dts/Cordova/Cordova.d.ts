export declare const Cordova: {
    pluginName: string;
    defaults: any;
    exec: (success: Function | null, error: Function | null, functionName: string, args: [
        any
    ] | null) => void;
};
export declare function initializeCordovaId(): void;
export declare enum CordovaFunction {
    SubscribeDidCaptureListener = "subscribeDidCaptureListener",
    SubscribeDidLocalizeListener = "subscribeDidLocalizeListener",
    SubscribeDidRejectListener = "subscribeDidRejectListener",
    SubscribeDidTimeOutListener = "subscribeDidTimeOutListener",
    UnregisterListenerForEvents = "unregisterListenerForEvents",
    SetModeEnabledState = "setModeEnabledState",
    ResetIdCapture = "resetIdCapture",
    FinishCallback = "finishCallback",
    UpdateIdCaptureMode = "updateIdCaptureMode",
    ApplyIdCaptureModeSettings = "applyIdCaptureModeSettings",
    UpdateIdCaptureOverlay = "updateIdCaptureOverlay",
    UpdateIdCaptureFeedback = "updateIdCaptureFeedback"
}
