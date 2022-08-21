// templates
import mainNavigationPage from "./pages/navigation/navigation.hbs";
import logInPage from "./pages/login/login.hbs";
import signInPage from "./pages/signin/signin.hbs";
import pageNotFoundPage from "./pages/staticPages/pageNotFound.hbs";
import serverErrorPage from "./pages/staticPages/errorPage.hbs";
import accountSettingsPage from "./pages/account/settings.hbs";
import chatsPage from "./pages/chats/chats.hbs";

// context
import logInContext from "./pages/login/login.context.js";
import settingsContext from "./pages/account/settings.context";
import changePasswordContext from "./pages/account/change-password.context";
import editProfileContext from "./pages/account/edit-profile.context";
import navigationContext from "./pages/navigation/navigation.context";
import signinContext from "./pages/signin/signin.context.js";
import signinContext from "./pages/signin/signin.context.js"

// components
import "./components/input/input.js";
import "./components/button/button.js";
import "./components/icons/icons.js";
import "./components/modal/modal.js";

// utils
import Input from "./utils/input";
import Modal from "./utils/modal";

window.addEventListener("DOMContentLoaded", () => {
	const root = document.querySelector('#app');
	const modal = new Modal();
	const input = new Input();

	switch(window.location.pathname) {
		case "/":
			root.innerHTML = mainNavigationPage(navigationContext);
			break;
		case "/login":
			root.innerHTML = logInPage(logInContext);
			document.title = "Логин";
			input.initInputs();
			break;
		case "/signin":
			root.innerHTML = signInPage(signinContext);
			document.title = "Регистрация";
			input.initInputs();
			break;
    case "/chats":
      root.innerHTML = chatsPage();
      document.title = "Мои чаты";
      input.initInputs();
      break;
		case "/server-error":
			root.innerHTML = serverErrorPage();
			document.title = "Упс... произошла ошибка";
			break;
		case "/account-settings":
			root.innerHTML = accountSettingsPage(settingsContext);
			document.title = "Настройки аккаунта";
			modal.initModal("[data-trigger-modal]");
			break;
		case "/account-edit":
			root.innerHTML = accountSettingsPage(editProfileContext);
			document.title = "Редактирование аккаунта";
			modal.initModal("[data-trigger-modal]");
			break;
		case "/change-password":
			root.innerHTML = accountSettingsPage(changePasswordContext);
			document.title = "Изменение пароля";
			modal.initModal("[data-trigger-modal]");
			break;
		default:
			root.innerHTML = pageNotFoundPage();
			document.title = "Упс... нет такой страницы";
	}
})
