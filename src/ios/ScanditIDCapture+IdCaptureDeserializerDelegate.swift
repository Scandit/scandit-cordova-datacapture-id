import ScanditIdCapture

extension ScanditIdCapture: IdCaptureDeserializerDelegate {
    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didStartDeserializingMode mode: IdCapture,
                                      from jsonValue: JSONValue) {
        // Empty on purpose
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didFinishDeserializingMode mode: IdCapture,
                                      from jsonValue: JSONValue) {
        idCapture = mode

        mode.isEnabled = jsonValue.bool(forKey: "enabled")

        mode.addListener(self)
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didStartDeserializingSettings settings: IdCaptureSettings,
                                      from jsonValue: JSONValue) {
        // Empty on purpose
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didFinishDeserializingSettings settings: IdCaptureSettings,
                                      from jsonValue: JSONValue) {
        // Empty on purpose
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didStartDeserializingOverlay overlay: IdCaptureOverlay,
                                      from jsonValue: JSONValue) {
        // Empty on purpose
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didFinishDeserializingOverlay overlay: IdCaptureOverlay,
                                      from jsonValue: JSONValue) {
        // Empty on purpose
    }
}
