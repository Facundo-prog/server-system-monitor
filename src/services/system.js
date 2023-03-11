const si = require('systeminformation');

async function getSystemInfo(){
  const system = await si.system();
  const os = await si.osInfo();
  const cpu = await si.cpu();
  const mem = await si.mem();

  return {
    system,
    OS: {
      platform: os.platform,
      distro: os.distro,
      version: os.release,
      architecture: os.arch
    },
    cpu: {
      speedMin: `${cpu.speedMin} Ghz`,
      speedMax: `${cpu.speedMax} Ghz`,
      cores: String(cpu.physicalCores),
      threads: String(cpu.cores)
    },
    memory: {
      total: `${Math.round(mem.total / 1048576)} MB`,
      free: `${Math.round(mem.free / 1048576)} MB`,
      usage: `${Math.round(mem.used / 1048576)} MB`
    }
  }
}

async function getRealTimeInfo(){
  const cpuLoad = await si.currentLoad();
  const cpuSpeed = await si.cpuCurrentSpeed();
  const temp = await si.cpuTemperature();
  const mem = await si.mem();

  return {
    speedCpuAvg: {
      value: `${cpuSpeed.avg} Ghz`
    },
    currentCpuLoad: {
      value: `${(cpuLoad.currentLoad).toFixed(2)} %`
    },
    temperature: {
      board: `${(temp.main ?? 0).toFixed(1)} °C`,
      chipset: `${(temp.chipset ?? 0).toFixed(1)} °C`,
      max: `${(temp.max ?? 0).toFixed(1)} °C`
    },
    memoryUsage: {
      value: `${((Math.round(mem.used) * 100) / Math.round(mem.total)).toFixed(2)} %`
    }
  }
}

module.exports = { 
  getSystemInfo,
  getRealTimeInfo
}