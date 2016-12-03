<template>
  <div>
	<head1 :headdata = "headdata"></head1>

	  <p>
		  <!-- use router-link component for navigation. -->
		  <!-- specify the link by passing the `to` prop. -->
		  <!-- <router-link> will be rendered as an `<a>` tag by default -->
		  <router-link to="/newlz">新增连载</router-link>
		  <router-link to="/newend">新增完结</router-link>
		  <router-link to="/pushlz">推送连载</router-link>
		  <router-link to="/pushend">推送完结</router-link>
	  </p>
	  <!-- route outlet -->
	  <router-view> </router-view>
	<hr />
	<div><h1>{{ msg }}</h1></div>
	</div>
</template>

<script>
var Head1 = require('comp/head')
module.exports = {
	name:'apphead',
	data() {
		return {
			   msg:'这是入口',
			   headdata:{}
			   }
	},
	created(){
		this.headdata = {name:'ivan',age:31}
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
	
</style>