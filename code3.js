gdjs.LANDHOCode = {};
gdjs.LANDHOCode.GDWaterObjects1= [];
gdjs.LANDHOCode.GDWaterObjects2= [];
gdjs.LANDHOCode.GDWaterObjects3= [];
gdjs.LANDHOCode.GDWaterObjects4= [];
gdjs.LANDHOCode.GDWater2Objects1= [];
gdjs.LANDHOCode.GDWater2Objects2= [];
gdjs.LANDHOCode.GDWater2Objects3= [];
gdjs.LANDHOCode.GDWater2Objects4= [];
gdjs.LANDHOCode.GDPlayerObjects1= [];
gdjs.LANDHOCode.GDPlayerObjects2= [];
gdjs.LANDHOCode.GDPlayerObjects3= [];
gdjs.LANDHOCode.GDPlayerObjects4= [];
gdjs.LANDHOCode.GDBoatObjects1= [];
gdjs.LANDHOCode.GDBoatObjects2= [];
gdjs.LANDHOCode.GDBoatObjects3= [];
gdjs.LANDHOCode.GDBoatObjects4= [];
gdjs.LANDHOCode.GDColObjects1= [];
gdjs.LANDHOCode.GDColObjects2= [];
gdjs.LANDHOCode.GDColObjects3= [];
gdjs.LANDHOCode.GDColObjects4= [];
gdjs.LANDHOCode.GDArmsObjects1= [];
gdjs.LANDHOCode.GDArmsObjects2= [];
gdjs.LANDHOCode.GDArmsObjects3= [];
gdjs.LANDHOCode.GDArmsObjects4= [];
gdjs.LANDHOCode.GDIslandObjects1= [];
gdjs.LANDHOCode.GDIslandObjects2= [];
gdjs.LANDHOCode.GDIslandObjects3= [];
gdjs.LANDHOCode.GDIslandObjects4= [];
gdjs.LANDHOCode.GDFlagObjects1= [];
gdjs.LANDHOCode.GDFlagObjects2= [];
gdjs.LANDHOCode.GDFlagObjects3= [];
gdjs.LANDHOCode.GDFlagObjects4= [];
gdjs.LANDHOCode.GDCrosshairObjects1= [];
gdjs.LANDHOCode.GDCrosshairObjects2= [];
gdjs.LANDHOCode.GDCrosshairObjects3= [];
gdjs.LANDHOCode.GDCrosshairObjects4= [];
gdjs.LANDHOCode.GDWrong_9595wayObjects1= [];
gdjs.LANDHOCode.GDWrong_9595wayObjects2= [];
gdjs.LANDHOCode.GDWrong_9595wayObjects3= [];
gdjs.LANDHOCode.GDWrong_9595wayObjects4= [];
gdjs.LANDHOCode.GDNewSpriteObjects1= [];
gdjs.LANDHOCode.GDNewSpriteObjects2= [];
gdjs.LANDHOCode.GDNewSpriteObjects3= [];
gdjs.LANDHOCode.GDNewSpriteObjects4= [];
gdjs.LANDHOCode.GDTriggerObjects1= [];
gdjs.LANDHOCode.GDTriggerObjects2= [];
gdjs.LANDHOCode.GDTriggerObjects3= [];
gdjs.LANDHOCode.GDTriggerObjects4= [];
gdjs.LANDHOCode.GDButtonObjects1= [];
gdjs.LANDHOCode.GDButtonObjects2= [];
gdjs.LANDHOCode.GDButtonObjects3= [];
gdjs.LANDHOCode.GDButtonObjects4= [];
gdjs.LANDHOCode.GDNewSprite2Objects1= [];
gdjs.LANDHOCode.GDNewSprite2Objects2= [];
gdjs.LANDHOCode.GDNewSprite2Objects3= [];
gdjs.LANDHOCode.GDNewSprite2Objects4= [];
gdjs.LANDHOCode.GDBoat_9595TopObjects1= [];
gdjs.LANDHOCode.GDBoat_9595TopObjects2= [];
gdjs.LANDHOCode.GDBoat_9595TopObjects3= [];
gdjs.LANDHOCode.GDBoat_9595TopObjects4= [];
gdjs.LANDHOCode.GDFishingRodObjects1= [];
gdjs.LANDHOCode.GDFishingRodObjects2= [];
gdjs.LANDHOCode.GDFishingRodObjects3= [];
gdjs.LANDHOCode.GDFishingRodObjects4= [];
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1= [];
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects2= [];
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects3= [];
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects4= [];
gdjs.LANDHOCode.GDGroundObjects1= [];
gdjs.LANDHOCode.GDGroundObjects2= [];
gdjs.LANDHOCode.GDGroundObjects3= [];
gdjs.LANDHOCode.GDGroundObjects4= [];
gdjs.LANDHOCode.GDDialogueObjects1= [];
gdjs.LANDHOCode.GDDialogueObjects2= [];
gdjs.LANDHOCode.GDDialogueObjects3= [];
gdjs.LANDHOCode.GDDialogueObjects4= [];
gdjs.LANDHOCode.GDPathObjects1= [];
gdjs.LANDHOCode.GDPathObjects2= [];
gdjs.LANDHOCode.GDPathObjects3= [];
gdjs.LANDHOCode.GDPathObjects4= [];
gdjs.LANDHOCode.GDTreeObjects1= [];
gdjs.LANDHOCode.GDTreeObjects2= [];
gdjs.LANDHOCode.GDTreeObjects3= [];
gdjs.LANDHOCode.GDTreeObjects4= [];
gdjs.LANDHOCode.GDNew3DBoxObjects1= [];
gdjs.LANDHOCode.GDNew3DBoxObjects2= [];
gdjs.LANDHOCode.GDNew3DBoxObjects3= [];
gdjs.LANDHOCode.GDNew3DBoxObjects4= [];


gdjs.LANDHOCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects3[i].addPolarForce((gdjs.LANDHOCode.GDPlayerObjects3[i].getAngle()) - 90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects3[i].addPolarForce((gdjs.LANDHOCode.GDPlayerObjects3[i].getAngle()) + 90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects3[i].addPolarForce((gdjs.LANDHOCode.GDPlayerObjects3[i].getAngle()) + 180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects2[i].addPolarForce((gdjs.LANDHOCode.GDPlayerObjects2[i].getAngle()), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
}
}}

}


};gdjs.LANDHOCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.LANDHOCode.GDPlayerObjects3[i].hasNoForces()) ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDPlayerObjects3[k] = gdjs.LANDHOCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17196196);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arms"), gdjs.LANDHOCode.GDArmsObjects3);
/* Reuse gdjs.LANDHOCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.LANDHOCode.GDArmsObjects3.length ;i < len;++i) {
    gdjs.LANDHOCode.GDArmsObjects3[i].activateBehavior("EllipseMovement", true);
}
}{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects3[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.LANDHOCode.GDPlayerObjects3[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDPlayerObjects3[k] = gdjs.LANDHOCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17197292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arms"), gdjs.LANDHOCode.GDArmsObjects3);
/* Reuse gdjs.LANDHOCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.LANDHOCode.GDArmsObjects3.length ;i < len;++i) {
    gdjs.LANDHOCode.GDArmsObjects3[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects3[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boat"), gdjs.LANDHOCode.GDBoatObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.LANDHOCode.GDPlayerObjects2[i].hasNoForces()) ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDPlayerObjects2[k] = gdjs.LANDHOCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.LANDHOCode.GDPlayerObjects2[i].getAnimationFrame() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDPlayerObjects2[k] = gdjs.LANDHOCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.LANDHOCode.GDPlayerObjects2[i].getZOrder() >= (( gdjs.LANDHOCode.GDBoatObjects2.length === 0 ) ? 0 :gdjs.LANDHOCode.GDBoatObjects2[0].getZOrder()) ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDPlayerObjects2[k] = gdjs.LANDHOCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17198892);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Walk.wav", false, 20, gdjs.randomFloatInRange(0.7, 1.1));
}}

}


};gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.LANDHOCode.GDPlayerObjects2});
gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDColObjects2Objects = Hashtable.newFrom({"Col": gdjs.LANDHOCode.GDColObjects2});
gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDColObjects2Objects = Hashtable.newFrom({"Col": gdjs.LANDHOCode.GDColObjects2});
gdjs.LANDHOCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Col"), gdjs.LANDHOCode.GDColObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDPlayerObjects2Objects, gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDColObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LANDHOCode.GDColObjects2 */
/* Reuse gdjs.LANDHOCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDColObjects2Objects, false);
}
}}

}


{



}


};gdjs.LANDHOCode.eventsList3 = function(runtimeScene) {

{


gdjs.LANDHOCode.eventsList0(runtimeScene);
}


{


gdjs.LANDHOCode.eventsList1(runtimeScene);
}


{


gdjs.LANDHOCode.eventsList2(runtimeScene);
}


};gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDReturn_95959595To_95959595MenuObjects1Objects = Hashtable.newFrom({"Return_To_Menu": gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1});
gdjs.LANDHOCode.eventsList4 = function(runtimeScene) {

};gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LANDHOCode.GDPlayerObjects1});
gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.LANDHOCode.GDButtonObjects1});
gdjs.LANDHOCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), true);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


};gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LANDHOCode.GDPlayerObjects1});
gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.LANDHOCode.GDButtonObjects1});
gdjs.LANDHOCode.asyncCallback17210980 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue"), gdjs.LANDHOCode.GDDialogueObjects2);

{for(var i = 0, len = gdjs.LANDHOCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.LANDHOCode.GDDialogueObjects2[i].hide();
}
}}
gdjs.LANDHOCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.LANDHOCode.GDDialogueObjects1) asyncObjectsList.addObject("Dialogue", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.LANDHOCode.asyncCallback17210980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LANDHOCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boat_Top"), gdjs.LANDHOCode.GDBoat_9595TopObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.LANDHOCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Col"), gdjs.LANDHOCode.GDColObjects1);
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.LANDHOCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.LANDHOCode.GDWaterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water2"), gdjs.LANDHOCode.GDWater2Objects1);
{gdjs.evtsExt__WithThreeJS__Create3DScene.func(runtimeScene, "7;16;26", "Skybox2.png", "Skybox2.png", "0;0;0", 1, 1000, 1, "Top Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "OutDoor_Ambiance.ogg", 1, true, 20, 1);
}{for(var i = 0, len = gdjs.LANDHOCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDWaterObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.LANDHOCode.GDWater2Objects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDWater2Objects1[i].setZOrder(-(200));
}
}{for(var i = 0, len = gdjs.LANDHOCode.GDColObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDColObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects1[i].setZOrder(42);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ocean.wav", true, 45, 1);
}{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects1[i].hide();
}
}{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.LANDHOCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDCrosshairObjects1[i].setOpacity(100);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Gun");
}{for(var i = 0, len = gdjs.LANDHOCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDButtonObjects1[i].flipY(true);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{for(var i = 0, len = gdjs.LANDHOCode.GDBoat_9595TopObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDBoat_9595TopObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), false);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.LANDHOCode.GDWaterObjects1);
{for(var i = 0, len = gdjs.LANDHOCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDWaterObjects1[i].setXOffset(gdjs.LANDHOCode.GDWaterObjects1[i].getXOffset() + (0.1));
}
}{for(var i = 0, len = gdjs.LANDHOCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDWaterObjects1[i].setYOffset(gdjs.LANDHOCode.GDWaterObjects1[i].getYOffset() + (0.1));
}
}}

}


{


gdjs.LANDHOCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17201060);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Return_To_Menu"), gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1);
{for(var i = 0, len = gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17201892);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Return_To_Menu"), gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1);
{for(var i = 0, len = gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Return_To_Menu"), gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDReturn_95959595To_95959595MenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.LANDHOCode.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Boat"), gdjs.LANDHOCode.GDBoatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.LANDHOCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDPlayerObjects1Objects, gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LANDHOCode.GDPlayerObjects1[i].getZOrder() >= (( gdjs.LANDHOCode.GDBoatObjects1.length === 0 ) ? 0 :gdjs.LANDHOCode.GDBoatObjects1[0].getZOrder()) ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDPlayerObjects1[k] = gdjs.LANDHOCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}
{ //Subevents
gdjs.LANDHOCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.LANDHOCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDPlayerObjects1Objects, gdjs.LANDHOCode.mapOfGDgdjs_9546LANDHOCode_9546GDButtonObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17207180);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.LANDHOCode.GDButtonObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Button.ogg", false, 100, 0.7);
}{for(var i = 0, len = gdjs.LANDHOCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDButtonObjects1[i].setAnimationName("NO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17208164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.LANDHOCode.GDButtonObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Button.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.LANDHOCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDButtonObjects1[i].setAnimationName("YES");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.LANDHOCode.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.LANDHOCode.GDDialogueObjects1[i].getBehavior("Text_AutoTyping").IsCharacterJustAdded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDDialogueObjects1[k] = gdjs.LANDHOCode.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17209564);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Dialogue.wav", false, 10, 0.7);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.LANDHOCode.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LANDHOCode.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.LANDHOCode.GDDialogueObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LANDHOCode.GDDialogueObjects1[k] = gdjs.LANDHOCode.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.LANDHOCode.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17210796);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LANDHOCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__WithThreeJS__Rotate3DCameraLikeHead.func(runtimeScene, 1, "+", -(gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 10, -(gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 10, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LANDHOCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LANDHOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LANDHOCode.GDPlayerObjects1[i].setAngle(gdjs.LANDHOCode.GDPlayerObjects1[i].getAngle() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 10));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__WithThreeJS__Correct3DCameraRotationWithinLimits.func(runtimeScene, 1, "X", -(89), 89, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LANDHOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LANDHOCode.GDWaterObjects1.length = 0;
gdjs.LANDHOCode.GDWaterObjects2.length = 0;
gdjs.LANDHOCode.GDWaterObjects3.length = 0;
gdjs.LANDHOCode.GDWaterObjects4.length = 0;
gdjs.LANDHOCode.GDWater2Objects1.length = 0;
gdjs.LANDHOCode.GDWater2Objects2.length = 0;
gdjs.LANDHOCode.GDWater2Objects3.length = 0;
gdjs.LANDHOCode.GDWater2Objects4.length = 0;
gdjs.LANDHOCode.GDPlayerObjects1.length = 0;
gdjs.LANDHOCode.GDPlayerObjects2.length = 0;
gdjs.LANDHOCode.GDPlayerObjects3.length = 0;
gdjs.LANDHOCode.GDPlayerObjects4.length = 0;
gdjs.LANDHOCode.GDBoatObjects1.length = 0;
gdjs.LANDHOCode.GDBoatObjects2.length = 0;
gdjs.LANDHOCode.GDBoatObjects3.length = 0;
gdjs.LANDHOCode.GDBoatObjects4.length = 0;
gdjs.LANDHOCode.GDColObjects1.length = 0;
gdjs.LANDHOCode.GDColObjects2.length = 0;
gdjs.LANDHOCode.GDColObjects3.length = 0;
gdjs.LANDHOCode.GDColObjects4.length = 0;
gdjs.LANDHOCode.GDArmsObjects1.length = 0;
gdjs.LANDHOCode.GDArmsObjects2.length = 0;
gdjs.LANDHOCode.GDArmsObjects3.length = 0;
gdjs.LANDHOCode.GDArmsObjects4.length = 0;
gdjs.LANDHOCode.GDIslandObjects1.length = 0;
gdjs.LANDHOCode.GDIslandObjects2.length = 0;
gdjs.LANDHOCode.GDIslandObjects3.length = 0;
gdjs.LANDHOCode.GDIslandObjects4.length = 0;
gdjs.LANDHOCode.GDFlagObjects1.length = 0;
gdjs.LANDHOCode.GDFlagObjects2.length = 0;
gdjs.LANDHOCode.GDFlagObjects3.length = 0;
gdjs.LANDHOCode.GDFlagObjects4.length = 0;
gdjs.LANDHOCode.GDCrosshairObjects1.length = 0;
gdjs.LANDHOCode.GDCrosshairObjects2.length = 0;
gdjs.LANDHOCode.GDCrosshairObjects3.length = 0;
gdjs.LANDHOCode.GDCrosshairObjects4.length = 0;
gdjs.LANDHOCode.GDWrong_9595wayObjects1.length = 0;
gdjs.LANDHOCode.GDWrong_9595wayObjects2.length = 0;
gdjs.LANDHOCode.GDWrong_9595wayObjects3.length = 0;
gdjs.LANDHOCode.GDWrong_9595wayObjects4.length = 0;
gdjs.LANDHOCode.GDNewSpriteObjects1.length = 0;
gdjs.LANDHOCode.GDNewSpriteObjects2.length = 0;
gdjs.LANDHOCode.GDNewSpriteObjects3.length = 0;
gdjs.LANDHOCode.GDNewSpriteObjects4.length = 0;
gdjs.LANDHOCode.GDTriggerObjects1.length = 0;
gdjs.LANDHOCode.GDTriggerObjects2.length = 0;
gdjs.LANDHOCode.GDTriggerObjects3.length = 0;
gdjs.LANDHOCode.GDTriggerObjects4.length = 0;
gdjs.LANDHOCode.GDButtonObjects1.length = 0;
gdjs.LANDHOCode.GDButtonObjects2.length = 0;
gdjs.LANDHOCode.GDButtonObjects3.length = 0;
gdjs.LANDHOCode.GDButtonObjects4.length = 0;
gdjs.LANDHOCode.GDNewSprite2Objects1.length = 0;
gdjs.LANDHOCode.GDNewSprite2Objects2.length = 0;
gdjs.LANDHOCode.GDNewSprite2Objects3.length = 0;
gdjs.LANDHOCode.GDNewSprite2Objects4.length = 0;
gdjs.LANDHOCode.GDBoat_9595TopObjects1.length = 0;
gdjs.LANDHOCode.GDBoat_9595TopObjects2.length = 0;
gdjs.LANDHOCode.GDBoat_9595TopObjects3.length = 0;
gdjs.LANDHOCode.GDBoat_9595TopObjects4.length = 0;
gdjs.LANDHOCode.GDFishingRodObjects1.length = 0;
gdjs.LANDHOCode.GDFishingRodObjects2.length = 0;
gdjs.LANDHOCode.GDFishingRodObjects3.length = 0;
gdjs.LANDHOCode.GDFishingRodObjects4.length = 0;
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects1.length = 0;
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects2.length = 0;
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects3.length = 0;
gdjs.LANDHOCode.GDReturn_9595To_9595MenuObjects4.length = 0;
gdjs.LANDHOCode.GDGroundObjects1.length = 0;
gdjs.LANDHOCode.GDGroundObjects2.length = 0;
gdjs.LANDHOCode.GDGroundObjects3.length = 0;
gdjs.LANDHOCode.GDGroundObjects4.length = 0;
gdjs.LANDHOCode.GDDialogueObjects1.length = 0;
gdjs.LANDHOCode.GDDialogueObjects2.length = 0;
gdjs.LANDHOCode.GDDialogueObjects3.length = 0;
gdjs.LANDHOCode.GDDialogueObjects4.length = 0;
gdjs.LANDHOCode.GDPathObjects1.length = 0;
gdjs.LANDHOCode.GDPathObjects2.length = 0;
gdjs.LANDHOCode.GDPathObjects3.length = 0;
gdjs.LANDHOCode.GDPathObjects4.length = 0;
gdjs.LANDHOCode.GDTreeObjects1.length = 0;
gdjs.LANDHOCode.GDTreeObjects2.length = 0;
gdjs.LANDHOCode.GDTreeObjects3.length = 0;
gdjs.LANDHOCode.GDTreeObjects4.length = 0;
gdjs.LANDHOCode.GDNew3DBoxObjects1.length = 0;
gdjs.LANDHOCode.GDNew3DBoxObjects2.length = 0;
gdjs.LANDHOCode.GDNew3DBoxObjects3.length = 0;
gdjs.LANDHOCode.GDNew3DBoxObjects4.length = 0;

gdjs.LANDHOCode.eventsList7(runtimeScene);

return;

}

gdjs['LANDHOCode'] = gdjs.LANDHOCode;
