<template>
	<div class="container">
		<h1 class="page-header center-block">喝喝</h1>
		<!-- <form action="" class="form-inline"> -->
		<!-- <form action="" class="form-horizontal"> -->
		<form action="" class="form-horizontal">
			<fieldset disabled=" ">
				<!-- 区域操作 -->
				<!-- <legend>ddd</legend> -->
			</fieldset>
			<div class="form-group has-error">
				<label for="" class="col-sm-2 control-label">账户：</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" placeholder="username">
					<!-- <p class="form-control-static">username</p> -->
					<p class="help-block">javaScript is my favorite！ </p>
				</div>
			</div>
			<!-- readonly默认传值   disabled不传值 -->
			<!-- 表单内文本图标 has-feedback form-control-feedback -->
			<div class="form-group has-success has-feedback">
				<label for="" class="col-sm-2 control-label">密码：</label>
				<div class="col-sm-10">
					<input type="password" class="form-control input-lg" placeholder="password" >
					<span class="form-control-feedback glyphicon glyphicon-ok"></span>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-10 col-sm-offset-2">
					<input type="reset" class="btn btn-danger" value="重置">
					<input type="submit" class="btn btn-primary" value="OK">
				</div>
			</div>
		</form>
		<form action="">
			<div class="form-group has-success" >
				<label for="username">账户:</label>
				<input type="text" id="username" class="form-control" placeholder="username">
			</div>
			<div class="form-group has-warning">
				<label for="psw">密码：</label>
				<input type="password" id="psw" class="form-control">
			</div>
			<!-- form表单中嵌入输入框组 -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-addon">$</div>
					<input type="number" class="form-control">
					<div class="input-group-addon">.00</div>
				</div>
			</div>
			<div class="form-group">
				<label for="">文件上传：</label>
				<input type="file"  class="form-control">
			</div>
			<div class="form-group">
				<label for="">留言：</label>
				<textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
			</div>
			<div class="form-group">
				<label for="">城市：</label>
				<select name="" id="" class="form-control">
					<option value="北京">北京</option>
					<option value="上海">上海</option>
					<option value="深圳">深圳</option>
					<option value="广州">广州</option> 
					<option value="大连">大连</option>
				</select>
			</div>
			<div class="form-group">
				<label for="">爱好：</label>
				<div class="checkbox">
					<label for="">
						<input type="checkbox">篮球
					</label>				
				</div>
				<div class="checkbox">
					<label for="">
						<input type="checkbox">足球
					</label>				
				</div>
				<div class="checkbox">
					<label for="">
						<input type="checkbox">阅读
					</label>				
				</div>
			</div>
			<div class="form-group">
				<label for="">最喜欢的人：</label>
				<div class="radio">
					<label>
						<input type="radio" name="yourlike">范迪塞尔
					</label>
				</div>
				<div class="radio">
					<label>
						<input type="radio" name="yourlike">杰森斯坦森
					</label>
				</div>
				<div class="radio">
					<label>
						<input type="radio" name="yourlike ">巨石强森
					</label>
				</div>
			</div>
			<div class="form-group">
				<input type="reset" class="btn btn-danger" value="重置">
				<input type="submit" class="btn btn-primary" value="OK">
			</div>
		</form>
	</div>
</template>

<script>
</script>

<style>
</style>
