<template>
	<div class="container">
		<div id="carousel-example-generic" class="carousel slide center-block" data-ride="carousel">
			<!-- Wrapper for slides -->
			<div class="carousel-inner">
				<div class="item" :class="n==0?'active':''" v-for="v,n in carousel">
					<img :src="v.img" :alt="v.alt">
					<div class="carousel-caption">
						<h3>{{v.alt}}</h3>
						<p>lalalalal</p>
					</div>
				</div>
			</div>
			<!-- Controls -->
			<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" ></span>
				<span class="sr-only">Next</span>
			</a>
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#carousel-example-generic" :data-slide-to="n" :class="n==0?'active':''" v-for="v,n in carousel"></li>
			</ol>
		</div>
		<div>
			<p>dsadsda</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: function() {
			return {
				carousel:[
					{img:'../../static/img/bg_001.jpg',alt:'采桑子'},
					{img:'../../static/img/bg_002.jpg',alt:'好事近'},
					{img:'../../static/img/bg_003.jpg',alt:'采桑子'}
				]
					
			}
		},
		methods: {

		},
		beforeCreate: function() {

		},
		mounted: function() {

		},
	}
</script>

<style scoped="">
	.container{
		margin-top: 50px;
	}
	#carousel-example-generic{
		width:80vw;
		height:35vw;
		border-bottom-right-radius:10px;
		border-bottom-left-radius:10px;
		overflow: hidden;
	}
	#carousel-example-generic .carousel-inner{
		width: 100%;
		height: 100%;
	} 
	#carousel-example-generic img{
		width: 100%;
		height: 100%;
	}
</style>
