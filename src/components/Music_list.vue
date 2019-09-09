<template>
	<div class="board panels">
		<!--内容-->
		<div class="panel hotsongs on">
			<ul class="list">
				<router-link tag="li" :to="{name:'musicplay',params:{songid:item.song_id}}" class="song url" v-for="(item,index) in currentData" :key="index">
					<div class="poster">
						<img :src="item.pic_big" :alt="item.title" />
					</div>
					<div class="info">
						<div class="name">
							{{item.title}}
						</div>
					</div>
					<div class="author">
						{{item.artist_name}}
					</div>
				</router-link>
			</ul>
			<div class="more-song url">
				查看该榜单&gt;
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentData:[]
			}
		},
		props:{//参数
			url:{
				type:String,
				default:""
			}
		},
		mounted(){
			var httpUrl=this.HOST + this.url;
			this.$axios.get(httpUrl)
			.then(res => {
				this.currentData=res.data.song_list;
				console.log(this.currentData);
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	.panel{
		border-top: 1px solid #eee;
		position: relative;
		top: -1px;
		display: block;
		background: #fff;
	}
	.list{
		padding: 20px;
		padding-top: 0;
	}
	.panel .list li{
		height: 60px;
		border-bottom: 1px soid #eee;
		padding-left: 0;
		display: flex;
		padding-top: 10px;
	}
	.panel .list li .poster{
		position: relative;
		width: 45px;
		margin-right: 8px;
	}
	.panel .list li .poster img{
		border: 1px solid #eee;
		width: 40px;
		height: 40px;
	}
	.info{
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.info .name{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		color: #333;
	}
	.info .author{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 12px;
		color: #999;
		margin-top: 2px;
	}
	.more-song{
		color: #999;
		margin-top: 9px;
		font-size: 12px;
		text-align: center;
		height: 32px;
		line-height: 32px;
	}
</style>