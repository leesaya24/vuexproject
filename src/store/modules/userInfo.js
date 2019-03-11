import serverApi from '@/api/serverApi'

const state = {
    userInfos: [],
    selectedUser: {}
}

const getters = {
    allUserInfo: state => state.userInfos,
    selectedUser: state => state.selectedUser,
}

const actions = {
    getUserInfos: async ({ commit }) => {  // 서버로 부터 유저정보를 얻는다
        let users = await serverApi.getUserInfos()
        commit('setUserInfo', users)

        if(users.length > 0) {
            commit('selectUser', 0)
        }
    },
    selectUser: ({ commit }, index) => { // 유저리스트에서 유저선택
        commit('selectUser', index)
    }
}

const mutations = {
    setUserInfo: (state, users) => {
        state.userInfos = users
    },
    selectUser: (state, index) => {
        state.selectedUser = state.userInfos[index]
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

