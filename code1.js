gdjs.MainScene2Code = {};
gdjs.MainScene2Code.localVariables = [];
gdjs.MainScene2Code.GDNewSpriteObjects1= [];
gdjs.MainScene2Code.GDNewSpriteObjects2= [];
gdjs.MainScene2Code.GDfadeObjects1= [];
gdjs.MainScene2Code.GDfadeObjects2= [];
gdjs.MainScene2Code.GDcursorObjects1= [];
gdjs.MainScene2Code.GDcursorObjects2= [];
gdjs.MainScene2Code.GDNewSprite2Objects1= [];
gdjs.MainScene2Code.GDNewSprite2Objects2= [];
gdjs.MainScene2Code.GDbtn_9595backObjects1= [];
gdjs.MainScene2Code.GDbtn_9595backObjects2= [];
gdjs.MainScene2Code.GDplayObjects1= [];
gdjs.MainScene2Code.GDplayObjects2= [];


gdjs.MainScene2Code.mapOfGDgdjs_9546MainScene2Code_9546GDbtn_95959595backObjects1Objects = Hashtable.newFrom({"btn_back": gdjs.MainScene2Code.GDbtn_9595backObjects1});
gdjs.MainScene2Code.asyncCallback11885540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainScene2Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", false);
}gdjs.MainScene2Code.localVariables.length = 0;
}
gdjs.MainScene2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainScene2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.35), (runtimeScene) => (gdjs.MainScene2Code.asyncCallback11885540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainScene2Code.mapOfGDgdjs_9546MainScene2Code_9546GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.MainScene2Code.GDplayObjects1});
gdjs.MainScene2Code.asyncCallback11886964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainScene2Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}gdjs.MainScene2Code.localVariables.length = 0;
}
gdjs.MainScene2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainScene2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.35), (runtimeScene) => (gdjs.MainScene2Code.asyncCallback11886964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainScene2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.MainScene2Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.MainScene2Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.MainScene2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainScene2Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainScene2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.MainScene2Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeScene", 0, "linear", 0.45, true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.MainScene2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.MainScene2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainScene2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.MainScene2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainScene2Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_back"), gdjs.MainScene2Code.GDbtn_9595backObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainScene2Code.mapOfGDgdjs_9546MainScene2Code_9546GDbtn_95959595backObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MainScene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.MainScene2Code.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainScene2Code.mapOfGDgdjs_9546MainScene2Code_9546GDplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MainScene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainScene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainScene2Code.GDNewSpriteObjects1.length = 0;
gdjs.MainScene2Code.GDNewSpriteObjects2.length = 0;
gdjs.MainScene2Code.GDfadeObjects1.length = 0;
gdjs.MainScene2Code.GDfadeObjects2.length = 0;
gdjs.MainScene2Code.GDcursorObjects1.length = 0;
gdjs.MainScene2Code.GDcursorObjects2.length = 0;
gdjs.MainScene2Code.GDNewSprite2Objects1.length = 0;
gdjs.MainScene2Code.GDNewSprite2Objects2.length = 0;
gdjs.MainScene2Code.GDbtn_9595backObjects1.length = 0;
gdjs.MainScene2Code.GDbtn_9595backObjects2.length = 0;
gdjs.MainScene2Code.GDplayObjects1.length = 0;
gdjs.MainScene2Code.GDplayObjects2.length = 0;

gdjs.MainScene2Code.eventsList2(runtimeScene);
gdjs.MainScene2Code.GDNewSpriteObjects1.length = 0;
gdjs.MainScene2Code.GDNewSpriteObjects2.length = 0;
gdjs.MainScene2Code.GDfadeObjects1.length = 0;
gdjs.MainScene2Code.GDfadeObjects2.length = 0;
gdjs.MainScene2Code.GDcursorObjects1.length = 0;
gdjs.MainScene2Code.GDcursorObjects2.length = 0;
gdjs.MainScene2Code.GDNewSprite2Objects1.length = 0;
gdjs.MainScene2Code.GDNewSprite2Objects2.length = 0;
gdjs.MainScene2Code.GDbtn_9595backObjects1.length = 0;
gdjs.MainScene2Code.GDbtn_9595backObjects2.length = 0;
gdjs.MainScene2Code.GDplayObjects1.length = 0;
gdjs.MainScene2Code.GDplayObjects2.length = 0;


return;

}

gdjs['MainScene2Code'] = gdjs.MainScene2Code;
