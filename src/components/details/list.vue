<template>
	<div class="art-list">
		<ul class="list">
			<router-link tag="li" :to="{name:'musicplay',params:{songid:item.song_id}}" class="song" v-for="(item,index) in listArr">
				<div class="left">
					{{item.title}}
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"list",
		data(){
			return{
				listArr:{}
			}
		},
		props:{
			tinguid:{
				type:String,
				default:"0"
			}
		},
		mounted(){
			const ArtList=this.HOST+"/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+this.tinguid+"&limits=10&use_cluster=1&order=2"
			this.$axios.get(ArtList)
			.then(res=>{
				this.listArr=res.data.songlist;
			})
			.catch(error=>{
				console.log(error);
			})
		}
	}
	
</script>

<style scoped>
	.art-list{
		padding: 0 17px;
	}
	.song{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #999;
	}
	.left{
		font-size: 18;
	}
</style>