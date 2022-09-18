getToken.onclick = () => {
          console.log("正在获取token，耐心等下！")

    var token = document.getElementById('uidu').value
    const request = new XMLHttpRequest()
    url = "https://cat-match.easygame2021.com/sheep/v1/game/user_info?uid=" + token + "&t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMTIxMzUsIm5iZiI6MTY2MzIwOTkzNSwiaWF0IjoxNjYzMjA4MTM1LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjoxMzIwNDM5NiwiZGVidWciOiIiLCJsYW5nIjoiIn0.VxvTLcrZjtdNFxvb_MivZlLLrrar3Ojl8Kh8gCG-u3I"
    request.open('get', url)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                if (object['err_msg'] === "") {
                    const wx_open_id = object['data']['wx_open_id'];
                    request.open('post', "https://cat-match.easygame2021.com/sheep/v1/user/login_oppo")
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                  
                    request.onreadystatechange = () => {
                        if (request.readyState === 4) {
                            if (request.status >= 200 && request.status < 300) {
                                const object = JSON.parse(request.response)
                                document.getElementById('token').value = object['data']['token']
                                     console.log("获取成功！")
                                mdui.snackbar({
                                    message: "获取成功",
                                    position: 'top',
                                })
                            } else {
                                     console.log("源服务器响应超时,请重试！游戏崩了，等会再试")
                                mdui.snackbar({
                                    message: "源服务器响应超时,请重试！游戏崩了，等会再试",
                                    position: 'top',
                                })
                            }
                        }
                    }
                    request.send('avatar=https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLCGjiatBYDfIibfNjqJIt6tSVU3O5H4kDY1icY4wRSR8fN6t8sVz0libyLLdA0koZKgEvmp0svWibDXUjg/132&nick_name=墨墨&sex=1&uid=' + wx_open_id)


                } else {
                    mdui.snackbar({
                         message: object['err_msg'],
                                                 //message: "你的uid没有填写啊",

                        position: 'top',
                    })
                }

            } else {
                mdui.snackbar({
                    message: "源服务器响应超时,请重试！",
                    position: 'top',
                })
            }

        }

    }
    request.send()
}

