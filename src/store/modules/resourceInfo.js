import serverApi from '@/api/serverApi'

const state = {
    resurceInfos: [],
    selectedResource: {}
}

const getters = {
    allResource: state => state.resurceInfos,
    selectedResource: state => state.selectedResource
}

const actions = {
    getResourceInfos: async ({ commit }) => {  // 서버로 부터 유저정보 요청후 커밋.
        let resources = await serverApi.getResourceInfos()
        commit('setResourceInfos', resources)
        
        if(resources.length > 0) {
            commit('selectResource', 0) // 디폴트 리소스 선택.
        }
    },

    selectResource : ({commit}, index) => { // 리스트에서 리소스를 선택했을때 액션.
        commit('selectResource', index) 
    }
}

const mutations = {
    setResourceInfos: (state, resources) => {
        state.resurceInfos = resources
    },

    selectResource: (state, index) => {
        state.selectedResource = state.resurceInfos[index]
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

