<template>
	<div class="head">
		<h1> {{ headdata.name }} {{ headdata.age }}
		</h1>
</div>
</template>

<script>
	 export default {
	  props:{
	  	headdata:{
	  	type:Object
	  	}
	  }
	};
</script>

<style>
	.head h1{
		color:red;
	}
</style>