import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
// renderWithQiankun： 为子应用导出一些生命周期函数 供主应用在特殊的时机调用
// qiankunWindow： qiankunWindow.POWERED_BY_QIANKUN 可判断是否在qiankun环境下
renderWithQiankun({
    mount(_props) {
        console.log('mount');
    },
    bootstrap() {
        console.log('bootstrap');
    },
    unmount(_props: any) {
        console.log('unmount');
    },
    update: function (props: QiankunProps): void | Promise<void> {
        console.log('update');
    }
});