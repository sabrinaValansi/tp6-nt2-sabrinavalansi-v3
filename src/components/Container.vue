<template>

  <section class="src-components-container">

    <Square v-show="!ganador" v-for="(color,index) in getColores" :key="index" :color="getColores[index]" :actualiza="refrescar(clicks)" />
    <Square v-show="ganador" v-for="(color,index) in getColores" :key="index" :color="getColores[index]" :actualiza="refrescar(clicks)" />

  </section>

</template>

<script >
import Square from './Square.vue'

  export default  {
    name: 'src-components-container',
    props: {},
    components:{
      Square
    },
    mounted () {
      this.genColor()
    },
    data () {
      return {
        //colors:this.calcularCant(),
        original:[],
        pickedColor:'jjj',
        dificultad:true,
        mensajeSquare:'',
        gano:this.$store.state.gano,
        alert:'123',
      }
    },
    methods: {
      genColor(){
      this.generarColores
      this.original=this.getColores
      this.$store.dispatch('colGanador',this.colorPicker(this.indiceAleatorio()))
      },
      colorPicker(index){
        let color='';
        color=this.getColores[index];
        return color
      },

      createNewColors(num){
        var arr = [];
          for (var i = 0; i < num; i++) {
            arr.push(this.createRandomStringColor());
          }
        return arr;
      },
      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },
      randomInt(){
        return Math.floor(Math.random() * 256);
      },

      indiceAleatorio() {
      return Math.floor(Math.random() * (this.$store.state.cantColores - 1)) + 1;
      },

      restaurar(){
        this.genColor();
      },
      refrescar(){
        if(this.clicks>0){
          this.alert='refresco';
          this.generarColores;
          this.$store.dispatch('colGanador',this.colorPicker(this.indiceAleatorio()));
        }
        /* let arr=[] 
        for (var i = 0; i < this.cant; i++) {
          arr[i]=this.getColores[i]
        }
        this.$store.dispatch('generarColores',arr)
        this.$store.dispatch('coloresGanador',arr)
        }
        return this.colors */
     },
     
    },
     
    computed: {
      getColores(){
        return this.$store.state.colores
      },
      getDificultad(){
        return this.$store.state.dificultad
      },
      getCantColores(){
        return this.$store.state.cantColores
      },
      getClicks(){
        return this.$store.state.click
      },
      generarColores(){
        this.$store.dispatch('generarColores',this.createNewColors(this.getCantColores));
        return this.$store.state.colores
      },
      clicks(){
        return this.$store.state.click
      },
      ganador(){
        return this.$store.state.gano
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-container {
  margin: 20px auto;
	max-width: 600px;
  }
</style>
