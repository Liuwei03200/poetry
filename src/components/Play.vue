<template>
	<div class="container">
		<h1 class="page-header">导航</h1>
		<!-- 标签式导航 -->
		<!-- <ul class="nav nav-tabs"> -->
		<!-- 胶囊式导航 -->
		<div class="row">
			<div class="col-md-2">
				<ul class="nav nav-pills nav-stacked">
					<li :class="liActive==1?'active':false" @mouseenter="changeActive(1)">
						<a href="#">抽烟</a>
					</li>
					<li :class="liActive==2?'active':false" @mouseenter="changeActive(2)">
						<a href="#">喝酒</a>
					</li>
					<li :class="liActive==3?'active':false" @mouseenter="changeActive(3)">
						<a href="#">烫头</a>
					</li>
				</ul>
			</div>
			<div class="col-md-10">
				<div class="row navs" v-if="liActive==1">
					<div class="text-center">
						<p class="lead" >抽烟伤害身体！</p>
					</div>
				</div>
				<div class="row navs" v-if="liActive==2">
					<div class="text-center">
						<p class="lead">小酒可以怡情，大酒伤肾！</p>
					</div>
				</div>
				<div class="row navs" v-if="liActive==3">
					<div class="text-center">
						<p class="lead" >烫头可以，烫头秃头！</p>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name:'Play',
		data:function(){
			return {
				liActive:1,
				
			}
		},
		methods:{
			changeActive:function(n){
				console.log(n);
				this.liActive=n;
			},
		}
	}
</script>

<style scoped="">
	.navs{
		padding: 15px 0;
	}
</style>
