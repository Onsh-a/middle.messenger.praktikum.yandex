// pages
import { Navigation } from './pages/navigation/navigation.ts';
import { Login } from './pages/login/login.ts';
import { SignIn } from './pages/signin/signin.ts';
import { Chats } from './pages/chats/chats.ts';
import { ErrorPage } from './pages/staticPages/errorPage.ts';
import { AccountPage } from './pages/account/settings.ts';

// context
import errors from './pages/staticPages/errors.context.js';
import logInContext from './pages/login/login.context.js';
import settingsContext from './pages/account/settings.context.js';
import changePasswordContext from './pages/account/change-password.context.js';
import editProfileContext from './pages/account/edit-profile.context.js';
import navigationContext from './pages/navigation/navigation.context.js';
import signinContext from './pages/signin/signin.context.js';
import chatsContext from './pages/chats/chats.context.js';

// components
import './components/input/input.ts';
import './components/button/button.ts';
import './components/icons/icons.ts';
import './components/modal/modal.ts';

// utils
import Input from './utils/Input.ts';
import Modal from './utils/Modal.ts';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');
  const modal = new Modal();
  const input = new Input();

  const setPage = (rootElement, PageComponent, props) => {
    const page = new PageComponent({ ...props });
    rootElement.append(page.getContent());
    page.dispatchComponentDidMount();
    document.title = props.pageTitle || 'Название сайта';
  };

  switch (window.location.pathname) {
    case '/':
      setPage(root, Navigation, navigationContext);
      break;
    case '/login':
      setPage(root, Login, logInContext);
      input.initInputs();
      break;
    case '/signin':
      setPage(root, SignIn, signinContext);
      input.initInputs();
      break;
    case '/chats':
      setPage(root, Chats, chatsContext);
      input.initInputs();
      break;
    case '/server-error':
      setPage(root, ErrorPage, errors.serverError);
      break;
    case '/account-settings':
      setPage(root, AccountPage, settingsContext);
      modal.initModal('[data-trigger-modal]');
      break;
    case '/account-edit':
      setPage(root, AccountPage, editProfileContext);
      modal.initModal('[data-trigger-modal]');
      break;
    case '/change-password':
      setPage(root, AccountPage, changePasswordContext);
      modal.initModal('[data-trigger-modal]');
      break;
    default:
      setPage(root, ErrorPage, errors.notFound);
  }
});
