<template>
	<div class="container">
		<h1 class="page-header">喝喝喝</h1>
		<h3 class="page-header">面包屑导航</h3>
		<p class="lead">酒类：</p>
		<ol class="breadcrumb">
			<li><a href="">喝</a></li>
			<li><a href="">酒</a></li>
			<li class="active">白酒</li>
		</ol>
		<br>
		<h3 class="page-header">分页,分页禁用</h3>
		<div>
			<ul class="pagination pagination-sm">
				<li class="disabled"><a href="">&laquo;</a></li>
				<li class="active"><a href="">1</a></li>
				<li ><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
				<li><a href="">6</a></li>
				<li><a href="">&raquo;</a></li>
			</ul>
			<ul class="pagination">
				<li class="disabled"><a href="">&laquo;</a></li>
				<li class="active"><a href="">1</a></li>
				<li ><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
				<li><a href="">6</a></li>
				<li><a href="">&raquo;</a></li>
			</ul>
			<ul class="pagination pagination-lg">
				<li class="disabled"><a href="">&laquo;</a></li>
				<li class="active"><a href="">1</a></li>
				<li ><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
				<li><a href="">6</a></li>
				<li><a href="">&raquo;</a></li>
			</ul>
		</div>
		<h3>翻页</h3>
		<ul class="pager">
			<li class="previous"><a href="#">Previous</a></li>
			<li class="next"><a href="#">Next</a></li>
		</ul>
		<h3>标签</h3>
		<div class="text-center">
			<p class="lead">这个是个标签 default <span class="label label-default">标签</span></p>
			<p class="lead">这个是个标签 success <span class="label label-success">标签</span></p>
			<p class="lead">这个是个标签 danger <span class="label label-danger">标签</span></p>
			<p class="lead">这个是个标签 info <span class="label label-info">标签</span></p>
			<p class="lead">这个是个标签 wraning  <span class="label label-warning">标签</span></p>
			<p class="lead">这个是个标签 primary<span class="label label-primary">标签</span></p>
		</div>
		<h3>徽章</h3>
		<div>
			<button class="btn btn-primary">徽章：<span class="badge">22</span></button>
		</div>
		<h3>剧幕</h3>
		<div class="jumbotron">
			<p class="lead text-center">喝酒找醉，不醉不归！</p>
			<img src="../assets/logo.png" alt="" class="img-responsive center-block">
		</div>
		<h3>警告框</h3>
		<div class="alert alert-warning alert-dismissible">alert-warning
			<button class="close" data-dismiss="alert"><span>&times;</span></button>
		</div>
		<div class="alert alert-info">
			<a href="#" class="alert-link">alert-info </a>
			alert-info alert-infoalert-infoalert-infoalert-info
		</div>
		<div class="alert alert-danger">alert-danger</div>
		<div class="alert alert-success">alert-success</div>
		<h3>进度条 progress progress-bar progress-bar-striped progress-bar-info active</h3>
		<div class="progress">
			<div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 20%;">20%</div>
		</div>
		<div class="progress">
			<div class="progress-bar progress-bar-success progress-bar-striped" style="width: 30%;">30%</div>
		</div>
		<div class="progress">
			<div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 40%;">40%</div>
		</div>
		<div class="progress">
			<div class="progress-bar progress-bar-danger progress-bar-striped" style="width: 50%;">50%</div>
		</div>
		<div class="progress">
			<div class="progress-bar progress-bar-danger progress-bar-striped active" style="width: 10%;">10%</div>
			<div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 30%;">30%</div>
			<div class="progress-bar progress-bar-success progress-bar-striped active" style="width: 20%;">20%</div>
			<div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: 40%;">40%</div>
		</div>
		<div class="progress">
			<div class="progress-bar progress-bar-striped progress-bar-info" :style="{width:progressWidth+'%'}">{{progressWidth}}%</div>
		</div>
		<h3>评论回复：</h3>
		<div class="media">
			<div class="media-left">
				<div class="media-object">
					<img src="../assets/logo.png" alt="" style="width: 100px;height: 100%;">
				</div>
			</div>
			<div class="media-body">
				<div class="media-heading">
					<h2>vue is good!</h2>
					<p>vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!</p>
					<div class="media">
						<div class="media-left">
							<div class="media-object">
								<img src="../assets/logo.png" alt="" style="width: 100px;height: 100%;">
							</div>
						</div>
						<div class="media-body">
							<div class="media-heading">
								<h2>vue is good!</h2>
								<p>vue is good!vue is good!vue is good!</p>
							</div>
						</div>
					</div>
					<div class="media">
						<div class="media-left">
							<div class="media-object">
								<img src="../assets/logo.png" alt="" style="width: 100px;height: 100%;">
							</div>
						</div>
						<div class="media-body">
							<div class="media-heading">
								<h2>vue is good!vue is good!</h2>
								<p>vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="media">
			<div class="media-left media-middle">
				<div class="media-object">
					<img src="../assets/logo.png" alt="" style="width: 100px;height: auto;">
				</div>
			</div>
			<div class="media-body">
				<div class="media-heading">
					<h2>vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!vue is good!</h2>
					<p></p>
				</div>
			</div>
			<div class="media-right">
				<img src="../assets/logo.png" alt="" style="width: 100px;height: auto;">
			</div>
		</div>
		<hr>
		<h3>列表组：</h3>
		<ul class="list-group">
			<li class="list-group-item active"><span class="badge">11</span>Linux</li>
			<li class="list-group-item ">PHP</li>
			<li class="list-group-item ">JavaScript</li>
			<li class="list-group-item ">CSS</li>
			<li class="list-group-item ">HTML</li>
		</ul>
		<div class="list-group">
			<a href="#" class="list-group-item active">Linux</a>
			<a href="#" class="list-group-item disabled">PHP disabled</a>
			<a href="#" class="list-group-item list-group-item-info">JavaScript</a>
			<a href="#" class="list-group-item list-group-item-danger">CSS</a>
			<a href="#" class="list-group-item list-group-item-warning">
				<h3 class="list-group-item-heading">HTML</h3>
				<p class="list-group-item-text">html is good !</p>
			</a>
		</div>
		<h3>面板</h3>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title">PHP</h4>
			</div>
			<div class="panel-body">
				PHP is very unskilled！
			</div>
			<table class="table">
				<thead>
					<tr>
						<th>php</th>
						<th>css</th>
						<th>html</th>
						<th>js</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>thinkPhp</th>
						<th>sass</th>
						<th>html5+</th>
						<th>vue</th>
					</tr>
				</tbody>
			</table>
			<ul class="list-group">
				<li class="list-group-item active">Linux</li>
				<li class="list-group-item">PHP</li>
				<li class="list-group-item">CSS</li>
				<li class="list-group-item">JavaScript</li>
			</ul>
			<div class="panel-footer">
				is bad
			</div>
		</div>
		
	</div>
</template>

<script>
	 export default {
		 name:'drink',
		 data:function(){
			 return {
				 progressWidth:0
			 }
		 },
		 mounted: function(){
			var that=this;
		 	var a=setInterval(function(){
				that.progressWidth=that.progressWidth+1;
				console.log(that.progressWidth);
				if(that.progressWidth>=100){
					clearInterval(a);
				}
			},50);
		 },
		 methods:{
			 
		 }
	 }
</script>

<style scoped="">
	.container{
		margin-bottom: 100px;
	}
</style>
