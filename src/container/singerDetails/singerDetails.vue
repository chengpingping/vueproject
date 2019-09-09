<template>
	<div class="">
		<!--歌手详情-->
		<Title :name="this.$route.params.name" :avatar="this.$route.params.avatar" />
		<List :tinguid="this.$route.params.tingid" />
	</div>
</template>

<script>
	import Title from "../../components/details/title"
	import List from "../../components/details/list"
	export default{
		name:"",
		data(){
			return{
				
			}
		},
		components:{
			Title,
			List
		}
	}
</script>

<style scoped>
	
</style>