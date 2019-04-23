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
				<span class="glyphicon glyphicon-chevron-right"></span>
				<span class="sr-only">Next</span>
			</a>
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#carousel-example-generic" :data-slide-to="n" :class="n==0?'active':''" v-for="v,n in carousel"></li>
			</ol>
		</div>
		<h2 class="page-header text-center">李白</h2>
		<div class="row home-middle">
			<div class="col-sm-1 col-md-1"></div>
			<div class="col-sm-10 col-md-10">
				<div class="row" v-for="v,n in poetry">
					<div class="col-sm-6 col-md-4" v-for="vv,nn in v">
						<div class="thumbnail home-bg-gray">
							<img :src="vv.img" :alt="vv.imgName">
							<div class="caption text-center">
								<h3>{{vv.title}} <small>{{vv.dynasty}}·{{vv.author}}</small></h3>
								<p class="lead " v-if="nnn<=3" v-for="vvv,nnn in vv.info">{{vvv}}</p>
								<button class="btn btn-primary absolute_btn_r_b" v-if="vv.info.length>4" data-toggle="modal" :data-target="'#myModal'+n+'_'+nn">后续</button>
									<!-- Modal -->
									<div class="modal fade" :id="'myModal'+n+'_'+nn">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h3 class="modal-title">{{vv.title}} <small>{{vv.dynasty}}·{{vv.author}}</small></h3>
												</div>
												<div class="modal-body">
													<p class="lead" v-for="vvv,nnn in vv.info">{{vvv}}</p>
												</div>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-1 col-md-1"></div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: function() {
			return {
				carousel: [{
						img: '../../static/img/bg_001.jpg',
						alt: '采桑子'
					},
					{
						img: '../../static/img/bg_002.jpg',
						alt: '好事近'
					},
					{
						img: '../../static/img/bg_003.jpg',
						alt: '采桑子'
					}
				],
				poetry: [
					[{
						title: '静夜思',
						author: '李白',
						dynasty: '唐',
						info: ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。'],
						img: '../../static/img/libai.jpeg',
						imgName: '李白-王者荣耀',
					}, {
						title: '侠客行',
						author: '李白',
						dynasty: '唐',
						info: ['赵客缦胡缨，', '吴钩霜雪明。', '银鞍照白马，', '飒沓如流星。', '十步杀一人，', '千里不留行。', '事了拂衣去，', '深藏身与名。', '闲过信陵饮，', '脱剑膝前横。',
							'将炙啖朱亥，', '持觞劝侯嬴。', '三杯吐然诺，', '五岳倒为轻。', '眼花耳热后，', '意气素霓生。', '救赵挥金槌，', '邯郸先震惊。', '千秋二壮士，', '烜赫大梁城。', '纵死侠骨香，',
							'不惭世上英。', '谁能书阁下，', '白首太玄经。'
						],
						img: '../../static/img/libai2.jpeg',
						imgName: '李白-王者荣耀'
					}, {
						title: '望庐山瀑布',
						author: '李白',
						dynasty: '唐',
						info: ['日照香炉生紫烟，', '遥看瀑布挂前川。', '飞流直下三千尺，', '疑是银河落九天。'],
						img: '../../static/img/libai3.jpeg',
						imgName: '李白-王者荣耀'
					}],
					[{
						title: '静夜思',
						author: '李白',
						dynasty: '唐',
						info: ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。'],
						img: '../../static/img/libai3.jpeg',
						imgName: '李白-王者荣耀'
					}, {
						title: '静夜思',
						author: '李白',
						dynasty: '唐',
						info: ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。'],
						img: '../../static/img/libai2.jpeg',
						imgName: '李白-王者荣耀'
					}, {
						title: '静夜思',
						author: '李白',
						dynasty: '唐',
						info: ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。'],
						img: '../../static/img/libai.jpeg',
						imgName: '李白-王者荣耀'
					}]
				]

			}
		},
		methods: {

		},
		beforeCreate: function() {

		},
		mounted: function() {},
	}
</script>

<style scoped="">
	.container {
		margin-top: 50px;
	}

	#carousel-example-generic {
		width: 80vw;
		height: 35vw;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		overflow: hidden;
	}

	#carousel-example-generic .carousel-inner {
		width: 100%;
		height: 100%;
	}

	#carousel-example-generic img {
		width: 100%;
		height: 100%;
	}

	.home-middle {
		margin-top: 15px;
	}

	.home-bg-gray {
		background-color: #E0E0E0;
	}

	.home-middle img {
		width: 100%;
		height: ;
	}
	.absolute_btn_r_b{
		position: absolute;
		bottom:9%;
		right: 8%;
	}
</style>
