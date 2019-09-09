<template>
	<div class="lrcContainer">
		<!--歌词-->
		<!--{{this.$route.params.songid}}-->
		<!--{{this.musicid}}-->
		<div class="lrc" ref="lrc">
			{{getAllKey}}
			<p
				class="lrc-p"
				:class="{active:parseInt(currentTime)>=keyArr[index]&&parseInt(currentTime)<keyArr[index+1]}"
				v-for="(item,key,index) in lrcData"
				:key="index">
				<!--v-show="parseInt(currentTime)>=keyArr[index]&&parseInt(currentTime)<keyArr[index+1]"-->
				<!--{{item}}{{srcolllrc(key,index)}}-->
				{{item}}{{srcolllrc(key,index)}}
				<!--{{parseInt(durationTime)}}-->
			</p>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"lrc",
		data(){
			return{
				lrc:{},
				lrcData:{},
				keyArr:[]
			}
		},
		props:{
			musicid:{
				type:[String,Number],
				default:""
			},
			durationTime:{
				type:[String,Number],
				default:0
			},
			currentTime:{
				type:[String,Number],
				default:0
			}
			
		},
		mounted(){
			const LRCUrl=this.HOST+"/v1/restserver/ting?method=baidu.ting.song.lry&songid="+this.musicid;
//			console.log(LRCUrl);
			this.$axios.get(LRCUrl)
			.then(res=>{
				this.lrc=res.data;
				/*this.lrcData=this.lrc.lrcContent;
				console.log(this.lrc);
				console.log(this.lrcData);*/
				/*
				 {
				 	[时间]：“歌词”
				 }
				 * */
				var lyrics=res.data.lrcContent.split("\n");
				var lrcObj={};
				for(var i=0;i<lyrics.length;i++){
					var lyric=decodeURIComponent(lyrics[i]);
					var timeReg=/\[\d*:\d*((\.|\:)\d*)*\]/g;
					var timeRegExpArr=lyric.match(timeReg);
					if(!timeRegExpArr)continue;
					var clause=lyric.replace(timeReg,'');
					for(var k=0,h=timeRegExpArr.length;k<h;k++){
						var t=timeRegExpArr[k];
						var min=Number(String(t.match(/\[\d*/i)).slice(1)),
							sec=Number(String(t.match(/\:\d*/i)).slice(1));
						var time=min * 60 + sec;
						lrcObj[time]=clause;
					}
				}
				this.lrcData=lrcObj;
				console.log(this.lrcData);
			})
			.catch(error=>{
				console.log(error);
			})
		},
		computed:{
			getAllKey(){
				for(var i in this.lrcData){
					this.keyArr.push(i);
					console.log(i)
				}
			}
		},
		methods:{
			srcolllrc(key,index){
				const lrcDiv=this.$refs.lrc;
				if(key<this.currentTime&&key>this.currentTime-(this.keyArr[index+1]-this.keyArr[index])){
					lrcDiv.style.top=-((index-2)*30)+"px"
				}
			}
		}
	}
</script>

<style scoped>
	.lrcContainer{
		width: 100%;
		height: 150px;
		overflow: hidden;
		position: relative;
	}
	.lrc{
		width: 100%;
		position: absolute;
		top: 0;
	}
	.active{
		color: red !important;
	}
	.lrc-p{
		height: 30px;
		line-height: 30px;
	}
	.up30{
		margin-top: -30px;
	}
</style>