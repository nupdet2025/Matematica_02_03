gdjs.Scene2Code = {};
gdjs.Scene2Code.localVariables = [];
gdjs.Scene2Code.GDfadeObjects1= [];
gdjs.Scene2Code.GDfadeObjects2= [];
gdjs.Scene2Code.GDfadeObjects3= [];
gdjs.Scene2Code.GDcursorObjects1= [];
gdjs.Scene2Code.GDcursorObjects2= [];
gdjs.Scene2Code.GDcursorObjects3= [];
gdjs.Scene2Code.GDNewSpriteObjects1= [];
gdjs.Scene2Code.GDNewSpriteObjects2= [];
gdjs.Scene2Code.GDNewSpriteObjects3= [];
gdjs.Scene2Code.GDblocksObjects1= [];
gdjs.Scene2Code.GDblocksObjects2= [];
gdjs.Scene2Code.GDblocksObjects3= [];
gdjs.Scene2Code.GD_95952_9595characterObjects1= [];
gdjs.Scene2Code.GD_95952_9595characterObjects2= [];
gdjs.Scene2Code.GD_95952_9595characterObjects3= [];
gdjs.Scene2Code.GD_95952_95951Objects1= [];
gdjs.Scene2Code.GD_95952_95951Objects2= [];
gdjs.Scene2Code.GD_95952_95951Objects3= [];
gdjs.Scene2Code.GD_95952_95952Objects1= [];
gdjs.Scene2Code.GD_95952_95952Objects2= [];
gdjs.Scene2Code.GD_95952_95952Objects3= [];
gdjs.Scene2Code.GD_95952_95953Objects1= [];
gdjs.Scene2Code.GD_95952_95953Objects2= [];
gdjs.Scene2Code.GD_95952_95953Objects3= [];
gdjs.Scene2Code.GD_95952_9595objectObjects1= [];
gdjs.Scene2Code.GD_95952_9595objectObjects2= [];
gdjs.Scene2Code.GD_95952_9595objectObjects3= [];
gdjs.Scene2Code.GDcheck_9595areaObjects1= [];
gdjs.Scene2Code.GDcheck_9595areaObjects2= [];
gdjs.Scene2Code.GDcheck_9595areaObjects3= [];
gdjs.Scene2Code.GDStarsObjects1= [];
gdjs.Scene2Code.GDStarsObjects2= [];
gdjs.Scene2Code.GDStarsObjects3= [];
gdjs.Scene2Code.GDtext2Objects1= [];
gdjs.Scene2Code.GDtext2Objects2= [];
gdjs.Scene2Code.GDtext2Objects3= [];


gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GD_959595952_959595953Objects2Objects = Hashtable.newFrom({"_2_3": gdjs.Scene2Code.GD_95952_95953Objects2});
gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.Scene2Code.GDcheck_9595areaObjects2});
gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GD_959595952_959595952Objects2Objects = Hashtable.newFrom({"_2_2": gdjs.Scene2Code.GD_95952_95952Objects2});
gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.Scene2Code.GDcheck_9595areaObjects2});
gdjs.Scene2Code.asyncCallback9661788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_2_2"), gdjs.Scene2Code.GD_95952_95952Objects3);

{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects3.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects3[i].getBehavior("Tween").addObjectPositionTween2("setting", 1265, 607, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects3.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects3[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects3.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects3[i].getBehavior("Effect").enableEffect("error", false);
}
}gdjs.Scene2Code.localVariables.length = 0;
}
gdjs.Scene2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene2Code.localVariables);
for (const obj of gdjs.Scene2Code.GD_95952_95952Objects2) asyncObjectsList.addObject("_2_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene2Code.asyncCallback9661788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GD_959595952_959595951Objects2Objects = Hashtable.newFrom({"_2_1": gdjs.Scene2Code.GD_95952_95951Objects2});
gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.Scene2Code.GDcheck_9595areaObjects2});
gdjs.Scene2Code.asyncCallback9666052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_2_1"), gdjs.Scene2Code.GD_95952_95951Objects3);

{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects3.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects3[i].getBehavior("Tween").addObjectPositionTween2("setting", 958, 609, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects3.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects3[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects3.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects3[i].getBehavior("Effect").enableEffect("error", false);
}
}gdjs.Scene2Code.localVariables.length = 0;
}
gdjs.Scene2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene2Code.localVariables);
for (const obj of gdjs.Scene2Code.GD_95952_95951Objects2) asyncObjectsList.addObject("_2_1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene2Code.asyncCallback9666052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene2Code.asyncCallback9668828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", false);
}gdjs.Scene2Code.localVariables.length = 0;
}
gdjs.Scene2Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Scene2Code.asyncCallback9668828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene2Code.asyncCallback9668532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene2Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Scene2Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scene2Code.localVariables.length = 0;
}
gdjs.Scene2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.20), (runtimeScene) => (gdjs.Scene2Code.asyncCallback9668532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("_2_3"), gdjs.Scene2Code.GD_95952_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.Scene2Code.GDcheck_9595areaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GD_959595952_959595953Objects2Objects, gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_2_1"), gdjs.Scene2Code.GD_95952_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("_2_2"), gdjs.Scene2Code.GD_95952_95952Objects2);
/* Reuse gdjs.Scene2Code.GD_95952_95953Objects2 */
{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95953Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95953Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 1422, 239, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 1265, 607, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 958, 609, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95953Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95953Objects2[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("one");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2_2"), gdjs.Scene2Code.GD_95952_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.Scene2Code.GDcheck_9595areaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GD_959595952_959595952Objects2Objects, gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Scene2Code.GD_95952_95952Objects2 */
{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects2[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 70, 1);
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects2[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 1265, 607, "linear", 0.20, false);
}
}
{ //Subevents
gdjs.Scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2_1"), gdjs.Scene2Code.GD_95952_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.Scene2Code.GDcheck_9595areaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GD_959595952_959595951Objects2Objects, gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Scene2Code.GD_95952_95951Objects2 */
{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects2[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 70, 1);
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects2[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 958, 609, "linear", 0.20, false);
}
}
{ //Subevents
gdjs.Scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "one");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Scene2Code.GDStarsObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDStarsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDStarsObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.Scene2Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Scene2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Scene2Code.GDStarsObjects1);
gdjs.copyArray(runtimeScene.getObjects("_2_1"), gdjs.Scene2Code.GD_95952_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2_2"), gdjs.Scene2Code.GD_95952_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Scene2Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.Scene2Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeScene", 0, "linear", 0.45, true);
}
}{for(var i = 0, len = gdjs.Scene2Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDStarsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene2Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDStarsObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95951Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95951Objects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.Scene2Code.GD_95952_95952Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GD_95952_95952Objects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("zero");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Scene2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Scene2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDcursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "zero");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene2Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDfadeObjects1.length = 0;
gdjs.Scene2Code.GDfadeObjects2.length = 0;
gdjs.Scene2Code.GDfadeObjects3.length = 0;
gdjs.Scene2Code.GDcursorObjects1.length = 0;
gdjs.Scene2Code.GDcursorObjects2.length = 0;
gdjs.Scene2Code.GDcursorObjects3.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects3.length = 0;
gdjs.Scene2Code.GDblocksObjects1.length = 0;
gdjs.Scene2Code.GDblocksObjects2.length = 0;
gdjs.Scene2Code.GDblocksObjects3.length = 0;
gdjs.Scene2Code.GD_95952_9595characterObjects1.length = 0;
gdjs.Scene2Code.GD_95952_9595characterObjects2.length = 0;
gdjs.Scene2Code.GD_95952_9595characterObjects3.length = 0;
gdjs.Scene2Code.GD_95952_95951Objects1.length = 0;
gdjs.Scene2Code.GD_95952_95951Objects2.length = 0;
gdjs.Scene2Code.GD_95952_95951Objects3.length = 0;
gdjs.Scene2Code.GD_95952_95952Objects1.length = 0;
gdjs.Scene2Code.GD_95952_95952Objects2.length = 0;
gdjs.Scene2Code.GD_95952_95952Objects3.length = 0;
gdjs.Scene2Code.GD_95952_95953Objects1.length = 0;
gdjs.Scene2Code.GD_95952_95953Objects2.length = 0;
gdjs.Scene2Code.GD_95952_95953Objects3.length = 0;
gdjs.Scene2Code.GD_95952_9595objectObjects1.length = 0;
gdjs.Scene2Code.GD_95952_9595objectObjects2.length = 0;
gdjs.Scene2Code.GD_95952_9595objectObjects3.length = 0;
gdjs.Scene2Code.GDcheck_9595areaObjects1.length = 0;
gdjs.Scene2Code.GDcheck_9595areaObjects2.length = 0;
gdjs.Scene2Code.GDcheck_9595areaObjects3.length = 0;
gdjs.Scene2Code.GDStarsObjects1.length = 0;
gdjs.Scene2Code.GDStarsObjects2.length = 0;
gdjs.Scene2Code.GDStarsObjects3.length = 0;
gdjs.Scene2Code.GDtext2Objects1.length = 0;
gdjs.Scene2Code.GDtext2Objects2.length = 0;
gdjs.Scene2Code.GDtext2Objects3.length = 0;

gdjs.Scene2Code.eventsList5(runtimeScene);
gdjs.Scene2Code.GDfadeObjects1.length = 0;
gdjs.Scene2Code.GDfadeObjects2.length = 0;
gdjs.Scene2Code.GDfadeObjects3.length = 0;
gdjs.Scene2Code.GDcursorObjects1.length = 0;
gdjs.Scene2Code.GDcursorObjects2.length = 0;
gdjs.Scene2Code.GDcursorObjects3.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects3.length = 0;
gdjs.Scene2Code.GDblocksObjects1.length = 0;
gdjs.Scene2Code.GDblocksObjects2.length = 0;
gdjs.Scene2Code.GDblocksObjects3.length = 0;
gdjs.Scene2Code.GD_95952_9595characterObjects1.length = 0;
gdjs.Scene2Code.GD_95952_9595characterObjects2.length = 0;
gdjs.Scene2Code.GD_95952_9595characterObjects3.length = 0;
gdjs.Scene2Code.GD_95952_95951Objects1.length = 0;
gdjs.Scene2Code.GD_95952_95951Objects2.length = 0;
gdjs.Scene2Code.GD_95952_95951Objects3.length = 0;
gdjs.Scene2Code.GD_95952_95952Objects1.length = 0;
gdjs.Scene2Code.GD_95952_95952Objects2.length = 0;
gdjs.Scene2Code.GD_95952_95952Objects3.length = 0;
gdjs.Scene2Code.GD_95952_95953Objects1.length = 0;
gdjs.Scene2Code.GD_95952_95953Objects2.length = 0;
gdjs.Scene2Code.GD_95952_95953Objects3.length = 0;
gdjs.Scene2Code.GD_95952_9595objectObjects1.length = 0;
gdjs.Scene2Code.GD_95952_9595objectObjects2.length = 0;
gdjs.Scene2Code.GD_95952_9595objectObjects3.length = 0;
gdjs.Scene2Code.GDcheck_9595areaObjects1.length = 0;
gdjs.Scene2Code.GDcheck_9595areaObjects2.length = 0;
gdjs.Scene2Code.GDcheck_9595areaObjects3.length = 0;
gdjs.Scene2Code.GDStarsObjects1.length = 0;
gdjs.Scene2Code.GDStarsObjects2.length = 0;
gdjs.Scene2Code.GDStarsObjects3.length = 0;
gdjs.Scene2Code.GDtext2Objects1.length = 0;
gdjs.Scene2Code.GDtext2Objects2.length = 0;
gdjs.Scene2Code.GDtext2Objects3.length = 0;


return;

}

gdjs['Scene2Code'] = gdjs.Scene2Code;
