<template>
	<div class="singer">
		<!--歌手-->
		<!--{{artistsData}}-->
		<ul class="list">
			<router-link tag="li" :key="index" :to="{name:'singerdetails',params:{avatar:item.avatar_s500,name:item.name,tingid:item.ting_uid}}" v-for="(item,index) in artistsData">
			<!--<li class="artist" v-for="(item,index) in artistsData">-->
				<!--{{artistsData}}{{item}}{{index}}-->
				<div class="pic">
					<img :alt="item.name" :src="item.avatar_s500" />
				</div>
				<div class="info">
					<div>{{item.name}}</div>
				</div>
			<!--</li>-->
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"singer",
		data(){
			return{
				artistsArr:["2517","7994","1091","45561","2507","245815","1077","1204","1117","82366"],
				artistsData:[]
			}
		},
		mounted(){
			for(var i=0;i<this.artistsArr.length;i++){
				const artistsURL=this.HOST+"/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.artistsArr[i]
				this.$axios.get(artistsURL)
				.then(res=>{
//					console.log(res.data)
					this.artistsData.push({
						avatar_s500:res.data.avatar_s500,//头像
						name:res.data.name,//名字
						ting_uid:res.data.ting_uid//歌手ID
					})
				})
				.catch(error=>{
					console.log(error)
				})
			}
		}
	}
</script>

<style scoped>
	.singer{
		padding: 0 17px;
		background: #fff;
	}
	.list li{
		padding-left: 0;
		min-height: 70px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f2f2f2;
	}
	.pic{
		width: 54px;
		height: 54px;
		margin-right: 15px;
	}
	.info{
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		font-size: 16px;
	}
	.pic img{
		border-radius: 27px;
		overflow: hidden;
		width: 45px;
		height: 45px;
	}
</style>