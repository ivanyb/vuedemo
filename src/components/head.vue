<template>

	<div class="head">
		<div class="mui-slider">
			<div class="mui-slider-group mui-slider-loop">
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#" v-if="lunbos[1]">
						<img :src="lunbos[1].img" />
						<p class="mui-slider-title">{{lunbos[1].title}}</p>
					</a>
				</div>
				<div class="mui-slider-item" v-for="item in lunbos">
					<a :href="item.url">
						<img :src="item.img" />
						<p class="mui-slider-title">{{item.title}}</p>
					</a>
				</div>
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#" v-if="lunbos[0]"><img :src="lunbos[0].img" />
						<p class="mui-slider-title">{{lunbos[0].title}}</p>
					</a>
				</div>
			</div>

			<div class="mui-slider-indicator mui-text-right">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import silder from './headvue.js'

	export default {
		props: {
			headdata: {
				type: Object
			}
		},
		data() {
			return {
				lunbos: []
			}
		},
		created() { //created钩子，当整个 这个vue组件加载完毕以后被调用
//			this.$http.get('http://127.0.0.1:9090/api/getlunbo')
			this.$http.get('http://czdm.ittun.com/api/getlunbo')
				.then((response) => {
					this.lunbos = response.body;

					//执行图片轮播,注意一定是放在DOM更新后执行,$nextTick就是在dom更新后被执行
					this.$nextTick(silder)
						//silder(); //直接这样写执行不了轮播，除非在这个方法里面加上setTimeout
				});

		}
	}
</script>

<style>
	.head h1 {
		color: red;
	}
</style>