import UseModal from "@/components/use-modal/use-modal.vue";
import {createApp, watch} from "vue";

export const useDelModel = () => {
    const el = document.createElement('view')
    document.body.appendChild(el)
    const Model = createApp(UseModal)
    Model.mount(el)
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const clickType = Model._instance.exposed.clickType
        watch(() => clickType.value, (type) => {
            type === 'ok' ? resolve('ok') : reject('cancel')
            Model.unmount()
            document.body.removeChild(el)
        })
    })
}
