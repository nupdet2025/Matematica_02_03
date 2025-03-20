gdjs.Scene5Code = {};
gdjs.Scene5Code.localVariables = [];
gdjs.Scene5Code.GDfadeObjects1= [];
gdjs.Scene5Code.GDfadeObjects2= [];
gdjs.Scene5Code.GDfadeObjects3= [];
gdjs.Scene5Code.GDcursorObjects1= [];
gdjs.Scene5Code.GDcursorObjects2= [];
gdjs.Scene5Code.GDcursorObjects3= [];
gdjs.Scene5Code.GDNewSpriteObjects1= [];
gdjs.Scene5Code.GDNewSpriteObjects2= [];
gdjs.Scene5Code.GDNewSpriteObjects3= [];
gdjs.Scene5Code.GDblocksObjects1= [];
gdjs.Scene5Code.GDblocksObjects2= [];
gdjs.Scene5Code.GDblocksObjects3= [];
gdjs.Scene5Code.GD_95955_9595characterObjects1= [];
gdjs.Scene5Code.GD_95955_9595characterObjects2= [];
gdjs.Scene5Code.GD_95955_9595characterObjects3= [];
gdjs.Scene5Code.GD_95955_95951Objects1= [];
gdjs.Scene5Code.GD_95955_95951Objects2= [];
gdjs.Scene5Code.GD_95955_95951Objects3= [];
gdjs.Scene5Code.GD_95955_95952Objects1= [];
gdjs.Scene5Code.GD_95955_95952Objects2= [];
gdjs.Scene5Code.GD_95955_95952Objects3= [];
gdjs.Scene5Code.GD_95955_95953Objects1= [];
gdjs.Scene5Code.GD_95955_95953Objects2= [];
gdjs.Scene5Code.GD_95955_95953Objects3= [];
gdjs.Scene5Code.GD_95955_9595objectObjects1= [];
gdjs.Scene5Code.GD_95955_9595objectObjects2= [];
gdjs.Scene5Code.GD_95955_9595objectObjects3= [];
gdjs.Scene5Code.GDcheck_9595areaObjects1= [];
gdjs.Scene5Code.GDcheck_9595areaObjects2= [];
gdjs.Scene5Code.GDcheck_9595areaObjects3= [];
gdjs.Scene5Code.GDStarsObjects1= [];
gdjs.Scene5Code.GDStarsObjects2= [];
gdjs.Scene5Code.GDStarsObjects3= [];
gdjs.Scene5Code.GDtext5Objects1= [];
gdjs.Scene5Code.GDtext5Objects2= [];
gdjs.Scene5Code.GDtext5Objects3= [];


gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GD_959595955_959595953Objects2Objects = Hashtable.newFrom({"_5_3": gdjs.Scene5Code.GD_95955_95953Objects2});
gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.Scene5Code.GDcheck_9595areaObjects2});
gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GD_959595955_959595952Objects2Objects = Hashtable.newFrom({"_5_2": gdjs.Scene5Code.GD_95955_95952Objects2});
gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.Scene5Code.GDcheck_9595areaObjects2});
gdjs.Scene5Code.asyncCallback11687548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_5_2"), gdjs.Scene5Code.GD_95955_95952Objects3);

{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects3.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects3[i].getBehavior("Tween").addObjectPositionTween2("setting", 1265, 607, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects3.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects3[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects3.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects3[i].getBehavior("Effect").enableEffect("error", false);
}
}gdjs.Scene5Code.localVariables.length = 0;
}
gdjs.Scene5Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene5Code.localVariables);
for (const obj of gdjs.Scene5Code.GD_95955_95952Objects2) asyncObjectsList.addObject("_5_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene5Code.asyncCallback11687548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GD_959595955_959595951Objects2Objects = Hashtable.newFrom({"_5_1": gdjs.Scene5Code.GD_95955_95951Objects2});
gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.Scene5Code.GDcheck_9595areaObjects2});
gdjs.Scene5Code.asyncCallback11691444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_5_1"), gdjs.Scene5Code.GD_95955_95951Objects3);

{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects3.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects3[i].getBehavior("Tween").addObjectPositionTween2("setting", 958, 609, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects3.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects3[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects3.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects3[i].getBehavior("Effect").enableEffect("error", false);
}
}gdjs.Scene5Code.localVariables.length = 0;
}
gdjs.Scene5Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene5Code.localVariables);
for (const obj of gdjs.Scene5Code.GD_95955_95951Objects2) asyncObjectsList.addObject("_5_1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene5Code.asyncCallback11691444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene5Code.asyncCallback11693692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final", false);
}gdjs.Scene5Code.localVariables.length = 0;
}
gdjs.Scene5Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Scene5Code.asyncCallback11693692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene5Code.asyncCallback11693396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene5Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Scene5Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Scene5Code.localVariables.length = 0;
}
gdjs.Scene5Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.20), (runtimeScene) => (gdjs.Scene5Code.asyncCallback11693396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene5Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("_5_3"), gdjs.Scene5Code.GD_95955_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.Scene5Code.GDcheck_9595areaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GD_959595955_959595953Objects2Objects, gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_5_1"), gdjs.Scene5Code.GD_95955_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("_5_2"), gdjs.Scene5Code.GD_95955_95952Objects2);
/* Reuse gdjs.Scene5Code.GD_95955_95953Objects2 */
{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95953Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95953Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 1422, 239, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 1265, 607, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 958, 609, "linear", 0.20, false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95953Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95953Objects2[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("one");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_5_2"), gdjs.Scene5Code.GD_95955_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.Scene5Code.GDcheck_9595areaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GD_959595955_959595952Objects2Objects, gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Scene5Code.GD_95955_95952Objects2 */
{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects2[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 70, 1);
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects2[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 1265, 607, "linear", 0.20, false);
}
}
{ //Subevents
gdjs.Scene5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_5_1"), gdjs.Scene5Code.GD_95955_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.Scene5Code.GDcheck_9595areaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GD_959595955_959595951Objects2Objects, gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Scene5Code.GD_95955_95951Objects2 */
{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects2[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 70, 1);
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects2[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects2.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects2[i].getBehavior("Tween").addObjectPositionTween2("setting", 958, 609, "linear", 0.20, false);
}
}
{ //Subevents
gdjs.Scene5Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "one");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Scene5Code.GDStarsObjects1);
{for(var i = 0, len = gdjs.Scene5Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDStarsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDStarsObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.Scene5Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Scene5Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Scene5Code.GDStarsObjects1);
gdjs.copyArray(runtimeScene.getObjects("_5_1"), gdjs.Scene5Code.GD_95955_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5_2"), gdjs.Scene5Code.GD_95955_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Scene5Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.Scene5Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.Scene5Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene5Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeScene", 0, "linear", 0.45, true);
}
}{for(var i = 0, len = gdjs.Scene5Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDStarsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene5Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDStarsObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95951Objects1.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95951Objects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GD_95955_95952Objects1.length ;i < len;++i) {
    gdjs.Scene5Code.GD_95955_95952Objects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("zero");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Scene5Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Scene5Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Scene5Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDcursorObjects1[i].hide(false);
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
gdjs.Scene5Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene5Code.GDfadeObjects1.length = 0;
gdjs.Scene5Code.GDfadeObjects2.length = 0;
gdjs.Scene5Code.GDfadeObjects3.length = 0;
gdjs.Scene5Code.GDcursorObjects1.length = 0;
gdjs.Scene5Code.GDcursorObjects2.length = 0;
gdjs.Scene5Code.GDcursorObjects3.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects3.length = 0;
gdjs.Scene5Code.GDblocksObjects1.length = 0;
gdjs.Scene5Code.GDblocksObjects2.length = 0;
gdjs.Scene5Code.GDblocksObjects3.length = 0;
gdjs.Scene5Code.GD_95955_9595characterObjects1.length = 0;
gdjs.Scene5Code.GD_95955_9595characterObjects2.length = 0;
gdjs.Scene5Code.GD_95955_9595characterObjects3.length = 0;
gdjs.Scene5Code.GD_95955_95951Objects1.length = 0;
gdjs.Scene5Code.GD_95955_95951Objects2.length = 0;
gdjs.Scene5Code.GD_95955_95951Objects3.length = 0;
gdjs.Scene5Code.GD_95955_95952Objects1.length = 0;
gdjs.Scene5Code.GD_95955_95952Objects2.length = 0;
gdjs.Scene5Code.GD_95955_95952Objects3.length = 0;
gdjs.Scene5Code.GD_95955_95953Objects1.length = 0;
gdjs.Scene5Code.GD_95955_95953Objects2.length = 0;
gdjs.Scene5Code.GD_95955_95953Objects3.length = 0;
gdjs.Scene5Code.GD_95955_9595objectObjects1.length = 0;
gdjs.Scene5Code.GD_95955_9595objectObjects2.length = 0;
gdjs.Scene5Code.GD_95955_9595objectObjects3.length = 0;
gdjs.Scene5Code.GDcheck_9595areaObjects1.length = 0;
gdjs.Scene5Code.GDcheck_9595areaObjects2.length = 0;
gdjs.Scene5Code.GDcheck_9595areaObjects3.length = 0;
gdjs.Scene5Code.GDStarsObjects1.length = 0;
gdjs.Scene5Code.GDStarsObjects2.length = 0;
gdjs.Scene5Code.GDStarsObjects3.length = 0;
gdjs.Scene5Code.GDtext5Objects1.length = 0;
gdjs.Scene5Code.GDtext5Objects2.length = 0;
gdjs.Scene5Code.GDtext5Objects3.length = 0;

gdjs.Scene5Code.eventsList5(runtimeScene);
gdjs.Scene5Code.GDfadeObjects1.length = 0;
gdjs.Scene5Code.GDfadeObjects2.length = 0;
gdjs.Scene5Code.GDfadeObjects3.length = 0;
gdjs.Scene5Code.GDcursorObjects1.length = 0;
gdjs.Scene5Code.GDcursorObjects2.length = 0;
gdjs.Scene5Code.GDcursorObjects3.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects3.length = 0;
gdjs.Scene5Code.GDblocksObjects1.length = 0;
gdjs.Scene5Code.GDblocksObjects2.length = 0;
gdjs.Scene5Code.GDblocksObjects3.length = 0;
gdjs.Scene5Code.GD_95955_9595characterObjects1.length = 0;
gdjs.Scene5Code.GD_95955_9595characterObjects2.length = 0;
gdjs.Scene5Code.GD_95955_9595characterObjects3.length = 0;
gdjs.Scene5Code.GD_95955_95951Objects1.length = 0;
gdjs.Scene5Code.GD_95955_95951Objects2.length = 0;
gdjs.Scene5Code.GD_95955_95951Objects3.length = 0;
gdjs.Scene5Code.GD_95955_95952Objects1.length = 0;
gdjs.Scene5Code.GD_95955_95952Objects2.length = 0;
gdjs.Scene5Code.GD_95955_95952Objects3.length = 0;
gdjs.Scene5Code.GD_95955_95953Objects1.length = 0;
gdjs.Scene5Code.GD_95955_95953Objects2.length = 0;
gdjs.Scene5Code.GD_95955_95953Objects3.length = 0;
gdjs.Scene5Code.GD_95955_9595objectObjects1.length = 0;
gdjs.Scene5Code.GD_95955_9595objectObjects2.length = 0;
gdjs.Scene5Code.GD_95955_9595objectObjects3.length = 0;
gdjs.Scene5Code.GDcheck_9595areaObjects1.length = 0;
gdjs.Scene5Code.GDcheck_9595areaObjects2.length = 0;
gdjs.Scene5Code.GDcheck_9595areaObjects3.length = 0;
gdjs.Scene5Code.GDStarsObjects1.length = 0;
gdjs.Scene5Code.GDStarsObjects2.length = 0;
gdjs.Scene5Code.GDStarsObjects3.length = 0;
gdjs.Scene5Code.GDtext5Objects1.length = 0;
gdjs.Scene5Code.GDtext5Objects2.length = 0;
gdjs.Scene5Code.GDtext5Objects3.length = 0;


return;

}

gdjs['Scene5Code'] = gdjs.Scene5Code;
