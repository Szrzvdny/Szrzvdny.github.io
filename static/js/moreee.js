getUserTen.onclick = () => {
      console.log("正在请求9999条数据，有点慢耐心等下！")
	 for( i=0;i<9999;i++){
    var token = document.getElementById('token').value
    var options = document.getElementById('option').value
    var request = new XMLHttpRequest()
   	//let url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"
   
   if(options=='default'){
   var url =  " https://cat-match.easygame2021.com/sheep/v1/game/game_over?t="+token+"&rank_score=1&rank_state=1&rank_time=&rank_role=1&skin=1"

   }
   else if(options=='topic'){
   	   var url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time=&rank_role=1&skin=1"
 
   }
    
  
	 request.open('get', url)

// request.open('get', url)
    //request.send(`time=${time}&token=${token}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            result = request.responseText
            if (result === '{"err_code":0,"err_msg":"","data":0}') {
//              mdui.snackbar({
////                  message: "记录99条添加成功",
//              })
            } else {
                // mdui.snackbar({
                	
                //     message: "没有权限，token错误"
                // })
            }

        }

    }

    	 //console.log("第"+i+"条记录添加成功")
    	   request.send()
    }
	 
	   request.open('get', url)
    //request.send(`time=${time}&token=${token}`)
  request.onreadystatechange = () => {
        if (request.readyState === 4) {
            result = request.responseText
            if (result === '{"err_code":0,"err_msg":"","data":0}') {
                console.log("9999条记录添加成功，请在小程序我的名片查看记录")
                mdui.snackbar({
                    message: "99条记录添加成功，请在小程序我的名片查看记录",
                     position: 'top',
                    
                })
            } else {
                console.log("没有权限，token错误")

                mdui.snackbar({
                	
                    message: "没有权限，token错误"
                })
            }

        }

    }
    request.send()
            
}
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();