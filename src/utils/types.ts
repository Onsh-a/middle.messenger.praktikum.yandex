export interface loginPageProps {
  buttons: object | null;
  inputs: object | null;
}

export interface signInProps {
  buttons: object | null;
  inputs: object | null;
}

export interface buttonProps {
  text: string,
  type: string,
  href: string | null,
  buttonClass: string ,
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

export interface ButtonProps {
  text: string,
  type: string,
  href: string | null,
  buttonClass: string ,
  componentName: string
  buttonLikeLink: boolean
}

export interface errorPageProps {
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
