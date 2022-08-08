// 2 - Observe o código abaixo e faça as alterações necessárias para que ele passe a respeitar o Princípio do Aberto/Fechado (OCP).

// export default function progressNotification(
//   message: string,
//   notificationType: string,
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//     default:
//       console.log(message);
//       break;
//   }
// }

// export default function progressNotification(notificationType: string, message: string): void {
//   console.log(`${notificationType}: ${message}`);
// }

// progressNotification('Email', 'Este é um e-mail');

type NotificationType = {
  type: string,
  send: (message: string) => void
};

// Criando variáveis para guardar cada tipo aceito por nossa função
const consoleNotification: NotificationType = {
  type: 'Console',
  send: (message) => console.log('Console: ', message),
};

const emailNotification: NotificationType = {
  type: 'Email',
  send: (message) => console.log('Email: ', message),
};

const phoneNotification: NotificationType = {
  type: 'Phone',
  send: (message) => console.log('Phone: ', message),
};

const notifications: NotificationType[] = [
  consoleNotification, emailNotification, phoneNotification,
];

// Agora podemos adicionar novos tipos sem modificar nossa função
export default function progressNotification(
  message: string,
  notificationType: string,
  notificationsArray: NotificationType[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === notificationType) {
      notification.send(message);
    }
  });
}

progressNotification('Esta é a mensagem', 'Email'); // Email:  Esta é a mensagem