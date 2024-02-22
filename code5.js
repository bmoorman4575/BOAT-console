gdjs.DieCode = {};
gdjs.DieCode.GDFirstObjects1= [];
gdjs.DieCode.GDFirstObjects2= [];
gdjs.DieCode.GDSecondObjects1= [];
gdjs.DieCode.GDSecondObjects2= [];
gdjs.DieCode.GDThirdObjects1= [];
gdjs.DieCode.GDThirdObjects2= [];


gdjs.DieCode.asyncCallback15489148 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.DieCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.DieCode.asyncCallback15489148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DieCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("First"), gdjs.DieCode.GDFirstObjects1);
gdjs.copyArray(runtimeScene.getObjects("Second"), gdjs.DieCode.GDSecondObjects1);
gdjs.copyArray(runtimeScene.getObjects("Third"), gdjs.DieCode.GDThirdObjects1);
{for(var i = 0, len = gdjs.DieCode.GDFirstObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDFirstObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DieCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDSecondObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DieCode.GDThirdObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDThirdObjects1[i].hide();
}
}
{ //Subevents
gdjs.DieCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15489620);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("First"), gdjs.DieCode.GDFirstObjects1);
gdjs.copyArray(runtimeScene.getObjects("Second"), gdjs.DieCode.GDSecondObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Jumpscare.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.DieCode.GDFirstObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDFirstObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DieCode.GDFirstObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDFirstObjects1[i].play();
}
}{for(var i = 0, len = gdjs.DieCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDSecondObjects1[i].setZOrder(1000000000000000000000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15491460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Second"), gdjs.DieCode.GDSecondObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Jumpscare.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.DieCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDSecondObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DieCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDSecondObjects1[i].play();
}
}{for(var i = 0, len = gdjs.DieCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDSecondObjects1[i].setZOrder(1000000000000000000000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15493268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Third"), gdjs.DieCode.GDThirdObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Jumpscare.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.DieCode.GDThirdObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDThirdObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DieCode.GDThirdObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDThirdObjects1[i].play();
}
}{for(var i = 0, len = gdjs.DieCode.GDThirdObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDThirdObjects1[i].setZOrder(1000000000000000000000);
}
}}

}


};

gdjs.DieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DieCode.GDFirstObjects1.length = 0;
gdjs.DieCode.GDFirstObjects2.length = 0;
gdjs.DieCode.GDSecondObjects1.length = 0;
gdjs.DieCode.GDSecondObjects2.length = 0;
gdjs.DieCode.GDThirdObjects1.length = 0;
gdjs.DieCode.GDThirdObjects2.length = 0;

gdjs.DieCode.eventsList1(runtimeScene);

return;

}

gdjs['DieCode'] = gdjs.DieCode;
