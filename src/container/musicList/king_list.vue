<template>
	<div class="">
		<!--King榜-->
		<MusicList :url="url" />
	</div>
</template>

<script>
	import MusicList from "../../components/Music_list"
	
	export default{
		data(){
			return{
				url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=5&offset=0"
			}
		},
		components:{//组件
			MusicList
		}
	}
</script>

<style scoped>
</style>