gdjs.TheEndCode = {};
gdjs.TheEndCode.GDYou_9595EscapedObjects1= [];
gdjs.TheEndCode.GDYou_9595EscapedObjects2= [];
gdjs.TheEndCode.GDNewSpriteObjects1= [];
gdjs.TheEndCode.GDNewSpriteObjects2= [];
gdjs.TheEndCode.GDEnd_9595VideoObjects1= [];
gdjs.TheEndCode.GDEnd_9595VideoObjects2= [];


gdjs.TheEndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End_Video"), gdjs.TheEndCode.GDEnd_9595VideoObjects1);
{for(var i = 0, len = gdjs.TheEndCode.GDEnd_9595VideoObjects1.length ;i < len;++i) {
    gdjs.TheEndCode.GDEnd_9595VideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("End_Video"), gdjs.TheEndCode.GDEnd_9595VideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TheEndCode.GDEnd_9595VideoObjects1.length;i<l;++i) {
    if ( gdjs.TheEndCode.GDEnd_9595VideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.TheEndCode.GDEnd_9595VideoObjects1[k] = gdjs.TheEndCode.GDEnd_9595VideoObjects1[i];
        ++k;
    }
}
gdjs.TheEndCode.GDEnd_9595VideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15579244);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.TheEndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TheEndCode.GDYou_9595EscapedObjects1.length = 0;
gdjs.TheEndCode.GDYou_9595EscapedObjects2.length = 0;
gdjs.TheEndCode.GDNewSpriteObjects1.length = 0;
gdjs.TheEndCode.GDNewSpriteObjects2.length = 0;
gdjs.TheEndCode.GDEnd_9595VideoObjects1.length = 0;
gdjs.TheEndCode.GDEnd_9595VideoObjects2.length = 0;

gdjs.TheEndCode.eventsList0(runtimeScene);

return;

}

gdjs['TheEndCode'] = gdjs.TheEndCode;
