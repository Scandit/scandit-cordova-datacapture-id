import ScanditIdCapture

struct ScanditIdCaptureDefaults: Encodable {
    typealias CameraSettingsDefaults = ScanditCaptureCoreDefaults.CameraSettingsDefaults

    struct IdCaptureDefaultsContainer: Encodable {
        let recommendedCameraSettings: CameraSettingsDefaults
        let idCaptureOverlayDefaults: [String: ScanditCaptureCoreDefaults.BrushDefaults]

        enum CodingKeys: String, CodingKey {
            case recommendedCameraSettings = "RecommendedCameraSettings"
            case idCaptureOverlayDefaults = "IdCaptureOverlayDefaults"
        }
    }

    let idCapture = IdCaptureDefaultsContainer()

    enum CodingKeys: String, CodingKey {
        case idCapture = "IdCapture"
    }
}

extension ScanditIdCaptureDefaults.IdCaptureDefaultsContainer {
    typealias BrushDefaults = ScanditCaptureCoreDefaults.BrushDefaults

    init() {
        self.recommendedCameraSettings = ScanditCaptureCoreDefaults.CameraSettingsDefaults
            .from(IdCapture.recommendedCameraSettings)
        self.idCaptureOverlayDefaults = [
            "defaultCapturedBrush": BrushDefaults.from(
                IdCaptureOverlay.defaultCapturedBrush
            ),
            "defaultLocalizedBrush": BrushDefaults.from(
                IdCaptureOverlay.defaultLocalizedBrush
            ),
            "defaultRejectedBrush": BrushDefaults.from(
                IdCaptureOverlay.defaultRejectedBrush
            ),
        ]
    }
}
