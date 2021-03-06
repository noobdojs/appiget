import 
  { getAppInfo, listApps, syncAppsInfo, installApp }
from './functions'

const { argv } = process
const [option, app] = argv.slice(2)

function displayHelp(){
  const helpMessage = `
 appiget - Custom AppImage manager

 -U, --update <app> Update an app
 -I, --install <app> Installs an app # Default to ~/Appimage
 --info <app> Displays information about an app
 -S, --sync Fetch apps release info and write to apps.json
 -h, --help <app> Display help`
  
  console.log(helpMessage)
}

if(argv.length === 2) displayHelp()

switch(option){
  case '-h':
  case '--help':
    displayHelp()
    break
  case '':
    displayHelp()
    break
  case '-I':
  case '--install':
    installApp(app)
    break
  case '--info':
    getAppInfo(app)
    break
  case '-L':
  case '--list':
    listApps()
    break
  case '-S':
  case '--sync':
    syncAppsInfo()
    break
  default:
    break
}

