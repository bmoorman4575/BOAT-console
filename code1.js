gdjs.WarningCode = {};
gdjs.WarningCode.GDWARNINGObjects1= [];
gdjs.WarningCode.GDWARNINGObjects2= [];
gdjs.WarningCode.GDtxtObjects1= [];
gdjs.WarningCode.GDtxtObjects2= [];
gdjs.WarningCode.GDBGObjects1= [];
gdjs.WarningCode.GDBGObjects2= [];
gdjs.WarningCode.GDBlackObjects1= [];
gdjs.WarningCode.GDBlackObjects2= [];
gdjs.WarningCode.GDNewTextObjects1= [];
gdjs.WarningCode.GDNewTextObjects2= [];


gdjs.WarningCode.asyncCallback17078340 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.WarningCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.3), (runtimeScene) => (gdjs.WarningCode.asyncCallback17078340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WarningCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.WarningCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.WarningCode.GDBlackObjects1);
{for(var i = 0, len = gdjs.WarningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.WarningCode.GDBlackObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.WarningCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.WarningCode.GDBGObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.WarningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.WarningCode.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("Fadein", 0, "easeInOutQuad", 1000, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.WarningCode.GDBlackObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Warning_Screen_Continue.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.WarningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.WarningCode.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "easeInOutQuad", 2000, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.WarningCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.WarningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WarningCode.GDWARNINGObjects1.length = 0;
gdjs.WarningCode.GDWARNINGObjects2.length = 0;
gdjs.WarningCode.GDtxtObjects1.length = 0;
gdjs.WarningCode.GDtxtObjects2.length = 0;
gdjs.WarningCode.GDBGObjects1.length = 0;
gdjs.WarningCode.GDBGObjects2.length = 0;
gdjs.WarningCode.GDBlackObjects1.length = 0;
gdjs.WarningCode.GDBlackObjects2.length = 0;
gdjs.WarningCode.GDNewTextObjects1.length = 0;
gdjs.WarningCode.GDNewTextObjects2.length = 0;

gdjs.WarningCode.eventsList1(runtimeScene);

return;

}

gdjs['WarningCode'] = gdjs.WarningCode;
