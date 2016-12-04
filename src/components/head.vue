<template>
	<div class="head">
		<h1> {{ headdata.name }} {{ headdata.age }}
		</h1>
		<ul class="lbimgs">
			<li v-for="item in lunbos" >
				<img :src="item.img" :alt="item.title" />
			</li>
		</ul>	
</div>
</template>

<script>
	 export default {
	  props:{
	  	headdata:{
	  	type:Object
	  	}
	  },
	  data(){
	  	return {
	  		lunbos:[]
	  	}
	  },
	  created(){
	  	this.$http.get('http://czdm.ittun.com/api/getlunbo')
	  	.then((response)=>{
	  		console.log(response.body);
	  		this.lunbos = response.body;
	  	});
	  }
	};
</script>

<style>
	.head h1{
		color:red;
	}
	.head .lbimgs img{
		width:500px;
	}
	.head .lbimgs li{
		list-style: none;
		display: inline;
	}
	
</style>