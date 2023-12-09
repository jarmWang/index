const { createApp, ref } = Vue

createApp({
    setup() {
        const msg = 'hello world!'
        return {
            msg
        }
    }
}).$mount('app')