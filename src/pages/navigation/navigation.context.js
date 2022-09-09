const navigationContext = {
  pageTitle: 'Навигация',
  links: [
    {
      href: '/login',
      componentName: 'linkLogin',
      title: 'Страница логина',
    },
    {
      href: '/signin',
      componentName: 'linkSignIn',
      title: 'Страница регистрации',
    },
    {
      href: '/chats',
      componentName: 'linkChats',
      title: 'Страница чатов',
    },
    {
      href: '/account-settings',
      componentName: 'linkSettings',
      title: 'Страница настроек аккаунта',
    },
    {
      href: '/account-edit',
      componentName: 'linkSettingsEdit',
      title: 'Страница редактирования данных',
    },
    {
      href: '/change-password',
      componentName: 'linkSettingsChangePwd',
      title: 'Страница изменения пароля',
    },
    {
      href: '/server-error',
      componentName: 'linkServerError',
      title: 'Страница 500 ошибки',
    },
    {
      href: '/any-url-that-does-not-exist',
      componentName: 'link404',
      title: 'Страница 404 ошибки',
    },
  ],
};

export default navigationContext;
