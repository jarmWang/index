import show from './show.js'
import draggable from './draggable.js'

export default {
    install(app) {
        app.use(show)
        app.use(draggable)
    }
}