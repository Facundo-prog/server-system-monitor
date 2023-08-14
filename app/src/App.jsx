import { useContext, useRef } from 'react'

import './styles.css';
import { WebsocketContext } from './providers/Websocket';

function App() {
  const socket = useContext(WebsocketContext);
  const info = useRef();
  const realtime = useRef();

  socket.on('systemInfo', (metrics) => {
    let html = "";
  
    for(let type in metrics){
      html += `<div class="metric"><h3>${type}</h3>`;
      for(let name in metrics[type]){
        html += `<li><b>${name}: </b>${metrics[type][name]}</li>`;
      }
      html += `</div>`
    }
  
    setTimeout(() => info.current.innerHTML = html, 100);
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
  
    realtime.current.innerHTML = html;
  });


  return (
    <section>
      <h2>System information</h2>
      <div className="metricsContainer" ref={info}>
        <p className="changeMessage">Cargando...</p>
      </div>
      
      <h2>Realtime information</h2>
      <div className="metricsContainer" ref={realtime}>
        <p className="changeMessage">Cargando...</p>
      </div>
    </section>
  )
}

export default App
