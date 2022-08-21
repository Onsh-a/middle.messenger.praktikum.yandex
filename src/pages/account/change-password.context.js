const changePasswordContext = {
	inputs: [
		{
			settings: true,
			name: 'Старый пароль',
			key: 'old_pwd',
			type: 'text',
			value: '•••••••••',
		},
		{
			settings: true,
			name: 'Новый пароль',
			key: 'new_pwd',
			type: 'text',
			value: '••••••••••••',
		},
		{
			settings: true,
			name: 'Повторите новый пароль',
			key: 'repeat_new_pwd',
			type: 'text',
			value: '••••••••••••',
		},
	],
	buttons: [
		{
			text: 'Сохранить',
			buttonClass: 'common',
		},
	]
}
export default changePasswordContext;
