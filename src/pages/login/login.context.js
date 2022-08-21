const loginContext = {
	inputs: [
		{
			name: 'логин',
			key: 'login',
			type: 'text',
			common: true
		},
		{
			name: 'пароль',
			key: 'password',
			type: 'text',
			common: true
		}],
	buttons: [
		{
			text: 'Войти',
			type: 'submit',
			href: null,
			buttonClass: 'common',
			buttonLikeLink: false,
		},
		{
			text: 'Нет аккаунта',
			type: 'button-like-link',
			href: '/signin',
			buttonClass: 'button-like-link',
			buttonLikeLink: true,
		}
	]
}
export default loginContext;
