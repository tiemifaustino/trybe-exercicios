// Notificator.ts

// 3 - Faça as adequações necessárias no construtor da classe ReadingTracker, de forma que ele passe a respeitar o Princípio da Inversão de Dependência (DIP).

export interface Notificator {
  sendNotification(message: string): void;
}
