<template>

      <section class="src-components-square" :style="this.fondo(this.$store.state.colorGanador)" @click="analizar()">
        
      </section>

</template>

<script>

  export default  {
    name: 'src-components-square',
    props: ['color','actualiza'],
    mounted () {
     // this.colorAbuscar=this.$store.state.colorGanador
    },
    data () {
      return {
        estado:0
      }
    },
    methods: {
      analizar(){
        if(this.color===this.$store.state.colorGanador){
          this.$store.dispatch('ganador',true)
          this.$store.dispatch('coloresGanador',this.$store.state.colorGanador)
          this.estado=2
          this.$store.dispatch('mensaje','You Picked Right!')
          this.kkk="gano"
          this.$store.dispatch('coloresGanador',this.$store.state.colorGanador)
        }else{
          this.$store.dispatch('ganador',false)
          this.estado=1
          this.$store.dispatch('mensaje','Try Again!')
          this.kkk="perdio"
          this.fondo(this.$store.state.colorGanador)
        }
        
      },
      fondo(colorP){
        let color=''
        if(this.estado==0){
          color=this.color
        }
        else if(this.estado==1){
          color='rgb(35, 35, 35)'
        }
        else{
          color=colorP
        }
        return {
          backgroundColor:color
        }
      }
    
     
    },
    computed: {
    
       
    }
}


</script>

<style scoped lang="css">
  .src-components-square {
  width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
  }
</style>
