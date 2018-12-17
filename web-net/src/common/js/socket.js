
export  default  class mSocket {

  constructor(cfg) {
    this.cfg = cfg
    this.wsUrl = null;
    this.ws = null;
    this.tt = null;
    this.lockReconnect = false;//避免重复连接
    this.heartCheck = this.createHeartCheck()
    this.createWebSocket()

  }

  createWebSocket() {
    let url = this.cfg.url
    this.wsUrl = url
    try {
      this.ws = new WebSocket(url);
      this.init();
    } catch(e) {
      //console.log('catch');
      this.reconnect(url);
    }
  }

  createHeartCheck(){
    //心跳检测
    let me = this
    return  {
      timeout: 4000,
      timeoutObj: null,
      serverTimeoutObj: null,
      start: function(){
        let self = this;
        this.timeoutObj && clearTimeout(this.timeoutObj);
        this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
        this.timeoutObj = setTimeout(function(){
          //这里发送一个心跳，后端收到后，返回一个心跳消息，
          //console.log('55555');
          me.ws.send("");
          self.serverTimeoutObj = setTimeout(function() {
            //console.log('关闭超时ws')
            me.ws.close();
            // createWebSocket();
          }, self.timeout);

        }, this.timeout)
      }
    }
  }

  send(msg){
    this.ws.send(msg);
  }

  init() {
    let me = this
    //debugger
    this.ws.onopen = function (e) {
      //console.log('ws连接中..');
      //心跳检测重置
      me.heartCheck.start();
      me.cfg.onopen && me.cfg.onopen.call(me, e)
      this.send('')
    };
    this.ws.onmessage = function (e) {
      //拿到任何消息都说明当前连接是正常的
      //console.log('接收到消息');
      me.cfg.onmessage && me.cfg.onmessage.call(me, e)
      me.heartCheck.start();
    }
    this.ws.onclose = function (e) {
      //debugger
      //console.log('链接关闭');
      me.reconnect(me.wsUrl);
      me.cfg.onclose && me.cfg.onclose.call(me, e)
    };
    this.ws.onerror = function(e) {
      //console.log('发生异常了');
      me.cfg.onerror && me.cfg.onerror.call(me, e)
      //reconnect(wsUrl);
    };

  }



  reconnect(url) {
    if(this.lockReconnect) {
      return;
    };
    this.lockReconnect = true;
    //没连接上会一直重连，设置延迟避免请求过多
    this.tt && clearTimeout(this.tt);
    this.tt = setTimeout(()=> {
      this.createWebSocket(url);
      this.lockReconnect = false;
    }, 4000);
  }


}
