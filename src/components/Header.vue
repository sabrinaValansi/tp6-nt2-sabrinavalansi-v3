<template>

  <section class="src-components-header">
    <h1>The Great <br>
			<span id="colorDisplay">RGB<br>{{getColorGanador}}</span>
			<br>
			Guessing Game</h1>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-header',
    props: ['colorMostrar'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
     
    },
    computed: {
      getColorGanador(){
        return this.$store.state.colorGanador
      }
    }
}


</script>

<style scoped lang="css">
.src-components-header {
  transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}

#colorDisplay {
	font-size: 200%;
}

</style>
