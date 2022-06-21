<template>

  <section class="src-components-navigator">

		<button id="reset" @click="resetea()"> New colors</button>
		<span id="message">{{this.$store.state.mensaje}} </span>

		<button id="easy" :class="{'selected':!this.$store.state.dificultad}" @click="easyButton()">easy</button>
		<button id="hard" :class="{'selected':this.$store.state.dificultad}" @click="hardButton()">hard</button> 

  </section>

</template>

<script >

  export default  {
    name: 'src-components-navigator',
    props: ['reseteo','msj'],
    mounted () {

    },
    data () {
      return {
      //isHard:this.$store.state.dificultad,
      colorCount: this.$store.state.cantColores,
      colors:[],
      reset:0,
      mensaje:'',
      contador:0,
      gano:'',
      isHard:this.$store.state.dificultad
      } 
    },
    methods: {
      easyButton(){
        this.mensaje='entro'
        if (this.$store.state.dificultad) {
          this.$store.dispatch('modifDif',this.$store.state.dificultad);
          this.$store.dispatch('cantColores',3);
          this.mensaje=this.contador++
          this.$store.dispatch('clicks',this.contador++);
          
      }
    },
       hardButton(){
          if (!this.$store.state.dificultad) {
            this.$store.dispatch('modifDif',this.$store.state.dificultad);
            this.$store.dispatch('cantColores',6);
            this.$store.dispatch('clicks',this.contador++);
            this.$store.dispatch('clicks',this.contador++);
       }
      },
      resetea(){
          location.reload();
      },
      mens(){
        return this.msj
      }
    },
    computed: {
      getDificultad(){
        return this.$store.state.dificultad
      },
      getMensaje(){
        return this.$store.state.mensaje
      }
    }
}
 
</script>

<style scoped lang="css">
  .src-components-navigator {
  background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;
  }


h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
.selected {
	background-color: steelblue;
	color: white;
}
#message {
	color: #0f0f0f;
	display: inline-block;
	width: 20%;
}

</style>
