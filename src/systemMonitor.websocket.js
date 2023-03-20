const { Server } = require('socket.io');
const { getSystemInfo, getRealtimeInfo } = require('./services/system');

async function initWebsockets(httpServer){
  const io = new Server(httpServer, { path: '/system-monitor/socket.io/' });
  const systemInfo = await getSystemInfo();

  let realtimeInfo = {};
  let intervalUpdate;

  io.on('connect', socket => {
    intervalUpdate = setInterval(async () => {
      realtimeInfo = await getRealtimeInfo();
    }, 1000);

    // Send realtime information
    const intervalSend = setInterval(() => {
      socket.emit('realtimeInfo', realtimeInfo);
    }, 1000);

    // Connect socket
    socket.emit('systemInfo', systemInfo);

    // Disconnect socket
    socket.on('disconnect', async () => {
      clearInterval(intervalSend);

      const sockets = await io.fetchSockets();
      if(sockets.length <= 0){
        clearInterval(intervalUpdate);
      }
    });
  });
}

module.exports = initWebsockets;