import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadMeetups: [{
                imageUrl: 'http://img1.imgtn.bdimg.com/it/u=229313343,3350995372&fm=27&gp=0.jpg',
                title: '我的大刀早已饥渴难耐了',
                id: 'febielje',
                date: new Date(),
                location: '北京',
                description: '北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹'
            },
            {
                imageUrl: 'http://img3.imgtn.bdimg.com/it/u=3450610611,3606718306&fm=27&gp=0.jpg',
                title: '死亡如风常伴吾身',
                id: 'afefg23',
                date: new Date(),
                location: '上海',
                description: '上海市总面积6340平方公里，辖16个市辖区，属亚热带湿润季风气候，四季分明，日照充分，雨量充沛。'
            },
            {
                imageUrl: 'http://img0.imgtn.bdimg.com/it/u=2842992837,2403440449&fm=27&gp=0.jpg',
                title: '是时候表演真正的技术了',
                id: '332fr3323',
                date: new Date(),
                location: '重庆',
                description: '重庆是国家历史文化名城，在3000余年历史中，创造了富有鲜明个性的巴渝文化；在宋淳熙十六年，光宗赵惇先封恭王，再即帝位，自诩“双重喜庆”，而得名重庆'
            }
        ],
        user: null
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadMeetups.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: '23123913123'
            }
            commit('createMeetup', meetup)
        },
        signUserUp({ commit }, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
        },
        signUserIn({ commit }, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
        }
    },
    getters: {
        loadMeetups(state) {
            return state.loadMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMettups(state, getters) {
            return getters.loadMeetups.slice(0, 5);
        },
        loadMeetup(state) {
            return (meetupId) => {
                return state.loadMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user(state) {
            return state.user
        }
    },

})