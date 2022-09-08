// templates
import mainNavigationPage from './pages/navigation/navigation.hbs';
import logInPage from './pages/login/login.hbs';
import signInPage from './pages/signin/signin.hbs';
import serverErrorPage from './pages/staticPages/errorPage.hbs';
import accountSettingsPage from './pages/account/settings.hbs';
import chatsPage from './pages/chats/chats.hbs';

// pages
import { Login } from './pages/login/login';
import { SignIn } from './pages/signin/signin';
import { ErrorPage } from './pages/staticPages/errorPage';
import { AccountPage } from './pages/account/settings';

// context
import errors from './pages/staticPages/errors.context';
import logInContext from './pages/login/login.context';
import settingsContext from './pages/account/settings.context';
import changePasswordContext from './pages/account/change-password.context';
import editProfileContext from './pages/account/edit-profile.context';
import navigationContext from './pages/navigation/navigation.context';
import signinContext from './pages/signin/signin.context';

// components
import './components/input/input';
import './components/button/button';
import './components/icons/icons';
import './components/modal/modal';

// utils
import Input from './utils/Input';
import Modal from './utils/Modal';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');
  const modal = new Modal();
  const input = new Input();

  const setPage = (rootElement, pageComponent, props) => {
    const page = new pageComponent({...props});
    rootElement.append(page.getContent());
    page.dispatchComponentDidMount();
    document.title = props.pageTitle || 'Название сайта';
  }

  switch (window.location.pathname) {
    case '/':
      root.innerHTML = mainNavigationPage({...navigationContext});
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
      root.innerHTML = chatsPage();
      document.title = 'Мои чаты';
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
