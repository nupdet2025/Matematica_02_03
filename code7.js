gdjs.FinalCode = {};
gdjs.FinalCode.localVariables = [];
gdjs.FinalCode.GDNewSpriteObjects1= [];
gdjs.FinalCode.GDNewSpriteObjects2= [];
gdjs.FinalCode.GDNewSpriteObjects3= [];
gdjs.FinalCode.GDfadeObjects1= [];
gdjs.FinalCode.GDfadeObjects2= [];
gdjs.FinalCode.GDfadeObjects3= [];
gdjs.FinalCode.GDcursorObjects1= [];
gdjs.FinalCode.GDcursorObjects2= [];
gdjs.FinalCode.GDcursorObjects3= [];
gdjs.FinalCode.GDNewSprite2Objects1= [];
gdjs.FinalCode.GDNewSprite2Objects2= [];
gdjs.FinalCode.GDNewSprite2Objects3= [];
gdjs.FinalCode.GDyesBtnObjects1= [];
gdjs.FinalCode.GDyesBtnObjects2= [];
gdjs.FinalCode.GDyesBtnObjects3= [];
gdjs.FinalCode.GDnoBtnObjects1= [];
gdjs.FinalCode.GDnoBtnObjects2= [];
gdjs.FinalCode.GDnoBtnObjects3= [];
gdjs.FinalCode.GDStars2Objects1= [];
gdjs.FinalCode.GDStars2Objects2= [];
gdjs.FinalCode.GDStars2Objects3= [];


gdjs.FinalCode.asyncCallback11828204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "victory.mp3", 1, false, 90, 1);
}gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.FinalCode.asyncCallback11828204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDyesBtnObjects1Objects = Hashtable.newFrom({"yesBtn": gdjs.FinalCode.GDyesBtnObjects1});
gdjs.FinalCode.asyncCallback11831460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", false);
}gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.35), (runtimeScene) => (gdjs.FinalCode.asyncCallback11831460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDnoBtnObjects1Objects = Hashtable.newFrom({"noBtn": gdjs.FinalCode.GDnoBtnObjects1});
gdjs.FinalCode.userFunc0xc1e300 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.location.href = "https://sesiescolas.fiemg.com.br/";
//window.top.location.href = "https://sesiescolas.fiemg.com.br/";

};
gdjs.FinalCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


gdjs.FinalCode.userFunc0xc1e300(runtimeScene);

}


};gdjs.FinalCode.asyncCallback11832892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
{ //Subevents
gdjs.FinalCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.40), (runtimeScene) => (gdjs.FinalCode.asyncCallback11832892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.FinalCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.FinalCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FinalCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeScene", 0, "linear", 0.45, true);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sucess.mp3", 1, false, 90, 1);
}
{ //Subevents
gdjs.FinalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.FinalCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.FinalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yesBtn"), gdjs.FinalCode.GDyesBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDyesBtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
{ //Subevents
gdjs.FinalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("noBtn"), gdjs.FinalCode.GDnoBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDnoBtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.FinalCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects3.length = 0;
gdjs.FinalCode.GDfadeObjects1.length = 0;
gdjs.FinalCode.GDfadeObjects2.length = 0;
gdjs.FinalCode.GDfadeObjects3.length = 0;
gdjs.FinalCode.GDcursorObjects1.length = 0;
gdjs.FinalCode.GDcursorObjects2.length = 0;
gdjs.FinalCode.GDcursorObjects3.length = 0;
gdjs.FinalCode.GDNewSprite2Objects1.length = 0;
gdjs.FinalCode.GDNewSprite2Objects2.length = 0;
gdjs.FinalCode.GDNewSprite2Objects3.length = 0;
gdjs.FinalCode.GDyesBtnObjects1.length = 0;
gdjs.FinalCode.GDyesBtnObjects2.length = 0;
gdjs.FinalCode.GDyesBtnObjects3.length = 0;
gdjs.FinalCode.GDnoBtnObjects1.length = 0;
gdjs.FinalCode.GDnoBtnObjects2.length = 0;
gdjs.FinalCode.GDnoBtnObjects3.length = 0;
gdjs.FinalCode.GDStars2Objects1.length = 0;
gdjs.FinalCode.GDStars2Objects2.length = 0;
gdjs.FinalCode.GDStars2Objects3.length = 0;

gdjs.FinalCode.eventsList4(runtimeScene);
gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects3.length = 0;
gdjs.FinalCode.GDfadeObjects1.length = 0;
gdjs.FinalCode.GDfadeObjects2.length = 0;
gdjs.FinalCode.GDfadeObjects3.length = 0;
gdjs.FinalCode.GDcursorObjects1.length = 0;
gdjs.FinalCode.GDcursorObjects2.length = 0;
gdjs.FinalCode.GDcursorObjects3.length = 0;
gdjs.FinalCode.GDNewSprite2Objects1.length = 0;
gdjs.FinalCode.GDNewSprite2Objects2.length = 0;
gdjs.FinalCode.GDNewSprite2Objects3.length = 0;
gdjs.FinalCode.GDyesBtnObjects1.length = 0;
gdjs.FinalCode.GDyesBtnObjects2.length = 0;
gdjs.FinalCode.GDyesBtnObjects3.length = 0;
gdjs.FinalCode.GDnoBtnObjects1.length = 0;
gdjs.FinalCode.GDnoBtnObjects2.length = 0;
gdjs.FinalCode.GDnoBtnObjects3.length = 0;
gdjs.FinalCode.GDStars2Objects1.length = 0;
gdjs.FinalCode.GDStars2Objects2.length = 0;
gdjs.FinalCode.GDStars2Objects3.length = 0;


return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
