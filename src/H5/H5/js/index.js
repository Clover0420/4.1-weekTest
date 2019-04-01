require.config({
	paths:{
		"mui":"./mui.min"
	}
})

require(["mui"],function(mui){
	mui.ajax('/api/getFirstHead',{
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			var datas = data.data;
			var list = document.querySelector(".list");
			var str = "";
			datas.forEach(item=>{
				str += `<li>${item.name}</li>`
			})
			list.innerHTML = str;
		}
	});
	var firsthead = document.querySelector('.btn')[0];
	var ido = document.querySelector('.btn')[1];
	firsthead.onclick=function(){
		mui.ajax('/api/getido',{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				var datas = data.data;
				var list = document.querySelector(".list");
				var str = "";
				datas.forEach(item=>{
					str += `<li>${item.name}</li>`
				})
				list.innerHTML = str;
			}
		});
	}
	ido.onclick=function(){
		mui.ajax('/api/getido',{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				var datas = data.data;
				var list = document.querySelector(".list");
				var str = "";
				datas.forEach(item=>{
					str += `<li>${item.name}</li>`
				})
				list.innerHTML = str;
			}
		});
	}
	
})