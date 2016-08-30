'use strict';
var config=require('./config.js');
var backend=require('./backend.js')(config.value.backend);
var proxy=require('./proxy.js')(backend,config.value.proxy);
var webui=require('./webui.js')(config,backend,proxy,config.value.webui);


module.exports={
    config:config,
    backend:backend,
    proxy:proxy,
    pac:pac,
    webui:webui
}