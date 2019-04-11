<template>
	<div class="container">
		<h1 class="page-header">玩乐</h1>
		<form action="" class="form-horizontal">
			<!-- <fieldset disabled=""> -->
			<div class="form-group has-success">
				<label for="" class="control-label col-sm-2">姓名：</label>
				<div class="col-sm-10">
					<input type="text" class="form-control input-lg" placeholder="name">
					<p class="help-block">input-lg control-label has-success</p>
				</div>				
			</div>
			<div class="form-group has-warning form-group-lg">
				<label for="" class="col-sm-2 control-label">年龄：</label>
				<div class="col-sm-10">
					<input type="number" class="form-control input-lg">
					<p class="help-block">form-group-lg</p>
				</div>
			</div>
			<div class="form-group has-success">
				<label for="" class="control-label col-sm-2">性别：</label>
				<div class="col-sm-10">
					<select name="" id="" class="form-control ">
						<option value="man">男</option>
						<option value="woman">女</option>
					</select>
				</div>
			</div>
			<div class="form-group has-error">
				<label for="" class="control-label col-sm-2">最喜欢的食物：</label>
				<div class="col-sm-10">
					<div class="checkbox">
						<label for="">
							<input type="checkbox">意大利面
						</label>
					</div>
					<div class="checkbox">
						<label for="">
							<input type="checkbox">汉堡包
						</label>			
					</div>
					<div class="checkbox">
						<label for="">
							<input type="checkbox">打卤面
						</label>
					</div>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2">
					<div class="input-group">
						<div class="input-group-addon">
							<input type="checkbox">
						</div>
						<input type="text" class="form-control">
					</div>
					<p class="help-block">嵌入式输入框组</p>
				</div>
				<div class="col-sm-offset-2">
					<div class="input-group">
						<input type="text" class="form-control">
						<div class="input-group-btn">
							<button class="btn btn-danger dropdown-toggle" data-toggle="dropdown">GO <span class="caret"></span></button>
							<ul class="dropdown-menu dropdown-menu-right">
								<li><a href="">Linux</a></li>
								<li><a href="">Unix</a></li>
								<li class="divider"></li>
								<li><a href="">Max OS</a></li>
								<li><a href="">Windows</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="form-group has-warning">
				<div class="col-sm-offset-2 input-group">
					<div class="input-group-addon">$</div>
					<input type="number" class="form-control">
					<div class="input-group-addon">.00</div>
				</div>
				<div class="col-sm-offset-2">
					<p class="help-block">输入框组input-group</p>
				</div>
			</div> 
			<div class="form-group">
				<div class="col-sm-offset-2">
					<input type="reset" class="btn btn-danger" value="重置">
					<input type="submit" class="btn btn-success" value="提交">
				</div>
			</div>
		<!-- </fieldset> -->
		</form>
	</div>
</template>

<script>
</script>

<style>
</style>
