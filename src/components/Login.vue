<template>
	<div class="container">
		<h1 class="page-header">javascript插件</h1>
		<h3>弹窗</h3>
		<div>
			<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#mymodal"  >alert modal</button>
		</div>
		<div id="mymodal" ref="mymodal" class="modal fade ">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header">
						<span class="close" data-dismiss="modal">&times;</span>
						<h4>JavaScript ,vue</h4>
					</div>
					<div class="modal-body">
						modal-body    JavaScript is very good,l like it;JavaScript is very good,l like it;JavaScript is very good,l like it;
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" data-dismiss="modal">close</button>
						<button class="btn" :class="saveBtn" @click="alertSave()">save</button>
					</div> 
				</div>
			</div>
		</div>
		<h3>当时</h3>
		<div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'login',
		data:function(){
			return {
				saveBtn:{
					'btn-primary':true
				}
			}
		},
		methods:{
			alertSave:function(){
				alert('save success!');
				// console.log(this.$refs);
				// this.$refs.aa.innerText='aaaa';
				$('#mymodal').modal('hide');
			},
		},
		mounted:function(){
			$('#mymodal').on('hidden.bs.modal', function (e) {
			  // alert('1');
			})
		},
	}
</script>

<style scoped="">

</style>
