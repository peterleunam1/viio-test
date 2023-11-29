interface AlertsModel {
  ERROR: string
  ERROR_LOGIN: string
  SUCCESS: string
  GLOBAL_STATE: string
}
export const Alerts: AlertsModel = {
  ERROR: 'There was an error, please try again or  later',
  ERROR_LOGIN: 'Invalid credentials, please try again',
  SUCCESS: 'Registration successful',
  GLOBAL_STATE: 'useGlobalPersonalData must be used within a SignUpContextProvider'
}
