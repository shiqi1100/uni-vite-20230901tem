import { createSSRApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
