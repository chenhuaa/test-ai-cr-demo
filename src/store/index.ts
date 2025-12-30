import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: '第一个状态数据 Pinia'
    }
  },
  getters: {},
  actions: {}
})
