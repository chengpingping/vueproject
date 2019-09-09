<template>
	<div class="more-list">
		<!--更多:{{this.$route.params.musicType}}-->
		<VuePullRefresh :on-refresh="onrefresh">
			<div class="wrapper">
				<h3>{{this.$route.params.title}}</h3>
				<router-link tag="div" :to="{name:'musicplay',params:{songid:item.song_id}}" class="info" v-for="(item,index) in moreListData" :key="index">
					<div class="poster">
						<img :src="item.pic_big" :alt="item.title" />
					</div>
					<div class="text=wrap">
						<div class="title">{{item.title}}</div>
						<div class="author">{{item.artist_name}}</div>
					</div>
				</router-link>
			</div>
		</VuePullRefresh>
	</div>
</template>

<script>
	import VuePullRefresh from "vue-pull-refresh";
	
	export default{
		name:"more",
		data(){
			return{
				moreListData:[],
				offset:0,
				billboard_songnum:0
			}
		},
		mounted(){
			//console.log(this.$route.params.musicType);
			const moreListUrl=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musicType+"&size=12&offset=0"
			//console.log(moreListUrl);
			this.$axios.get(moreListUrl)
			.then(res => {
				this.billboard_songnum=res.data.billboard.billboard_songnum;
				this.moreListData=res.data.song_list;
//				console.log(moreListUrl);
			})
			.catch(error => {
				console.log(error)
			})
		},
		components:{
			VuePullRefresh
		},
		methods:{
			onrefresh:function(){
				var that=this;
				const moreListUrl=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musicType+"&size=12&offset="+this.offset;
				return new Promise(function(resolve,reject){
					setTimeout(()=>{
						that.$axios.get(moreListUrl)
						.then(res => {
							that.offset>=that.billboard_songnum-12?console.log("没有数据了"):that.offset+=12;//res.data.billboard.billboard_songnum;
							that.moreListData=res.data.song_list;//合并that.moreListData=that.moreListData.concat（res.data.song_list);
							console.log(res.data);
							resolve();
						})
						.catch(error => {
							console.log(error);
						})
					})
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		padding-top: 13px;
		text-align: center;
		margin-bottom: 10px;
		background: #fff;
		clear: both;
		overflow: hidden;
	}
	h3{
		font-size: 22px;
		text-align: left;
		margin-left: 17px;
		margin-bottom: 5px;
	}
	.wrapper .info{
		width: 42%;
		float: left;
		text-align: center;
		padding-left: 17px;
		display: block;
		text-align: left;
		margin-bottom: 10px;
		position: relative;
	}
</style>