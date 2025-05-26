import { createStore } from 'vuex'
import type { ActionContext } from 'vuex'

interface State {
  count: number
}

export default createStore<State>({
  state: {
    count: 0
  },
  getters: {
    doubleCount: (state: State) => state.count * 2
  },
  mutations: {
    increment(state: State) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }: ActionContext<State, State>) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
  }
}) 