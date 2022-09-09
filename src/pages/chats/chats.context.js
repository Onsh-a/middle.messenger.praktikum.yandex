const chatsContext = {
  pageTitle: 'Мои чаты',
  chatPreviews: [
    {
      name: 'Иван Иванов',
      lastMessage: 'Текст последнего сообщения...',
      lastMessageTime: '12:12',
      lastMessagesQty: '1',
      componentName: 'chatPreview1',
    },
    {
      name: 'Петр Петров',
      lastMessage: 'Текст последнего сообщения...',
      lastMessageTime: '12:12',
      lastMessagesQty: '4',
      componentName: 'chatPreview2',
    },
  ],
  buttons: [
    {
      text: 'Мой профиль',
      componentName: 'buttonToProfile',
      buttonClass: 'common',
      buttonLikeLink: true,
      href: '/account-settings',
    },
  ],
};
export default chatsContext;
