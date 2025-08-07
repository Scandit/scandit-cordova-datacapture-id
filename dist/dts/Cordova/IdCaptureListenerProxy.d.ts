import { IdCaptureListenerProxy } from 'scandit-datacapture-frameworks-id';
import { BaseNativeProxy } from 'scandit-datacapture-frameworks-core';
export declare class NativeIdCaptureListenerProxy extends BaseNativeProxy implements IdCaptureListenerProxy {
    isModeEnabled: () => boolean;
    private static get cordovaExec();
    private emitInCallback;
    private notifyListeners;
    subscribeDidCaptureListener(): void;
    subscribeDidRejectListener(): void;
    finishDidCaptureCallback(isFinished: boolean): void;
    finishDidRejectCallback(isFinished: boolean): void;
    unregisterListenerForEvents(): void;
}
