const { Server } = require('socket.io');
const { getSystemInfo, getRealtimeInfo } = require('./services/system');

async function initWebsockets(httpServer){
  const io = new Server(httpServer, { path: '/system-monitor/socket.io/' });
  const systemInfo = await getSystemInfo();

  let realtimeInfo = {};
  let intervalUpdate = null;

  io.on('connect', socket => {
    // Connect socket
    socket.emit('systemInfo', systemInfo);

    if(!intervalUpdate){
      intervalUpdate = setInterval(async () => {
        realtimeInfo = await getRealtimeInfo();
        io.emit('realtimeInfo', realtimeInfo);
        console.log("Send data");
      }, 2000);
    }

    // Disconnect socket
    socket.on('disconnect', async () => {
      const sockets = await io.fetchSockets();
      if(sockets.length <= 0){
        console.log("No hay sokets");
        clearInterval(intervalUpdate);
        intervalUpdate = null;
      }
    });
  });
}

module.exports = initWebsockets;