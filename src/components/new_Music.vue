<template>
	<div class="panel">
		<div class="hd log url">
			<h1>新碟上架</h1>
		</div>
		<div class="container">
			<div class="gallery">
				<div class="scroller">
					<router-link tag="div" :to="{name:'musicplay',params:{songid:item.song_id}}" class="card url" v-for="(item,index) in newMusic" :key="index">
						<div class="album">
							<img :src="item.pic_big" :alt="item.title" />
							<div class="">{{item.title}}</div>
							<div class="">{{item.artist_name}}</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"newMusic",
		data(){
			return{
				newMusic:[]
			}
		},
		mounted(){
			var url=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5&offset=0"
			this.$axios.get(url)
			.then(res => {
				this.newMusic=res.data.song_list;
				console.log(res.data.song_list);
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	.board{
		margin-bottom: 10px;
	}
	.panel{
		border-top: 1px solid #eee;
		position: relative;
		top:-1px;
		display: block;
		background: #fff;
	}
	.list {
		padding: 20px;
		padding-top: 0;
	}
	.panel .list li{
		height: 60px;
		border-bottom: 1px solid #eee;
		padding-left: 0;
		display: flex;
	}
	.mod-albums{
		background-color: #fff;
		padding: 10px 17px;
		margin-top:10px ;
	}
	.hd{
		display: flex;
		margin: 14px 0 18px 0;
	}
	.hd h2{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		
	}
</style>