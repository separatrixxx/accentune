interface TelegramWebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }
  
  interface TelegramWebApp {
    initDataUnsafe: {
      query_id: string;
      user: TelegramWebAppUser;
      auth_date: number;
      hash: string;
    };
    ready(): void;
  }
  
  interface Telegram {
    WebApp: TelegramWebApp;
  }
  
  interface Window {
    Telegram: Telegram;
  }
  