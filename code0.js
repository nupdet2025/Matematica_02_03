gdjs.MainSceneCode = {};
gdjs.MainSceneCode.localVariables = [];
gdjs.MainSceneCode.GDbtn_9595goObjects1= [];
gdjs.MainSceneCode.GDbtn_9595goObjects2= [];
gdjs.MainSceneCode.GDbtn_9595goObjects3= [];
gdjs.MainSceneCode.GDNewSpriteObjects1= [];
gdjs.MainSceneCode.GDNewSpriteObjects2= [];
gdjs.MainSceneCode.GDNewSpriteObjects3= [];
gdjs.MainSceneCode.GDNewSprite2Objects1= [];
gdjs.MainSceneCode.GDNewSprite2Objects2= [];
gdjs.MainSceneCode.GDNewSprite2Objects3= [];
gdjs.MainSceneCode.GDfadeObjects1= [];
gdjs.MainSceneCode.GDfadeObjects2= [];
gdjs.MainSceneCode.GDfadeObjects3= [];
gdjs.MainSceneCode.GDcursorObjects1= [];
gdjs.MainSceneCode.GDcursorObjects2= [];
gdjs.MainSceneCode.GDcursorObjects3= [];


gdjs.MainSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "My Dog Is Happy - Reed Mathis.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
}

}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbtn_95959595goObjects1Objects = Hashtable.newFrom({"btn_go": gdjs.MainSceneCode.GDbtn_9595goObjects1});
gdjs.MainSceneCode.asyncCallback13113908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene2", false);
}gdjs.MainSceneCode.localVariables.length = 0;
}
gdjs.MainSceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.35), (runtimeScene) => (gdjs.MainSceneCode.asyncCallback13113908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.MainSceneCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.MainSceneCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeScene", 0, "linear", 0.45, true);
}
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "My Dog Is Happy - Reed Mathis.mp3");
}
{ //Subevents
gdjs.MainSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.MainSceneCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.MainSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_go"), gdjs.MainSceneCode.GDbtn_9595goObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbtn_95959595goObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
{ //Subevents
gdjs.MainSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDbtn_9595goObjects1.length = 0;
gdjs.MainSceneCode.GDbtn_9595goObjects2.length = 0;
gdjs.MainSceneCode.GDbtn_9595goObjects3.length = 0;
gdjs.MainSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.MainSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.MainSceneCode.GDNewSpriteObjects3.length = 0;
gdjs.MainSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.MainSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.MainSceneCode.GDNewSprite2Objects3.length = 0;
gdjs.MainSceneCode.GDfadeObjects1.length = 0;
gdjs.MainSceneCode.GDfadeObjects2.length = 0;
gdjs.MainSceneCode.GDfadeObjects3.length = 0;
gdjs.MainSceneCode.GDcursorObjects1.length = 0;
gdjs.MainSceneCode.GDcursorObjects2.length = 0;
gdjs.MainSceneCode.GDcursorObjects3.length = 0;

gdjs.MainSceneCode.eventsList2(runtimeScene);
gdjs.MainSceneCode.GDbtn_9595goObjects1.length = 0;
gdjs.MainSceneCode.GDbtn_9595goObjects2.length = 0;
gdjs.MainSceneCode.GDbtn_9595goObjects3.length = 0;
gdjs.MainSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.MainSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.MainSceneCode.GDNewSpriteObjects3.length = 0;
gdjs.MainSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.MainSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.MainSceneCode.GDNewSprite2Objects3.length = 0;
gdjs.MainSceneCode.GDfadeObjects1.length = 0;
gdjs.MainSceneCode.GDfadeObjects2.length = 0;
gdjs.MainSceneCode.GDfadeObjects3.length = 0;
gdjs.MainSceneCode.GDcursorObjects1.length = 0;
gdjs.MainSceneCode.GDcursorObjects2.length = 0;
gdjs.MainSceneCode.GDcursorObjects3.length = 0;


return;

}

gdjs['MainSceneCode'] = gdjs.MainSceneCode;
