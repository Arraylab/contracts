// 我们如果在一个动作中多次去改变 mutation 那么往往会封装一个 action


export const test = function ({commit}, uid) {
  commit('SET_UID', uid)
}
