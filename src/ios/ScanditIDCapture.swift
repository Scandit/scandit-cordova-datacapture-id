import ScanditFrameworksId

struct IdCaptureCallbackResult: BlockingListenerCallbackResult {
    struct ResultJSON: Decodable {
        let enabled: Bool?
    }

    let finishCallbackID: ListenerEvent.Name
    let result: ResultJSON?

    var enabled: Bool? {
        guard let result = result else {
            return nil
        }

        return result.enabled
    }
}

fileprivate extension CordovaEventEmitter {
    func registerCallback(with event: FrameworksIdCaptureEvent, call: CDVInvokedUrlCommand) {
        registerCallback(with: event.rawValue, call: call)
    }
}

@objc(ScanditIdCapture)
public class ScanditIdCapture: CDVPlugin {
    var idModule: IdCaptureModule!
    var emitter: CordovaEventEmitter!

    override public func pluginInitialize() {
        super.pluginInitialize()
        emitter = CordovaEventEmitter(commandDelegate: commandDelegate)
        idModule = IdCaptureModule(emitter: emitter)
        idModule.didStart()
    }

    public override func dispose() {
        idModule.didStop()
        emitter.removeCallbacks()
        super.dispose()
    }

    // MARK: Listeners

    @objc(addIdCaptureListener:)
    func addIdCaptureListener(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        
        idModule.addListener(modeId: modeId)
        emitter.registerModeSpecificCallback(modeId, with: FrameworksIdCaptureEvent.didCaptureId.rawValue, call: command)
        emitter.registerModeSpecificCallback(modeId, with: FrameworksIdCaptureEvent.didRejectId.rawValue, call: command)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(removeIdCaptureListener:)
    func removeIdCaptureListener(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        
        idModule.removeListener(modeId: modeId)
        emitter.unregisterModeSpecificCallback(modeId, with: FrameworksIdCaptureEvent.didCaptureId.rawValue)
        emitter.unregisterModeSpecificCallback(modeId, with: FrameworksIdCaptureEvent.didRejectId.rawValue)
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(finishDidCaptureCallback:)
    func finishDidCaptureCallback(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        
        idModule.finishDidCaptureId(modeId: modeId, enabled: args["enabled"] as? Bool ?? false)
        commandDelegate.send(.success, callbackId: command.callbackId)
    }
    
    @objc(finishDidRejectCallback:)
    func finishDidRejectCallback(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        
        idModule.finishDidRejectId(modeId: modeId, enabled: args["enabled"] as? Bool ?? false)
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    // MARK: Defaults

    @objc(getDefaults:)
    func getDefaults(command: CDVInvokedUrlCommand) {
        commandDelegate.send(.success(message: idModule.defaults.toEncodable() as CDVPluginResult.JSONMessage),
                             callbackId: command.callbackId)
    }

    // MARK: Reset

    @objc(resetIdCaptureMode:)
    func resetIdCaptureMode(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        
        idModule.resetMode(modeId: modeId)
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(updateIdCaptureOverlay:)
    func updateIdCaptureOverlay(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let overlayJson = args["overlayJson"] as? String else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        idModule.updateOverlay(overlayJson: overlayJson,
                               result: CordovaResult(commandDelegate, command.callbackId))
    }

    @objc(updateIdCaptureMode:)
    func updateIdCaptureMode(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int,
              let modeJson = args["modeJson"] as? String else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        idModule.updateModeFromJson(modeId: modeId,
                                    modeJson: modeJson,
                                    result: CordovaResult(commandDelegate, command.callbackId))
    }

    @objc(applyIdCaptureModeSettings:)
    func applyIdCaptureModeSettings(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int,
              let settingsJson = args["settingsJson"] as? String else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        idModule.applyModeSettings(modeId: modeId,
                                   modeSettingsJson: settingsJson,
                                   result: CordovaResult(commandDelegate, command.callbackId))
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        idModule.setModeEnabled(modeId: modeId, enabled: args["enabled"] as? Bool ?? false)
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(updateIdCaptureFeedback:)
    func updateIdCaptureFeedback(command: CDVInvokedUrlCommand) {
        guard let args = command.defaultArgumentAsDictionary,
              let modeId = args["modeId"] as? Int,
              let feedbackJson = args["feedbackJson"] as? String else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        idModule.updateFeedback(modeId: modeId,
                                feedbackJson: feedbackJson,
                                result: CordovaResult(commandDelegate, command.callbackId))
    }
}
