<template>
  <div id="app">
		<div class="container">
			<nav class="navbar navbar-inverse navbar-fixed-top">
				<div class="container-fluid">
					<!-- 第一部分 -->
					<div class="navbar-header">
						<router-link to="/" class="navbar-brand">
							 <!-- <img src="./assets/logo.png" height="100%" alt=""> -->
							<span class="iconfont poetry-book"></span>
							<span>雅致诗词</span>
						</router-link>
						 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-1" >
							 <span class="sr-only">雅致诗词</span>
							 <span class="icon-bar"></span>
							 <span class="icon-bar"></span>
							 <span class="icon-bar"></span>
						 </button>
					</div>
					<!-- 第二部分 -->
					<div class="collapse navbar-collapse" id="navbar-1">
						<ul class="nav navbar-nav">
							<li class="dropdown" :class="choose==1?'active':false">
								<a class="dropdown-toggle" :class="choose==1?'active':false" data-toggle="dropdown" href="#">生活<span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li @click="changeTitle(1)"><router-link to="/clothes">衣</router-link></li>
									<li @click="changeTitle(1)"><router-link to="/food">食</router-link></li>
									<li class="divider"></li>
									<li @click="changeTitle(1)"><router-link to="/house">住</router-link></li>
									<li @click="changeTitle(1)"><router-link to="/tourism">行</router-link></li>
								</ul>
							</li>
							<li :class="choose==2?'active':false" @click="changeTitle(2)"><router-link to="/eat" >吃</router-link></li>
							<li :class="choose==3?'active':false" @click="changeTitle(3)"><router-link to="/drink">喝</router-link></li>
							<li :class="choose==4?'active':false" @click="changeTitle(4)"><router-link to="/play">玩</router-link></li>
							<li :class="choose==5?'active':false" @click="changeTitle(5)"><router-link to="/happy">乐</router-link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
	data:function(){
		return {
			choose:0,
		}
	},
	methods:{
		changeTitle:function(n){
			this.choose=n;
		},
	}
}
</script>

<style scoped="">
.container{
	display: block;
	width: 100%;
	/* background-color: moccasin;	 */
}
/* .container li{
	font-size:2.5vw;
} */
</style>
