var splitter = "-";
var pool = "smallpool";
var node = "node"+(Math.floor(Math.random() * 3) + 1);

//Fetch the config for priority1 and priority2 and set it to priority1, priority2 prefix variables
setVariables("priority1", pool+splitter+"priority1"+splitter+node+splitter); //smallpool-priority1-node1-
setVariables("priority2", pool+splitter+"priority2"+splitter+node+splitter); //smallpool-priority2-node1-

function setVariables(to, prefix){
  context.setVariable(to+"Protocol", context.getVariable('propertyset.target-lookup.'+prefix+'protocol'));
  context.setVariable(to+"Host", context.getVariable('propertyset.target-lookup.'+prefix+'host'));
  context.setVariable(to+"Path", context.getVariable('propertyset.target-lookup.'+prefix+'path'));
  context.setVariable(to+"APIKey", context.getVariable('propertyset.target-lookup.'+prefix+'apikey'));  
}

var logObj =  {
  "priority1": {
      "protocol": context.getVariable("priority1Protocol"),
      "host": context.getVariable("priority1Host"),
      "path": context.getVariable("priority1Path"),
      "apikey": context.getVariable("priority1APIKey")
  },
  "priority2": {
      "protocol": context.getVariable("priority2Protocol"),
      "host": context.getVariable("priority2Host"),
      "path": context.getVariable("priority2Path"),
      "apikey": context.getVariable("priority2APIKey")
  }
}

print("logObj: "+ JSON.stringify(logObj));