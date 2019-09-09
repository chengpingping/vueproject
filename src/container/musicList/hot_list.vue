<template>
	<div class="">
		<!--热歌榜-->
		<!--传参-->
		<MusicList :url="url" />
	</div>
</template>

<script>
	import MusicList from "../../components/Music_list"
	
	export default{
		data(){
			return{
				url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=10&offset=0"
			}
		},
		components:{//组件
			MusicList
		}
	}
</script>

<style scoped>
</style>