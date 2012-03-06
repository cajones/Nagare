#Build Client App
cd client
npm version patch
cd ..
npm uninstall nagare-client-app
npm install .\client

$enderScriptPaths = ".\public\scripts\ender.js", ".\public\scripts\ender.min.js" 
if(Test-Path $enderScriptPaths[0]) {
    ri $enderScriptPaths[0] -force
    ri $enderScriptPaths[1] -force
}

ender build .\client --output $enderScriptPaths[0]
ender info --use $enderScriptPaths[0]