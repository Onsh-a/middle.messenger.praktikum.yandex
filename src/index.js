// templates
import mainNavigationPage from './pages/navigation/navigation.hbs';
import logInPage from './pages/login/login.hbs';
import signInPage from './pages/signin/signin.hbs';
import pageNotFoundPage from './pages/staticPages/pageNotFound.hbs';
import serverErrorPage from './pages/staticPages/errorPage.hbs';
import accountSettingsPage from './pages/account/settings.hbs';
import chatsPage from './pages/chats/chats.hbs';

//pages
import { Login } from "./pages/login/login";

// context
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

  switch (window.location.pathname) {
    case '/':
      root.innerHTML = mainNavigationPage({...navigationContext});
      break;
    case '/login':
      const LoginPage = new Login({...logInContext});
      root.append(LoginPage.getContent());
      input.initInputs();
      LoginPage.dispatchComponentDidMount();
      document.title = 'Логин';
      // input.initInputs();
      break;
    case '/signin':
      root.innerHTML = signInPage(signinContext);
      document.title = 'Регистрация';
      input.initInputs();
      break;
    case '/chats':
      root.innerHTML = chatsPage();
      document.title = 'Мои чаты';
      input.initInputs();
      break;
    case '/server-error':
      root.innerHTML = serverErrorPage();
      document.title = 'Упс... произошла ошибка';
      break;
    case '/account-settings':
      root.innerHTML = accountSettingsPage(settingsContext);
      document.title = 'Настройки аккаунта';
      modal.initModal('[data-trigger-modal]');
      break;
    case '/account-edit':
      root.innerHTML = accountSettingsPage(editProfileContext);
      document.title = 'Редактирование аккаунта';
      modal.initModal('[data-trigger-modal]');
      break;
    case '/change-password':
      root.innerHTML = accountSettingsPage(changePasswordContext);
      document.title = 'Изменение пароля';
      modal.initModal('[data-trigger-modal]');
      break;
    default:
      root.innerHTML = pageNotFoundPage();
      document.title = 'Упс... нет такой страницы';
  }
});
