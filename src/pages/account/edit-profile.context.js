const editProfileContext = {
	inputs: [
		{
			settings: true,
			name: 'Почта',
			key: 'email',
			type: 'text',
			value: 'test@yandex.ru',
		},
		{
			settings: true,
			name: 'Логин',
			key: 'login',
			type: 'text',
			value: 'SomeLogin123',
		},
		{
			settings: true,
			name: 'Имя',
			key: 'name',
			type: 'text',
			value: 'Иван',
		},
		{
			settings: true,
			name: 'Фамилия',
			key: 'lastname',
			type: 'text',
			value: 'Иванов',
		},
		{
			settings: true,
			name: 'Имя в чате',
			key: 'chat-name',
			type: 'text',
			value: 'Иван',
		},
		{
			settings: true,
			name: 'Телефон',
			key: 'phone',
			type: 'text',
			value: '+7 (999) 999 99 99',
		}
	],
	buttons: [
		{
			text: 'Сохранить',
			buttonClass: 'common',
		},
	]
}
export default editProfileContext;
