const socket = io('/', { 
  path: '/system-monitor/socket.io/'
});
const info = document.getElementById('info');
const realtime = document.getElementById('realtime');

socket.on('systemInfo', (metrics) => {
  let html = "";

  for(let type in metrics){
    html += `<div class="metric"><h3>${type}</h3>`;
    for(let name in metrics[type]){
      html += `<li><b>${name}: </b>${metrics[type][name]}</li>`;
    }
    html += `</div>`
  }

  setTimeout(() => info.innerHTML = html, 100);
});

socket.on('realtimeInfo', (metrics) => {
  let html = "";

  for(let type in metrics){
    html += `<div class="metric"><h3>${type}</h3>`;
    for(let name in metrics[type]){
      html += `<li><b>${name}: </b>${metrics[type][name]}</li>`;
    }
    html += `</div>`
  }

  realtime.innerHTML = html;
});