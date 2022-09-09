export interface loginPageProps {
  pageTitle: string,
  buttons: object | null;
  inputs: object | null;
}

export interface signInProps {
  pageTitle: string,
  buttons: object | null;
  inputs: object | null;
}

export interface chatsPageProps {
  pageTitle: string,
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

export interface navigationProps {
  pageTitle: string,
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

export interface errorPageProps {
  pageTitle: string,
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

}
