gdjs.Wrong_95wayCode = {};
gdjs.Wrong_95wayCode.GDWrong_9595WayObjects1= [];
gdjs.Wrong_95wayCode.GDWrong_9595WayObjects2= [];
gdjs.Wrong_95wayCode.GDblackcubeObjects1= [];
gdjs.Wrong_95wayCode.GDblackcubeObjects2= [];
gdjs.Wrong_95wayCode.GDtaptocontinueObjects1= [];
gdjs.Wrong_95wayCode.GDtaptocontinueObjects2= [];


gdjs.Wrong_95wayCode.mapOfGDgdjs_9546Wrong_959595wayCode_9546GDtaptocontinueObjects2Objects = Hashtable.newFrom({"taptocontinue": gdjs.Wrong_95wayCode.GDtaptocontinueObjects2});
gdjs.Wrong_95wayCode.asyncCallback15565292 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("blackcube"), gdjs.Wrong_95wayCode.GDblackcubeObjects2);
gdjs.copyArray(runtimeScene.getObjects("taptocontinue"), gdjs.Wrong_95wayCode.GDtaptocontinueObjects2);
{for(var i = 0, len = gdjs.Wrong_95wayCode.GDblackcubeObjects2.length ;i < len;++i) {
    gdjs.Wrong_95wayCode.GDblackcubeObjects2[i].setY(528);
}
}{gdjs.evtsExt__AlignObject__ToScreenCenter.func(runtimeScene, gdjs.Wrong_95wayCode.mapOfGDgdjs_9546Wrong_959595wayCode_9546GDtaptocontinueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.Wrong_95wayCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.4), (runtimeScene) => (gdjs.Wrong_95wayCode.asyncCallback15565292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Wrong_95wayCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Wrong_Way"), gdjs.Wrong_95wayCode.GDWrong_9595WayObjects1);
{for(var i = 0, len = gdjs.Wrong_95wayCode.GDWrong_9595WayObjects1.length ;i < len;++i) {
    gdjs.Wrong_95wayCode.GDWrong_9595WayObjects1[i].play();
}
}
{ //Subevents
gdjs.Wrong_95wayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.Wrong_95wayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Wrong_95wayCode.GDWrong_9595WayObjects1.length = 0;
gdjs.Wrong_95wayCode.GDWrong_9595WayObjects2.length = 0;
gdjs.Wrong_95wayCode.GDblackcubeObjects1.length = 0;
gdjs.Wrong_95wayCode.GDblackcubeObjects2.length = 0;
gdjs.Wrong_95wayCode.GDtaptocontinueObjects1.length = 0;
gdjs.Wrong_95wayCode.GDtaptocontinueObjects2.length = 0;

gdjs.Wrong_95wayCode.eventsList1(runtimeScene);

return;

}

gdjs['Wrong_95wayCode'] = gdjs.Wrong_95wayCode;
