
gdjs.evtsExt__WithThreeJS__Box3D = gdjs.evtsExt__WithThreeJS__Box3D || {};

/**
 * Object generated from 3D Box (Experimental)
 */
gdjs.evtsExt__WithThreeJS__Box3D.Box3D = class Box3D extends gdjs.CustomRuntimeObject {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Id = "";
    this._objectData.FirstFrame = true;
    this._objectData.Hide = objectData.content.Hide !== undefined ? objectData.content.Hide : true;
    this._objectData.AlphaTest = objectData.content.AlphaTest !== undefined ? objectData.content.AlphaTest : Number("0") || 0;
    this._objectData.AntiAliasing = objectData.content.AntiAliasing !== undefined ? objectData.content.AntiAliasing : true;
    this._objectData.Depth = objectData.content.Depth !== undefined ? objectData.content.Depth : Number("1") || 0;
    this._objectData.Blend = objectData.content.Blend !== undefined ? objectData.content.Blend : "Normal";
    this._objectData.TopOffsetV = Number("0") || 0;
    this._objectData.BottomOffsetV = Number("0") || 0;
    this._objectData.FrontOffsetV = Number("0") || 0;
    this._objectData.BackOffsetV = Number("0") || 0;
    this._objectData.LeftOffsetV = Number("0") || 0;
    this._objectData.RightOffsetV = Number("0") || 0;
    this._objectData.TextureIdTop = "";
    this._objectData.TextureIdBottom = "";
    this._objectData.TextureIdFront = "";
    this._objectData.TextureIdBack = "";
    this._objectData.TextureIdLeft = "";
    this._objectData.TextureIdRight = "";

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Id !== newObjectData.content.Id)
      this._objectData.Id = newObjectData.content.Id;
    if (oldObjectData.content.FirstFrame !== newObjectData.content.FirstFrame)
      this._objectData.FirstFrame = newObjectData.content.FirstFrame;
    if (oldObjectData.content.Hide !== newObjectData.content.Hide)
      this._objectData.Hide = newObjectData.content.Hide;
    if (oldObjectData.content.AlphaTest !== newObjectData.content.AlphaTest)
      this._objectData.AlphaTest = newObjectData.content.AlphaTest;
    if (oldObjectData.content.AntiAliasing !== newObjectData.content.AntiAliasing)
      this._objectData.AntiAliasing = newObjectData.content.AntiAliasing;
    if (oldObjectData.content.Depth !== newObjectData.content.Depth)
      this._objectData.Depth = newObjectData.content.Depth;
    if (oldObjectData.content.Blend !== newObjectData.content.Blend)
      this._objectData.Blend = newObjectData.content.Blend;
    if (oldObjectData.content.TopOffsetV !== newObjectData.content.TopOffsetV)
      this._objectData.TopOffsetV = newObjectData.content.TopOffsetV;
    if (oldObjectData.content.BottomOffsetV !== newObjectData.content.BottomOffsetV)
      this._objectData.BottomOffsetV = newObjectData.content.BottomOffsetV;
    if (oldObjectData.content.FrontOffsetV !== newObjectData.content.FrontOffsetV)
      this._objectData.FrontOffsetV = newObjectData.content.FrontOffsetV;
    if (oldObjectData.content.BackOffsetV !== newObjectData.content.BackOffsetV)
      this._objectData.BackOffsetV = newObjectData.content.BackOffsetV;
    if (oldObjectData.content.LeftOffsetV !== newObjectData.content.LeftOffsetV)
      this._objectData.LeftOffsetV = newObjectData.content.LeftOffsetV;
    if (oldObjectData.content.RightOffsetV !== newObjectData.content.RightOffsetV)
      this._objectData.RightOffsetV = newObjectData.content.RightOffsetV;
    if (oldObjectData.content.TextureIdTop !== newObjectData.content.TextureIdTop)
      this._objectData.TextureIdTop = newObjectData.content.TextureIdTop;
    if (oldObjectData.content.TextureIdBottom !== newObjectData.content.TextureIdBottom)
      this._objectData.TextureIdBottom = newObjectData.content.TextureIdBottom;
    if (oldObjectData.content.TextureIdFront !== newObjectData.content.TextureIdFront)
      this._objectData.TextureIdFront = newObjectData.content.TextureIdFront;
    if (oldObjectData.content.TextureIdBack !== newObjectData.content.TextureIdBack)
      this._objectData.TextureIdBack = newObjectData.content.TextureIdBack;
    if (oldObjectData.content.TextureIdLeft !== newObjectData.content.TextureIdLeft)
      this._objectData.TextureIdLeft = newObjectData.content.TextureIdLeft;
    if (oldObjectData.content.TextureIdRight !== newObjectData.content.TextureIdRight)
      this._objectData.TextureIdRight = newObjectData.content.TextureIdRight;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getId() {
    return this._objectData.Id !== undefined ? this._objectData.Id : "";
  }
  _setId(newValue) {
    this._objectData.Id = newValue;
  }
  _getFirstFrame() {
    return this._objectData.FirstFrame !== undefined ? this._objectData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._objectData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getHide() {
    return this._objectData.Hide !== undefined ? this._objectData.Hide : true;
  }
  _setHide(newValue) {
    this._objectData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
  _getAlphaTest() {
    return this._objectData.AlphaTest !== undefined ? this._objectData.AlphaTest : Number("0") || 0;
  }
  _setAlphaTest(newValue) {
    this._objectData.AlphaTest = newValue;
  }
  _getAntiAliasing() {
    return this._objectData.AntiAliasing !== undefined ? this._objectData.AntiAliasing : true;
  }
  _setAntiAliasing(newValue) {
    this._objectData.AntiAliasing = newValue;
  }
  _toggleAntiAliasing() {
    this._setAntiAliasing(!this._getAntiAliasing());
  }
  _getDepth() {
    return this._objectData.Depth !== undefined ? this._objectData.Depth : Number("1") || 0;
  }
  _setDepth(newValue) {
    this._objectData.Depth = newValue;
  }
  _getBlend() {
    return this._objectData.Blend !== undefined ? this._objectData.Blend : "Normal";
  }
  _setBlend(newValue) {
    this._objectData.Blend = newValue;
  }
  _getTopOffsetV() {
    return this._objectData.TopOffsetV !== undefined ? this._objectData.TopOffsetV : Number("0") || 0;
  }
  _setTopOffsetV(newValue) {
    this._objectData.TopOffsetV = newValue;
  }
  _getBottomOffsetV() {
    return this._objectData.BottomOffsetV !== undefined ? this._objectData.BottomOffsetV : Number("0") || 0;
  }
  _setBottomOffsetV(newValue) {
    this._objectData.BottomOffsetV = newValue;
  }
  _getFrontOffsetV() {
    return this._objectData.FrontOffsetV !== undefined ? this._objectData.FrontOffsetV : Number("0") || 0;
  }
  _setFrontOffsetV(newValue) {
    this._objectData.FrontOffsetV = newValue;
  }
  _getBackOffsetV() {
    return this._objectData.BackOffsetV !== undefined ? this._objectData.BackOffsetV : Number("0") || 0;
  }
  _setBackOffsetV(newValue) {
    this._objectData.BackOffsetV = newValue;
  }
  _getLeftOffsetV() {
    return this._objectData.LeftOffsetV !== undefined ? this._objectData.LeftOffsetV : Number("0") || 0;
  }
  _setLeftOffsetV(newValue) {
    this._objectData.LeftOffsetV = newValue;
  }
  _getRightOffsetV() {
    return this._objectData.RightOffsetV !== undefined ? this._objectData.RightOffsetV : Number("0") || 0;
  }
  _setRightOffsetV(newValue) {
    this._objectData.RightOffsetV = newValue;
  }
  _getTextureIdTop() {
    return this._objectData.TextureIdTop !== undefined ? this._objectData.TextureIdTop : "";
  }
  _setTextureIdTop(newValue) {
    this._objectData.TextureIdTop = newValue;
  }
  _getTextureIdBottom() {
    return this._objectData.TextureIdBottom !== undefined ? this._objectData.TextureIdBottom : "";
  }
  _setTextureIdBottom(newValue) {
    this._objectData.TextureIdBottom = newValue;
  }
  _getTextureIdFront() {
    return this._objectData.TextureIdFront !== undefined ? this._objectData.TextureIdFront : "";
  }
  _setTextureIdFront(newValue) {
    this._objectData.TextureIdFront = newValue;
  }
  _getTextureIdBack() {
    return this._objectData.TextureIdBack !== undefined ? this._objectData.TextureIdBack : "";
  }
  _setTextureIdBack(newValue) {
    this._objectData.TextureIdBack = newValue;
  }
  _getTextureIdLeft() {
    return this._objectData.TextureIdLeft !== undefined ? this._objectData.TextureIdLeft : "";
  }
  _setTextureIdLeft(newValue) {
    this._objectData.TextureIdLeft = newValue;
  }
  _getTextureIdRight() {
    return this._objectData.TextureIdRight !== undefined ? this._objectData.TextureIdRight : "";
  }
  _setTextureIdRight(newValue) {
    this._objectData.TextureIdRight = newValue;
  }
}

// Methods:
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext = {};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDTopObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDTopObjects2= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBottomObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBottomObjects2= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDFrontObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDFrontObjects2= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBackObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBackObjects2= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDLeftObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDLeftObjects2= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDRightObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDRightObjects2= [];


gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595WithThreeJS_9595_9595Box3D_9546Box3D_9546prototype_9546onCreatedContext_9546GDFrontObjects1Objects = Hashtable.newFrom({"Front": gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDFrontObjects1});
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDFrontObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595WithThreeJS_9595_9595Box3D_9546Box3D_9546prototype_9546onCreatedContext_9546GDFrontObjects1Objects, 0, 0, "");
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1[i]._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1[i].hide();
}
}}

}


};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopObjectsList = [...runtimeScene.getObjects("Top")];
var GDTopObjects = Hashtable.newFrom({"Top": thisGDTopObjectsList});
var thisGDBottomObjectsList = [...runtimeScene.getObjects("Bottom")];
var GDBottomObjects = Hashtable.newFrom({"Bottom": thisGDBottomObjectsList});
var thisGDFrontObjectsList = [...runtimeScene.getObjects("Front")];
var GDFrontObjects = Hashtable.newFrom({"Front": thisGDFrontObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDLeftObjectsList = [...runtimeScene.getObjects("Left")];
var GDLeftObjects = Hashtable.newFrom({"Left": thisGDLeftObjectsList});
var thisGDRightObjectsList = [...runtimeScene.getObjects("Right")];
var GDRightObjects = Hashtable.newFrom({"Right": thisGDRightObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Top": GDTopObjects
, "Bottom": GDBottomObjects
, "Front": GDFrontObjects
, "Back": GDBackObjects
, "Left": GDLeftObjects
, "Right": GDRightObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Top": thisGDTopObjectsList
, "Bottom": thisGDBottomObjectsList
, "Front": thisGDFrontObjectsList
, "Back": thisGDBackObjectsList
, "Left": thisGDLeftObjectsList
, "Right": thisGDRightObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDTopObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDTopObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBottomObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBottomObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDFrontObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDFrontObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBackObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDBackObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDLeftObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDLeftObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDRightObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.GDRightObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDTopObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDBottomObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDFrontObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDBackObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDLeftObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDRightObjects1= [];


gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.userFunc0x1bfd218 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj2D = objects[0];
if (!gdjs.__WithThreeJS.has("Renderer") || !gdjs.__WithThreeJS.get("SceneIsReady")) {
    // 【!】PostEventなのにシーンイベントよりも早く処理が実行される問題がある。
    console.warn("! (3D Box Object)");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
if (Obj2D._getFirstFrame()) {
    Obj2D._setFirstFrame(false);
    //
    if (!gdjs.__WithThreeJS.has("Textures")) {
        gdjs.__WithThreeJS.set("Textures", new Map());
    }
    const Textures = gdjs.__WithThreeJS.get("Textures");
    //
    const Id = Obj2D.name + Obj2D.id;
    const Width = Obj2D.getWidth();
    const Height = Obj2D.getHeight();
    const Depth = Obj2D._getDepth();
    const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");//Obj2D._getProjectionScale();
    const ViewMode = gdjs.__WithThreeJS.get("ViewMode");//Obj2D._getViewMode();
    const AlphaTest = Obj2D._getAlphaTest();
    const Transparent = AlphaTest !== 0;
    const AntiAliasing = Obj2D._getAntiAliasing();
    let Blend = THREE.NormalBlending;
    if (Obj2D._getBlend() == "Additive") {
        Blend = THREE.AdditiveBlending;
    } else if (Obj2D._getBlend() == "Subtractive") {
        Blend = THREE.SubtractiveBlending;
    } else if (Obj2D._getBlend() == "Multiply") {
        Blend = THREE.MultiplyBlending;
    }
    //
    const Items = Obj2D._instanceContainer._objects.items;
    const ResourceNameTop = Items.Top.texture;
    const ResourceNameBottom = Items.Bottom.texture;
    const ResourceNameFront = Items.Front.texture;
    const ResourceNameBack = Items.Back.texture;
    const ResourceNameLeft = Items.Left.texture;
    const ResourceNameRight = Items.Right.texture;
    if (ResourceNameTop == "" || ResourceNameBottom == "" || ResourceNameFront == "" || ResourceNameBack == "" || ResourceNameLeft == "" || ResourceNameRight == "") {
        console.warn("Some faces have no image.");
        return;
    }
    const ResourceTop = runtimeScene.getGame().getImageManager().getPIXITexture(ResourceNameTop).baseTexture.resource;
    const ResourceBottom = runtimeScene.getGame().getImageManager().getPIXITexture(ResourceNameBottom).baseTexture.resource;
    const ResourceFront = runtimeScene.getGame().getImageManager().getPIXITexture(ResourceNameFront).baseTexture.resource;
    const ResourceBack = runtimeScene.getGame().getImageManager().getPIXITexture(ResourceNameBack).baseTexture.resource;
    const ResourceLeft = runtimeScene.getGame().getImageManager().getPIXITexture(ResourceNameLeft).baseTexture.resource;
    const ResourceRight = runtimeScene.getGame().getImageManager().getPIXITexture(ResourceNameRight).baseTexture.resource;
    //
    Obj2D._setTextureIdTop("_" + Id + "_" + ResourceTop.url + "_Top");
    Obj2D._setTextureIdBottom("_" + Id + "_" + ResourceBottom.url + "_Bottom");
    Obj2D._setTextureIdFront("_" + Id + "_" + ResourceFront.url + "_Front");
    Obj2D._setTextureIdBack("_" + Id + "_" + ResourceBack.url + "_Back");
    Obj2D._setTextureIdLeft("_" + Id + "_" + ResourceLeft.url + "_Left");
    Obj2D._setTextureIdRight("_" + Id + "_" + ResourceRight.url + "_Right");
    //
    let RepeatTopU, RepeatTopV;
    let RepeatBottomU, RepeatBottomV;
    let RepeatFrontU, RepeatFrontV;
    let RepeatBackU, RepeatBackV;
    let RepeatLeftU, RepeatLeftV;
    let RepeatRightU, RepeatRightV;
    if (ViewMode == "Top Down") {
        RepeatTopU = Width / ResourceTop.width;
        RepeatTopV = Height / ResourceTop.height;
        RepeatBottomU = Width / ResourceBottom.width;
        RepeatBottomV = Height / ResourceBottom.height;
        //
        RepeatFrontU = Width / ResourceFront.width;
        RepeatFrontV = Depth / ResourceFront.height;
        RepeatBackU = Width / ResourceBack.width;
        RepeatBackV = Depth / ResourceBack.height;
        //
        RepeatLeftU = Height / ResourceLeft.width;
        RepeatLeftV = Depth / ResourceLeft.height;
        RepeatRightU = Height / ResourceRight.width;
        RepeatRightV = Depth / ResourceRight.height;
    } else if (ViewMode == "Side") {
        RepeatTopU = Width / ResourceTop.width;
        RepeatTopV = Depth / ResourceTop.height;
        RepeatBottomU = Width / ResourceBottom.width;
        RepeatBottomV = Depth / ResourceBottom.height;
        //
        RepeatFrontU = Width / ResourceFront.width;
        RepeatFrontV = Height / ResourceFront.height;
        RepeatBackU = Width / ResourceBack.width;
        RepeatBackV = Height / ResourceBack.height;
        //
        RepeatLeftU = Depth / ResourceLeft.width;
        RepeatLeftV = Height / ResourceLeft.height;
        RepeatRightU = Depth / ResourceRight.width;
        RepeatRightV = Height / ResourceRight.height;
    } else {
        RepeatTopU = Width / ResourceTop.width;
        RepeatTopV = Height / ResourceTop.height;
        RepeatBottomU = Width / ResourceBottom.width;
        RepeatBottomV = Height / ResourceBottom.height;
        //
        RepeatFrontU = Width / ResourceFront.width;
        RepeatFrontV = Depth / ResourceFront.height;
        RepeatBackU = Width / ResourceBack.width;
        RepeatBackV = Depth / ResourceBack.height;
        //
        RepeatLeftU = Height / ResourceLeft.width;
        RepeatLeftV = Depth / ResourceLeft.height;
        RepeatRightU = Height / ResourceRight.width;
        RepeatRightV = Depth / ResourceRight.height;
    }
    // Offset
    Obj2D._setTopOffsetV(1 - (RepeatTopV % 1));
    Obj2D._setBottomOffsetV(1 - (RepeatBottomV % 1));
    Obj2D._setFrontOffsetV(1 - (RepeatFrontV % 1));
    Obj2D._setBackOffsetV(1 - (RepeatBackV % 1));
    Obj2D._setLeftOffsetV(1 - (RepeatLeftV % 1));
    Obj2D._setRightOffsetV(1 - (RepeatRightV % 1));
    //
    const TextureTop = new THREE.Texture();
    TextureTop.image = ResourceTop.source;
    TextureTop.wrapS = THREE.RepeatWrapping;
    TextureTop.wrapT = THREE.RepeatWrapping;
    if (!AntiAliasing) {
        TextureTop.magFilter = THREE.NearestFilter;// THREE.LinearFilter
        TextureTop.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
    }
    TextureTop.repeat.set(RepeatTopU, RepeatTopV);
    TextureTop.offset.set(0, Obj2D._getTopOffsetV());
    TextureTop.colorSpace = THREE.SRGBColorSpace;
    TextureTop.needsUpdate = true;//必須
    Textures.set(Obj2D._getTextureIdTop(), TextureTop);
    //
    const TextureBottom = new THREE.Texture();
    TextureBottom.image = ResourceBottom.source;
    TextureBottom.wrapS = THREE.RepeatWrapping;
    TextureBottom.wrapT = THREE.RepeatWrapping;
    if (!AntiAliasing) {
        TextureBottom.magFilter = THREE.NearestFilter;// THREE.LinearFilter
        TextureBottom.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
    }
    TextureBottom.repeat.set(RepeatBottomU, RepeatBottomV);
    TextureBottom.offset.set(0, Obj2D._getBottomOffsetV());
    TextureBottom.colorSpace = THREE.SRGBColorSpace;
    TextureBottom.needsUpdate = true;//必須
    Textures.set(Obj2D._getTextureIdBottom(), TextureBottom);
    //
    const TextureFront = new THREE.Texture();
    TextureFront.image = ResourceFront.source;
    TextureFront.wrapS = THREE.RepeatWrapping;
    TextureFront.wrapT = THREE.RepeatWrapping;
    if (!AntiAliasing) {
        TextureFront.magFilter = THREE.NearestFilter;// THREE.LinearFilter
        TextureFront.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
    }
    TextureFront.repeat.set(RepeatFrontU, RepeatFrontV);
    TextureFront.offset.set(0, Obj2D._getFrontOffsetV());
    TextureFront.colorSpace = THREE.SRGBColorSpace;
    TextureFront.needsUpdate = true;//必須
    Textures.set(Obj2D._getTextureIdFront(), TextureFront);
    //
    const TextureBack = new THREE.Texture();
    TextureBack.image = ResourceBack.source;
    TextureBack.wrapS = THREE.RepeatWrapping;
    TextureBack.wrapT = THREE.RepeatWrapping;
    if (!AntiAliasing) {
        TextureBack.magFilter = THREE.NearestFilter;// THREE.LinearFilter
        TextureBack.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
    }
    TextureBack.repeat.set(RepeatBackU, RepeatBackV);
    TextureBack.offset.set(0, Obj2D._getBackOffsetV());
    TextureBack.colorSpace = THREE.SRGBColorSpace;
    TextureBack.needsUpdate = true;//必須
    Textures.set(Obj2D._getTextureIdBack(), TextureBack);
    //
    const TextureLeft = new THREE.Texture();
    TextureLeft.image = ResourceLeft.source;
    TextureLeft.wrapS = THREE.RepeatWrapping;
    TextureLeft.wrapT = THREE.RepeatWrapping;
    if (!AntiAliasing) {
        TextureLeft.magFilter = THREE.NearestFilter;// THREE.LinearFilter
        TextureLeft.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
    }
    TextureLeft.repeat.set(RepeatLeftU, RepeatLeftV);
    TextureLeft.offset.set(0, Obj2D._getLeftOffsetV());
    TextureLeft.colorSpace = THREE.SRGBColorSpace;
    TextureLeft.needsUpdate = true;//必須
    Textures.set(Obj2D._getTextureIdLeft(), TextureLeft);
    //
    const TextureRight = new THREE.Texture();
    TextureRight.image = ResourceRight.source;
    TextureRight.wrapS = THREE.RepeatWrapping;
    TextureRight.wrapT = THREE.RepeatWrapping;
    if (!AntiAliasing) {
        TextureRight.magFilter = THREE.NearestFilter;// THREE.LinearFilter
        TextureRight.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
    }
    TextureRight.repeat.set(RepeatRightU, RepeatRightV);
    TextureRight.offset.set(0, Obj2D._getRightOffsetV());
    TextureRight.colorSpace = THREE.SRGBColorSpace;
    TextureRight.needsUpdate = true;//必須
    Textures.set(Obj2D._getTextureIdRight(), TextureRight);
    //
    // const MaterialTop = new THREE.MeshBasicMaterial({map: TextureTop, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    // const MaterialBottom = new THREE.MeshBasicMaterial({map: TextureBottom, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    // const MaterialFront = new THREE.MeshBasicMaterial({map: TextureFront, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    // const MaterialBack = new THREE.MeshBasicMaterial({map: TextureBack, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    // const MaterialLeft = new THREE.MeshBasicMaterial({map: TextureLeft, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    // const MaterialRight = new THREE.MeshBasicMaterial({map: TextureRight, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    const MaterialTop = new THREE.MeshLambertMaterial({map: TextureTop, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    const MaterialBottom = new THREE.MeshLambertMaterial({map: TextureBottom, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    const MaterialFront = new THREE.MeshLambertMaterial({map: TextureFront, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    const MaterialBack = new THREE.MeshLambertMaterial({map: TextureBack, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    const MaterialLeft = new THREE.MeshLambertMaterial({map: TextureLeft, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    const MaterialRight = new THREE.MeshLambertMaterial({map: TextureRight, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    //
    const Material = [MaterialLeft, MaterialRight, MaterialTop, MaterialBottom, MaterialFront, MaterialBack];
    let Geometry;
    if (ViewMode == "Top Down") {
        Geometry = new THREE.BoxGeometry(Width * ProjectionScale, Depth * ProjectionScale, Height * ProjectionScale);
    } else if (ViewMode == "Side") {
        Geometry = new THREE.BoxGeometry(Width * ProjectionScale, Height * ProjectionScale, Depth * ProjectionScale);
    } else {
        Geometry = new THREE.BoxGeometry(Width * ProjectionScale, Depth * ProjectionScale, Height * ProjectionScale);
    }
    Geometry.computeBoundingBox();
    const Obj3D = new THREE.Mesh(Geometry, Material);
    Obj3D.name = Id;
    Obj3D.userData.Use3DProjectionBehavior = true;
    Obj2D._setId(Id);
    if (ViewMode === "Built-In 3D") {
        Obj3D.scale.y = -1;
    }
    Scene.add(Obj3D);
}
// ====================================
const Id = Obj2D._getId();
const X = Obj2D.getCenterXInScene();
const Y = Obj2D.getCenterYInScene();
const Z = Obj2D.zOrder;
const Angle = Obj2D.angle;
const Opacity = Obj2D.getOpacity() / 255;
const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");//Obj2D._getProjectionScale();
const ViewMode = gdjs.__WithThreeJS.get("ViewMode");//Obj2D._getViewMode();
//
const Obj3D = Scene.getObjectByName(Id);
if (!Obj3D) {
    console.warn("3D Object not found.");
    return;
}
// Move & Rotate
if (ViewMode == "Top Down") {
    Obj3D.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
    Obj3D.rotation.set(gdjs.toRad(0), gdjs.toRad(Angle * -1), gdjs.toRad(0));
} else if (ViewMode == "Side") {
    Obj3D.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
    Obj3D.rotation.set(gdjs.toRad(0), gdjs.toRad(0), gdjs.toRad(Angle * -1));
} else {
    Obj3D.position.set(X * ProjectionScale, Y * ProjectionScale, Z * ProjectionScale);
    Obj3D.rotation.set(gdjs.toRad(-90), gdjs.toRad(Angle * -1), gdjs.toRad(0));
}
// Opacity
for (let i = 0; i < Obj3D.material.length; i++) {
    if (!Obj3D.material[i].transparent) {
        if (Obj3D.material[i].alphaTest !== 0 || Opacity !== 1) {
            Obj3D.material[i].transparent = true;
            Obj3D.material[i].needsUpdate = true;
        }
    }
    Obj3D.material[i].opacity = Opacity;
}


};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.userFunc0x1bfd218(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopObjectsList = [...runtimeScene.getObjects("Top")];
var GDTopObjects = Hashtable.newFrom({"Top": thisGDTopObjectsList});
var thisGDBottomObjectsList = [...runtimeScene.getObjects("Bottom")];
var GDBottomObjects = Hashtable.newFrom({"Bottom": thisGDBottomObjectsList});
var thisGDFrontObjectsList = [...runtimeScene.getObjects("Front")];
var GDFrontObjects = Hashtable.newFrom({"Front": thisGDFrontObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDLeftObjectsList = [...runtimeScene.getObjects("Left")];
var GDLeftObjects = Hashtable.newFrom({"Left": thisGDLeftObjectsList});
var thisGDRightObjectsList = [...runtimeScene.getObjects("Right")];
var GDRightObjects = Hashtable.newFrom({"Right": thisGDRightObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Top": GDTopObjects
, "Bottom": GDBottomObjects
, "Front": GDFrontObjects
, "Back": GDBackObjects
, "Left": GDLeftObjects
, "Right": GDRightObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Top": thisGDTopObjectsList
, "Bottom": thisGDBottomObjectsList
, "Front": thisGDFrontObjectsList
, "Back": thisGDBackObjectsList
, "Left": thisGDLeftObjectsList
, "Right": thisGDRightObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDTopObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDBottomObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDFrontObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDBackObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDLeftObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.GDRightObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onHotReloadingContext = {};


gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopObjectsList = [...runtimeScene.getObjects("Top")];
var GDTopObjects = Hashtable.newFrom({"Top": thisGDTopObjectsList});
var thisGDBottomObjectsList = [...runtimeScene.getObjects("Bottom")];
var GDBottomObjects = Hashtable.newFrom({"Bottom": thisGDBottomObjectsList});
var thisGDFrontObjectsList = [...runtimeScene.getObjects("Front")];
var GDFrontObjects = Hashtable.newFrom({"Front": thisGDFrontObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDLeftObjectsList = [...runtimeScene.getObjects("Left")];
var GDLeftObjects = Hashtable.newFrom({"Left": thisGDLeftObjectsList});
var thisGDRightObjectsList = [...runtimeScene.getObjects("Right")];
var GDRightObjects = Hashtable.newFrom({"Right": thisGDRightObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Top": GDTopObjects
, "Bottom": GDBottomObjects
, "Front": GDFrontObjects
, "Back": GDBackObjects
, "Left": GDLeftObjects
, "Right": GDRightObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Top": thisGDTopObjectsList
, "Bottom": thisGDBottomObjectsList
, "Front": thisGDFrontObjectsList
, "Back": thisGDBackObjectsList
, "Left": thisGDLeftObjectsList
, "Right": thisGDRightObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};


gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext = {};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDTopObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDBottomObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDFrontObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDBackObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDLeftObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDRightObjects1= [];


gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.userFunc0x86b710 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// 生成と同時に削除された場合、3D化されていないので回避
const Obj2D = objects[0];
if (Obj2D._getFirstFrame()) {
    return;
}
//
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Textures = gdjs.__WithThreeJS.get("Textures");
const Id = Obj2D._getId();
const Obj3D = Scene.getObjectByName(Id);
if (!Obj3D) {
    console.warn("3D Object not found.");
    return;
}
// インスタンスごとなので全て削除してOK
// material dispose
for (let i = Obj3D.material.length - 1; i >= 0; i--){
    Obj3D.material[i].dispose();
}
// Texture dispose
Textures.get(Obj2D._getTextureIdTop()).dispose();
Textures.delete(Obj2D._getTextureIdTop());
Textures.get(Obj2D._getTextureIdBottom()).dispose();
Textures.delete(Obj2D._getTextureIdBottom());
Textures.get(Obj2D._getTextureIdFront()).dispose();
Textures.delete(Obj2D._getTextureIdFront());
Textures.get(Obj2D._getTextureIdBack()).dispose();
Textures.delete(Obj2D._getTextureIdBack());
Textures.get(Obj2D._getTextureIdLeft()).dispose();
Textures.delete(Obj2D._getTextureIdLeft());
Textures.get(Obj2D._getTextureIdRight()).dispose();
Textures.delete(Obj2D._getTextureIdRight());
//
Obj3D.removeFromParent();


};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.userFunc0x86b710(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopObjectsList = [...runtimeScene.getObjects("Top")];
var GDTopObjects = Hashtable.newFrom({"Top": thisGDTopObjectsList});
var thisGDBottomObjectsList = [...runtimeScene.getObjects("Bottom")];
var GDBottomObjects = Hashtable.newFrom({"Bottom": thisGDBottomObjectsList});
var thisGDFrontObjectsList = [...runtimeScene.getObjects("Front")];
var GDFrontObjects = Hashtable.newFrom({"Front": thisGDFrontObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDLeftObjectsList = [...runtimeScene.getObjects("Left")];
var GDLeftObjects = Hashtable.newFrom({"Left": thisGDLeftObjectsList});
var thisGDRightObjectsList = [...runtimeScene.getObjects("Right")];
var GDRightObjects = Hashtable.newFrom({"Right": thisGDRightObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Top": GDTopObjects
, "Bottom": GDBottomObjects
, "Front": GDFrontObjects
, "Back": GDBackObjects
, "Left": GDLeftObjects
, "Right": GDRightObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Top": thisGDTopObjectsList
, "Bottom": thisGDBottomObjectsList
, "Front": thisGDFrontObjectsList
, "Back": thisGDBackObjectsList
, "Left": thisGDLeftObjectsList
, "Right": thisGDRightObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDTopObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDBottomObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDFrontObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDBackObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDLeftObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.GDRightObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDTopObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDBottomObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDFrontObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDBackObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDLeftObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDRightObjects1= [];


gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.userFunc0x86b738 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects[0]._getId();
};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.userFunc0x86b738(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopObjectsList = [...runtimeScene.getObjects("Top")];
var GDTopObjects = Hashtable.newFrom({"Top": thisGDTopObjectsList});
var thisGDBottomObjectsList = [...runtimeScene.getObjects("Bottom")];
var GDBottomObjects = Hashtable.newFrom({"Bottom": thisGDBottomObjectsList});
var thisGDFrontObjectsList = [...runtimeScene.getObjects("Front")];
var GDFrontObjects = Hashtable.newFrom({"Front": thisGDFrontObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDLeftObjectsList = [...runtimeScene.getObjects("Left")];
var GDLeftObjects = Hashtable.newFrom({"Left": thisGDLeftObjectsList});
var thisGDRightObjectsList = [...runtimeScene.getObjects("Right")];
var GDRightObjects = Hashtable.newFrom({"Right": thisGDRightObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Top": GDTopObjects
, "Bottom": GDBottomObjects
, "Front": GDFrontObjects
, "Back": GDBackObjects
, "Left": GDLeftObjects
, "Right": GDRightObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Top": thisGDTopObjectsList
, "Bottom": thisGDBottomObjectsList
, "Front": thisGDFrontObjectsList
, "Back": thisGDBackObjectsList
, "Left": thisGDLeftObjectsList
, "Right": thisGDRightObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDTopObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDBottomObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDFrontObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDBackObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDLeftObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.GDRightObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext = {};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDTopObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDBottomObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDFrontObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDBackObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDLeftObjects1= [];
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDRightObjects1= [];


gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.userFunc0x86b508 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects[0]._getDepth();
};
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.userFunc0x86b508(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.Depth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopObjectsList = [...runtimeScene.getObjects("Top")];
var GDTopObjects = Hashtable.newFrom({"Top": thisGDTopObjectsList});
var thisGDBottomObjectsList = [...runtimeScene.getObjects("Bottom")];
var GDBottomObjects = Hashtable.newFrom({"Bottom": thisGDBottomObjectsList});
var thisGDFrontObjectsList = [...runtimeScene.getObjects("Front")];
var GDFrontObjects = Hashtable.newFrom({"Front": thisGDFrontObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDLeftObjectsList = [...runtimeScene.getObjects("Left")];
var GDLeftObjects = Hashtable.newFrom({"Left": thisGDLeftObjectsList});
var thisGDRightObjectsList = [...runtimeScene.getObjects("Right")];
var GDRightObjects = Hashtable.newFrom({"Right": thisGDRightObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Top": GDTopObjects
, "Bottom": GDBottomObjects
, "Front": GDFrontObjects
, "Back": GDBackObjects
, "Left": GDLeftObjects
, "Right": GDRightObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Top": thisGDTopObjectsList
, "Bottom": thisGDBottomObjectsList
, "Front": thisGDFrontObjectsList
, "Back": thisGDBackObjectsList
, "Left": thisGDLeftObjectsList
, "Right": thisGDRightObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDTopObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDBottomObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDFrontObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDBackObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDLeftObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.GDRightObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.DepthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__Box3D.Box3D.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("WithThreeJS::Box3D", gdjs.evtsExt__WithThreeJS__Box3D.Box3D);
