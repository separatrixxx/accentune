export interface ITelegramUser {
  id: number,
  first_name: string,
  last_name?: string,
  username?: string,
  language_code?: string,
  photo_url?: string,
}

export interface IPopUpButton {
  id?: string,
  type?: string,
  text?: string,
}

export interface IPopUpParams {
  title?: string,
  message: string,
  buttons?: IPopUpButton[],
}

export interface IWebApp {
  initData: string,
  initDataUnsafe: {
    query_id?: string,
    user?: ITelegramUser,
    auth_date: number,
    hash: string,
  },
  version: string,
  platform: string,
  colorScheme: string,
  themeParams: {
    link_color?: string,
    button_color?: string,
    button_text_color?: string,
    secondary_bg_color?: string,
    hint_color?: string,
    bg_color?: string,
    text_color?: string,
    section_bg_color?: string,
  },
  isExpanded: boolean,
  viewportHeight: number,
  viewportStableHeight: number,
  isClosingConfirmationEnabled: boolean,
  headerColor: string,
  backgroundColor: string,
  setHeaderColor: (color: string) => void,
  BackButton: {
    isVisible: boolean,
    onClick: (callback: () => void) => void,
    offClick: (callback: () => void) => void,
    show: () => void,
    hide: () => void,
  },
  MainButton: {
    text: string,
    color: string,
    textColor: string,
    isVisible: boolean,
    isProgressVisible: boolean,
    isActive: boolean,
    onClick: (callback: () => void) => void,
    offClick: (callback: () => void) => void, 
    show: () => void,
    hide: () => void,
  },
  onEvent: (eventType: string, eventHandler: () => void) => void,
  expand: () => void,
  showPopup: (params: IPopUpParams, callback?: (buttonId: string) => void) => void,
  showAlert: (message: string, callback?: () => void) => void,
  showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void,
  openLink: (url: string) => void,
}
