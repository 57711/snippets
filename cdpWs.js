const initlize = [
{"id":1,"method":"Network.enable","params":{"maxTotalBufferSize":10000000,"maxResourceBufferSize":5000000}},
{"id":3,"method":"Page.getResourceTree"},
{"id":4,"method":"Profiler.enable"},
{"id":5,"method":"Runtime.enable"},
{"id":6,"method":"Debugger.enable"},
{"id":7,"method":"Debugger.setPauseOnExceptions","params":{"state":"none"}},
{"id":8,"method":"Debugger.setAsyncCallStackDepth","params":{"maxDepth":32}},
{"id":9,"method":"DOM.enable"}  ,
{"id":10,"method":"CSS.enable"} ,
{"id":11,"method":"Overlay.enable"},
{"id":12,"method":"Overlay.setShowViewportSizeOnResize","params":{"show":true}},
{"id":13,"method":"Log.enable"},
{"id":14,"method":"Log.startViolationsReport","params":{"config":[{"name":"longTask","threshold":200},{"name":"longLayout","threshold":30},{"name":"blockedEvent","threshold":100},{"name":"blockedParser","threshold":-1},{"name":"handler","threshold":150},{"name":"recurringHandler","threshold":50},{"name":"discouragedAPIUse","threshold":-1}]}},
{"id":15,"method":"ServiceWorker.enable"},
{"id":16,"method":"Inspector.enable"},
{"id":17,"method":"Target.setAutoAttach","params":{"autoAttach":true,"waitForDebuggerOnStart":true}},
{"id":18,"method":"Target.setDiscoverTargets","params":{"discover":true}},
{"id":19,"method":"Target.setRemoteLocations","params":{"locations":[{"host":"localhost","port":9229}]}},
];
const commands = [
    {"id":21,"method":"Runtime.compileScript","params":{"expression":"alert('hello word')","sourceURL":"","persistScript":false}},
    {"id":22,"method":"Runtime.evaluate","params":{"expression":"alert('hello word')","objectGroup":"console","includeCommandLineAPI":true,"silent":false,"returnByValue":false,"generatePreview":true,"userGesture":true,"awaitPromise":false}},
];
const myws = new WebSocket("ws://localhost:9222/devtools/page/123B26F4B952E2D37C2E9FA4BE95700B");
myws.onmessage = (e) => {
    console.log('%conmessage', 'background-color: green', JSON.parse(e.data));
};
myws.onopen = () => {
    console.log('%cwe connected', 'background-color: green');
    runScript(initlize)
    runScript(commands)
};
const runScript = (e) => {
    for (let i in e) {
        myws.send(JSON.stringify(e[i]))
    }
}

// myws.send(`{"id":22,"method":"Runtime.compileScript","params":{"expression":"alert(1)","sourceURL":"","persistScript":false,"executionContextId":1}}`);
// myws.send(`{"id":23,"method":"Runtime.evaluate","params":{"expression":"alert(1)","objectGroup":"console","includeCommandLineAPI":true,"silent":false,"contextId":1,"returnByValue":false,"generatePreview":true,"userGesture":true,"awaitPromise":false}}`);
