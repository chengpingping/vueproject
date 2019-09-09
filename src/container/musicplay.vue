<template>
	<div class="play">
		<!--播放-->
		<div class="header">
			<div class="title">
				<router-link to="/">
					<i class="iconfont icon-ziyuan left"></i>
				</router-link>
				<div class="music-info">
					<p>{{currentUrl.songinfo.title}}</p>
					<p class="author">{{currentUrl.songinfo.author}}</p>
					<!--<p>{{currenUrl.songinfo.title}}</p>
					<p class="author">{{urrenUrl.songinfo.author}}</p>-->
				</div>
				<router-link to="/search"><i class="iconfont icon-sousuo right"></i></router-link>
			</div>
		</div>
		
		<div class="song-info">
			<div class="song-info-img">
				<img :src="currentUrl.songinfo.pic_big" />
				<!--歌词-->
				<!--{{this.$route.params.songid}}-->
				<div class="song-lrc">
					<LRC :durationTime="durationTime" :currentTime="currentTime" :musicid="this.$route.params.songid" />
					<!--:currentTime="currentTime" :durationTime="durationTime"-->
				</div>
			</div>
			<div class="iconbox">
				<i class="iconfont icon-shoucang left"></i>
				<!--@click="collectHandler" :class={ca:collectAction}--> 
				<i class="box"></i>
				<i class="iconfont icon-xiazai right"></i>
			</div>
		</div>
		<div class="song">
			<audio ref="player" :src="currentUrl.bitrate.file_link" controls autoplay></audio>
			<!-- :src="currentUrl.bitrate.file_link"-->
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import "../assets/iconfont/iconfont.css"
//	import LRC from "../components/lrc"
	//异步引入资源
	const LRC=Vue.component("lrc",(resolve)=>require(["../components/lrc"],resolve))
	
	export default{
		name:"musicplay",
		data(){
			return{
				currentUrl:{
					songinfo:{
						title:"",
						author:""
					},
					bitrate:{
						file_link:""
					}
				},
				durationTime:0,
				currentTime:0
			}
		},
		mounted(){
			const playUrl=this.HOST+"/v1/restserver/ting?method=baidu.ting.song.play&songid="+this.$route.params.songid;
//			console.log(playUrl);
			this.$axios.get(playUrl)
			.then(res => {
				this.currentUrl=res.data;
				//console.log(res.data.song_list);
			})
			.catch(error => {
				console.log(error)
			})
			this.addEventListeners()
		},
		components:{
			LRC
		},
		methods:{
			beforeDestroyed(){
				removeEventListeners();
			},
			addEventListeners(){
				this.$refs.player.addEventListener('timeupdate',this._currentTime),
				this.$refs.player.addEventListener('canplay',this._durationTime)
			},
			removeEventListeners:function(){
				this.$refs.player.removeEventListener('timeupdate',this._currentTime)
				this.$refs.player.removeEventListener('canplay',this._durationTime)
			},
			_currentTime(){
//				console.log(this.$refs.player.currentTime);
				this.currentTime=this.$refs.player.currentTime
			},
			_durationTime(){
				this.durationTime=this.$refs.player.duration
			}
		}
	}
</script>

<style scoped>
	.header{
		padding: 12px;
	}
	.music-play{
		flex: 1;
		font-size: 20px;
	}
	.title{
		display: flex;
		text-align: center;
	}
	.music-info{
		flex: 1;
	}
	.left{
		font-size: 30px;
	}
	.ca{
		color: red;
	}
	.right{
		font-size: 30px;
	}
	.song-info{
		padding: 15px;
	}
	.song-info-img{
		text-align: center;
	}
	.song-info-img img{
		width: 50%;
		border-radius: 5px;
		box-shadow: 0 0 10px 0 rgb(50,50,50,.31);
	}
	.song-lrc{
		margin-top: 10px;
		min-height: 50px;
	}
	.iconbox{
		display: flex;
		margin-top: 30px;
	}
	.iconbox .box{
		flex: 1;
	}
	.song{
		width: 100%;
		text-align: center;
	}
	.song audio{
		width: 80%;
	}
	.active{
		color: #222;
	}
	.author{
		font-size: 12px;
		color: #999;
	}
</style>