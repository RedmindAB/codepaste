import { NativeModules, Platform } from 'react-native'

function getIOSDeviceLocale() {
  return (
    (NativeModules &&
      NativeModules.SettingsManager &&
      NativeModules.SettingsManager.settings &&
      NativeModules.SettingsManager.settings.AppleLocale &&
      NativeModules.SettingsManager.settings.AppleLocale.substr(0, 2)) ||
    NativeModules.SettingsManager.settings.AppleLanguages[0]
  )
}

function getAndroidDeviceLocale() {
  return NativeModules.I18nManager.localeIdentifier
}

export function getDeviceLocale() {
  return Platform.OS === 'ios' ? getIOSDeviceLocale() : getAndroidDeviceLocale()
}
