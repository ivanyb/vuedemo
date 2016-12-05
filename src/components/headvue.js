

export default function silder(){
// 	import mui from './mui.js';
//	var muiobj = require('./mui.js');
 	
	var gallery = muiobj.mui('.mui-slider');
	gallery.slider({
	  interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
	});
}