import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        colores:[],
        colorGanador:'ninguno',
        gano :false,
        dificultad:true,
        cantColores:6,
        click:0,
        mensaje:''
    },
    actions : {
        mensaje({commit},mens){
            commit('mensajem',mens)
        },
        clicks({commit},num){
            commit('clicksm',num)
        },
        modifDif({commit},dif){
            commit('modifDifm',dif)
        },
        cantColores({commit},num){
            commit('cantColoresm',num)
        },
        coloresGanador({commit},color){
            commit('coloresGanadorm',color)
        },
        generarColores({commit},array){
            commit('generarColoresm',array)
        },
        colGanador({commit},color){
            commit('colGanadorm',color)
        },
        ganador({commit},accion) {
            commit('ganadorm',accion)
        },
        estado({commit},num) {
            commit('estadom',num)
        },
    },
    mutations : {
        mensajem(state,mens){
            state.mensaje=mens
        },
        clicksm(state,num){
            state.click=num
        },
        modifDifm(state,dif){
            state.dificultad=!dif
        },
        cantColoresm(state,num){
                state.cantColores=num      
        },
        coloresGanadorm(state,color){
            for (let index = 0; index < state.colores.length; index++) {
                state.colores[index]=color
            }
        },
        generarColoresm(state,array){
            state.colores=array
        },
        colGanadorm(state,color){
            state.colorGanador=color
        },
        ganadorm(state,accion) {
            state.gano=accion
        },
        estadom(state,num) {
            state.estado=num
        },
    }
})