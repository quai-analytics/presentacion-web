/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_CHATBOT_WEBHOOK_URL: string
  readonly VITE_CALENDAR_ASSISTANT_WEBHOOK_URL: string
  readonly VITE_GOOGLE_CALENDAR_IFRAME_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
