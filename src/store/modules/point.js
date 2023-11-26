/*
 * @Author: wbq
 * @Date: 2023-09-06 15:14:08
 * @LastEditTime: 2023-09-08 10:15:45
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \vue\demo\vue3\DemoV3\new-vue3\src\store\modules\point.js
 */
const state = {
    point: []
}

const getters = {}

const actions = {}

const mutations = {
    setPoint(state, payload) {
        state.point = payload
    },
    addPoint(state, payload) {
        state.point.push(payload)
    },
    removePoint(state, payload) {
        state.point.splice(payload, 1)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}