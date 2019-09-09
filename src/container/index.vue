<template>
	<div class="index">
		<ul class="">
			<router-link tag="li" to="/home">
				<h1>
					<img src="../assets/log.jpg" />
					网易云
				</h1>
			</router-link>
			<router-link tag="li" to="/singer">
				歌手				
			</router-link>
			<router-link tag="li" to="/listcate">
				榜单					
			</router-link>
			<router-link tag="li" to="/mine">
				我的
			</router-link>
			<router-link tag="li" to="/search">
				搜索
			</router-link>
		</ul>
		<router-view />
	</div>
</template>

<script>
</script>

<style scoped>
	h1{
		font-size: 100%;
		font-family: Arial, Helvetica, sans-serif;
	}
	.index img{
	    width: 26px;
	    height: 26px;
	}
	.index ul{
		display: flex;
		height: 50px;
		line-height: 50px;
		background: #333;
	}
	.index ul li{
		flex: 1;
		text-align:center ;
		color: #ccc;
	}
	.index ul li a{
		font-size:16px;
		color: #999;
	}
</style>