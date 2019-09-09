# webvue

> 实战练习

# 1.初始页面
在container/index.vue文件中
加入5个路由：主页面、歌手、榜单、我的、搜索
<router-link to="">
# 2.创建5个页面
在container文件夹下添加：
主页面home.vue
歌手singer.vue
榜单listcate.vue
我的mine.vue
搜索search.vue
# 3.配置路由
在文件router/index.js中配置
## 1.导入文件
	import * from "../*/*"
## 2.使用
	Vue.use(Router)
## 3.配置
export default new Router({
	routes: [
    {
      path: '/',
      name: 'index',
      redirect:"/home",//重定向
      component: Index,
      children:[
      {
	      path: 'home',
	      name: 'home',
	      component: Home
	  },...
	  ]
	}
  ]
  
# 4.创建组件
## 在home页面中有组件:今日推荐
在文件夹components下创建文件today_recommend.vue

## 将组件引入home页面
导入组件的文件：
	import TodayRecommend from "../components/today_recommend"
使用：
	components:{
			TodayRecommend
		}
引入：
	<TodayRecommend />
## 在today_recommend.vue中引入数据
### 重定向问题：
1.配置config/index.js(例如：百度音乐)
	proxyTable: {
    	"/baidu_music_api":{
    		target:"http://tingapi.ting.baidu.com",
    		changeOrigin:true,
    		pathRewrite:{
    			'^/baidu_music_api':''
    		}
    	}
    },
2.使用axios解决重定向问题
	安装：cnpm install --save axios
### 配置：
1.在main.js中：
	import Axios from "axios"
	Vue.prototype.$axios = Axios;
### 请求数据：
1.在today_recommend.vue中：(注意参数问题)
	mounted(){
			var url=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0"
			this.$axios.get(url)
			.then(res => {
				console.log(res.data)
			})
			.catch(error => {
				this.todayRecommend=res.data.song_list;
				console.log(error)
			})
		}
### 在页面加载数据：
	<div class="card url" v-for="(item,index) in todayRecommend" :key="index">
		<div class="album">
			<img :src="item.pic_big" :alt="item.title" />
			<div class="">{{item.title}}</div>
		</div>
	</div>
## 在home页面中有组件:新碟上架

## 在home页面中有组件:轮播图
使用swiper设置轮播图：
局部引用:https://github.com/surmon-china/vue-awesome-swiper
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data(){
			return{
				swiperOption:{
					pagination: {
					    el: '.swiper-pagination',
					},
					autoplay:true
				},
				
			}
		},
		components: {
	    swiper,
	    swiperSlide
	  }
	}
## 在home页面中有组件:音乐上架
新建一个文件夹：musicList
music_listnav.vue
在其中嵌套三级路由实现以下三个页面：
hot_list.vue
king_list.vue
new_list.vue
传参：
	<MusicList :url="url" />
三个页面样式一样所以在components中建一个组件：
Music_list.vue
接受参数：
	props:{//参数
		url:{
			type:String,
			default:""
		}
	},
在home下配置路由：
	
避免数据重复请求：
	<keep-alive>
		<router-view />
	</keep-alive>



在js中引本地入图片要用require("本地地址")，如果是网络地址就不需要

