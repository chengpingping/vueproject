<template>
	<div class="banner">
		<!--Bannner-->
		<swiper :options="swiperOption" >
	    <!-- slides -->
	    	<swiper-slide>
	    		<img src="../assets/logo.png" alt="" />
	    	</swiper-slide>
		    <swiper-slide>
		    	<img src="../assets/log.jpg" alt="" />
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../assets/topbar.png" alt="" />
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'

	import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data(){
		return{
			swiperOption:{
				pagination: {
				    el: '.swiper-pagination',
				},
				autoplay:true
			},
			
		}
	},
	components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
	.banner{
		padding: 10px;
	}
</style>