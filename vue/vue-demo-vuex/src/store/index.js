import { createStore } from "vuex";
import axios from "axios";

// Vuex的核心作用就是帮我们管理组件之间的状态
export default createStore({
    // 所有的状态都放在这里(数据)
    state:{
        counter: 10
    },
    getters: {
        getCounter(state){
            return state.counter > 0 ? state.counter : "counter数据异常"
        }
    },
    mutations: {
        addCounter(state, number) {
            state.counter += number
        }
    },
    // 为异步操作所准备的
    actions: {
        asyncAddCounter({ commit }) {
            axios.get("http://iwenwiki.com/api/generator/list.php").then(res => {
                commit("addCounter", res.data[0])
            })
        }
    }

})