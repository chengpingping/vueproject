import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/container/index'
import Home from '@/container/home'
import Singer from '@/container/singer'
import Listcate from '@/container/listcate'
import Mine from '@/container/mine'
import Search from '@/container/search'
import Hot from '@/container/musicList/hot_list'
import New from '@/container/musicList/new_list'
import King from '@/container/musicList/king_list'
import MoreList from '@/container/morelist'
import MusicPlay from '@/container/musicplay'
import SingerDetails from '@/container/singerDetails/singerDetails'

Vue.use(Router)

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
		      redirect:"/home/hot",//重定向
		      component: Home,
		      children:[
		      	{
		      		path: 'hot',
				      name: 'hot',
				      component: Hot
		      	},
		      	{
		      		path: 'new',
				      name: 'new',
				      component: New
		      	},{
		      		path: 'king',
				      name: 'king',
				      component: King
		      	}
		      ]
		    },
		    {
		      path: 'singer',
		      name: 'singer',
		      component: Singer
		    },
		    {
		      path: 'listcate',
		      name: 'listcate',
		      component: Listcate
		    },
		    {
		      path: 'mine',
		      name: 'mine',
		      component: Mine
		    },
		    {
		      path: 'search',
		      name: 'search',
		      component: Search
		    },
		    {
		      path: 'more',
		      name: 'more',
		      component: MoreList
		    },
		    {
		    	path:"singerdetails",
		    	name:"singerdetails",
		    	component:SingerDetails
		    }
      ]
    },
    {
      path: '/musicplay',
      name: 'musicplay',
      component: MusicPlay
    }
  ]
})
