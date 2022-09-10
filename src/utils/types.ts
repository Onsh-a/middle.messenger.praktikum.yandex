export interface RequestQuery {
  timeout?: number,
  data?: Record<string, string> | undefined,
  headers?: {[key: string]:string},
}

export interface RequestQueryExtended extends RequestQuery {
  method: string,
}

export interface defaultPageProps {
  pageTitle: string;
}

export interface loginPageProps extends defaultPageProps {
  buttons: object | null;
  inputs: object | null;
}

export interface signInProps extends defaultPageProps {
  buttons: object | null;
  inputs: object | null;
}

export interface buttonProps {
  text: string,
  type: string,
  href: string | null,
  buttonClass: string,
  componentName: string
  buttonLikeLink: boolean
}

export interface inputProps {
  name: string,
  key: string,
  type: string,
  common: boolean,
  componentName: string,
}

export interface navigationProps extends defaultPageProps {
  links: object[],
}

export interface navigationLinkProps {
  href: string,
  componentName: string,
  title: string,
}

export interface ButtonProps {
  text: string,
  type: string,
  href: string | null,
  buttonClass: string,
  componentName: string
  buttonLikeLink: boolean
}

export interface errorPageProps extends defaultPageProps {
  errorCode: string,
  errorMessage: string,
  errorLink: string,
}

export interface modalButtonProps {
  text: string,
  buttonClass: string,
  componentName: string,
}

export interface modalProps {
  buttons: object[],
}

export interface HTMLInputEvent {
  target: HTMLInputElement,
}

export interface chatPreviewProps {
  name: string,
  lastMessage: string,
  lastMessageTime: string,
  lastMessagesQty: string,
  componentName: string,
}

export interface chatsPageProps extends defaultPageProps {
  chatPreviews: chatPreviewProps
}
