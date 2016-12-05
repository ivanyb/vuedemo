<template>
	<div>
		<head1 :headdata="headdata"></head1>

		<div style="padding: 10px 10px;">
			<div id="segmentedControl" class="mui-segmented-control">
			
			<router-link class="mui-control-item "  to="/newlz">新增连载</router-link>
			<router-link class="mui-control-item "  to="/newend">新增完结</router-link>
			<router-link class="mui-control-item "  to="/pushlz">推送连载</router-link>
			<router-link class="mui-control-item "  to="/pushend">推送完结</router-link>
			</div>
		</div>
		<!-- route outlet -->
		<router-view> </router-view>
		<hr />
		<div>
			<h1>{{ msg }}</h1></div>
	</div>
</template>

<script>
	var Head1 = require('comp/head')
	module.exports = {
		name: 'apphead',
		data() {
			return {
				msg: '',
				headdata: {}
			}
		},
		created() {
			this.headdata = {
				name: 'ivan',
				age: 31
			}
		},
		components: {
			'Head1': Head1
		}
	}

	/*	
	import Head1 from 'components/head'
	export default {
	  name: 'apphead',
	  components: {
	    Head1
	  }
	}
	*/
</script>

<style>

.mui-segmented-control .mui-control-item.router-link-active
{
	color:#fff;
	background-color:#007aff;
}
</style>