<template>
	<div class="home">
		<!--主界面-->
		<TodayRecommend title="热门推荐" type="1" />
		<NewMusic />
		<SwiperBanner />
		<MusicListNav />
		<keep-alive>
			<router-view />
		</keep-alive>
		<TodayRecommend title="今日榜单" type="24" />
	</div>
</template>

<script>
	
	import TodayRecommend from "../components/today_recommend"
	import NewMusic from "../components/new_Music"
	import MusicListNav from "./musicList/music_listnav"
	import SwiperBanner from "../components/swiper_banner"
	
	export default{
		name:"home",
		data(){
			return{
				
			}
		},
		components:{
			TodayRecommend,
			NewMusic,
			MusicListNav,
			SwiperBanner
		}
	}
</script>

<style scoped>
	
</style>