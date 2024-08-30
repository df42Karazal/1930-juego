/*:
@plugindesc
3D rendering for RPG Maker MV, 
version 0.6.8.2 (Demo)
@author Cutievirus

@help
Requires RPG Maker MV
	
This is a demo version of MV3D. The full version is available at
itch.io or patreon.

https://cutievirus.itch.io/mv3d
https://www.patreon.com/cutievirus


For assistance with the plugin, please join the discord:

Discord: http://cutievirus.com/discord  


For full documentation, please see the wiki:

https://mv3d.cutievirus.com/documentation



## Patron Heroes:

- Rikyu
- AMemoryofEternity 
- Fyoha
- 冬空 橙
- Anthony Xue
- Ricky Smith
- Lynn Grant
- kim marberry
- Samuel LESPES CARDILLO
- Ham
- Brendan Belton
- Mark Toman
- Decayingdev
- Donald Purvis
- Brandi K
- WeakWasabi 
- Logan Swartz

## Patron Knights:

- CattleDog
- hsumi1 .
- AmalgamAsh
- L
- Nemo Ma
- Clumsydemonwithfire 
- Matteo Calbi
- RetroChaos
- noone
- Rareica
- Jimmy McCarney
- JosephSeraph 
- Joseph Reyes
- Brendan Lundy
- stevens tavares
- SuperNick
- Harmless 
- Miolhr 
- Marcel Ka
- + 1 hidden




@command command
@text Legacy Command
@desc Use the old command syntax

@arg command
@text Command
@desc Enter the command without the mv3d/mz3d prefix.


@command animation
@text Play Animation
@desc 

@arg id
@text Animation
@type animation
@default 1

@arg target
@text Target
@desc Enter the event id or "player". Blank for current event.

@arg scale
@text Scale
@type number
@decimals 4
@min 0.0001
@default 1

@arg rot
@text Rotation
@desc The rotation angle of the animation. If "auto", matches camera rotation.
@type number
@decimals 0
@min 0 @max 360
@default auto

@arg depth
@text Depth
@desc If enabled, postprocessing will be disabled while the animation is playing.
@type boolean
@default false

@arg height
@text Height Offset
@desc Offsets the z position of the animation.
@type number
@decimals 4
@min -9999 @max 9999
@default 0


@command camera
@text Camera
@desc Change the camera settings.

@arg pitch
@text Pitch
@desc Aims the camera up and down
@type number
@decimals 0
@min 0
@max 180

@arg yaw
@text Yaw
@desc Rotates the camera around the target
@type number
@decimals 0
@min 0
@max 360

@arg roll
@text Roll
@desc Tilts the camera side to side
@type number
@decimals 0
@min -360
@max 360

@arg dist
@text Distance
@desc The distance of the camera to the target (0=first person)
@type number
@decimals 3
@min 0

@arg zoom
@text Zoom
@desc Modifies the FOV to zoom the camera.
@type number
@decimals 4
@min -9999
@max 9999

@arg height
@text Height
@desc The height of the camera.
@type number
@decimals 3

@arg mode
@text Mode
@desc Switch between perspective mode and orthographic mode.
@type select
@option perspective
@option orthographic

@arg follow
@text Follow Target
@desc Which character should the camera follow?
(enter the event id, or the word "player")

@arg pan
@text Pan
@desc Pan the camera away from the target
@type struct<XY>

@arg time
@text Time
@desc Time in seconds to complete transition
@type number
@decimals 3
@min 0
@default 1


@command cameraTrack
@text Camera Tracking
@desc Automatically rotate the camera to face the tracking target.

@arg target
@text Target
@desc Enter the event id or "player". Leave blank to disable.

@arg trackYaw
@text Track Yaw
@type boolean
@default true

@arg trackPitch
@text Track Pitch
@type boolean
@default true

@arg time
@text Smoothness
@desc How smoothly the target will be tracked. Higher number = slower.
@type number
@decimals 3
@default 0


@command fog
@text Fog
@desc Change fog settings.

@arg color
@text Fog Color

@arg near
@text Start Distance
@type number
@decimals 3

@arg far
@text End Distance
@type number
@decimals 3

@arg time
@text Time
@type number
@decimals 3
@default 1


@command light
@text Lighting
@desc Change light settings.

@arg color
@text Ambient Color
@desc The ambient light lights everything in the scene.

@arg time
@text Time
@type number
@decimals 0
@default 1


@command lamp
@text Lamp
@desc Add a lamp lightsource to a character.

@arg target
@text Target
@desc Enter the event id or "player". Blank for current event.

@arg color
@text Color

@arg intensity
@text Intensity
@type number
@decimals 3
@min 0

@arg dist
@text Distance
@desc How far the light will travel.
@type number
@decimals 3
@min 0

@arg time
@text Time
@type number
@decimals 3
@default 1


@command flashlight
@text Flashlight
@desc Add a flashlight lightsource to a character.

@arg target
@text Target
@desc Enter the event id or "player". Blank for current event.

@arg color
@text Color

@arg intensity
@text Intensity
@type number
@decimals 3
@min 0

@arg dist
@text Distance
@desc How far the light will travel.
@type number
@decimals 3
@min 0

@arg angle
@text Beam Width
@desc An angle that describes the width of the beam.
@type number
@min 0 @max 360

@arg yaw
@text Yaw
@desc The horizontal angle of the flashlight beam.
@type number
@decimals 0
@min 0
@max 360

@arg pitch
@text Pitch
@desc The vertical angle of the flashlight beam.
@type number
@decimals 0
@min 0
@max 180

@arg time
@text Time
@type number
@decimals 3
@default 1


@command resolution
@text Resolution Scale
@desc Scale the resolution for a pixellated effect.

@arg scale
@text Scale
@desc Should be between 0 and 1.
@type number
@decimals 4
@min 0 @max 1
@default 1.0000

@arg time
@text Time
@type number
@decimals 3
@default 1


@command configure
@text Configure
@desc Change the target event's configuration

@arg target
@text Target
@desc Enter the event id or "player". Blank for current event.

@arg config
@text Configuration
@type note


@command set
@text Set Property
@desc Change the value of one of these properties

@arg property
@text Property
@type select
@option lockCamera
@option allowRotation
@option allowPitch
@option diagonalMovement
@option turnIncrement
@option turnSpeed
@option instantMovement
@option inputCameraMouse
@option inputCameraGamepad
@option cameraCollision
@option airshipHeight

@arg value
@text Value



@param options
@text Option Settings

@param 3dMenu
@text 3D Options Menu
@desc Whether 3D options will be in a submenu, regular options menu, or disabled.
@parent options
@type select
@option SUBMENU
@option ENABLE
@option DISABLE
@default ENABLE


@param renderDistOptionName
@text Render Distance Option Name
@desc symbol name: mv3d-renderDist
@parent options
@type text
@default Render Distance

@param renderDist
@text Render Distance Default
@desc The maximum distance that can be rendered by the camera.
@parent renderDistOptionName
@type number
@default 25
@min 0

@param renderDistOption
@text Render Distance Option
@desc Should Render Distance appear on options menu?
@parent renderDistOptionName
@type boolean
@default true

@param renderDistMin
@text Render Distance Min
@parent renderDistOptionName
@type number
@default 10
@min 0

@param renderDistMax
@text Render Distance Max
@parent renderDistOptionName
@type number
@default 100
@min 0


#param mipmapOptionName
#text Mipmapping Option Name
#desc symbol name: mv3d-mipmap
#parent options
#type text
#default Mipmapping

#param mipmap
#text Mipmapping Default
#parent mipmapOptionName
#type boolean
#default false

#param mipmapOption
#text Mipmapping Option
#desc Should Mipmapping appear on options menu?
#parent mipmapOptionName
#type boolean
#default true


@param fovOptionName
@text FOV Option Name
@desc symbol name: mv3d-fov
@parent options
@type text
@default FOV

@param fov
@text FOV Default
@parent fovOptionName
@type number
@default 70
@min 0 @max 180

@param fovOption
@text FOV Option
@desc Should FOV appear on options menu?
@parent fovOptionName
@type boolean
@default false

@param fovMin
@text FOV Min
@parent fovOptionName
@type number
@default 50
@min 0 @max 180

@param fovMax
@text FOV Max
@parent fovOptionName
@type number
@default 100
@min 0 @max 180

@param invertYOptionName
@text Invert Y Axis Option Name
@desc symbol name: mv3d-inverty
@parent options
@type text
@default Invert Y Axis

@param invertYOption
@text Invert Y Axis Option
@desc Should invert Y axis appear on options menu?
@parent invertYOptionName
@type boolean
@default true

@param lookSensitivityOptionName
@text Look Sensitivity Option Name
@desc symbol name: mv3d-looksensitivity
@parent options
@type text
@default Look Sensitivity

@param lookSensitivityOption
@text Look Sensitivity Option
@desc Should look sensitivity appear in options menu
@parent lookSensitivityOptionName
@type boolean
@default true

@param spacer|graphics @text‏‏‎ ‎@desc ===============================================

@param graphics
@text Graphics

@param antialiasing
@text Antialiasing
@parent graphics
@type boolean
@default true

@param edgefix
@text Edge Fix
@desc Fixes rendering issues at the edges of tiles.
@parent graphics
@type number
@decimals 1
@default 0.5

@param alphatest
@text Alpha Cutoff
@desc Pixels with alpha below this value will not be rendered.
@parent graphics
@type number
@decimals 2
@min 0.01 @max 1
@default 0.51

@param lightLimit
@text Lights Per Mesh
@parent graphics
@type number
@min 4
@default 8

@param backfaceCulling
@text Backface Culling
@parent graphics
@type boolean
@default true

@param cameraCollision
@text Camera Collision
@parent graphics
@type combo
@option Off
@option Type1
@option Type2
@option Type1 Smoothed
@option Type2 Smoothed
@default Type2 Smoothed

@param resScale
@text Resolution Scale
@desc Scale the resolution
@parent graphics
@type number
@decimals 2
@min 0 @max 1
@default 1

@param spacer|map @text‏‏‎ ‎@desc ===============================================

@param map
@text Map Settings

@param cellSize
@text Cell Size
@desc The size of the chunks the map is divided into.
@parent map
@type number
@default 10

@param unloadCells
@text Unload Far Cells
@desc Unload cells outside the render distance.
@parent map
@type boolean
@default false

@param eventsUpdateNear
@text Update All Events in Render Distance
@parent map
@type boolean
@default true

@param mapDefaults
@text Map Defaults
@parent map
@type note
@default
"enable(true)\nsun(white)\nambient(default)\nfog(black|20,100)\nceiling(backface:true)"


@param spacer|input @text‏‏‎ ‎@desc ===============================================

@param input
@text Input & Gameplay

@param inputCameraMouse
@text Mouse Camera Control
@parent input
@type boolean
@default false

@param inputCameraGamepad
@text Gamepad Camera Control
@parent input
@type boolean
@default true

@param inputGamepadTurnButton
@text Gamepad Turn Button
@parent input
@type select
@option Bumpers
@option Triggers
@option Unchanged
@default Bumpers

@param WASD
@text WASD
@parent input
@type boolean
@default true

@param dir8Movement
@text Diagonal Movement
@desc In smart mode, when diagonal movement fails, try moving straight.
@parent input
@type combo
@option Off
@option Diagonal Basic
@option Diagonal Basic 3D Only
@option Diagonal Smart
@option Diagonal Smart 3D Only
@default Diagonal Smart

@param keyboardPitch
@text Control Pitch
@parent input
@desc Allow player to change pitch with pageup & pagedown.
@type boolean
@default true

@param keyboardTurn
@text Allow Turning
@parent input
@desc Allows rotating camera with keyboard in 3rd person. Rotating is always allowed in 1st person.
@type select
@option Turn with Q+E (requires WASD) @value QE
@option Turn with A+D and left+right @value AD
@option disabled
@default QE

@param keyboardStrafe
@text Allow Strafing
@parent input
@desc Allows strafing in 1st person mode.
@type select
@option Strafe with Q+E (requires WASD) @value QE
@option Strafe with A+D and left+right @value AD
@option disabled
@default QE

@param turnIncrement
@text Turn Increment
@parent input
@desc How many degrees the camera will turn when you press the turn button. Other numbers may also be entered.
@type combo
@option 90
@option 45
@option SMOOTH
@default 90

@param yawSpeed
@text Turn Speed
@parent input
@desc Speed when turning with keyboard (in degrees per second).
@type number
@default 180

@param pitchSpeed
@text Pitch Speed
@parent input
@desc Speed when changing pitch with keyboard (in degrees per second).
@type number
@default 90


@param stairThresh
@text Stair Threshold
@desc If the distance in height between two tiles is less than this, they will be passable.
@parent input
@type number
@decimals 2
@default 0.1

@param walkOffEdge
@text Walk off Edge
@parent input
@type boolean
@default false

@param walkOnEvents
@text Walk on Events
@parent input
@type boolean
@default true

@param gravity
@text Gravity
@desc The speed characters will fall, in tiles per second.
@parent input
@type number
@decimals 2
@default 8

@param spacer|tileconfig @text‏‏‎ ‎@desc ===============================================

@param tileconfig
@text Tile Config

@param wallTileSettings
@text Wall Tile Settings
@desc The default tile settings for wall tiles.
@parent tileconfig
@type note
@default "height(2)"

@param tableTileSettings
@text Table Tile Settings
@desc The default tile settings for table tiles.
@parent tileconfig
@type note
@default "height(0.33)"

@param starTileSettings
@text Star Tile Settings
@desc The default tile settings for star tiles.
@parent tileconfig
@type note
@default "fringe(2)\npass(*)"

@param ceilingHeight
@text Ceiling Height
@desc Default height of ceiling for maps with ceiling enabled.
@parent tileconfig
@type number
@min -9999 @max 9999
@decimals 3
@default 2.0

@param baseHeight
@text Base Height
@desc Extra height added to every tile on the map.
@parent tileconfig
@type number
@min 0 @max 1
@decimals 3
@default 0.25

@param layerDist
@text Layering Distance
@desc The distance between tile layers. If this is too small
there may be z-fighting issues. (default: 0.0100)
@parent tileconfig
@type number
@decimals 4
@default 0.0100

@param animDelay
@text Animation Speed
@desc The number of milliseconds between each frame in tile animations.
@parent tileconfig
@type number
@default 333

@param regions
@text Regions
@desc use regions to determine tile height.
@parent tileconfig
@type struct<RegionHeight>[]
@default ["{\"regionId\":\"1\",\"conf\":\"height(1)\"}","{\"regionId\":\"2\",\"conf\":\"height(2)\"}","{\"regionId\":\"3\",\"conf\":\"height(3)\"}","{\"regionId\":\"4\",\"conf\":\"height(4)\"}","{\"regionId\":\"5\",\"conf\":\"height(5)\"}","{\"regionId\":\"6\",\"conf\":\"height(6)\"}","{\"regionId\":\"7\",\"conf\":\"height(7)\"}"]

@param ttags
@text Terrain Tags
@desc use terrain tags to determine tile height.
@parent tileconfig
@type struct<TTagHeight>[]
@default ["{\"terrainTag\":\"1\",\"conf\":\"shape(xcross),height(1),fringe(0)\"}","{\"terrainTag\":\"2\",\"conf\":\"shape(fence),height(1)\"}"]

@param spacer|characters @text‏‏‎ ‎@desc ===============================================

@param characters
@text Characters

@param heightTrigger
@text Event Trigger Height
@desc If true, events will need to be at the same elevation as the player to be triggered.
@parent characters
@type boolean
@default true

@param eventCharDefaults
@text Character Event Settings
@parent characters
@type note
@default "shadow(0.8,4)\nshape(sprite)\nscale(1)"

@param eventObjDefaults
@text Object Event Settings
@parent characters
@type note
@default "shadow(0)\nshape(sprite)\nscale(1)"

@param eventTileDefaults
@text Tile Event Settings
@parent characters
@type note
@default "shadow(0)\nshape(flat)\nscale(1)"

@param eventHeight
@text Event "Above Characters" Default Height
@parent characters
@type number
@decimals 1
@default 2.0

@param boatSettings
@text Boat Settings
@parent characters
@type struct<BoatStruct>
@default {"conf":"shadow(0.8,4),shape(sprite),scale(1),bush(false)"}

@param shipSettings
@text Ship Settings
@parent characters
@type struct<BoatStruct>
@default {"conf":"shadow(0.8,4),shape(sprite),scale(1),bush(false)"}

@param airshipSettings
@text Airship Settings
@parent characters
@type struct<AirshipStruct>
@default {"conf":"shadow(1,6),shape(sprite),scale(1),bush(false)","height":"2.0","bushLanding":"false"}

@param allowGlide
@text Allow Glide
@desc If true, collision detection for flying characters will use only current elevation and not target elevation.
@parent characters
@type boolean
@default true

@param spriteOffset
@text Sprite Offset
@parent characters
@type number
@min 0 @max 1
@decimals 2
@default 0.9

@param spacer|assets @text‏‏‎ ‎@desc ===============================================

@param assets
@text Assets

@param diagSymbol
@text Diagonal Sprite Symbol
@desc Character sheets with this symbol contain diagonal sprites. Leave blank to use diagonal sprites with all images.
@parent assets
@type text
@default {d}

@param shadowTexture
@text Shadow Texture
@parent assets
@type file
@dir img/MV3D
@require 1
@default shadow

@param alphaMask
@text Bush Alpha Texture
@parent assets
@type file
@dir img/MV3D
@require 1
@default bushAlpha

@param errorTexture
@text Error Texture
@parent assets
@type file
@dir img/MV3D
@require 1
@default errorTexture

@param requiredImages
@text Other Required Images
@desc Specify additional images here to prevent them from being excluded during deployment.
@parent assets
@type file[]
@dir img/MV3D
@require 1


*/
/*~struct~RegionHeight:
@param regionId
@text Region Id
@type number
@min 1 @max 255
@default 1

@param conf
@text Configuration Functions
@desc See tileset configuration for list of functions
@type text
@default height(2)
*/

/*~struct~TTagHeight:
@param terrainTag
@text Terrain Tag
@type number
@min 1 @max 7
@default 1

@param conf
@text Configuration Functions
@desc See tileset configuration for list of functions
@type text
@default shape(flat),height(0)
*/

/*~struct~BoatStruct:
@param conf
@text Settings
@type text
@default shadow(0.8,4),shape(sprite),scale(1),bush(false)

*/

/*~struct~AirshipStruct:
@param conf
@text Settings
@type text
@default shadow(1,6),shape(sprite),scale(1),bush(false)

@param height
@text Elevation
@type number
@decimals 1
@default 2.0

@param bushLanding
@text Land on Bush Tiles
@desc Whether the airship can land on bush tiles.
@type boolean
@default false

*/

/*~struct~XY:
@param x
@text X
@type number
@decimals 3
@default 0

@param y
@text Y
@type number
@decimals 3
@default 0

*/


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeColor", function() { return makeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexNumber", function() { return hexNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeNumber", function() { return relativeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeBlend", function() { return relativeBlend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanNumber", function() { return booleanNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanString", function() { return booleanString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "falseString", function() { return falseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degtorad", function() { return degtorad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radtodeg", function() { return radtodeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointtorad", function() { return pointtorad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointtodeg", function() { return pointtodeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unround", function() { return unround; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minmax", function() { return minmax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileSize", function() { return tileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileWidth", function() { return tileWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileHeight", function() { return tileHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimalFrustrumWidth", function() { return optimalFrustrumWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimalFrustrumHeight", function() { return optimalFrustrumHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file", function() { return file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filename", function() { return filename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldername", function() { return foldername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirtoh", function() { return dirtoh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirtov", function() { return dirtov; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hvtodir", function() { return hvtodir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overload", function() { return overload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "override", function() { return override; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XAxis", function() { return XAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAxis", function() { return YAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAxis", function() { return ZAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v2origin", function() { return v2origin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v3origin", function() { return v3origin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI2", function() { return PI2; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const {Vector2,Vector3,Color3,Color4} = window.BABYLON;

const makeColor = color=>{
	if (typeof color === 'number'){
		return {
			r: (color>>16)/255,
			g: (color>>8&255)/255,
			b: (color&255)/255,
			a: 1,
		};
	}else if(color instanceof Color3){
		return color.toColor4();
	}else if(color instanceof Color4){
		return color;
	}else{
		const canvas = document.createElement('canvas');
		canvas.width=1; canvas.height=1;
		const context = canvas.getContext('2d');
		context.fillStyle = color; context.fillRect(0,0,1,1);
		const bytes = context.getImageData(0,0,1,1).data;
		return new Color4(bytes[0]/255,bytes[1]/255,bytes[2]/255,bytes[3]/255);
	}
}


const hexNumber=n=>{
	n=String(n);
	if(n.startsWith('#')){
		n=n.substr(1);
	}
	return Number.parseInt(n,16);
};

const relativeNumber=(current,n)=>{
	if(n===''){ return +current; }
	const relative = /^[+]/.test(n);
	if(relative){n=n.substr(1);}
	n=Number(n);
	if(Number.isNaN(n)){ return +current; }
	if(relative){
		return +current+n;
	}else{
		return +n;
	}
};

const relativeBlend=(blender,n,time)=>{
	const relative = String(n).startsWith('+');
	blender.setValue(relativeNumber(blender.targetValue(),n),Number(time),!relative);
};

const booleanNumber=s=>{
	if(!isNaN(s)){return Number(s);}
	return booleanString(s);
};
const booleanString=s=>{
	return Boolean(falseString(s));
};
const falseString=s=>{
	if(!s){ return false; }
	if(typeof s !=='string'){ s=String(s); }
	const S=s.toUpperCase();
	if(falseString.values.includes(S)){
		return false;
	}
	return s;
};
falseString.values=['OFF','FALSE','UNDEFINED','NULL','DISABLE','DISABLED','CLEAR','CLEARED','0'];

const sleep=(ms=0)=>new Promise(resolve=>setTimeout(resolve,ms));
const degtorad=deg=>deg*Math.PI/180;
const radtodeg=rad=>rad*180/Math.PI;

const pointtorad=(x,y)=>Math.atan2(-y,x)-Math.PI/2;
const pointtodeg=(x,y)=>radtodeg(pointtorad(x,y));

const sin=r=>unround(Math.sin(r),1e15);
const cos=r=>unround(Math.cos(r),1e15);

const unround=(n,m=1e15)=>Math.round(n*m)/m;

const minmax=(min,max,v)=>Math.min(max,Math.max(min,v));

const tileSize=()=>tileWidth();
const tileWidth=()=>Game_Map.prototype.tileWidth();
const tileHeight=()=>Game_Map.prototype.tileHeight();
const optimalFrustrumWidth=()=>Graphics.width/48;
const optimalFrustrumHeight=()=>Graphics.height/48;

const file=(folder=_main_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].MV3D_FOLDER,name,ext)=>{
	if(ext && !filename(name).contains('.')){ name=name+(ext.startsWith('.')?'':'.')+ext; }
	if(name.startsWith('/')){ return '.'+name; }
	else if(name.startsWith('./')){ return name; }
	if(folder.startsWith('/')){ folder='.'+folder; }
	else if(!folder.startsWith('./')&&folder!=='.'){ folder='./'+folder; }
	return `${folder}${folder.endsWith('/')?'':'/'}${name}`;
};

const filename=path=>{path=path.split('/');return path[path.length-1];}
const foldername=path=>{path=path.split('/');path.pop();return path.join('/')+'/';}

const issuedWarnings={};
const deprecated=message=>{
	if(message in issuedWarnings){ return; }
	issuedWarnings[message]=true;
	console.warn(message);
};

const throttle=(func,interval=100)=>{
	let last_call = 0;
	return function(){
		if(Date.now()-last_call>interval){
			func.apply(this,arguments);
			last_call = Date.now();
		}
	};
}

// directions

const dirtoh=d=>5 + ((d-1)%3-1);
const dirtov=d=>5 + (Math.floor((d-1)/3)-1)*3;
const hvtodir=(h,v)=>5 + (Math.floor((v-1)/3)-1)*3 + ((h-1)%3-1);

// overloading

const overload=funcs=>{
	const overloaded = function(){
		const l=arguments.length;
		if(typeof funcs[l] === 'function'){
			return funcs[l].apply(this,arguments);
		}else if(typeof funcs.default === 'function'){
			return funcs.default.apply(this,arguments);
		}else{ console.warn("Unsupported number of arguments."); }
	}
	for(const key in funcs){
		overloaded[key]=funcs[key].bind
	}
	return overloaded;
};

// override
const _override_default_condition=()=>!_main_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].isDisabled();
const override=(obj,methodName,getNewMethod,condition=_override_default_condition)=>{
	const oldMethod = obj[methodName];
	const newMethod = getNewMethod(oldMethod);
	const overrider = function(){
		if(!(typeof condition==='function'?condition():condition)){ return oldMethod.apply(this,arguments); }
		return newMethod.apply(this,arguments);
	};
	Object.defineProperty(overrider,'name',{value:`${methodName}<mv3d_override>`});
	Object.defineProperty(newMethod,'name',{value:`${methodName}<mv3d>`});
	overrider.oldMethod=oldMethod; overrider.newMethod=newMethod;
	return obj[methodName] = overrider;
};

// assign
const assign=(obj,methods)=>{
	for (const key in methods){
		const descriptor = Object.getOwnPropertyDescriptor(methods,key);
		if (descriptor.get||descriptor.set){
			Object.defineProperty(obj,key,descriptor);
		}else if(methods[key] instanceof _main_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Attribute){
			const attribute = methods[key];
			Object.defineProperty(obj,key,attribute.descriptor);
		}else{
			obj[key]=methods[key];
		}
	}
};

// useful consts
const XAxis = new Vector3(1,0,0);
const YAxis = new Vector3(0,1,0);
const ZAxis = new Vector3(0,0,1);
const v2origin = new Vector2(0,0);
const v3origin = new Vector3(0,0,0);

const PI = Math.PI;
const PI2 = Math.PI*2;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mod_babylon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);






const mz3d = {
	util:_util_js__WEBPACK_IMPORTED_MODULE_2__,

	setup(){
		this.setupParameters();
		Object(_mod_babylon_js__WEBPACK_IMPORTED_MODULE_1__[/* setupBabylonMods */ "i"])();

		this.canvas = document.createElement('canvas');
		this.texture = PIXI.Texture.from(this.canvas);
		this.texture.destroy = function(){};
		this.texture.baseTexture.scaleMode=PIXI.SCALE_MODES.NEAREST;
		this.engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"](this.canvas,this.ANTIALIASING,{
			//premultipliedAlpha:false, 
		});
		this.context = this.engine._gl;
		this.scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"](this.engine);
		//this.scene.clearColor.a=0;
		this.scene.clearColor.set(0,0,0,0);

		//this.engine.forcePOTTextures=true;

		this.cameraStick = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["TransformNode"]("cameraStick",this.scene);
		this.cameraNode = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["TransformNode"]("cameraNode",this.scene);
		this.cameraNode.parent=this.cameraStick;
		this.camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["FreeCamera"]("camera",new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0,0,0),this.scene);
		this.camera.parent=this.cameraNode;
		this.camera.fov=Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["degtorad"])(mz3d.FOV);
		/*
		this.camera.orthoLeft=-Graphics.width/2/tileSize();
		this.camera.orthoRight=Graphics.width/2/tileSize();
		this.camera.orthoTop=Graphics.height/2/tileSize();
		this.camera.orthoBottom=-Graphics.height/2/tileSize();
		*/
		this.camera.minZ=0.1;
		this.camera.maxZ=this.RENDER_DIST;

		//this.scene.activeCameras.push(this.camera);

		this.scene.ambientColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](1,1,1);
		this.scene.fogMode=_mod_babylon_js__WEBPACK_IMPORTED_MODULE_1__[/* FOGMODE_LINEAR */ "c"];

		this.map = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Node"]("map",this.scene);
		this.cells={};
		this.characters=[];

		this.setupBlenders();
		//this.updateBlenders(true);
		this.setupInput();

		this.setupSpriteMeshes();

		this.callFeatures('setup');

	},

	updateCanvas(){
		this.canvas.width = Graphics._width*mz3d.RES_SCALE;
		this.canvas.height = Graphics._height*mz3d.RES_SCALE;
	},

	render(){
		if(!this.texture.baseTexture){ return; }
		this.scene.render();
		this.callFeatures('render');
		this.texture.update();
	},

	lastMapUpdate:0,
	update(){
		if( performance.now()-this.lastMapUpdate > 1000 && !this.mapUpdating ){
			this.updateMap();
			this.lastMapUpdate=performance.now();
		}

		this.updateAnimations();

		this.updateCharacters();

		this.intensiveUpdate();

		this.updateBlenders();

		// input
		this.updateInput();

		for (const key in this.cells){
			this.cells[key].update();
		}

		this.callFeatures('update');

		//this.updateData();
	},

	loadData(key,dfault){
		if(!$gameVariables || !$gameVariables.mv3d || !(key in $gameVariables.mv3d)){ return dfault; }
		return $gameVariables.mv3d[key];
	},
	saveData(key,value){
		if(!$gameVariables){ return console.warn(`MV3D: Couldn't save data ${key}:${value}`); }
		if(!$gameVariables.mv3d){ $gameVariables.mv3d={}; }
		$gameVariables.mv3d[key]=value;
	},
	clearData(key){
		if(!$gameVariables){ return console.warn(`MV3D: Couldn't clear data ${key}`); }
		if(!$gameVariables.mv3d){ return; }
		delete $gameVariables.mv3d[key];
	},

	updateCameraMode(){
		const mode = this.cameraMode;
		let updated=false;
		if(mode.startsWith('O')){
			if(this.camera.mode!==_mod_babylon_js__WEBPACK_IMPORTED_MODULE_1__[/* ORTHOGRAPHIC_CAMERA */ "f"]){ this.camera.mode=_mod_babylon_js__WEBPACK_IMPORTED_MODULE_1__[/* ORTHOGRAPHIC_CAMERA */ "f"]; updated=true; }
		}else{
			if(this.camera.mode!==_mod_babylon_js__WEBPACK_IMPORTED_MODULE_1__[/* PERSPECTIVE_CAMERA */ "g"]){ this.camera.mode=_mod_babylon_js__WEBPACK_IMPORTED_MODULE_1__[/* PERSPECTIVE_CAMERA */ "g"]; updated=true; }
		}
		if(updated){
			this.updateBlenders(true);
			this.callFeatures('updateCameraMode');
			this.updateParameters();
		}
	},
	get cameraMode(){
		return this.loadData('cameraMode',this.CAMERA_MODE).toUpperCase();
	},
	set cameraMode(v){
		v = String(v).toUpperCase().startsWith('O') ? 'ORTHOGRAPHIC' : 'PERSPECTIVE' ;
		this.saveData('cameraMode',v);
		this.updateBlenders(true);
	},

	get hasBackground(){
		return window.$gameMap&&$gameMap.parallaxName()||mv3d.hasSkybox;
	},

	get hasAlphaPostProcess(){
		return (this.hasAlphaFog || mz3d.alphaFixPostProcess) && mz3d.scene.postProcessesEnabled;
	},

	is1stPerson(useCurrent){
		const k = useCurrent?'currentValue':'targetValue';
		return $gamePlayer && (mz3d.getCameraTarget()===$gamePlayer||mz3d.getCameraTarget()===$gamePlayer.vehicle()) && mz3d.blendCameraTransition[k]()<=0
		&& mz3d.blendCameraDist[k]()<=0 && mz3d.blendPanX[k]()===0 && mz3d.blendPanY[k]()===0;
	},

	isVR(){
		return false;
	},

	is3D(){
		return !mz3d.isDisabled() && SceneManager._scene instanceof Scene_Map;
	},

	isDisabled(){
		return mz3d.loadData('disabled', mz3d.getMapConfig('disabled', false ));
	},
	disable(fadeType=2){
		mz3d.saveData('disabled',true);
		//SceneManager.goto(Scene_Map);
		$gamePlayer.reserveTransfer($gameMap.mapId(),$gamePlayer.x,$gamePlayer.y,$gamePlayer.direction(),fadeType);
	},
	enable(fadeType=2){
		mz3d.saveData('disabled',false);
		//SceneManager.goto(Scene_Map);
		$gamePlayer.reserveTransfer($gameMap.mapId(),$gamePlayer.x,$gamePlayer.y,$gamePlayer.direction(),fadeType);
		mz3d.createCharacters();
	},

	loopCoords(x,y){
		if(this.loopHorizontal()){
			const mapWidth=mz3d.mapWidth();
			const ox = this.cameraStick.x - mapWidth/2;
			x=(x-ox).mod(mapWidth)+ox;
		}
		if(this.loopVertical()){
			const mapHeight=mz3d.mapHeight();
			const oy = this.cameraStick.y - mapHeight/2;
			y=(y-oy).mod(mapHeight)+oy;
		}
		return new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x,y);
	},

	getFieldSize(dist=mz3d.blendCameraDist.currentValue()){
		const size = Math.tan(mz3d.camera.fov/2)*dist*2;
		return {
			width:size*mz3d.engine.getAspectRatio(mz3d.camera),
			height:size,
		};
	},
	getScaleForDist(dist=mz3d.blendCameraDist.currentValue()){
		return Graphics.height/this.getFieldSize(dist).height/48;
	},
	getFovForDist(dist=mz3d.blendCameraDist.currentValue(),height=Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["optimalFrustrumHeight"])()){
		return 2*Math.atan(height/2/dist);
	},
	getDistForFov(fov=mz3d.camera.fov,height=Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["optimalFrustrumHeight"])()){
		return height/2/Math.tan(fov/2);
	},
	getFrustrumHeight(dist=mz3d.blendCameraDist.currentValue(),fov=mz3d.camera.fov){
		return 2*dist*Math.tan(fov/2);
	},


	getScreenPosition(node,offset=babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero()){
		const matrix = node.parent ? node.parent.getWorldMatrix() : babylonjs__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Identity();
		const pos = node instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"] ? node.add(offset) : node.position.add(offset);
		const projected = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Project(pos,matrix,mz3d.scene.getTransformMatrix(),mz3d.camera.viewport);
		return {x:projected.x*Graphics.width, y:projected.y*Graphics.height, behindCamera:projected.z>1};
	},
	
	getUnscaledMatrix(mesh){
		const matrix = mesh.getWorldMatrix();
		const qrot=new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Quaternion"](), vtrans=new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
		matrix.decompose(null,qrot,vtrans);
		return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Compose(babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].One(),qrot,vtrans);
	},
	getTranslationMatrix(mesh){
		const matrix = mesh.getWorldMatrix();
		const vrot=babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero(), vtrans=new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
		vrot.y=-Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["degtorad"])(mz3d.blendCameraYaw.currentValue());
		vrot.x=-Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["degtorad"])(mz3d.blendCameraPitch.currentValue()-90);
		matrix.decompose(null,null,vtrans);
		return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Compose(babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].One(),vrot.toQuaternion(),vtrans);
	},
	getRotationMatrix(mesh){
		const matrix = mesh.getWorldMatrix();
		const qrot=new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]();
		matrix.decompose(null,qrot,null);
		return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Compose(babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].One(),qrot,babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero());
	},

	globalPosition(node){
		const matrix = node.parent ? node.parent.getWorldMatrix() : babylonjs__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Identity();
		return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformCoordinates(node.position,matrix);
	},

}
window.mv3d=window.mz3d=mz3d;
/* harmony default export */ __webpack_exports__["a"] = (mz3d);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=151)}([function(e,t,i){"use strict";i.d(t,"d",function(){return s}),i.d(t,"e",function(){return c}),i.d(t,"f",function(){return l}),i.d(t,"b",function(){return u}),i.d(t,"a",function(){return h}),i.d(t,"c",function(){return f});var n=i(14),r=i(28),o=i(42),a=i(12),s=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=0),this.x=e,this.y=t}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+"}"},e.prototype.getClassName=function(){return"Vector2"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*e^(0|this.y)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this},e.prototype.copyFromFloats=function(e,t){return this.x=e,this.y=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this},e.prototype.addVector3=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,this},e.prototype.multiplyByFloats=function(t,i){return new e(this.x*t,this.y*i)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.negate=function(){return new e(-this.x,-this.y)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this},e.prototype.scale=function(t){var i=new e(0,0);return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y},e.prototype.normalize=function(){var e=this.length();return 0===e?this:(this.x/=e,this.y/=e,this)},e.prototype.clone=function(){return new e(this.x,this.y)},e.Zero=function(){return new e(0,0)},e.One=function(){return new e(1,1)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1]},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*a+(-t.x+3*i.x-3*n.x+r.x)*s),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*a+(-t.y+3*i.y-3*n.y+r.y)*s))},e.Clamp=function(t,i,n){var r=t.x;r=(r=r>n.x?n.x:r)<i.x?i.x:r;var o=t.y;return new e(r,o=(o=o>n.y?n.y:o)<i.y?i.y:o)},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h)},e.Lerp=function(t,i,n){return new e(t.x+(i.x-t.x)*n,t.y+(i.y-t.y)*n)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y},e.Normalize=function(e){var t=e.clone();return t.normalize(),t},e.Minimize=function(t,i){return new e(t.x<i.x?t.x:i.x,t.y<i.y?t.y:i.y)},e.Maximize=function(t,i){return new e(t.x>i.x?t.x:i.x,t.y>i.y?t.y:i.y)},e.Transform=function(t,i){var n=e.Zero();return e.TransformToRef(t,i,n),n},e.TransformToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+n[12],o=e.x*n[1]+e.y*n[5]+n[13];i.x=r,i.y=o},e.PointInTriangle=function(e,t,i,n){var r=.5*(-i.y*n.x+t.y*(-i.x+n.x)+t.x*(i.y-n.y)+i.x*n.y),o=r<0?-1:1,a=(t.y*n.x-t.x*n.y+(n.y-t.y)*e.x+(t.x-n.x)*e.y)*o,s=(t.x*i.y-t.y*i.x+(t.y-i.y)*e.x+(i.x-t.x)*e.y)*o;return a>0&&s>0&&a+s<2*r*o},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.DistanceOfPointFromSegment=function(t,i,n){var r=e.DistanceSquared(i,n);if(0===r)return e.Distance(t,i);var o=n.subtract(i),a=Math.max(0,Math.min(1,e.Dot(t.subtract(i),o)/r)),s=i.add(o.multiplyByFloats(a,a));return e.Distance(t,s)},e}(),c=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.x=e,this.y=t,this.z=i}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+"}"},e.prototype.getClassName=function(){return"Vector3"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*e^(0|this.y))^(0|this.z)},e.prototype.asArray=function(){var e=[];return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,this},e.prototype.toQuaternion=function(){return u.RotationYawPitchRoll(this.y,this.x,this.z)},e.prototype.addInPlace=function(e){return this.addInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.addInPlaceFromFloats=function(e,t,i){return this.x+=e,this.y+=t,this.z+=i,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.addToRef=function(e,t){return t.copyFromFloats(this.x+e.x,this.y+e.y,this.z+e.z)},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.subtractToRef=function(e,t){return this.subtractFromFloatsToRef(e.x,e.y,e.z,t)},e.prototype.subtractFromFloats=function(t,i,n){return new e(this.x-t,this.y-i,this.z-n)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n){return n.copyFromFloats(this.x-e,this.y-t,this.z-i)},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y,-1*this.z)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t)},e.prototype.scaleToRef=function(e,t){return t.copyFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.scaleAndAddToRef=function(e,t){return t.addInPlaceFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)},e.prototype.equalsToFloats=function(e,t,i){return this.x===e&&this.y===t&&this.z===i},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this},e.prototype.multiply=function(e){return this.multiplyByFloats(e.x,e.y,e.z)},e.prototype.multiplyToRef=function(e,t){return t.copyFromFloats(this.x*e.x,this.y*e.y,this.z*e.z)},e.prototype.multiplyByFloats=function(t,i,n){return new e(this.x*t,this.y*i,this.z*n)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z)},e.prototype.divideToRef=function(e,t){return t.copyFromFloats(this.x/e.x,this.y/e.y,this.z/e.z)},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return this.minimizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.maximizeInPlace=function(e){return this.maximizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.minimizeInPlaceFromFloats=function(e,t,i){return e<this.x&&(this.x=e),t<this.y&&(this.y=t),i<this.z&&(this.z=i),this},e.prototype.maximizeInPlaceFromFloats=function(e,t,i){return e>this.x&&(this.x=e),t>this.y&&(this.y=t),i>this.z&&(this.z=i),this},e.prototype.isNonUniformWithinEpsilon=function(e){var t=Math.abs(this.x),i=Math.abs(this.y);if(!n.a.WithinEpsilon(t,i,e))return!0;var r=Math.abs(this.z);return!n.a.WithinEpsilon(t,r,e)||!n.a.WithinEpsilon(i,r,e)},Object.defineProperty(e.prototype,"isNonUniform",{get:function(){var e=Math.abs(this.x),t=Math.abs(this.y);if(e!==t)return!0;var i=Math.abs(this.z);return e!==i||t!==i},enumerable:!0,configurable:!0}),e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.normalize=function(){return this.normalizeFromLength(this.length())},e.prototype.reorderInPlace=function(e){var t=this;return"xyz"===(e=e.toLowerCase())?this:(d.Vector3[0].copyFrom(this),["x","y","z"].forEach(function(i,n){t[i]=d.Vector3[0][e[n]]}),this)},e.prototype.rotateByQuaternionToRef=function(t,i){return t.toRotationMatrix(d.Matrix[0]),e.TransformCoordinatesToRef(this,d.Matrix[0],i),i},e.prototype.rotateByQuaternionAroundPointToRef=function(e,t,i){return this.subtractToRef(t,d.Vector3[0]),d.Vector3[0].rotateByQuaternionToRef(e,d.Vector3[0]),t.addToRef(d.Vector3[0],i),i},e.prototype.cross=function(t){return e.Cross(this,t)},e.prototype.normalizeFromLength=function(e){return 0===e||1===e?this:this.scaleInPlace(1/e)},e.prototype.normalizeToNew=function(){var t=new e(0,0,0);return this.normalizeToRef(t),t},e.prototype.normalizeToRef=function(e){var t=this.length();return 0===t||1===t?e.copyFromFloats(this.x,this.y,this.z):this.scaleToRef(1/t,e)},e.prototype.clone=function(){return new e(this.x,this.y,this.z)},e.prototype.copyFrom=function(e){return this.copyFromFloats(e.x,e.y,e.z)},e.prototype.copyFromFloats=function(e,t,i){return this.x=e,this.y=t,this.z=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.setAll=function(e){return this.x=this.y=this.z=e,this},e.GetClipFactor=function(t,i,n,r){var o=e.Dot(t,n)-r;return o/(o-(e.Dot(i,n)-r))},e.GetAngleBetweenVectors=function(t,i,n){var r=t.normalizeToRef(d.Vector3[1]),o=i.normalizeToRef(d.Vector3[2]),a=e.Dot(r,o),s=d.Vector3[3];return e.CrossToRef(r,o,s),e.Dot(s,n)>0?Math.acos(a):-Math.acos(a)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromFloatArray=function(t,i){return e.FromArray(t,i)},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2]},e.FromFloatArrayToRef=function(t,i,n){return e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n){n.copyFromFloats(e,t,i)},e.Zero=function(){return new e(0,0,0)},e.One=function(){return new e(1,1,1)},e.Up=function(){return new e(0,1,0)},Object.defineProperty(e,"UpReadOnly",{get:function(){return e._UpReadOnly},enumerable:!0,configurable:!0}),Object.defineProperty(e,"ZeroReadOnly",{get:function(){return e._ZeroReadOnly},enumerable:!0,configurable:!0}),e.Down=function(){return new e(0,-1,0)},e.Forward=function(){return new e(0,0,1)},e.Backward=function(){return new e(0,0,-1)},e.Right=function(){return new e(1,0,0)},e.Left=function(){return new e(-1,0,0)},e.TransformCoordinates=function(t,i){var n=e.Zero();return e.TransformCoordinatesToRef(t,i,n),n},e.TransformCoordinatesToRef=function(t,i,n){e.TransformCoordinatesFromFloatsToRef(t.x,t.y,t.z,i,n)},e.TransformCoordinatesFromFloatsToRef=function(e,t,i,n,r){var o=n.m,a=e*o[0]+t*o[4]+i*o[8]+o[12],s=e*o[1]+t*o[5]+i*o[9]+o[13],c=e*o[2]+t*o[6]+i*o[10]+o[14],l=1/(e*o[3]+t*o[7]+i*o[11]+o[15]);r.x=a*l,r.y=s*l,r.z=c*l},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){this.TransformNormalFromFloatsToRef(e.x,e.y,e.z,t,i)},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r){var o=n.m;r.x=e*o[0]+t*o[4]+i*o[8],r.y=e*o[1]+t*o[5]+i*o[9],r.z=e*o[2]+t*o[6]+i*o[10]},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*a+(-t.x+3*i.x-3*n.x+r.x)*s),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*a+(-t.y+3*i.y-3*n.y+r.y)*s),.5*(2*i.z+(-t.z+n.z)*o+(2*t.z-5*i.z+4*n.z-r.z)*a+(-t.z+3*i.z-3*n.z+r.z)*s))},e.Clamp=function(t,i,n){var r=new e;return e.ClampToRef(t,i,n,r),r},e.ClampToRef=function(e,t,i,n){var r=e.x;r=(r=r>i.x?i.x:r)<t.x?t.x:r;var o=e.y;o=(o=o>i.y?i.y:o)<t.y?t.y:o;var a=e.z;a=(a=a>i.z?i.z:a)<t.z?t.z:a,n.copyFromFloats(r,o,a)},e.CheckExtends=function(e,t,i){t.minimizeInPlace(e),i.maximizeInPlace(e)},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.x=e.x+(t.x-e.x)*i,n.y=e.y+(t.y-e.y)*i,n.z=e.z+(t.z-e.z)*i},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},e.Cross=function(t,i){var n=e.Zero();return e.CrossToRef(t,i,n),n},e.CrossToRef=function(e,t,i){var n=e.y*t.z-e.z*t.y,r=e.z*t.x-e.x*t.z,o=e.x*t.y-e.y*t.x;i.copyFromFloats(n,r,o)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){e.normalizeToRef(t)},e.Project=function(t,i,n,r){var o=r.width,a=r.height,s=r.x,c=r.y,l=d.Matrix[1];h.FromValuesToRef(o/2,0,0,0,0,-a/2,0,0,0,0,.5,0,s+o/2,a/2+c,.5,1,l);var u=d.Matrix[0];return i.multiplyToRef(n,u),u.multiplyToRef(l,u),e.TransformCoordinates(t,u)},e._UnprojectFromInvertedMatrixToRef=function(t,i,r){e.TransformCoordinatesToRef(t,i,r);var o=i.m,a=t.x*o[3]+t.y*o[7]+t.z*o[11]+o[15];n.a.WithinEpsilon(a,1)&&r.scaleInPlace(1/a)},e.UnprojectFromTransform=function(t,i,n,r,o){var a=d.Matrix[0];r.multiplyToRef(o,a),a.invert(),t.x=t.x/i*2-1,t.y=-(t.y/n*2-1);var s=new e;return e._UnprojectFromInvertedMatrixToRef(t,a,s),s},e.Unproject=function(t,i,n,r,o,a){var s=e.Zero();return e.UnprojectToRef(t,i,n,r,o,a,s),s},e.UnprojectToRef=function(t,i,n,r,o,a,s){e.UnprojectFloatsToRef(t.x,t.y,t.z,i,n,r,o,a,s)},e.UnprojectFloatsToRef=function(t,i,n,r,o,a,s,c,l){var u=d.Matrix[0];a.multiplyToRef(s,u),u.multiplyToRef(c,u),u.invert();var h=d.Vector3[0];h.x=t/r*2-1,h.y=-(i/o*2-1),h.z=2*n-1,e._UnprojectFromInvertedMatrixToRef(h,u,l)},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z;return i*i+n*n+r*r},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.RotationFromAxis=function(t,i,n){var r=e.Zero();return e.RotationFromAxisToRef(t,i,n,r),r},e.RotationFromAxisToRef=function(e,t,i,n){var r=d.Quaternion[0];u.RotationQuaternionFromAxisToRef(e,t,i,r),r.toEulerAnglesToRef(n)},e._UpReadOnly=e.Up(),e._ZeroReadOnly=e.Zero(),e}(),l=function(){function e(e,t,i,n){this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Vector4"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*(e=397*e^(0|this.y))^(0|this.z))^(0|this.w)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,t.z=this.z+e.z,t.w=this.w+e.w,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z,t.w=this.w-e.w,this},e.prototype.subtractFromFloats=function(t,i,n,r){return new e(this.x-t,this.y-i,this.z-n,this.w-r)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n,r){return r.x=this.x-e,r.y=this.y-t,r.z=this.z-i,r.w=this.w-n,this},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z,-this.w)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.w*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y,-1*this.z,-1*this.w)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)&&n.a.WithinEpsilon(this.w,e.w,t)},e.prototype.equalsToFloats=function(e,t,i,n){return this.x===e&&this.y===t&&this.z===i&&this.w===n},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y,this.z*t.z,this.w*t.w)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,t.z=this.z*e.z,t.w=this.w*e.w,this},e.prototype.multiplyByFloats=function(t,i,n,r){return new e(this.x*t,this.y*i,this.z*n,this.w*r)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z,this.w/t.w)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,t.z=this.z/e.z,t.w=this.w/e.w,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),e.w<this.w&&(this.w=e.w),this},e.prototype.maximizeInPlace=function(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),e.w>this.w&&(this.w=e.w),this},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z),Math.floor(this.w))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z),this.w-Math.floor(this.w))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.prototype.normalize=function(){var e=this.length();return 0===e?this:this.scaleInPlace(1/e)},e.prototype.toVector3=function(){return new c(this.x,this.y,this.z)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.setAll=function(e){return this.x=this.y=this.z=this.w=e,this},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2],i.w=e[t+3]},e.FromFloatArrayToRef=function(t,i,n){e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n,r){r.x=e,r.y=t,r.z=i,r.w=n},e.Zero=function(){return new e(0,0,0,0)},e.One=function(){return new e(1,1,1,1)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){t.copyFrom(e),t.normalize()},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z,o=e.w-t.w;return i*i+n*n+r*r+o*o},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+e.z*n[8],o=e.x*n[1]+e.y*n[5]+e.z*n[9],a=e.x*n[2]+e.y*n[6]+e.z*n[10];i.x=r,i.y=o,i.z=a,i.w=e.w},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r,o){var a=r.m;o.x=e*a[0]+t*a[4]+i*a[8],o.y=e*a[1]+t*a[5]+i*a[9],o.z=e*a[2]+t*a[6]+i*a[10],o.w=n},e.FromVector3=function(t,i){return void 0===i&&(i=0),new e(t.x,t.y,t.z,i)},e}(),u=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Quaternion"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*(e=397*e^(0|this.y))^(0|this.z))^(0|this.w)},e.prototype.asArray=function(){return[this.x,this.y,this.z,this.w]},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)&&n.a.WithinEpsilon(this.w,e.w,t)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.multiply=function(t){var i=new e(0,0,0,1);return this.multiplyToRef(t,i),i},e.prototype.multiplyToRef=function(e,t){var i=this.x*e.w+this.y*e.z-this.z*e.y+this.w*e.x,n=-this.x*e.z+this.y*e.w+this.z*e.x+this.w*e.y,r=this.x*e.y-this.y*e.x+this.z*e.w+this.w*e.z,o=-this.x*e.x-this.y*e.y-this.z*e.z+this.w*e.w;return t.copyFromFloats(i,n,r,o),this},e.prototype.multiplyInPlace=function(e){return this.multiplyToRef(e,this),this},e.prototype.conjugateToRef=function(e){return e.copyFromFloats(-this.x,-this.y,-this.z,this.w),this},e.prototype.conjugateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.conjugate=function(){return new e(-this.x,-this.y,-this.z,this.w)},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.prototype.toEulerAngles=function(e){void 0===e&&(e="YZX");var t=c.Zero();return this.toEulerAnglesToRef(t),t},e.prototype.toEulerAnglesToRef=function(e){var t=this.z,i=this.x,n=this.y,r=this.w,o=r*r,a=t*t,s=i*i,c=n*n,l=n*t-i*r;return l<-.4999999?(e.y=2*Math.atan2(n,r),e.x=Math.PI/2,e.z=0):l>.4999999?(e.y=2*Math.atan2(n,r),e.x=-Math.PI/2,e.z=0):(e.z=Math.atan2(2*(i*n+t*r),-a-s+c+o),e.x=Math.asin(-2*(t*n-i*r)),e.y=Math.atan2(2*(t*i+n*r),a-s-c+o)),this},e.prototype.toRotationMatrix=function(e){return h.FromQuaternionToRef(this,e),this},e.prototype.fromRotationMatrix=function(t){return e.FromRotationMatrixToRef(t,this),this},e.FromRotationMatrix=function(t){var i=new e;return e.FromRotationMatrixToRef(t,i),i},e.FromRotationMatrixToRef=function(e,t){var i,n=e.m,r=n[0],o=n[4],a=n[8],s=n[1],c=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=r+c+d;f>0?(i=.5/Math.sqrt(f+1),t.w=.25/i,t.x=(h-l)*i,t.y=(a-u)*i,t.z=(s-o)*i):r>c&&r>d?(i=2*Math.sqrt(1+r-c-d),t.w=(h-l)/i,t.x=.25*i,t.y=(o+s)/i,t.z=(a+u)/i):c>d?(i=2*Math.sqrt(1+c-r-d),t.w=(a-u)/i,t.x=(o+s)/i,t.y=.25*i,t.z=(l+h)/i):(i=2*Math.sqrt(1+d-r-c),t.w=(s-o)/i,t.x=(a+u)/i,t.y=(l+h)/i,t.z=.25*i)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w},e.AreClose=function(t,i){return e.Dot(t,i)>=0},e.Zero=function(){return new e(0,0,0,0)},e.Inverse=function(t){return new e(-t.x,-t.y,-t.z,t.w)},e.InverseToRef=function(e,t){return t.set(-e.x,-e.y,-e.z,e.w),t},e.Identity=function(){return new e(0,0,0,1)},e.IsIdentity=function(e){return e&&0===e.x&&0===e.y&&0===e.z&&1===e.w},e.RotationAxis=function(t,i){return e.RotationAxisToRef(t,i,new e)},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(t/2);return e.normalize(),i.w=Math.cos(t/2),i.x=e.x*n,i.y=e.y*n,i.z=e.z*n,i},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromEulerAngles=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerAnglesToRef=function(t,i,n,r){return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerVector=function(t){var i=new e;return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.FromEulerVectorToRef=function(t,i){return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){var r=.5*i,o=.5*t,a=.5*e,s=Math.sin(r),c=Math.cos(r),l=Math.sin(o),u=Math.cos(o),h=Math.sin(a),d=Math.cos(a);n.x=d*l*c+h*u*s,n.y=h*u*c-d*l*s,n.z=d*u*s-h*l*c,n.w=d*u*c+h*l*s},e.RotationAlphaBetaGamma=function(t,i,n){var r=new e;return e.RotationAlphaBetaGammaToRef(t,i,n,r),r},e.RotationAlphaBetaGammaToRef=function(e,t,i,n){var r=.5*(i+e),o=.5*(i-e),a=.5*t;n.x=Math.cos(o)*Math.sin(a),n.y=Math.sin(o)*Math.sin(a),n.z=Math.sin(r)*Math.cos(a),n.w=Math.cos(r)*Math.cos(a)},e.RotationQuaternionFromAxis=function(t,i,n){var r=new e(0,0,0,0);return e.RotationQuaternionFromAxisToRef(t,i,n,r),r},e.RotationQuaternionFromAxisToRef=function(t,i,n,r){var o=d.Matrix[0];h.FromXYZAxesToRef(t.normalize(),i.normalize(),n.normalize(),o),e.FromRotationMatrixToRef(o,r)},e.Slerp=function(t,i,n){var r=e.Identity();return e.SlerpToRef(t,i,n,r),r},e.SlerpToRef=function(e,t,i,n){var r,o,a=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,s=!1;if(a<0&&(s=!0,a=-a),a>.999999)o=1-i,r=s?-i:i;else{var c=Math.acos(a),l=1/Math.sin(c);o=Math.sin((1-i)*c)*l,r=s?-Math.sin(i*c)*l:Math.sin(i*c)*l}n.x=o*e.x+r*t.x,n.y=o*e.y+r*t.y,n.z=o*e.z+r*t.z,n.w=o*e.w+r*t.w},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h,t.w*c+n.w*l+i.w*u+r.w*h)},e}(),h=function(){function e(){this._isIdentity=!1,this._isIdentityDirty=!0,this._isIdentity3x2=!0,this._isIdentity3x2Dirty=!0,this.updateFlag=-1,this._m=new Float32Array(16),this._updateIdentityStatus(!1)}return Object.defineProperty(e.prototype,"m",{get:function(){return this._m},enumerable:!0,configurable:!0}),e.prototype._markAsUpdated=function(){this.updateFlag=e._updateFlagSeed++,this._isIdentity=!1,this._isIdentity3x2=!1,this._isIdentityDirty=!0,this._isIdentity3x2Dirty=!0},e.prototype._updateIdentityStatus=function(t,i,n,r){void 0===i&&(i=!1),void 0===n&&(n=!1),void 0===r&&(r=!0),this.updateFlag=e._updateFlagSeed++,this._isIdentity=t,this._isIdentity3x2=t||n,this._isIdentityDirty=!this._isIdentity&&i,this._isIdentity3x2Dirty=!this._isIdentity3x2&&r},e.prototype.isIdentity=function(){if(this._isIdentityDirty){this._isIdentityDirty=!1;var e=this._m;this._isIdentity=1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&0===e[12]&&0===e[13]&&0===e[14]&&1===e[15]}return this._isIdentity},e.prototype.isIdentityAs3x2=function(){return this._isIdentity3x2Dirty&&(this._isIdentity3x2Dirty=!1,1!==this._m[0]||1!==this._m[5]||1!==this._m[15]?this._isIdentity3x2=!1:0!==this._m[1]||0!==this._m[2]||0!==this._m[3]||0!==this._m[4]||0!==this._m[6]||0!==this._m[7]||0!==this._m[8]||0!==this._m[9]||0!==this._m[10]||0!==this._m[11]||0!==this._m[12]||0!==this._m[13]||0!==this._m[14]?this._isIdentity3x2=!1:this._isIdentity3x2=!0),this._isIdentity3x2},e.prototype.determinant=function(){if(!0===this._isIdentity)return 1;var e=this._m,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],s=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11],f=e[12],p=e[13],_=e[14],m=e[15],g=h*m-_*d,v=u*m-p*d,y=u*_-p*h,b=l*m-f*d,T=l*_-h*f,E=l*p-f*u;return t*+(a*g-s*v+c*y)+i*-(o*g-s*b+c*T)+n*+(o*v-a*b+c*E)+r*-(o*y-a*T+s*E)},e.prototype.toArray=function(){return this._m},e.prototype.asArray=function(){return this._m},e.prototype.invert=function(){return this.invertToRef(this),this},e.prototype.reset=function(){return e.FromValuesToRef(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,this),this._updateIdentityStatus(!1),this},e.prototype.add=function(t){var i=new e;return this.addToRef(t,i),i},e.prototype.addToRef=function(e,t){for(var i=this._m,n=t._m,r=e.m,o=0;o<16;o++)n[o]=i[o]+r[o];return t._markAsUpdated(),this},e.prototype.addToSelf=function(e){for(var t=this._m,i=e.m,n=0;n<16;n++)t[n]+=i[n];return this._markAsUpdated(),this},e.prototype.invertToRef=function(t){if(!0===this._isIdentity)return e.IdentityToRef(t),this;var i=this._m,n=i[0],r=i[1],o=i[2],a=i[3],s=i[4],c=i[5],l=i[6],u=i[7],h=i[8],d=i[9],f=i[10],p=i[11],_=i[12],m=i[13],g=i[14],v=i[15],y=f*v-g*p,b=d*v-m*p,T=d*g-m*f,E=h*v-_*p,x=h*g-f*_,P=h*m-_*d,A=+(c*y-l*b+u*T),S=-(s*y-l*E+u*x),C=+(s*b-c*E+u*P),R=-(s*T-c*x+l*P),O=n*A+r*S+o*C+a*R;if(0===O)return t.copyFrom(this),this;var M=1/O,I=l*v-g*u,D=c*v-m*u,w=c*g-m*l,L=s*v-_*u,N=s*g-_*l,F=s*m-_*c,B=l*p-f*u,U=c*p-d*u,V=c*f-d*l,k=s*p-h*u,z=s*f-h*l,G=s*d-h*c,j=-(r*y-o*b+a*T),W=+(n*y-o*E+a*x),X=-(n*b-r*E+a*P),H=+(n*T-r*x+o*P),Y=+(r*I-o*D+a*w),K=-(n*I-o*L+a*N),Q=+(n*D-r*L+a*F),q=-(n*w-r*N+o*F),Z=-(r*B-o*U+a*V),J=+(n*B-o*k+a*z),$=-(n*U-r*k+a*G),ee=+(n*V-r*z+o*G);return e.FromValuesToRef(A*M,j*M,Y*M,Z*M,S*M,W*M,K*M,J*M,C*M,X*M,Q*M,$*M,R*M,H*M,q*M,ee*M,t),this},e.prototype.addAtIndex=function(e,t){return this._m[e]+=t,this._markAsUpdated(),this},e.prototype.multiplyAtIndex=function(e,t){return this._m[e]*=t,this._markAsUpdated(),this},e.prototype.setTranslationFromFloats=function(e,t,i){return this._m[12]=e,this._m[13]=t,this._m[14]=i,this._markAsUpdated(),this},e.prototype.addTranslationFromFloats=function(e,t,i){return this._m[12]+=e,this._m[13]+=t,this._m[14]+=i,this._markAsUpdated(),this},e.prototype.setTranslation=function(e){return this.setTranslationFromFloats(e.x,e.y,e.z)},e.prototype.getTranslation=function(){return new c(this._m[12],this._m[13],this._m[14])},e.prototype.getTranslationToRef=function(e){return e.x=this._m[12],e.y=this._m[13],e.z=this._m[14],this},e.prototype.removeRotationAndScaling=function(){var t=this.m;return e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t[12],t[13],t[14],t[15],this),this._updateIdentityStatus(0===t[12]&&0===t[13]&&0===t[14]&&1===t[15]),this},e.prototype.multiply=function(t){var i=new e;return this.multiplyToRef(t,i),i},e.prototype.copyFrom=function(e){e.copyToArray(this._m);var t=e;return this._updateIdentityStatus(t._isIdentity,t._isIdentityDirty,t._isIdentity3x2,t._isIdentity3x2Dirty),this},e.prototype.copyToArray=function(e,t){void 0===t&&(t=0);var i=this._m;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],this},e.prototype.multiplyToRef=function(e,t){return this._isIdentity?(t.copyFrom(e),this):e._isIdentity?(t.copyFrom(this),this):(this.multiplyToArray(e,t._m,0),t._markAsUpdated(),this)},e.prototype.multiplyToArray=function(e,t,i){var n=this._m,r=e.m,o=n[0],a=n[1],s=n[2],c=n[3],l=n[4],u=n[5],h=n[6],d=n[7],f=n[8],p=n[9],_=n[10],m=n[11],g=n[12],v=n[13],y=n[14],b=n[15],T=r[0],E=r[1],x=r[2],P=r[3],A=r[4],S=r[5],C=r[6],R=r[7],O=r[8],M=r[9],I=r[10],D=r[11],w=r[12],L=r[13],N=r[14],F=r[15];return t[i]=o*T+a*A+s*O+c*w,t[i+1]=o*E+a*S+s*M+c*L,t[i+2]=o*x+a*C+s*I+c*N,t[i+3]=o*P+a*R+s*D+c*F,t[i+4]=l*T+u*A+h*O+d*w,t[i+5]=l*E+u*S+h*M+d*L,t[i+6]=l*x+u*C+h*I+d*N,t[i+7]=l*P+u*R+h*D+d*F,t[i+8]=f*T+p*A+_*O+m*w,t[i+9]=f*E+p*S+_*M+m*L,t[i+10]=f*x+p*C+_*I+m*N,t[i+11]=f*P+p*R+_*D+m*F,t[i+12]=g*T+v*A+y*O+b*w,t[i+13]=g*E+v*S+y*M+b*L,t[i+14]=g*x+v*C+y*I+b*N,t[i+15]=g*P+v*R+y*D+b*F,this},e.prototype.equals=function(e){var t=e;if(!t)return!1;if((this._isIdentity||t._isIdentity)&&!this._isIdentityDirty&&!t._isIdentityDirty)return this._isIdentity&&t._isIdentity;var i=this.m,n=t.m;return i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]&&i[3]===n[3]&&i[4]===n[4]&&i[5]===n[5]&&i[6]===n[6]&&i[7]===n[7]&&i[8]===n[8]&&i[9]===n[9]&&i[10]===n[10]&&i[11]===n[11]&&i[12]===n[12]&&i[13]===n[13]&&i[14]===n[14]&&i[15]===n[15]},e.prototype.clone=function(){var t=new e;return t.copyFrom(this),t},e.prototype.getClassName=function(){return"Matrix"},e.prototype.getHashCode=function(){for(var e=0|this._m[0],t=1;t<16;t++)e=397*e^(0|this._m[t]);return e},e.prototype.decompose=function(t,i,n){if(this._isIdentity)return n&&n.setAll(0),t&&t.setAll(1),i&&i.copyFromFloats(0,0,0,1),!0;var r=this._m;if(n&&n.copyFromFloats(r[12],r[13],r[14]),(t=t||d.Vector3[0]).x=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),t.y=Math.sqrt(r[4]*r[4]+r[5]*r[5]+r[6]*r[6]),t.z=Math.sqrt(r[8]*r[8]+r[9]*r[9]+r[10]*r[10]),this.determinant()<=0&&(t.y*=-1),0===t.x||0===t.y||0===t.z)return i&&i.copyFromFloats(0,0,0,1),!1;if(i){var o=1/t.x,a=1/t.y,s=1/t.z;e.FromValuesToRef(r[0]*o,r[1]*o,r[2]*o,0,r[4]*a,r[5]*a,r[6]*a,0,r[8]*s,r[9]*s,r[10]*s,0,0,0,0,1,d.Matrix[0]),u.FromRotationMatrixToRef(d.Matrix[0],i)}return!0},e.prototype.getRow=function(e){if(e<0||e>3)return null;var t=4*e;return new l(this._m[t+0],this._m[t+1],this._m[t+2],this._m[t+3])},e.prototype.setRow=function(e,t){return this.setRowFromFloats(e,t.x,t.y,t.z,t.w)},e.prototype.transpose=function(){return e.Transpose(this)},e.prototype.transposeToRef=function(t){return e.TransposeToRef(this,t),this},e.prototype.setRowFromFloats=function(e,t,i,n,r){if(e<0||e>3)return this;var o=4*e;return this._m[o+0]=t,this._m[o+1]=i,this._m[o+2]=n,this._m[o+3]=r,this._markAsUpdated(),this},e.prototype.scale=function(t){var i=new e;return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.scaleAndAddToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]+=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.toNormalMatrix=function(t){var i=d.Matrix[0];this.invertToRef(i),i.transposeToRef(t);var n=t._m;e.FromValuesToRef(n[0],n[1],n[2],0,n[4],n[5],n[6],0,n[8],n[9],n[10],0,0,0,0,1,t)},e.prototype.getRotationMatrix=function(){var t=new e;return this.getRotationMatrixToRef(t),t},e.prototype.getRotationMatrixToRef=function(t){var i=d.Vector3[0];if(!this.decompose(i))return e.IdentityToRef(t),this;var n=this._m,r=1/i.x,o=1/i.y,a=1/i.z;return e.FromValuesToRef(n[0]*r,n[1]*r,n[2]*r,0,n[4]*o,n[5]*o,n[6]*o,0,n[8]*a,n[9]*a,n[10]*a,0,0,0,0,1,t),this},e.prototype.toggleModelMatrixHandInPlace=function(){var e=this._m;e[2]*=-1,e[6]*=-1,e[8]*=-1,e[9]*=-1,e[14]*=-1,this._markAsUpdated()},e.prototype.toggleProjectionMatrixHandInPlace=function(){var e=this._m;e[8]*=-1,e[9]*=-1,e[10]*=-1,e[11]*=-1,this._markAsUpdated()},e.FromArray=function(t,i){void 0===i&&(i=0);var n=new e;return e.FromArrayToRef(t,i,n),n},e.FromArrayToRef=function(e,t,i){for(var n=0;n<16;n++)i._m[n]=e[n+t];i._markAsUpdated()},e.FromFloat32ArrayToRefScaled=function(e,t,i,n){for(var r=0;r<16;r++)n._m[r]=e[r+t]*i;n._markAsUpdated()},Object.defineProperty(e,"IdentityReadOnly",{get:function(){return e._identityReadOnly},enumerable:!0,configurable:!0}),e.FromValuesToRef=function(e,t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=m._m;g[0]=e,g[1]=t,g[2]=i,g[3]=n,g[4]=r,g[5]=o,g[6]=a,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=h,g[12]=d,g[13]=f,g[14]=p,g[15]=_,m._markAsUpdated()},e.FromValues=function(t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=new e,v=g._m;return v[0]=t,v[1]=i,v[2]=n,v[3]=r,v[4]=o,v[5]=a,v[6]=s,v[7]=c,v[8]=l,v[9]=u,v[10]=h,v[11]=d,v[12]=f,v[13]=p,v[14]=_,v[15]=m,g._markAsUpdated(),g},e.Compose=function(t,i,n){var r=new e;return e.ComposeToRef(t,i,n,r),r},e.ComposeToRef=function(e,t,i,n){var r=n._m,o=t.x,a=t.y,s=t.z,c=t.w,l=o+o,u=a+a,h=s+s,d=o*l,f=o*u,p=o*h,_=a*u,m=a*h,g=s*h,v=c*l,y=c*u,b=c*h,T=e.x,E=e.y,x=e.z;r[0]=(1-(_+g))*T,r[1]=(f+b)*T,r[2]=(p-y)*T,r[3]=0,r[4]=(f-b)*E,r[5]=(1-(d+g))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(p+y)*x,r[9]=(m-v)*x,r[10]=(1-(d+_))*x,r[11]=0,r[12]=i.x,r[13]=i.y,r[14]=i.z,r[15]=1,n._markAsUpdated()},e.Identity=function(){var t=e.FromValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return t._updateIdentityStatus(!0),t},e.IdentityToRef=function(t){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,t),t._updateIdentityStatus(!0)},e.Zero=function(){var t=e.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return t._updateIdentityStatus(!1),t},e.RotationX=function(t){var i=new e;return e.RotationXToRef(t,i),i},e.Invert=function(t){var i=new e;return t.invertToRef(i),i},e.RotationXToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(1,0,0,0,0,r,n,0,0,-n,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationY=function(t){var i=new e;return e.RotationYToRef(t,i),i},e.RotationYToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,0,-n,0,0,1,0,0,n,0,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationZ=function(t){var i=new e;return e.RotationZToRef(t,i),i},e.RotationZToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,n,0,0,-n,r,0,0,0,0,1,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationAxis=function(t,i){var n=new e;return e.RotationAxisToRef(t,i,n),n},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(-t),r=Math.cos(-t),o=1-r;e.normalize();var a=i._m;a[0]=e.x*e.x*o+r,a[1]=e.x*e.y*o-e.z*n,a[2]=e.x*e.z*o+e.y*n,a[3]=0,a[4]=e.y*e.x*o+e.z*n,a[5]=e.y*e.y*o+r,a[6]=e.y*e.z*o-e.x*n,a[7]=0,a[8]=e.z*e.x*o-e.y*n,a[9]=e.z*e.y*o+e.x*n,a[10]=e.z*e.z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated()},e.RotationAlignToRef=function(e,t,i){var n=c.Cross(t,e),r=c.Dot(t,e),o=1/(1+r),a=i._m;a[0]=n.x*n.x*o+r,a[1]=n.y*n.x*o-n.z,a[2]=n.z*n.x*o+n.y,a[3]=0,a[4]=n.x*n.y*o+n.z,a[5]=n.y*n.y*o+r,a[6]=n.z*n.y*o-n.x,a[7]=0,a[8]=n.x*n.z*o-n.y,a[9]=n.y*n.z*o+n.x,a[10]=n.z*n.z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated()},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){u.RotationYawPitchRollToRef(e,t,i,d.Quaternion[0]),d.Quaternion[0].toRotationMatrix(n)},e.Scaling=function(t,i,n){var r=new e;return e.ScalingToRef(t,i,n,r),r},e.ScalingToRef=function(t,i,n,r){e.FromValuesToRef(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1,r),r._updateIdentityStatus(1===t&&1===i&&1===n)},e.Translation=function(t,i,n){var r=new e;return e.TranslationToRef(t,i,n,r),r},e.TranslationToRef=function(t,i,n,r){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t,i,n,1,r),r._updateIdentityStatus(0===t&&0===i&&0===n)},e.Lerp=function(t,i,n){var r=new e;return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){for(var r=n._m,o=e.m,a=t.m,s=0;s<16;s++)r[s]=o[s]*(1-i)+a[s]*i;n._markAsUpdated()},e.DecomposeLerp=function(t,i,n){var r=new e;return e.DecomposeLerpToRef(t,i,n,r),r},e.DecomposeLerpToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Quaternion[0],s=d.Vector3[1];t.decompose(o,a,s);var l=d.Vector3[2],h=d.Quaternion[1],f=d.Vector3[3];i.decompose(l,h,f);var p=d.Vector3[4];c.LerpToRef(o,l,n,p);var _=d.Quaternion[2];u.SlerpToRef(a,h,n,_);var m=d.Vector3[5];c.LerpToRef(s,f,n,m),e.ComposeToRef(p,_,m,r)},e.LookAtLH=function(t,i,n){var r=new e;return e.LookAtLHToRef(t,i,n,r),r},e.LookAtLHToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Vector3[1],s=d.Vector3[2];i.subtractToRef(t,s),s.normalize(),c.CrossToRef(n,s,o);var l=o.lengthSquared();0===l?o.x=1:o.normalizeFromLength(Math.sqrt(l)),c.CrossToRef(s,o,a),a.normalize();var u=-c.Dot(o,t),h=-c.Dot(a,t),f=-c.Dot(s,t);e.FromValuesToRef(o.x,a.x,s.x,0,o.y,a.y,s.y,0,o.z,a.z,s.z,0,u,h,f,1,r)},e.LookAtRH=function(t,i,n){var r=new e;return e.LookAtRHToRef(t,i,n,r),r},e.LookAtRHToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Vector3[1],s=d.Vector3[2];t.subtractToRef(i,s),s.normalize(),c.CrossToRef(n,s,o);var l=o.lengthSquared();0===l?o.x=1:o.normalizeFromLength(Math.sqrt(l)),c.CrossToRef(s,o,a),a.normalize();var u=-c.Dot(o,t),h=-c.Dot(a,t),f=-c.Dot(s,t);e.FromValuesToRef(o.x,a.x,s.x,0,o.y,a.y,s.y,0,o.z,a.z,s.z,0,u,h,f,1,r)},e.OrthoLH=function(t,i,n,r){var o=new e;return e.OrthoLHToRef(t,i,n,r,o),o},e.OrthoLHToRef=function(t,i,n,r,o){var a=2/t,s=2/i,c=2/(r-n),l=-(r+n)/(r-n);e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,0,0,0,l,1,o),o._updateIdentityStatus(1===a&&1===s&&1===c&&0===l)},e.OrthoOffCenterLH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterLHToRef=function(t,i,n,r,o,a,s){var c=2/(i-t),l=2/(r-n),u=2/(a-o),h=-(a+o)/(a-o),d=(t+i)/(t-i),f=(r+n)/(n-r);e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,u,0,d,f,h,1,s),s._markAsUpdated()},e.OrthoOffCenterRH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterRHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterRHToRef=function(t,i,n,r,o,a,s){e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s._m[10]*=-1},e.PerspectiveLH=function(t,i,n,r){var o=new e,a=2*n/t,s=2*n/i,c=(r+n)/(r-n),l=-2*r*n/(r-n);return e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,1,0,0,l,0,o),o._updateIdentityStatus(!1),o},e.PerspectiveFovLH=function(t,i,n,r){var o=new e;return e.PerspectiveFovLHToRef(t,i,n,r,o),o},e.PerspectiveFovLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovReverseLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,1,0,0,1,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovRH=function(t,i,n,r){var o=new e;return e.PerspectiveFovRHToRef(t,i,n,r,o),o},e.PerspectiveFovRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=-(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,-1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovReverseRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,-1,0,0,-1,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovWebVRToRef=function(e,t,i,n,r){void 0===r&&(r=!1);var o=r?-1:1,a=Math.tan(e.upDegrees*Math.PI/180),s=Math.tan(e.downDegrees*Math.PI/180),c=Math.tan(e.leftDegrees*Math.PI/180),l=Math.tan(e.rightDegrees*Math.PI/180),u=2/(c+l),h=2/(a+s),d=n._m;d[0]=u,d[1]=d[2]=d[3]=d[4]=0,d[5]=h,d[6]=d[7]=0,d[8]=(c-l)*u*.5,d[9]=-(a-s)*h*.5,d[10]=-i/(t-i),d[11]=1*o,d[12]=d[13]=d[15]=0,d[14]=-2*i*t/(i-t),n._markAsUpdated()},e.GetFinalMatrix=function(t,i,n,r,o,a){var s=t.width,c=t.height,l=t.x,u=t.y,h=e.FromValues(s/2,0,0,0,0,-c/2,0,0,0,0,a-o,0,l+s/2,c/2+u,o,1),f=d.Matrix[0];return i.multiplyToRef(n,f),f.multiplyToRef(r,f),f.multiply(h)},e.GetAsMatrix2x2=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[4],t[5]])},e.GetAsMatrix3x3=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[2],t[4],t[5],t[6],t[8],t[9],t[10]])},e.Transpose=function(t){var i=new e;return e.TransposeToRef(t,i),i},e.TransposeToRef=function(e,t){var i=t._m,n=e.m;i[0]=n[0],i[1]=n[4],i[2]=n[8],i[3]=n[12],i[4]=n[1],i[5]=n[5],i[6]=n[9],i[7]=n[13],i[8]=n[2],i[9]=n[6],i[10]=n[10],i[11]=n[14],i[12]=n[3],i[13]=n[7],i[14]=n[11],i[15]=n[15],t._updateIdentityStatus(e._isIdentity,e._isIdentityDirty)},e.Reflection=function(t){var i=new e;return e.ReflectionToRef(t,i),i},e.ReflectionToRef=function(t,i){t.normalize();var n=t.normal.x,r=t.normal.y,o=t.normal.z,a=-2*n,s=-2*r,c=-2*o;e.FromValuesToRef(a*n+1,s*n,c*n,0,a*r,s*r+1,c*r,0,a*o,s*o,c*o+1,0,a*t.d,s*t.d,c*t.d,1,i)},e.FromXYZAxesToRef=function(t,i,n,r){e.FromValuesToRef(t.x,t.y,t.z,0,i.x,i.y,i.z,0,n.x,n.y,n.z,0,0,0,0,1,r)},e.FromQuaternionToRef=function(e,t){var i=e.x*e.x,n=e.y*e.y,r=e.z*e.z,o=e.x*e.y,a=e.z*e.w,s=e.z*e.x,c=e.y*e.w,l=e.y*e.z,u=e.x*e.w;t._m[0]=1-2*(n+r),t._m[1]=2*(o+a),t._m[2]=2*(s-c),t._m[3]=0,t._m[4]=2*(o-a),t._m[5]=1-2*(r+i),t._m[6]=2*(l+u),t._m[7]=0,t._m[8]=2*(s+c),t._m[9]=2*(l-u),t._m[10]=1-2*(n+i),t._m[11]=0,t._m[12]=0,t._m[13]=0,t._m[14]=0,t._m[15]=1,t._markAsUpdated()},e._updateFlagSeed=0,e._identityReadOnly=e.Identity(),e}(),d=function(){function e(){}return e.Vector3=o.a.BuildArray(6,c.Zero),e.Matrix=o.a.BuildArray(2,h.Identity),e.Quaternion=o.a.BuildArray(3,u.Zero),e}(),f=function(){function e(){}return e.Vector2=o.a.BuildArray(3,s.Zero),e.Vector3=o.a.BuildArray(13,c.Zero),e.Vector4=o.a.BuildArray(3,l.Zero),e.Quaternion=o.a.BuildArray(2,u.Zero),e.Matrix=o.a.BuildArray(8,h.Identity),e}();a.a.RegisteredTypes["BABYLON.Vector2"]=s,a.a.RegisteredTypes["BABYLON.Vector3"]=c,a.a.RegisteredTypes["BABYLON.Vector4"]=l,a.a.RegisteredTypes["BABYLON.Matrix"]=h},function(e,t,i){"use strict";i.d(t,"d",function(){return r}),i.d(t,"a",function(){return o}),i.d(t,"c",function(){return a}),i.d(t,"b",function(){return s}),i.d(t,"e",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ FRONTSIDE; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BACKSIDE; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ DOUBLESIDE; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ PERSPECTIVE_CAMERA; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ ORTHOGRAPHIC_CAMERA; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ FOGMODE_LINEAR; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ WORLDSPACE; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ LOCALSPACE; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ setupBabylonMods; });

// UNUSED EXPORTS: FOGMODE_NONE, FOGMODE_EXP, FOGMODE_EXP2, BONESPACE

// EXTERNAL MODULE: ./src/main.js
var main = __webpack_require__(1);

// EXTERNAL MODULE: ./src/util.js
var util = __webpack_require__(0);

// CONCATENATED MODULE: ./src/shaders.js

function hackShaders(){
	hackShaderAlphaCutoff('shadowMapPixelShader');
	hackShaderAlphaCutoff('depthPixelShader');
	hackDefaultShader();
}

function hackShaderAlphaCutoff(shader){
	hackShaderReplace(shader,
		'if (texture2D(diffuseSampler,vUV).a<0.4)',
		`if (texture2D(diffuseSampler,vUV).a<${mv3d.ALPHA_CUTOFF})`,
	);
}
function hackShaderReplace(shader,find,replace){
	BABYLON.Effect.ShadersStore[shader]=BABYLON.Effect.ShadersStore[shader].replace(find,replace);
}
function hackShaderInsert(shader,find,insert){
	hackShaderReplace(shader,find,`${find}\n${insert}\n`);
}

function hackDefaultShader(){
	// When no diffuse texture, use diffuseColor as baseColor
	hackShaderReplace('defaultPixelShader',
	'vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;',
	`#ifdef DIFFUSE
	vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
	#else
	vec3 finalDiffuse=clamp(diffuseBase+emissiveColor+vAmbientColor,0.0,1.0)*diffuseColor.rgb;
	#endif
	`);
	// When emissive color higher than one, use illumination.
	hackShaderReplace('defaultPixelShader',
		'vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor+refractionColor,alpha);',
		`vec3 mv3d_extra_emissiveColor = max(emissiveColor-1.,0.);
		vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor+mv3d_extra_emissiveColor+refractionColor,0.0,1.0),alpha);`,
	);
}

// EXTERNAL MODULE: ./node_modules/babylonjs/babylon.js
var babylon = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/babylonjs-loaders/babylonjs.loaders.min.js
var babylonjs_loaders_min = __webpack_require__(5);

// CONCATENATED MODULE: ./src/mod_babylon.js







const {
	FRONTSIDE,BACKSIDE,DOUBLESIDE,
} = babylon["Mesh"];

const {
	PERSPECTIVE_CAMERA,
	ORTHOGRAPHIC_CAMERA,
} = babylon["Camera"];

const{
	FOGMODE_NONE,
	FOGMODE_EXP,
	FOGMODE_EXP2,
	FOGMODE_LINEAR,
} = babylon["Scene"];

const {
	WORLD:WORLDSPACE,
    LOCAL:LOCALSPACE,
	BONE:BONESPACE,
} = babylon["Space"];

babylon["Texture"].prototype.crop=function(x=0,y=0,w=0,h=0){
	const { width, height } = this.getBaseSize();
	if(!w)w=width-x;
	if(!h)h=height-y;
	if(main["a" /* default */].EDGE_FIX){ x+=main["a" /* default */].EDGE_FIX;y+=main["a" /* default */].EDGE_FIX;w-=main["a" /* default */].EDGE_FIX*2;h-=main["a" /* default */].EDGE_FIX*2; }
	this.uScale=w/width;
	this.vScale=h/height;
	this.uOffset=x/width;
	this.vOffset=1-y/height-this.vScale;
}

const _mixin_xyz = {
	x:{
		get(){ return this.position?this.position.x:undefined; },
		set(v){ if(this.position){ this.position.x=v; } },
	},
	y:{
		get(){ return this.position?-this.position.z:undefined; },
		set(v){ if(this.position){ this.position.z=-v; } },
	},
	z:{
		get(){ return this.position?this.position.y:undefined; },
		set(v){ if(this.position){ this.position.y=v; } },
	},
};
const _mixin_angles = {
	pitch:{
		get(){ return this.rotation?-Object(util["radtodeg"])(this.rotation.x):undefined; },
		set(v){ if(this.rotation){ this.rotation.x=-Object(util["degtorad"])(v); } },
	},
	yaw:{
		get(){ return this.rotation?-Object(util["radtodeg"])(this.rotation.y):undefined; },
		set(v){  if(this.rotation){ this.rotation.y=-Object(util["degtorad"])(v); } },
	},
	roll:{
		get(){ return this.rotation?-Object(util["radtodeg"])(this.rotation.z):undefined; },
		set(v){  if(this.rotation){ this.rotation.z=-Object(util["degtorad"])(v); } },
	},
}
Object.defineProperties(babylon["Node"].prototype,_mixin_xyz);
Object.defineProperties(babylon["Node"].prototype,_mixin_angles);
Object.defineProperties(babylon["Sprite"].prototype,_mixin_xyz);

// mesh sorting

Object.defineProperty(babylon["Mesh"].prototype,'order',{
	get(){ return this._order; },
	set(v){ this._order=v; this._scene.sortMeshes(); }
});
const meshSorter=(m1,m2)=>(m1._order|0)-(m2._order|0);
babylon["Scene"].prototype.sortMeshes=function(){
	this.meshes.sort(meshSorter);
}
const _addMesh = babylon["Scene"].prototype.addMesh;
babylon["Scene"].prototype.addMesh=function(mesh){
	_addMesh.apply(this,arguments);
	if(typeof mesh._order==='number'){
		this.sortMeshes();
	}
}
const _removeMesh = babylon["Scene"].prototype.removeMesh;
babylon["Scene"].prototype.removeMesh=function(mesh){
	_removeMesh.apply(this,arguments);
	this.sortMeshes();
}

// color
babylon["Color3"].prototype.toNumber=babylon["Color4"].prototype.toNumber=function(){return this.r*255<<16|this.g*255<<8|this.b*255;}

// hack babylon
function setupBabylonMods(){
	hackShaders();
};

babylon["StandardMaterial"].prototype._shouldTurnAlphaTestOn=function(mesh){
	return this.needAlphaTesting();
};



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
module.exports = __webpack_require__(15);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(2)):undefined}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var r=n(0),o=n(2),a=function(){function e(){}return e.Get=function(e,t,n){if(!t||null==n||!t[n])throw new Error(e+": Failed to find index ("+n+")");return t[n]},e.Assign=function(e){if(e)for(var t=0;t<e.length;t++)e[t].index=t},e}(),i=function(){function e(e){this._completePromises=new Array,this._forAssetContainer=!1,this._babylonLights=[],this._disposed=!1,this._state=null,this._extensions=new Array,this._defaultBabylonMaterialData={},this._requests=new Array,this._parent=e}return e.RegisterExtension=function(t,n){e.UnregisterExtension(t)&&r.Logger.Warn("Extension with the name '"+t+"' already exists"),e._RegisteredExtensions[t]={factory:n}},e.UnregisterExtension=function(t){return!!e._RegisteredExtensions[t]&&(delete e._RegisteredExtensions[t],!0)},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gltf",{get:function(){return this._gltf},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bin",{get:function(){return this._bin},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"babylonScene",{get:function(){return this._babylonScene},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rootBabylonMesh",{get:function(){return this._rootBabylonMesh},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){if(!this._disposed){this._disposed=!0;for(var e=0,t=this._requests;e<t.length;e++){t[e].abort()}for(var n in this._requests.length=0,this._completePromises.length=0,this._extensions){var r=this._extensions[n];r.dispose&&r.dispose(),delete this._extensions[n]}delete this._gltf,delete this._babylonScene,delete this._rootBabylonMesh,delete this._progressCallback,this._parent._clear()}},e.prototype.importMeshAsync=function(e,t,n,r,o,a,i){var s=this;return Promise.resolve().then(function(){s._babylonScene=t,s._rootUrl=o,s._fileName=i||"scene",s._progressCallback=a,s._forAssetContainer=n,s._loadData(r);var l=null;if(e){var u={};if(s._gltf.nodes)for(var c=0,f=s._gltf.nodes;c<f.length;c++){var d=f[c];d.name&&(u[d.name]=d.index)}l=(e instanceof Array?e:[e]).map(function(e){var t=u[e];if(void 0===t)throw new Error("Failed to find node '"+e+"'");return t})}return s._loadAsync(l,function(){return{meshes:s._getMeshes(),particleSystems:[],skeletons:s._getSkeletons(),animationGroups:s._getAnimationGroups(),lights:s._babylonLights,transformNodes:s._getTransformNodes()}})})},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){return a._babylonScene=e,a._rootUrl=n,a._fileName=o||"scene",a._progressCallback=r,a._loadData(t),a._loadAsync(null,function(){})})},e.prototype._loadAsync=function(e,t){var n=this;return Promise.resolve().then(function(){n._uniqueRootUrl=-1===n._rootUrl.indexOf("file:")&&n._fileName?n._rootUrl:""+n._rootUrl+Date.now()+"/",n._loadExtensions(),n._checkExtensions();var i=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.READY],s=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.COMPLETE];n._parent._startPerformanceCounter(i),n._parent._startPerformanceCounter(s),n._setState(o.GLTFLoaderState.LOADING),n._extensionsOnLoading();var l=new Array,u=n._babylonScene.blockMaterialDirtyMechanism;if(n._babylonScene.blockMaterialDirtyMechanism=!0,e)l.push(n.loadSceneAsync("/nodes",{nodes:e,index:-1}));else if(null!=n._gltf.scene||n._gltf.scenes&&n._gltf.scenes[0]){var c=a.Get("/scene",n._gltf.scenes,n._gltf.scene||0);l.push(n.loadSceneAsync("/scenes/"+c.index,c))}n._babylonScene.blockMaterialDirtyMechanism=u,n._parent.compileMaterials&&l.push(n._compileMaterialsAsync()),n._parent.compileShadowGenerators&&l.push(n._compileShadowGeneratorsAsync());var f=Promise.all(l).then(function(){return n._rootBabylonMesh&&n._rootBabylonMesh.setEnabled(!0),n._setState(o.GLTFLoaderState.READY),n._extensionsOnReady(),n._startAnimations(),t()});return f.then(function(){n._parent._endPerformanceCounter(i),r.Tools.SetImmediate(function(){n._disposed||Promise.all(n._completePromises).then(function(){n._parent._endPerformanceCounter(s),n._setState(o.GLTFLoaderState.COMPLETE),n._parent.onCompleteObservable.notifyObservers(void 0),n._parent.onCompleteObservable.clear(),n.dispose()},function(e){n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose()})})}),f},function(e){throw n._disposed||(n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose()),e})},e.prototype._loadData=function(e){if(this._gltf=e.json,this._setupData(),e.bin){var t=this._gltf.buffers;if(t&&t[0]&&!t[0].uri){var n=t[0];(n.byteLength<e.bin.byteLength-3||n.byteLength>e.bin.byteLength)&&r.Logger.Warn("Binary buffer length ("+n.byteLength+") from JSON does not match chunk length ("+e.bin.byteLength+")"),this._bin=e.bin}else r.Logger.Warn("Unexpected BIN chunk")}},e.prototype._setupData=function(){if(a.Assign(this._gltf.accessors),a.Assign(this._gltf.animations),a.Assign(this._gltf.buffers),a.Assign(this._gltf.bufferViews),a.Assign(this._gltf.cameras),a.Assign(this._gltf.images),a.Assign(this._gltf.materials),a.Assign(this._gltf.meshes),a.Assign(this._gltf.nodes),a.Assign(this._gltf.samplers),a.Assign(this._gltf.scenes),a.Assign(this._gltf.skins),a.Assign(this._gltf.textures),this._gltf.nodes){for(var e={},t=0,n=this._gltf.nodes;t<n.length;t++){if((u=n[t]).children)for(var r=0,o=u.children;r<o.length;r++){e[o[r]]=u.index}}for(var i=this._createRootNode(),s=0,l=this._gltf.nodes;s<l.length;s++){var u,c=e[(u=l[s]).index];u.parent=void 0===c?i:this._gltf.nodes[c]}}},e.prototype._loadExtensions=function(){for(var t in e._RegisteredExtensions){var n=e._RegisteredExtensions[t].factory(this);n.name!==t&&r.Logger.Warn("The name of the glTF loader extension instance does not match the registered name: "+n.name+" !== "+t),this._extensions.push(n),this._parent.onExtensionLoadedObservable.notifyObservers(n)}this._extensions.sort(function(e,t){return(e.order||Number.MAX_VALUE)-(t.order||Number.MAX_VALUE)}),this._parent.onExtensionLoadedObservable.clear()},e.prototype._checkExtensions=function(){if(this._gltf.extensionsRequired)for(var e=function(e){if(!t._extensions.some(function(t){return t.name===e&&t.enabled}))throw new Error("Require extension "+e+" is not available")},t=this,n=0,r=this._gltf.extensionsRequired;n<r.length;n++){e(r[n])}},e.prototype._setState=function(e){this._state=e,this.log(o.GLTFLoaderState[this._state])},e.prototype._createRootNode=function(){this._babylonScene._blockEntityCollection=this._forAssetContainer,this._rootBabylonMesh=new r.Mesh("__root__",this._babylonScene),this._babylonScene._blockEntityCollection=!1,this._rootBabylonMesh.setEnabled(!1);var t={_babylonTransformNode:this._rootBabylonMesh,index:-1};switch(this._parent.coordinateSystemMode){case o.GLTFLoaderCoordinateSystemMode.AUTO:this._babylonScene.useRightHandedSystem||(t.rotation=[0,1,0,0],t.scale=[1,1,-1],e._LoadTransform(t,this._rootBabylonMesh));break;case o.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED:this._babylonScene.useRightHandedSystem=!0;break;default:throw new Error("Invalid coordinate system mode ("+this._parent.coordinateSystemMode+")")}return this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh),t},e.prototype.loadSceneAsync=function(e,t){var n=this,r=this._extensionsLoadSceneAsync(e,t);if(r)return r;var o=new Array;if(this.logOpen(e+" "+(t.name||"")),t.nodes)for(var i=0,s=t.nodes;i<s.length;i++){var l=s[i],u=a.Get(e+"/nodes/"+l,this._gltf.nodes,l);o.push(this.loadNodeAsync("/nodes/"+u.index,u,function(e){e.parent=n._rootBabylonMesh}))}if(this._gltf.nodes)for(var c=0,f=this._gltf.nodes;c<f.length;c++){if((u=f[c])._babylonTransformNode&&u._babylonBones)for(var d=0,h=u._babylonBones;d<h.length;d++){h[d].linkTransformNode(u._babylonTransformNode)}}return o.push(this._loadAnimationsAsync()),this.logClose(),Promise.all(o).then(function(){})},e.prototype._forEachPrimitive=function(e,t){if(e._primitiveBabylonMeshes)for(var n=0,r=e._primitiveBabylonMeshes;n<r.length;n++){t(r[n])}},e.prototype._getMeshes=function(){var e=new Array;e.push(this._rootBabylonMesh);var t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];this._forEachPrimitive(o,function(t){e.push(t)})}return e},e.prototype._getTransformNodes=function(){var e=new Array,t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonTransformNode&&"TransformNode"===o._babylonTransformNode.getClassName()&&e.push(o._babylonTransformNode)}return e},e.prototype._getSkeletons=function(){var e=new Array,t=this._gltf.skins;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._data&&e.push(o._data.babylonSkeleton)}return e},e.prototype._getAnimationGroups=function(){var e=new Array,t=this._gltf.animations;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonAnimationGroup&&e.push(o._babylonAnimationGroup)}return e},e.prototype._startAnimations=function(){switch(this._parent.animationStartMode){case o.GLTFLoaderAnimationStartMode.NONE:break;case o.GLTFLoaderAnimationStartMode.FIRST:0!==(e=this._getAnimationGroups()).length&&e[0].start(!0);break;case o.GLTFLoaderAnimationStartMode.ALL:for(var e,t=0,n=e=this._getAnimationGroups();t<n.length;t++){n[t].start(!0)}break;default:return void r.Logger.Error("Invalid animation start mode ("+this._parent.animationStartMode+")")}},e.prototype.loadNodeAsync=function(t,n,o){var i=this;void 0===o&&(o=function(){});var s=this._extensionsLoadNodeAsync(t,n,o);if(s)return s;if(n._babylonTransformNode)throw new Error(t+": Invalid recursive node hierarchy");var l=new Array;this.logOpen(t+" "+(n.name||""));var u=function(r){if(e.AddPointerMetadata(r,t),e._LoadTransform(n,r),null!=n.camera){var s=a.Get(t+"/camera",i._gltf.cameras,n.camera);l.push(i.loadCameraAsync("/cameras/"+s.index,s,function(e){e.parent=r}))}if(n.children)for(var u=0,c=n.children;u<c.length;u++){var f=c[u],d=a.Get(t+"/children/"+f,i._gltf.nodes,f);l.push(i.loadNodeAsync("/nodes/"+d.index,d,function(e){e.parent=r}))}o(r)};if(null==n.mesh){var c=n.name||"node"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer,n._babylonTransformNode=new r.TransformNode(c,this._babylonScene),this._babylonScene._blockEntityCollection=!1,u(n._babylonTransformNode)}else{var f=a.Get(t+"/mesh",this._gltf.meshes,n.mesh);l.push(this._loadMeshAsync("/meshes/"+f.index,n,f,u))}return this.logClose(),Promise.all(l).then(function(){return i._forEachPrimitive(n,function(e){e.refreshBoundingInfo(!0)}),n._babylonTransformNode})},e.prototype._loadMeshAsync=function(e,t,n,o){var i=n.primitives;if(!i||!i.length)throw new Error(e+": Primitives are missing");null==i[0].index&&a.Assign(i);var s=new Array;this.logOpen(e+" "+(n.name||""));var l=t.name||"node"+t.index;if(1===i.length){var u=n.primitives[0];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l,t,n,u,function(e){t._babylonTransformNode=e,t._primitiveBabylonMeshes=[e]}))}else{t._babylonTransformNode=new r.TransformNode(l,this._babylonScene),t._primitiveBabylonMeshes=[];for(var c=0,f=i;c<f.length;c++){u=f[c];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l+"_primitive"+u.index,t,n,u,function(e){e.parent=t._babylonTransformNode,t._primitiveBabylonMeshes.push(e)}))}}if(null!=t.skin){var d=a.Get(e+"/skin",this._gltf.skins,t.skin);s.push(this._loadSkinAsync("/skins/"+d.index,t,d))}return o(t._babylonTransformNode),this.logClose(),Promise.all(s).then(function(){return t._babylonTransformNode})},e.prototype._loadMeshPrimitiveAsync=function(t,n,o,i,s,l){var u=this,c=this._extensionsLoadMeshPrimitiveAsync(t,n,o,i,s,l);if(c)return c;this.logOpen(""+t);var f,d,h=this._parent.createInstances&&null==o.skin&&!i.primitives[0].targets;if(h&&s._instanceData)f=s._instanceData.babylonSourceMesh.createInstance(n),d=s._instanceData.promise;else{var p=new Array;this._babylonScene._blockEntityCollection=this._forAssetContainer;var m=new r.Mesh(n,this._babylonScene);this._babylonScene._blockEntityCollection=!1,m.overrideMaterialSideOrientation=this._babylonScene.useRightHandedSystem?r.Material.CounterClockWiseSideOrientation:r.Material.ClockWiseSideOrientation,this._createMorphTargets(t,o,i,s,m),p.push(this._loadVertexDataAsync(t,s,m).then(function(e){return u._loadMorphTargetsAsync(t,s,m,e).then(function(){e.applyToMesh(m)})}));var _=e._GetDrawMode(t,s.mode);if(null==s.material){var y=this._defaultBabylonMaterialData[_];y||(y=this._createDefaultMaterial("__GLTFLoader._default",_),this._parent.onMaterialLoadedObservable.notifyObservers(y),this._defaultBabylonMaterialData[_]=y),m.material=y}else{var b=a.Get(t+"/material",this._gltf.materials,s.material);p.push(this._loadMaterialAsync("/materials/"+b.index,b,m,_,function(e){m.material=e}))}d=Promise.all(p),h&&(s._instanceData={babylonSourceMesh:m,promise:d}),f=m}return e.AddPointerMetadata(f,t),this._parent.onMeshLoadedObservable.notifyObservers(f),l(f),this.logClose(),d.then(function(){return f})},e.prototype._loadVertexDataAsync=function(e,t,n){var o=this,i=this._extensionsLoadVertexDataAsync(e,t,n);if(i)return i;var s=t.attributes;if(!s)throw new Error(e+": Attributes are missing");var l=new Array,u=new r.Geometry(n.name,this._babylonScene);if(null==t.indices)n.isUnIndexed=!0;else{var c=a.Get(e+"/indices",this._gltf.accessors,t.indices);l.push(this._loadIndicesAccessorAsync("/accessors/"+c.index,c).then(function(e){u.setIndices(e)}))}var f=function(t,i,c){if(null!=s[t]){n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(i)&&n._delayInfo.push(i);var f=a.Get(e+"/attributes/"+t,o._gltf.accessors,s[t]);l.push(o._loadVertexAccessorAsync("/accessors/"+f.index,f,i).then(function(e){u.setVerticesBuffer(e,f.count)})),i==r.VertexBuffer.MatricesIndicesExtraKind&&(n.numBoneInfluencers=8),c&&c(f)}};return f("POSITION",r.VertexBuffer.PositionKind),f("NORMAL",r.VertexBuffer.NormalKind),f("TANGENT",r.VertexBuffer.TangentKind),f("TEXCOORD_0",r.VertexBuffer.UVKind),f("TEXCOORD_1",r.VertexBuffer.UV2Kind),f("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),f("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),f("JOINTS_1",r.VertexBuffer.MatricesIndicesExtraKind),f("WEIGHTS_1",r.VertexBuffer.MatricesWeightsExtraKind),f("COLOR_0",r.VertexBuffer.ColorKind,function(e){"VEC4"===e.type&&(n.hasVertexAlpha=!0)}),Promise.all(l).then(function(){return u})},e.prototype._createMorphTargets=function(e,t,n,o,a){if(o.targets){if(null==t._numMorphTargets)t._numMorphTargets=o.targets.length;else if(o.targets.length!==t._numMorphTargets)throw new Error(e+": Primitives do not have the same number of targets");var i=n.extras?n.extras.targetNames:null;a.morphTargetManager=new r.MorphTargetManager(a.getScene());for(var s=0;s<o.targets.length;s++){var l=t.weights?t.weights[s]:n.weights?n.weights[s]:0,u=i?i[s]:"morphTarget"+s;a.morphTargetManager.addTarget(new r.MorphTarget(u,l,a.getScene()))}}},e.prototype._loadMorphTargetsAsync=function(e,t,n,r){if(!t.targets)return Promise.resolve();for(var o=new Array,a=n.morphTargetManager,i=0;i<a.numTargets;i++){var s=a.getTarget(i);o.push(this._loadMorphTargetVertexDataAsync(e+"/targets/"+i,r,t.targets[i],s))}return Promise.all(o).then(function(){})},e.prototype._loadMorphTargetVertexDataAsync=function(e,t,n,o){var i=this,s=new Array,l=function(r,o,l){if(null!=n[r]){var u=t.getVertexBuffer(o);if(u){var c=a.Get(e+"/"+r,i._gltf.accessors,n[r]);s.push(i._loadFloatAccessorAsync("/accessors/"+c.index,c).then(function(e){l(u,e)}))}}};return l("POSITION",r.VertexBuffer.PositionKind,function(e,t){var n=new Float32Array(t.length);e.forEach(t.length,function(e,r){n[r]=t[r]+e}),o.setPositions(n)}),l("NORMAL",r.VertexBuffer.NormalKind,function(e,t){var n=new Float32Array(t.length);e.forEach(n.length,function(e,r){n[r]=t[r]+e}),o.setNormals(n)}),l("TANGENT",r.VertexBuffer.TangentKind,function(e,t){var n=new Float32Array(t.length/3*4),r=0;e.forEach(t.length/3*4,function(e,o){(o+1)%4!=0&&(n[r]=t[r]+e,r++)}),o.setTangents(n)}),Promise.all(s).then(function(){})},e._LoadTransform=function(e,t){if(null==e.skin){var n=r.Vector3.Zero(),o=r.Quaternion.Identity(),a=r.Vector3.One();if(e.matrix)r.Matrix.FromArray(e.matrix).decompose(a,o,n);else e.translation&&(n=r.Vector3.FromArray(e.translation)),e.rotation&&(o=r.Quaternion.FromArray(e.rotation)),e.scale&&(a=r.Vector3.FromArray(e.scale));t.position=n,t.rotationQuaternion=o,t.scaling=a}},e.prototype._loadSkinAsync=function(e,t,n){var o=this,a=this._extensionsLoadSkinAsync(e,t,n);if(a)return a;var i=function(e){o._forEachPrimitive(t,function(t){t.skeleton=e})};if(n._data)return i(n._data.babylonSkeleton),n._data.promise;var s="skeleton"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer;var l=new r.Skeleton(n.name||s,s,this._babylonScene);this._babylonScene._blockEntityCollection=!1,l.overrideMesh=this._rootBabylonMesh,this._loadBones(e,n,l),i(l);var u=this._loadSkinInverseBindMatricesDataAsync(e,n).then(function(e){o._updateBoneMatrices(l,e)});return n._data={babylonSkeleton:l,promise:u},u},e.prototype._loadBones=function(e,t,n){for(var r={},o=0,i=t.joints;o<i.length;o++){var s=i[o],l=a.Get(e+"/joints/"+s,this._gltf.nodes,s);this._loadBone(l,t,n,r)}},e.prototype._loadBone=function(e,t,n,o){var a=o[e.index];if(a)return a;var i=null;e.parent&&e.parent._babylonTransformNode!==this._rootBabylonMesh&&(i=this._loadBone(e.parent,t,n,o));var s=t.joints.indexOf(e.index);return a=new r.Bone(e.name||"joint"+e.index,n,i,this._getNodeMatrix(e),null,null,s),o[e.index]=a,e._babylonBones=e._babylonBones||[],e._babylonBones.push(a),a},e.prototype._loadSkinInverseBindMatricesDataAsync=function(e,t){if(null==t.inverseBindMatrices)return Promise.resolve(null);var n=a.Get(e+"/inverseBindMatrices",this._gltf.accessors,t.inverseBindMatrices);return this._loadFloatAccessorAsync("/accessors/"+n.index,n)},e.prototype._updateBoneMatrices=function(e,t){for(var n=0,o=e.bones;n<o.length;n++){var a=o[n],i=r.Matrix.Identity(),s=a._index;t&&-1!==s&&(r.Matrix.FromArrayToRef(t,16*s,i),i.invertToRef(i));var l=a.getParent();l&&i.multiplyToRef(l.getInvertedAbsoluteTransform(),i),a.updateMatrix(i,!1,!1),a._updateDifferenceMatrix(void 0,!1)}},e.prototype._getNodeMatrix=function(e){return e.matrix?r.Matrix.FromArray(e.matrix):r.Matrix.Compose(e.scale?r.Vector3.FromArray(e.scale):r.Vector3.One(),e.rotation?r.Quaternion.FromArray(e.rotation):r.Quaternion.Identity(),e.translation?r.Vector3.FromArray(e.translation):r.Vector3.Zero())},e.prototype.loadCameraAsync=function(t,n,o){void 0===o&&(o=function(){});var a=this._extensionsLoadCameraAsync(t,n,o);if(a)return a;var i=new Array;this.logOpen(t+" "+(n.name||"")),this._babylonScene._blockEntityCollection=this._forAssetContainer;var s=new r.FreeCamera(n.name||"camera"+n.index,r.Vector3.Zero(),this._babylonScene,!1);switch(this._babylonScene._blockEntityCollection=!1,s.rotation=new r.Vector3(0,Math.PI,0),n.type){case"perspective":var l=n.perspective;if(!l)throw new Error(t+": Camera perspective properties are missing");s.fov=l.yfov,s.minZ=l.znear,s.maxZ=l.zfar||Number.MAX_VALUE;break;case"orthographic":if(!n.orthographic)throw new Error(t+": Camera orthographic properties are missing");s.mode=r.Camera.ORTHOGRAPHIC_CAMERA,s.orthoLeft=-n.orthographic.xmag,s.orthoRight=n.orthographic.xmag,s.orthoBottom=-n.orthographic.ymag,s.orthoTop=n.orthographic.ymag,s.minZ=n.orthographic.znear,s.maxZ=n.orthographic.zfar;break;default:throw new Error(t+": Invalid camera type ("+n.type+")")}return e.AddPointerMetadata(s,t),this._parent.onCameraLoadedObservable.notifyObservers(s),o(s),Promise.all(i).then(function(){return s})},e.prototype._loadAnimationsAsync=function(){var e=this._gltf.animations;if(!e)return Promise.resolve();for(var t=new Array,n=0;n<e.length;n++){var r=e[n];t.push(this.loadAnimationAsync("/animations/"+r.index,r))}return Promise.all(t).then(function(){})},e.prototype.loadAnimationAsync=function(e,t){var n=this._extensionsLoadAnimationAsync(e,t);if(n)return n;this._babylonScene._blockEntityCollection=this._forAssetContainer;var o=new r.AnimationGroup(t.name||"animation"+t.index,this._babylonScene);this._babylonScene._blockEntityCollection=!1,t._babylonAnimationGroup=o;var i=new Array;a.Assign(t.channels),a.Assign(t.samplers);for(var s=0,l=t.channels;s<l.length;s++){var u=l[s];i.push(this._loadAnimationChannelAsync(e+"/channels/"+u.index,e,t,u,o))}return Promise.all(i).then(function(){return o.normalize(0),o})},e.prototype._loadAnimationChannelAsync=function(e,t,n,o,i,s){var l=this;if(void 0===s&&(s=null),null==o.target.node)return Promise.resolve();var u=a.Get(e+"/target/node",this._gltf.nodes,o.target.node);if("weights"===o.target.path&&!u._numMorphTargets||"weights"!==o.target.path&&!u._babylonTransformNode)return Promise.resolve();var c=a.Get(e+"/sampler",n.samplers,o.sampler);return this._loadAnimationSamplerAsync(t+"/samplers/"+o.sampler,c).then(function(t){var n,a;switch(o.target.path){case"translation":n="position",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"rotation":n="rotationQuaternion",a=r.Animation.ANIMATIONTYPE_QUATERNION;break;case"scale":n="scaling",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"weights":n="influence",a=r.Animation.ANIMATIONTYPE_FLOAT;break;default:throw new Error(e+"/target/path: Invalid value ("+o.target.path+")")}var c,f,d=0;switch(n){case"position":c=function(){var e=r.Vector3.FromArray(t.output,d);return d+=3,e};break;case"rotationQuaternion":c=function(){var e=r.Quaternion.FromArray(t.output,d);return d+=4,e};break;case"scaling":c=function(){var e=r.Vector3.FromArray(t.output,d);return d+=3,e};break;case"influence":c=function(){for(var e=new Array(u._numMorphTargets),n=0;n<u._numMorphTargets;n++)e[n]=t.output[d++];return e}}switch(t.interpolation){case"STEP":f=function(e){return{frame:t.input[e],value:c(),interpolation:r.AnimationKeyInterpolation.STEP}};break;case"LINEAR":f=function(e){return{frame:t.input[e],value:c()}};break;case"CUBICSPLINE":f=function(e){return{frame:t.input[e],inTangent:c(),value:c(),outTangent:c()}}}for(var h=new Array(t.input.length),p=0;p<t.input.length;p++)h[p]=f(p);if("influence"===n)for(var m=function(e){var t=i.name+"_channel"+i.targetedAnimations.length,o=new r.Animation(t,n,1,a);o.setKeys(h.map(function(t){return{frame:t.frame,inTangent:t.inTangent?t.inTangent[e]:void 0,value:t.value[e],outTangent:t.outTangent?t.outTangent[e]:void 0}})),l._forEachPrimitive(u,function(t){var n=t.morphTargetManager.getTarget(e),r=o.clone();n.animations.push(r),i.addTargetedAnimation(r,n)})},_=0;_<u._numMorphTargets;_++)m(_);else{var y=i.name+"_channel"+i.targetedAnimations.length,b=new r.Animation(y,n,1,a);b.setKeys(h),null!=s&&null!=s.animations?(s.animations.push(b),i.addTargetedAnimation(b,s)):(u._babylonTransformNode.animations.push(b),i.addTargetedAnimation(b,u._babylonTransformNode))}})},e.prototype._loadAnimationSamplerAsync=function(e,t){if(t._data)return t._data;var n=t.interpolation||"LINEAR";switch(n){case"STEP":case"LINEAR":case"CUBICSPLINE":break;default:throw new Error(e+"/interpolation: Invalid value ("+t.interpolation+")")}var r=a.Get(e+"/input",this._gltf.accessors,t.input),o=a.Get(e+"/output",this._gltf.accessors,t.output);return t._data=Promise.all([this._loadFloatAccessorAsync("/accessors/"+r.index,r),this._loadFloatAccessorAsync("/accessors/"+o.index,o)]).then(function(e){var t=e[0],r=e[1];return{input:t,interpolation:n,output:r}}),t._data},e.prototype._loadBufferAsync=function(e,t,n,r){var o=this._extensionsLoadBufferAsync(e,t,n,r);if(o)return o;if(!t._data)if(t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else{if(!this._bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");t._data=this._bin.readAsync(0,t.byteLength)}return t._data.then(function(t){try{return new Uint8Array(t.buffer,t.byteOffset+n,r)}catch(t){throw new Error(e+": "+t.message)}})},e.prototype.loadBufferViewAsync=function(e,t){var n=this._extensionsLoadBufferViewAsync(e,t);if(n)return n;if(t._data)return t._data;var r=a.Get(e+"/buffer",this._gltf.buffers,t.buffer);return t._data=this._loadBufferAsync("/buffers/"+r.index,r,t.byteOffset||0,t.byteLength),t._data},e.prototype._loadAccessorAsync=function(t,n,o){var i=this;if(n._data)return n._data;var s=e._GetNumComponents(t,n.type),l=s*r.VertexBuffer.GetTypeByteLength(n.componentType),u=s*n.count;if(null==n.bufferView)n._data=Promise.resolve(new o(u));else{var c=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+c.index,c).then(function(a){if(5126!==n.componentType||n.normalized){var i=new o(u);return r.VertexBuffer.ForEach(a,n.byteOffset||0,c.byteStride||l,s,n.componentType,i.length,n.normalized||!1,function(e,t){i[t]=e}),i}return e._GetTypedArray(t,n.componentType,a,n.byteOffset,u)})}if(n.sparse){var f=n.sparse;n._data=n._data.then(function(u){var c=u,d=a.Get(t+"/sparse/indices/bufferView",i._gltf.bufferViews,f.indices.bufferView),h=a.Get(t+"/sparse/values/bufferView",i._gltf.bufferViews,f.values.bufferView);return Promise.all([i.loadBufferViewAsync("/bufferViews/"+d.index,d),i.loadBufferViewAsync("/bufferViews/"+h.index,h)]).then(function(a){var i,u=a[0],d=a[1],h=e._GetTypedArray(t+"/sparse/indices",f.indices.componentType,u,f.indices.byteOffset,f.count),p=s*f.count;if(5126!==n.componentType||n.normalized){var m=e._GetTypedArray(t+"/sparse/values",n.componentType,d,f.values.byteOffset,p);i=new o(p),r.VertexBuffer.ForEach(m,0,l,s,n.componentType,i.length,n.normalized||!1,function(e,t){i[t]=e})}else i=e._GetTypedArray(t+"/sparse/values",n.componentType,d,f.values.byteOffset,p);for(var _=0,y=0;y<h.length;y++)for(var b=h[y]*s,v=0;v<s;v++)c[b++]=i[_++];return c})})}return n._data},e.prototype._loadFloatAccessorAsync=function(e,t){return this._loadAccessorAsync(e,t,Float32Array)},e.prototype._loadIndicesAccessorAsync=function(t,n){if("SCALAR"!==n.type)throw new Error(t+"/type: Invalid value "+n.type);if(5121!==n.componentType&&5123!==n.componentType&&5125!==n.componentType)throw new Error(t+"/componentType: Invalid value "+n.componentType);if(n._data)return n._data;if(n.sparse){var r=e._GetTypedArrayConstructor(t+"/componentType",n.componentType);n._data=this._loadAccessorAsync(t,n,r)}else{var o=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+o.index,o).then(function(r){return e._GetTypedArray(t,n.componentType,r,n.byteOffset,n.count)})}return n._data},e.prototype._loadVertexBufferViewAsync=function(e,t){var n=this;return e._babylonBuffer?e._babylonBuffer:(e._babylonBuffer=this.loadBufferViewAsync("/bufferViews/"+e.index,e).then(function(e){return new r.Buffer(n._babylonScene.getEngine(),e,!1)}),e._babylonBuffer)},e.prototype._loadVertexAccessorAsync=function(t,n,o){var i=this;if(n._babylonVertexBuffer)return n._babylonVertexBuffer;if(n.sparse)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else if(n.byteOffset&&n.byteOffset%r.VertexBuffer.GetTypeByteLength(n.componentType)!=0)r.Logger.Warn("Accessor byte offset is not a multiple of component type byte length"),n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else if(o===r.VertexBuffer.MatricesIndicesKind||o===r.VertexBuffer.MatricesIndicesExtraKind)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else{var s=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._babylonVertexBuffer=this._loadVertexBufferViewAsync(s,o).then(function(a){var l=e._GetNumComponents(t,n.type);return new r.VertexBuffer(i._babylonScene.getEngine(),a,o,!1,!1,s.byteStride,!1,n.byteOffset,l,n.componentType,n.normalized,!0)})}return n._babylonVertexBuffer},e.prototype._loadMaterialMetallicRoughnessPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return t&&(t.baseColorFactor?(n.albedoColor=r.Color3.FromArray(t.baseColorFactor),n.alpha=t.baseColorFactor[3]):n.albedoColor=r.Color3.White(),n.metallic=null==t.metallicFactor?1:t.metallicFactor,n.roughness=null==t.roughnessFactor?1:t.roughnessFactor,t.baseColorTexture&&o.push(this.loadTextureInfoAsync(e+"/baseColorTexture",t.baseColorTexture,function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e})),t.metallicRoughnessTexture&&(o.push(this.loadTextureInfoAsync(e+"/metallicRoughnessTexture",t.metallicRoughnessTexture,function(e){e.name=n.name+" (Metallic Roughness)",n.metallicTexture=e})),n.useMetallnessFromMetallicTextureBlue=!0,n.useRoughnessFromMetallicTextureGreen=!0,n.useRoughnessFromMetallicTextureAlpha=!1)),Promise.all(o).then(function(){})},e.prototype._loadMaterialAsync=function(t,n,r,o,a){void 0===a&&(a=function(){});var i=this._extensionsLoadMaterialAsync(t,n,r,o,a);if(i)return i;n._data=n._data||{};var s=n._data[o];if(!s){this.logOpen(t+" "+(n.name||""));var l=this.createMaterial(t,n,o);s={babylonMaterial:l,babylonMeshes:[],promise:this.loadMaterialPropertiesAsync(t,n,l)},n._data[o]=s,e.AddPointerMetadata(l,t),this._parent.onMaterialLoadedObservable.notifyObservers(l),this.logClose()}return s.babylonMeshes.push(r),r.onDisposeObservable.addOnce(function(){var e=s.babylonMeshes.indexOf(r);-1!==e&&s.babylonMeshes.splice(e,1)}),a(s.babylonMaterial),s.promise.then(function(){return s.babylonMaterial})},e.prototype._createDefaultMaterial=function(e,t){this._babylonScene._blockEntityCollection=this._forAssetContainer;var n=new r.PBRMaterial(e,this._babylonScene);return this._babylonScene._blockEntityCollection=!1,n.fillMode=t,n.enableSpecularAntiAliasing=!0,n.useRadianceOverAlpha=!this._parent.transparencyAsCoverage,n.useSpecularOverAlpha=!this._parent.transparencyAsCoverage,n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE,n.metallic=1,n.roughness=1,n},e.prototype.createMaterial=function(e,t,n){var r=this._extensionsCreateMaterial(e,t,n);if(r)return r;var o=t.name||"material"+t.index;return this._createDefaultMaterial(o,n)},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this._extensionsLoadMaterialPropertiesAsync(e,t,n);if(r)return r;var o=new Array;return o.push(this.loadMaterialBasePropertiesAsync(e,t,n)),t.pbrMetallicRoughness&&o.push(this._loadMaterialMetallicRoughnessPropertiesAsync(e+"/pbrMetallicRoughness",t.pbrMetallicRoughness,n)),this.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then(function(){})},e.prototype.loadMaterialBasePropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.emissiveColor=t.emissiveFactor?r.Color3.FromArray(t.emissiveFactor):new r.Color3(0,0,0),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),t.normalTexture&&(o.push(this.loadTextureInfoAsync(e+"/normalTexture",t.normalTexture,function(e){e.name=n.name+" (Normal)",n.bumpTexture=e})),n.invertNormalMapX=!this._babylonScene.useRightHandedSystem,n.invertNormalMapY=this._babylonScene.useRightHandedSystem,null!=t.normalTexture.scale&&(n.bumpTexture.level=t.normalTexture.scale),n.forceIrradianceInFragment=!0),t.occlusionTexture&&(o.push(this.loadTextureInfoAsync(e+"/occlusionTexture",t.occlusionTexture,function(e){e.name=n.name+" (Occlusion)",n.ambientTexture=e})),n.useAmbientInGrayScale=!0,null!=t.occlusionTexture.strength&&(n.ambientTextureStrength=t.occlusionTexture.strength)),t.emissiveTexture&&o.push(this.loadTextureInfoAsync(e+"/emissiveTexture",t.emissiveTexture,function(e){e.name=n.name+" (Emissive)",n.emissiveTexture=e})),Promise.all(o).then(function(){})},e.prototype.loadMaterialAlphaProperties=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");switch(t.alphaMode||"OPAQUE"){case"OPAQUE":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE;break;case"MASK":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHATEST,n.alphaCutOff=null==t.alphaCutoff?.5:t.alphaCutoff,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0);break;case"BLEND":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHABLEND,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0,n.useAlphaFromAlbedoTexture=!0);break;default:throw new Error(e+"/alphaMode: Invalid value ("+t.alphaMode+")")}},e.prototype.loadTextureInfoAsync=function(t,n,r){var o=this;void 0===r&&(r=function(){});var i=this._extensionsLoadTextureInfoAsync(t,n,r);if(i)return i;if(this.logOpen(""+t),n.texCoord>=2)throw new Error(t+"/texCoord: Invalid value ("+n.texCoord+")");var s=a.Get(t+"/index",this._gltf.textures,n.index),l=this._loadTextureAsync("/textures/"+n.index,s,function(a){a.coordinatesIndex=n.texCoord||0,e.AddPointerMetadata(a,t),o._parent.onTextureLoadedObservable.notifyObservers(a),r(a)});return this.logClose(),l},e.prototype._loadTextureAsync=function(t,n,r){void 0===r&&(r=function(){});var o=this._extensionsLoadTextureAsync(t,n,r);if(o)return o;this.logOpen(t+" "+(n.name||""));var i=null==n.sampler?e.DefaultSampler:a.Get(t+"/sampler",this._gltf.samplers,n.sampler),s=a.Get(t+"/source",this._gltf.images,n.source),l=this._createTextureAsync(t,i,s,r);return this.logClose(),l},e.prototype._createTextureAsync=function(e,t,n,o){var a=this;void 0===o&&(o=function(){});var i=this._loadSampler("/samplers/"+t.index,t),s=new Array,l=new r.Deferred;this._babylonScene._blockEntityCollection=this._forAssetContainer;var u=new r.Texture(null,this._babylonScene,i.noMipMaps,!1,i.samplingMode,function(){a._disposed||l.resolve()},function(t,n){a._disposed||l.reject(new Error(e+": "+(n&&n.message?n.message:t||"Failed to load texture")))},void 0,void 0,void 0,n.mimeType);return this._babylonScene._blockEntityCollection=!1,s.push(l.promise),s.push(this.loadImageAsync("/images/"+n.index,n).then(function(e){var t=n.uri||a._fileName+"#image"+n.index,r="data:"+a._uniqueRootUrl+t;u.updateURL(r,e)})),u.wrapU=i.wrapU,u.wrapV=i.wrapV,o(u),Promise.all(s).then(function(){return u})},e.prototype._loadSampler=function(t,n){return n._data||(n._data={noMipMaps:9728===n.minFilter||9729===n.minFilter,samplingMode:e._GetTextureSamplingMode(t,n),wrapU:e._GetTextureWrapMode(t+"/wrapS",n.wrapS),wrapV:e._GetTextureWrapMode(t+"/wrapT",n.wrapT)}),n._data},e.prototype.loadImageAsync=function(e,t){if(!t._data){if(this.logOpen(e+" "+(t.name||"")),t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else{var n=a.Get(e+"/bufferView",this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync("/bufferViews/"+n.index,n)}this.logClose()}return t._data},e.prototype.loadUriAsync=function(t,n,a){var i=this,s=this._extensionsLoadUriAsync(t,n,a);if(s)return s;if(!e._ValidateUri(a))throw new Error(t+": '"+a+"' is invalid");if(r.Tools.IsBase64(a)){var l=new Uint8Array(r.Tools.DecodeBase64(a));return this.log("Decoded "+a.substr(0,64)+"... ("+l.length+" bytes)"),Promise.resolve(l)}return this.log("Loading "+a),this._parent.preprocessUrlAsync(this._rootUrl+a).then(function(e){return new Promise(function(n,s){if(!i._disposed){var l=r.Tools.LoadFile(e,function(e){if(!i._disposed){var t=new Uint8Array(e);i.log("Loaded "+a+" ("+t.length+" bytes)"),n(t)}},function(e){if(!i._disposed&&(l&&(l._lengthComputable=e.lengthComputable,l._loaded=e.loaded,l._total=e.total),i._state===o.GLTFLoaderState.LOADING))try{i._onProgress()}catch(e){s(e)}},i._babylonScene.offlineProvider,!0,function(e,n){i._disposed||s(new r.LoadFileError(t+": Failed to load '"+a+"'"+(e?": "+e.status+" "+e.statusText:""),e))});i._requests.push(l)}})})},e.prototype._onProgress=function(){if(this._progressCallback){for(var e=!0,t=0,n=0,o=0,a=this._requests;o<a.length;o++){var i=a[o];if(void 0===i._lengthComputable||void 0===i._loaded||void 0===i._total)return;e=e&&i._lengthComputable,t+=i._loaded,n+=i._total}this._progressCallback(new r.SceneLoaderProgressEvent(e,t,e?n:0))}},e.AddPointerMetadata=function(e,t){var n=e.metadata=e.metadata||{},r=n.gltf=n.gltf||{};(r.pointers=r.pointers||[]).push(t)},e._GetTextureWrapMode=function(e,t){switch(t=null==t?10497:t){case 33071:return r.Texture.CLAMP_ADDRESSMODE;case 33648:return r.Texture.MIRROR_ADDRESSMODE;case 10497:return r.Texture.WRAP_ADDRESSMODE;default:return r.Logger.Warn(e+": Invalid value ("+t+")"),r.Texture.WRAP_ADDRESSMODE}},e._GetTextureSamplingMode=function(e,t){var n=null==t.magFilter?9729:t.magFilter,o=null==t.minFilter?9987:t.minFilter;if(9729===n)switch(o){case 9728:return r.Texture.LINEAR_NEAREST;case 9729:return r.Texture.LINEAR_LINEAR;case 9984:return r.Texture.LINEAR_NEAREST_MIPNEAREST;case 9985:return r.Texture.LINEAR_LINEAR_MIPNEAREST;case 9986:return r.Texture.LINEAR_NEAREST_MIPLINEAR;case 9987:return r.Texture.LINEAR_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.LINEAR_LINEAR_MIPLINEAR}else switch(9728!==n&&r.Logger.Warn(e+"/magFilter: Invalid value ("+n+")"),o){case 9728:return r.Texture.NEAREST_NEAREST;case 9729:return r.Texture.NEAREST_LINEAR;case 9984:return r.Texture.NEAREST_NEAREST_MIPNEAREST;case 9985:return r.Texture.NEAREST_LINEAR_MIPNEAREST;case 9986:return r.Texture.NEAREST_NEAREST_MIPLINEAR;case 9987:return r.Texture.NEAREST_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.NEAREST_NEAREST_MIPNEAREST}},e._GetTypedArrayConstructor=function(e,t){switch(t){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5125:return Uint32Array;case 5126:return Float32Array;default:throw new Error(e+": Invalid component type "+t)}},e._GetTypedArray=function(t,n,r,o,a){var i=r.buffer;o=r.byteOffset+(o||0);var s=e._GetTypedArrayConstructor(t+"/componentType",n);try{return new s(i,o,a)}catch(e){throw new Error(t+": "+e)}},e._GetNumComponents=function(e,t){switch(t){case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16}throw new Error(e+": Invalid type ("+t+")")},e._ValidateUri=function(e){return r.Tools.IsBase64(e)||-1===e.indexOf("..")},e._GetDrawMode=function(e,t){switch(null==t&&(t=4),t){case 0:return r.Material.PointListDrawMode;case 1:return r.Material.LineListDrawMode;case 2:return r.Material.LineLoopDrawMode;case 3:return r.Material.LineStripDrawMode;case 4:return r.Material.TriangleFillMode;case 5:return r.Material.TriangleStripDrawMode;case 6:return r.Material.TriangleFanDrawMode}throw new Error(e+": Invalid mesh primitive mode ("+t+")")},e.prototype._compileMaterialsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile materials");var t=new Array;if(this._gltf.materials)for(var n=0,r=this._gltf.materials;n<r.length;n++){var o=r[n];if(o._data)for(var a in o._data)for(var i=o._data[a],s=0,l=i.babylonMeshes;s<l.length;s++){var u=l[s];u.computeWorldMatrix(!0);var c=i.babylonMaterial;t.push(c.forceCompilationAsync(u)),t.push(c.forceCompilationAsync(u,{useInstances:!0})),this._parent.useClipPlane&&(t.push(c.forceCompilationAsync(u,{clipPlane:!0})),t.push(c.forceCompilationAsync(u,{clipPlane:!0,useInstances:!0})))}}return Promise.all(t).then(function(){e._parent._endPerformanceCounter("Compile materials")})},e.prototype._compileShadowGeneratorsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile shadow generators");for(var t=new Array,n=0,r=this._babylonScene.lights;n<r.length;n++){var o=r[n].getShadowGenerator();o&&t.push(o.forceCompilationAsync())}return Promise.all(t).then(function(){e._parent._endPerformanceCounter("Compile shadow generators")})},e.prototype._forEachExtensions=function(e){for(var t=0,n=this._extensions;t<n.length;t++){var r=n[t];r.enabled&&e(r)}},e.prototype._applyExtensions=function(e,t,n){for(var r=0,o=this._extensions;r<o.length;r++){var a=o[r];if(a.enabled){var i=a.name+"."+t,s=e;s._activeLoaderExtensionFunctions=s._activeLoaderExtensionFunctions||{};var l=s._activeLoaderExtensionFunctions;if(!l[i]){l[i]=!0;try{var u=n(a);if(u)return u}finally{delete l[i]}}}}return null},e.prototype._extensionsOnLoading=function(){this._forEachExtensions(function(e){return e.onLoading&&e.onLoading()})},e.prototype._extensionsOnReady=function(){this._forEachExtensions(function(e){return e.onReady&&e.onReady()})},e.prototype._extensionsLoadSceneAsync=function(e,t){return this._applyExtensions(t,"loadScene",function(n){return n.loadSceneAsync&&n.loadSceneAsync(e,t)})},e.prototype._extensionsLoadNodeAsync=function(e,t,n){return this._applyExtensions(t,"loadNode",function(r){return r.loadNodeAsync&&r.loadNodeAsync(e,t,n)})},e.prototype._extensionsLoadCameraAsync=function(e,t,n){return this._applyExtensions(t,"loadCamera",function(r){return r.loadCameraAsync&&r.loadCameraAsync(e,t,n)})},e.prototype._extensionsLoadVertexDataAsync=function(e,t,n){return this._applyExtensions(t,"loadVertexData",function(r){return r._loadVertexDataAsync&&r._loadVertexDataAsync(e,t,n)})},e.prototype._extensionsLoadMeshPrimitiveAsync=function(e,t,n,r,o,a){return this._applyExtensions(o,"loadMeshPrimitive",function(i){return i._loadMeshPrimitiveAsync&&i._loadMeshPrimitiveAsync(e,t,n,r,o,a)})},e.prototype._extensionsLoadMaterialAsync=function(e,t,n,r,o){return this._applyExtensions(t,"loadMaterial",function(a){return a._loadMaterialAsync&&a._loadMaterialAsync(e,t,n,r,o)})},e.prototype._extensionsCreateMaterial=function(e,t,n){return this._applyExtensions(t,"createMaterial",function(r){return r.createMaterial&&r.createMaterial(e,t,n)})},e.prototype._extensionsLoadMaterialPropertiesAsync=function(e,t,n){return this._applyExtensions(t,"loadMaterialProperties",function(r){return r.loadMaterialPropertiesAsync&&r.loadMaterialPropertiesAsync(e,t,n)})},e.prototype._extensionsLoadTextureInfoAsync=function(e,t,n){return this._applyExtensions(t,"loadTextureInfo",function(r){return r.loadTextureInfoAsync&&r.loadTextureInfoAsync(e,t,n)})},e.prototype._extensionsLoadTextureAsync=function(e,t,n){return this._applyExtensions(t,"loadTexture",function(r){return r._loadTextureAsync&&r._loadTextureAsync(e,t,n)})},e.prototype._extensionsLoadAnimationAsync=function(e,t){return this._applyExtensions(t,"loadAnimation",function(n){return n.loadAnimationAsync&&n.loadAnimationAsync(e,t)})},e.prototype._extensionsLoadSkinAsync=function(e,t,n){return this._applyExtensions(n,"loadSkin",function(r){return r._loadSkinAsync&&r._loadSkinAsync(e,t,n)})},e.prototype._extensionsLoadUriAsync=function(e,t,n){return this._applyExtensions(t,"loadUri",function(r){return r._loadUriAsync&&r._loadUriAsync(e,t,n)})},e.prototype._extensionsLoadBufferViewAsync=function(e,t){return this._applyExtensions(t,"loadBufferView",function(n){return n.loadBufferViewAsync&&n.loadBufferViewAsync(e,t)})},e.prototype._extensionsLoadBufferAsync=function(e,t,n,r){return this._applyExtensions(t,"loadBuffer",function(o){return o.loadBufferAsync&&o.loadBufferAsync(e,t,n,r)})},e.LoadExtensionAsync=function(e,t,n,r){if(!t.extensions)return null;var o=t.extensions[n];return o?r(e+"/extensions/"+n,o):null},e.LoadExtraAsync=function(e,t,n,r){if(!t.extras)return null;var o=t.extras[n];return o?r(e+"/extras/"+n,o):null},e.prototype.isExtensionUsed=function(e){return!!this._gltf.extensionsUsed&&-1!==this._gltf.extensionsUsed.indexOf(e)},e.prototype.logOpen=function(e){this._parent._logOpen(e)},e.prototype.logClose=function(){this._parent._logClose()},e.prototype.log=function(e){this._parent._log(e)},e.prototype.startPerformanceCounter=function(e){this._parent._startPerformanceCounter(e)},e.prototype.endPerformanceCounter=function(e){this._parent._endPerformanceCounter(e)},e._RegisteredExtensions={},e.DefaultSampler={index:-1},e}();o.GLTFFileLoader._CreateGLTF2Loader=function(e){return new i(e)}},function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFLoaderCoordinateSystemMode",function(){return r}),n.d(t,"GLTFLoaderAnimationStartMode",function(){return o}),n.d(t,"GLTFLoaderState",function(){return a}),n.d(t,"GLTFFileLoader",function(){return l});var r,o,a,i=n(0),s=n(3);!function(e){e[e.AUTO=0]="AUTO",e[e.FORCE_RIGHT_HANDED=1]="FORCE_RIGHT_HANDED"}(r||(r={})),function(e){e[e.NONE=0]="NONE",e[e.FIRST=1]="FIRST",e[e.ALL=2]="ALL"}(o||(o={})),function(e){e[e.LOADING=0]="LOADING",e[e.READY=1]="READY",e[e.COMPLETE=2]="COMPLETE"}(a||(a={}));var l=function(){function e(){this.onParsedObservable=new i.Observable,this.coordinateSystemMode=r.AUTO,this.animationStartMode=o.FIRST,this.compileMaterials=!1,this.useClipPlane=!1,this.compileShadowGenerators=!1,this.transparencyAsCoverage=!1,this.useRangeRequests=!1,this.createInstances=!0,this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable=new i.Observable,this.onTextureLoadedObservable=new i.Observable,this.onMaterialLoadedObservable=new i.Observable,this.onCameraLoadedObservable=new i.Observable,this.onCompleteObservable=new i.Observable,this.onErrorObservable=new i.Observable,this.onDisposeObservable=new i.Observable,this.onExtensionLoadedObservable=new i.Observable,this.validate=!1,this.onValidatedObservable=new i.Observable,this._loader=null,this.name="gltf",this.extensions={".gltf":{isBinary:!1},".glb":{isBinary:!0}},this._logIndentLevel=0,this._loggingEnabled=!1,this._log=this._logDisabled,this._capturePerformanceCounters=!1,this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled}return Object.defineProperty(e.prototype,"onParsed",{set:function(e){this._onParsedObserver&&this.onParsedObservable.remove(this._onParsedObserver),this._onParsedObserver=this.onParsedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onMeshLoaded",{set:function(e){this._onMeshLoadedObserver&&this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver),this._onMeshLoadedObserver=this.onMeshLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTextureLoaded",{set:function(e){this._onTextureLoadedObserver&&this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver),this._onTextureLoadedObserver=this.onTextureLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onMaterialLoaded",{set:function(e){this._onMaterialLoadedObserver&&this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver),this._onMaterialLoadedObserver=this.onMaterialLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onCameraLoaded",{set:function(e){this._onCameraLoadedObserver&&this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver),this._onCameraLoadedObserver=this.onCameraLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onComplete",{set:function(e){this._onCompleteObserver&&this.onCompleteObservable.remove(this._onCompleteObserver),this._onCompleteObserver=this.onCompleteObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onError",{set:function(e){this._onErrorObserver&&this.onErrorObservable.remove(this._onErrorObserver),this._onErrorObserver=this.onErrorObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onDispose",{set:function(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onExtensionLoaded",{set:function(e){this._onExtensionLoadedObserver&&this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver),this._onExtensionLoadedObserver=this.onExtensionLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"loggingEnabled",{get:function(){return this._loggingEnabled},set:function(e){this._loggingEnabled!==e&&(this._loggingEnabled=e,this._loggingEnabled?this._log=this._logEnabled:this._log=this._logDisabled)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"capturePerformanceCounters",{get:function(){return this._capturePerformanceCounters},set:function(e){this._capturePerformanceCounters!==e&&(this._capturePerformanceCounters=e,this._capturePerformanceCounters?(this._startPerformanceCounter=this._startPerformanceCounterEnabled,this._endPerformanceCounter=this._endPerformanceCounterEnabled):(this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onValidated",{set:function(e){this._onValidatedObserver&&this.onValidatedObservable.remove(this._onValidatedObserver),this._onValidatedObserver=this.onValidatedObservable.add(e)},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._loader&&(this._loader.dispose(),this._loader=null),this._clear(),this.onDisposeObservable.notifyObservers(void 0),this.onDisposeObservable.clear()},e.prototype._clear=function(){this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable.clear(),this.onTextureLoadedObservable.clear(),this.onMaterialLoadedObservable.clear(),this.onCameraLoadedObservable.clear(),this.onCompleteObservable.clear(),this.onExtensionLoadedObservable.clear()},e.prototype.requestFile=function(e,t,n,r,o,a){var s=this;if(o){if(this.useRangeRequests){this.validate&&i.Logger.Warn("glTF validation is not supported when range requests are enabled");var l=new Array,u={abort:function(){return l.forEach(function(e){return e.abort()})},onCompleteObservable:new i.Observable},c={readAsync:function(n,o){return new Promise(function(a,i){l.push(e._requestFile(t,function(e,t){var n=t.getResponseHeader("Content-Range");n&&(c.byteLength=Number(n.split("/")[1])),a(new Uint8Array(e))},r,!0,!0,function(e){i(e)},function(e){e.setRequestHeader("Range","bytes="+n+"-"+(n+o-1))}))})},byteLength:0};return this._unpackBinaryAsync(new i.DataReader(c)).then(function(e){u.onCompleteObservable.notifyObservers(u),n(e)},a),u}return e._requestFile(t,function(e,t){var r=e;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(r,e,t))},byteLength:r.byteLength})).then(function(e){n(e,t)},a)},r,!0,!0,a)}return e._requestFile(t,function(r,o){s._validate(e,r,i.Tools.GetFolderPath(t),i.Tools.GetFilename(t)),n({json:s._parseJson(r)},o)},r,!0,!1,a)},e.prototype.readFile=function(e,t,n,r,o,a){var s=this;return e._readFile(t,function(r){if(s._validate(e,r,"file:",t.name),o){var l=r;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(l,e,t))},byteLength:l.byteLength})).then(n,a)}else n({json:s._parseJson(r)})},r,o,a)},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return Promise.resolve().then(function(){return i.onParsedObservable.notifyObservers(n),i.onParsedObservable.clear(),i._log("Loading "+(a||"")),i._loader=i._getLoader(n),i._loader.importMeshAsync(e,t,!1,n,r,o,a)})},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){return a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t),a._loader.loadAsync(e,t,n,r,o)})},e.prototype.loadAssetContainerAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t);var s=[];a.onMaterialLoadedObservable.add(function(e){s.push(e)});var l=[];return a.onTextureLoadedObservable.add(function(e){l.push(e)}),a._loader.importMeshAsync(null,e,!0,t,n,r,o).then(function(t){var n=new i.AssetContainer(e);return Array.prototype.push.apply(n.meshes,t.meshes),Array.prototype.push.apply(n.particleSystems,t.particleSystems),Array.prototype.push.apply(n.skeletons,t.skeletons),Array.prototype.push.apply(n.animationGroups,t.animationGroups),Array.prototype.push.apply(n.materials,s),Array.prototype.push.apply(n.textures,l),Array.prototype.push.apply(n.lights,t.lights),Array.prototype.push.apply(n.transformNodes,t.transformNodes),n})})},e.prototype.canDirectLoad=function(e){return-1!==e.indexOf("asset")&&-1!==e.indexOf("version")},e.prototype.directLoad=function(e,t){return this._validate(e,t),{json:this._parseJson(t)}},e.prototype.createPlugin=function(){return new e},Object.defineProperty(e.prototype,"loaderState",{get:function(){return this._loader?this._loader.state:null},enumerable:!0,configurable:!0}),e.prototype.whenCompleteAsync=function(){var e=this;return new Promise(function(t,n){e.onCompleteObservable.addOnce(function(){t()}),e.onErrorObservable.addOnce(function(e){n(e)})})},e.prototype._validate=function(e,t,n,r){var o=this;void 0===n&&(n=""),void 0===r&&(r=""),this.validate&&(this._startPerformanceCounter("Validate JSON"),s.GLTFValidation.ValidateAsync(t,n,r,function(t){return o.preprocessUrlAsync(n+t).then(function(t){return e._loadFileAsync(t,void 0,!0,!0)})}).then(function(e){o._endPerformanceCounter("Validate JSON"),o.onValidatedObservable.notifyObservers(e),o.onValidatedObservable.clear()},function(e){o._endPerformanceCounter("Validate JSON"),i.Tools.Warn("Failed to validate: "+e.message),o.onValidatedObservable.clear()}))},e.prototype._getLoader=function(t){var n=t.json.asset||{};this._log("Asset version: "+n.version),n.minVersion&&this._log("Asset minimum version: "+n.minVersion),n.generator&&this._log("Asset generator: "+n.generator);var r=e._parseVersion(n.version);if(!r)throw new Error("Invalid version: "+n.version);if(void 0!==n.minVersion){var o=e._parseVersion(n.minVersion);if(!o)throw new Error("Invalid minimum version: "+n.minVersion);if(e._compareVersion(o,{major:2,minor:0})>0)throw new Error("Incompatible minimum version: "+n.minVersion)}var a={1:e._CreateGLTF1Loader,2:e._CreateGLTF2Loader}[r.major];if(!a)throw new Error("Unsupported version: "+n.version);return a(this)},e.prototype._parseJson=function(e){this._startPerformanceCounter("Parse JSON"),this._log("JSON length: "+e.length);var t=JSON.parse(e);return this._endPerformanceCounter("Parse JSON"),t},e.prototype._unpackBinaryAsync=function(e){var t=this;return this._startPerformanceCounter("Unpack Binary"),e.loadAsync(20).then(function(){var n=e.readUint32();if(1179937895!==n)throw new Error("Unexpected magic: "+n);var r=e.readUint32();t.loggingEnabled&&t._log("Binary version: "+r);var o,a=e.readUint32();if(0!=e.buffer.byteLength&&a!==e.buffer.byteLength)throw new Error("Length in header does not match actual data length: "+a+" != "+e.buffer.byteLength);switch(r){case 1:o=t._unpackBinaryV1Async(e,a);break;case 2:o=t._unpackBinaryV2Async(e,a);break;default:throw new Error("Unsupported version: "+r)}return t._endPerformanceCounter("Unpack Binary"),o})},e.prototype._unpackBinaryV1Async=function(e,t){var n=e.readUint32(),r=e.readUint32();if(0!==r)throw new Error("Unexpected content format: "+r);var o=t-e.byteOffset,a={json:this._parseJson(e.readString(n)),bin:null};if(0!==o){var i=e.byteOffset;a.bin={readAsync:function(t,n){return e.buffer.readAsync(i+t,n)},byteLength:o}}return Promise.resolve(a)},e.prototype._unpackBinaryV2Async=function(e,t){var n=this,r=1313821514,o=5130562,a=e.readUint32();if(e.readUint32()!==r)throw new Error("First chunk format is not JSON");return e.byteOffset+a===t?e.loadAsync(a).then(function(){return{json:n._parseJson(e.readString(a)),bin:null}}):e.loadAsync(a+8).then(function(){var i={json:n._parseJson(e.readString(a)),bin:null},s=function(){var n=e.readUint32();switch(e.readUint32()){case r:throw new Error("Unexpected JSON chunk");case o:var a=e.byteOffset;i.bin={readAsync:function(t,n){return e.buffer.readAsync(a+t,n)},byteLength:n},e.skipBytes(n);break;default:e.skipBytes(n)}return e.byteOffset!==t?e.loadAsync(8).then(s):Promise.resolve(i)};return s()})},e._parseVersion=function(e){if("1.0"===e||"1.0.1"===e)return{major:1,minor:0};var t=(e+"").match(/^(\d+)\.(\d+)/);return t?{major:parseInt(t[1]),minor:parseInt(t[2])}:null},e._compareVersion=function(e,t){return e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:0},e.prototype._logOpen=function(e){this._log(e),this._logIndentLevel++},e.prototype._logClose=function(){--this._logIndentLevel},e.prototype._logEnabled=function(t){var n=e._logSpaces.substr(0,2*this._logIndentLevel);i.Logger.Log(""+n+t)},e.prototype._logDisabled=function(e){},e.prototype._startPerformanceCounterEnabled=function(e){i.Tools.StartPerformanceCounter(e)},e.prototype._startPerformanceCounterDisabled=function(e){},e.prototype._endPerformanceCounterEnabled=function(e){i.Tools.EndPerformanceCounter(e)},e.prototype._endPerformanceCounterDisabled=function(e){},e.IncrementalLoading=!0,e.HomogeneousCoordinates=!1,e._logSpaces="                                ",e}();i.SceneLoader&&i.SceneLoader.RegisterPlugin(new l)},function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFValidation",function(){return a});var r=n(0);function o(e,t,n,r){var o={externalResourceFunction:function(e){return r(e).then(function(e){return new Uint8Array(e)})}};return n&&(o.uri="file:"===t?n:t+n),e instanceof ArrayBuffer?GLTFValidator.validateBytes(new Uint8Array(e),o):GLTFValidator.validateString(e,o)}var a=function(){function e(){}return e.ValidateAsync=function(e,t,n,a){var i=this;return"function"==typeof Worker?new Promise(function(s,l){var u=o+"("+function(){var e=[];onmessage=function(t){var n=t.data;switch(n.id){case"init":importScripts(n.url);break;case"validate":o(n.data,n.rootUrl,n.fileName,function(t){return new Promise(function(n,r){var o=e.length;e.push({resolve:n,reject:r}),postMessage({id:"getExternalResource",index:o,uri:t})})}).then(function(e){postMessage({id:"validate.resolve",value:e})},function(e){postMessage({id:"validate.reject",reason:e})});break;case"getExternalResource.resolve":e[n.index].resolve(n.value);break;case"getExternalResource.reject":e[n.index].reject(n.reason)}}}+")()",c=URL.createObjectURL(new Blob([u],{type:"application/javascript"})),f=new Worker(c),d=function(e){f.removeEventListener("error",d),f.removeEventListener("message",h),l(e)},h=function(e){var t=e.data;switch(t.id){case"getExternalResource":a(t.uri).then(function(e){f.postMessage({id:"getExternalResource.resolve",index:t.index,value:e},[e])},function(e){f.postMessage({id:"getExternalResource.reject",index:t.index,reason:e})});break;case"validate.resolve":f.removeEventListener("error",d),f.removeEventListener("message",h),s(t.value);break;case"validate.reject":f.removeEventListener("error",d),f.removeEventListener("message",h),l(t.reason)}};f.addEventListener("error",d),f.addEventListener("message",h),f.postMessage({id:"init",url:r.Tools.GetAbsoluteUrl(i.Configuration.url)}),f.postMessage({id:"validate",data:e,rootUrl:t,fileName:n})}):(this._LoadScriptPromise||(this._LoadScriptPromise=r.Tools.LoadScriptAsync(this.Configuration.url)),this._LoadScriptPromise.then(function(){return o(e,t,n,a)}))},e.Configuration={url:"https://preview.babylonjs.com/gltf_validator.js"},e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),a="EXT_lights_image_based",i=function(){function e(e){this.name=a,this._loader=e,this.enabled=this._loader.isExtensionUsed(a)}return e.prototype.dispose=function(){delete this._loader,delete this._lights},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t)),n._loader.logOpen(""+r);var s=o.a.Get(r+"/light",n._lights,a.light);return i.push(n._loadLightAsync("#/extensions/"+n.name+"/lights/"+a.light,s).then(function(e){n._loader.babylonScene.environmentTexture=e})),n._loader.logClose(),Promise.all(i).then(function(){})})},e.prototype._loadLightAsync=function(e,t){var n=this;if(!t._loaded){var a=new Array;this._loader.logOpen(""+e);for(var i=new Array(t.specularImages.length),s=function(n){var r=t.specularImages[n];i[n]=new Array(r.length);for(var s=function(t){var s=e+"/specularImages/"+n+"/"+t;l._loader.logOpen(""+s);var u=r[t],c=o.a.Get(s,l._loader.gltf.images,u);a.push(l._loader.loadImageAsync("#/images/"+u,c).then(function(e){i[n][t]=e})),l._loader.logClose()},u=0;u<r.length;u++)s(u)},l=this,u=0;u<t.specularImages.length;u++)s(u);this._loader.logClose(),t._loaded=Promise.all(a).then(function(){var e=new r.RawCubeTexture(n._loader.babylonScene,null,t.specularImageSize);if(t._babylonTexture=e,null!=t.intensity&&(e.level=t.intensity),t.rotation){var o=r.Quaternion.FromArray(t.rotation);n._loader.babylonScene.useRightHandedSystem||(o=r.Quaternion.Inverse(o)),r.Matrix.FromQuaternionToRef(o,e.getReflectionTextureMatrix())}var a=r.SphericalHarmonics.FromArray(t.irradianceCoefficients);a.scaleInPlace(t.intensity),a.convertIrradianceToLambertianRadiance();var s=r.SphericalPolynomial.FromHarmonics(a),l=(i.length-1)/r.Scalar.Log2(t.specularImageSize);return e.updateRGBDAsync(i,s,l)})}return t._loaded.then(function(){return t._babylonTexture})},e}();o.b.RegisterExtension(a,function(e){return new i(e)});var s="KHR_draco_mesh_compression",l=function(){function e(e){this.name=s,this._loader=e,this.enabled=r.DracoCompression.DecoderAvailable&&this._loader.isExtensionUsed(s)}return e.prototype.dispose=function(){delete this.dracoCompression,delete this._loader},e.prototype._loadVertexDataAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(i,s){if(null!=t.mode){if(5!==t.mode&&4!==t.mode)throw new Error(e+": Unsupported mode "+t.mode);if(5===t.mode)throw new Error(e+": Mode "+t.mode+" is not currently supported")}var l={},u=function(e,t){var r=s.attributes[e];null!=r&&(n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(t)&&n._delayInfo.push(t),l[t]=r)};u("POSITION",r.VertexBuffer.PositionKind),u("NORMAL",r.VertexBuffer.NormalKind),u("TANGENT",r.VertexBuffer.TangentKind),u("TEXCOORD_0",r.VertexBuffer.UVKind),u("TEXCOORD_1",r.VertexBuffer.UV2Kind),u("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),u("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),u("COLOR_0",r.VertexBuffer.ColorKind);var c=o.a.Get(i,a._loader.gltf.bufferViews,s.bufferView);return c._dracoBabylonGeometry||(c._dracoBabylonGeometry=a._loader.loadBufferViewAsync("#/bufferViews/"+c.index,c).then(function(t){return(a.dracoCompression||r.DracoCompression.Default).decodeMeshAsync(t,l).then(function(e){var t=new r.Geometry(n.name,a._loader.babylonScene);return e.applyToGeometry(t),t}).catch(function(t){throw new Error(e+": "+t.message)})})),c._dracoBabylonGeometry})},e}();o.b.RegisterExtension(s,function(e){return new l(e)});var u,c="KHR_lights_punctual";!function(e){e.DIRECTIONAL="directional",e.POINT="point",e.SPOT="spot"}(u||(u={}));var f=function(){function e(e){this.name=c,this._loader=e,this.enabled=this._loader.isExtensionUsed(c)}return e.prototype.dispose=function(){delete this._loader,delete this._lights},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights}},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(i,s){return a._loader.loadNodeAsync(e,t,function(e){var t,l=o.a.Get(i,a._lights,s.light),c=l.name||e.name;switch(a._loader.babylonScene._blockEntityCollection=a._loader._forAssetContainer,l.type){case u.DIRECTIONAL:t=new r.DirectionalLight(c,r.Vector3.Backward(),a._loader.babylonScene);break;case u.POINT:t=new r.PointLight(c,r.Vector3.Zero(),a._loader.babylonScene);break;case u.SPOT:var f=new r.SpotLight(c,r.Vector3.Zero(),r.Vector3.Backward(),0,1,a._loader.babylonScene);f.angle=2*(l.spot&&l.spot.outerConeAngle||Math.PI/4),f.innerAngle=2*(l.spot&&l.spot.innerConeAngle||0),t=f;break;default:throw a._loader.babylonScene._blockEntityCollection=!1,new Error(i+": Invalid light type ("+l.type+")")}a._loader.babylonScene._blockEntityCollection=!1,t.falloffType=r.Light.FALLOFF_GLTF,t.diffuse=l.color?r.Color3.FromArray(l.color):r.Color3.White(),t.intensity=null==l.intensity?1:l.intensity,t.range=null==l.range?Number.MAX_VALUE:l.range,t.parent=e,a._loader._babylonLights.push(t),o.b.AddPointerMetadata(t,i),n(e)})})},e}();o.b.RegisterExtension(c,function(e){return new f(e)});var d="KHR_materials_pbrSpecularGlossiness",h=function(){function e(e){this.name=d,this.order=200,this._loader=e,this.enabled=this._loader.isExtensionUsed(d)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialBasePropertiesAsync(e,t,n)),i.push(r._loadSpecularGlossinessPropertiesAsync(o,t,a,n)),r._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(i).then(function(){})})},e.prototype._loadSpecularGlossinessPropertiesAsync=function(e,t,n,o){if(!(o instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var a=new Array;return o.metallic=null,o.roughness=null,n.diffuseFactor?(o.albedoColor=r.Color3.FromArray(n.diffuseFactor),o.alpha=n.diffuseFactor[3]):o.albedoColor=r.Color3.White(),o.reflectivityColor=n.specularFactor?r.Color3.FromArray(n.specularFactor):r.Color3.White(),o.microSurface=null==n.glossinessFactor?1:n.glossinessFactor,n.diffuseTexture&&a.push(this._loader.loadTextureInfoAsync(e+"/diffuseTexture",n.diffuseTexture,function(e){e.name=o.name+" (Diffuse)",o.albedoTexture=e})),n.specularGlossinessTexture&&(a.push(this._loader.loadTextureInfoAsync(e+"/specularGlossinessTexture",n.specularGlossinessTexture,function(e){e.name=o.name+" (Specular Glossiness)",o.reflectivityTexture=e})),o.reflectivityTexture.hasAlpha=!0,o.useMicroSurfaceFromReflectivityMapAlpha=!0),Promise.all(a).then(function(){})},e}();o.b.RegisterExtension(d,function(e){return new h(e)});var p="KHR_materials_unlit",m=function(){function e(e){this.name=p,this.order=210,this._loader=e,this.enabled=this._loader.isExtensionUsed(p)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(){return r._loadUnlitPropertiesAsync(e,t,n)})},e.prototype._loadUnlitPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;n.unlit=!0;var a=t.pbrMetallicRoughness;return a&&(a.baseColorFactor?(n.albedoColor=r.Color3.FromArray(a.baseColorFactor),n.alpha=a.baseColorFactor[3]):n.albedoColor=r.Color3.White(),a.baseColorTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/baseColorTexture",a.baseColorTexture,function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e}))),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),this._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(p,function(e){return new m(e)});var _="KHR_materials_clearcoat",y=function(){function e(e){this.name=_,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(_)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadClearCoatPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadClearCoatPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.clearCoat.isEnabled=!0,null!=t.clearcoatFactor?n.clearCoat.intensity=t.clearcoatFactor:n.clearCoat.intensity=0,t.clearcoatTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatTexture",t.clearcoatTexture,function(e){e.name=n.name+" (ClearCoat Intensity)",n.clearCoat.texture=e})),null!=t.clearcoatRoughnessFactor?n.clearCoat.roughness=t.clearcoatRoughnessFactor:n.clearCoat.roughness=0,t.clearcoatRoughnessTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatRoughnessTexture",t.clearcoatRoughnessTexture,function(e){e.name=n.name+" (ClearCoat Roughness)",n.clearCoat.texture=e})),t.clearcoatNormalTexture&&(o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatNormalTexture",t.clearcoatNormalTexture,function(e){e.name=n.name+" (ClearCoat Normal)",n.clearCoat.bumpTexture=e})),n.invertNormalMapX=!n.getScene().useRightHandedSystem,n.invertNormalMapY=n.getScene().useRightHandedSystem,null!=t.clearcoatNormalTexture.scale&&(n.clearCoat.bumpTexture.level=t.clearcoatNormalTexture.scale)),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(_,function(e){return new y(e)});var b="KHR_materials_sheen",v=function(){function e(e){this.name=b,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(b)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSheenPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadSheenPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.sheen.isEnabled=!0,null!=t.intensityFactor?n.sheen.intensity=t.intensityFactor:n.sheen.intensity=0,null!=t.colorFactor&&(n.sheen.color=r.Color3.FromArray(t.colorFactor)),t.colorIntensityTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/sheenTexture",t.colorIntensityTexture,function(e){e.name=n.name+" (Sheen Intensity)",n.sheen.texture=e})),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(b,function(e){return new v(e)});var A="KHR_materials_specular",g=function(){function e(e){this.name=A,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(A)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSpecularPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadSpecularPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");return void 0!==t.specularFactor&&(n.metallicF0Factor=t.specularFactor),t.specularTexture&&(n.useMetallicF0FactorFromMetallicTexture=!0),Promise.resolve()},e}();o.b.RegisterExtension(A,function(e){return new g(e)});var T="KHR_mesh_quantization",x=function(){function e(e){this.name=T,this.enabled=e.isExtensionUsed(T)}return e.prototype.dispose=function(){},e}();o.b.RegisterExtension(T,function(e){return new x(e)});var E="KHR_texture_basisu",L=function(){function e(e){this.name=E,this._loader=e,this.enabled=e.isExtensionUsed(E)}return e.prototype.dispose=function(){delete this._loader},e.prototype._loadTextureAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(a,i){var s=null==t.sampler?o.b.DefaultSampler:o.a.Get(e+"/sampler",r._loader.gltf.samplers,t.sampler),l=o.a.Get(a+"/source",r._loader.gltf.images,i.source);return r._loader._createTextureAsync(e,s,l,function(e){e.gammaSpace=!1,n(e)})})},e}();o.b.RegisterExtension(E,function(e){return new L(e)});var O="KHR_texture_transform",M=function(){function e(e){this.name=O,this._loader=e,this.enabled=this._loader.isExtensionUsed(O)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadTextureInfoAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,i){return a._loader.loadTextureInfoAsync(e,t,function(e){if(!(e instanceof r.Texture))throw new Error(o+": Texture type not supported");i.offset&&(e.uOffset=i.offset[0],e.vOffset=i.offset[1]),e.uRotationCenter=0,e.vRotationCenter=0,i.rotation&&(e.wAng=-i.rotation),i.scale&&(e.uScale=i.scale[0],e.vScale=i.scale[1]),null!=i.texCoord&&(e.coordinatesIndex=i.texCoord),n(e)})})},e}();o.b.RegisterExtension(O,function(e){return new M(e)});var S="MSFT_audio_emitter",w=function(){function e(e){this.name=S,this._loader=e,this.enabled=this._loader.isExtensionUsed(S)}return e.prototype.dispose=function(){delete this._loader,delete this._clips,delete this._emitters},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._clips=t.clips,this._emitters=t.emitters,o.a.Assign(this._clips),o.a.Assign(this._emitters)}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t));for(var s=0,l=a.emitters;s<l.length;s++){var u=l[s],c=o.a.Get(r+"/emitters",n._emitters,u);if(null!=c.refDistance||null!=c.maxDistance||null!=c.rolloffFactor||null!=c.distanceModel||null!=c.innerAngle||null!=c.outerAngle)throw new Error(r+": Direction or Distance properties are not allowed on emitters attached to a scene");i.push(n._loadEmitterAsync(r+"/emitters/"+c.index,c))}return Promise.all(i).then(function(){})})},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(e,i){var s=new Array;return a._loader.loadNodeAsync(e,t,function(t){for(var l=function(n){var i=o.a.Get(e+"/emitters",a._emitters,n);s.push(a._loadEmitterAsync(e+"/emitters/"+i.index,i).then(function(){for(var e=0,n=i._babylonSounds;e<n.length;e++){var o=n[e];o.attachToMesh(t),null==i.innerAngle&&null==i.outerAngle||(o.setLocalDirectionToMesh(r.Vector3.Forward()),o.setDirectionalCone(2*r.Tools.ToDegrees(null==i.innerAngle?Math.PI:i.innerAngle),2*r.Tools.ToDegrees(null==i.outerAngle?Math.PI:i.outerAngle),0))}}))},u=0,c=i.emitters;u<c.length;u++){l(c[u])}n(t)}).then(function(e){return Promise.all(s).then(function(){return e})})})},e.prototype.loadAnimationAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){return n._loader.loadAnimationAsync(e,t).then(function(i){var s=new Array;o.a.Assign(a.events);for(var l=0,u=a.events;l<u.length;l++){var c=u[l];s.push(n._loadAnimationEventAsync(r+"/events/"+c.index,e,t,c,i))}return Promise.all(s).then(function(){return i})})})},e.prototype._loadClipAsync=function(e,t){if(t._objectURL)return t._objectURL;var n;if(t.uri)n=this._loader.loadUriAsync(e,t,t.uri);else{var r=o.a.Get(e+"/bufferView",this._loader.gltf.bufferViews,t.bufferView);n=this._loader.loadBufferViewAsync("#/bufferViews/"+r.index,r)}return t._objectURL=n.then(function(e){return URL.createObjectURL(new Blob([e],{type:t.mimeType}))}),t._objectURL},e.prototype._loadEmitterAsync=function(e,t){var n=this;if(t._babylonSounds=t._babylonSounds||[],!t._babylonData){for(var a=new Array,i=t.name||"emitter"+t.index,s={loop:!1,autoplay:!1,volume:null==t.volume?1:t.volume},l=function(e){var l="#/extensions/"+u.name+"/clips",c=o.a.Get(l,u._clips,t.clips[e].clip);a.push(u._loadClipAsync(l+"/"+t.clips[e].clip,c).then(function(o){var a=t._babylonSounds[e]=new r.Sound(i,o,n._loader.babylonScene,null,s);a.refDistance=t.refDistance||1,a.maxDistance=t.maxDistance||256,a.rolloffFactor=t.rolloffFactor||1,a.distanceModel=t.distanceModel||"exponential",a._positionInEmitterSpace=!0}))},u=this,c=0;c<t.clips.length;c++)l(c);var f=Promise.all(a).then(function(){var e=t.clips.map(function(e){return e.weight||1}),n=new r.WeightedSound(t.loop||!1,t._babylonSounds,e);t.innerAngle&&(n.directionalConeInnerAngle=2*r.Tools.ToDegrees(t.innerAngle)),t.outerAngle&&(n.directionalConeOuterAngle=2*r.Tools.ToDegrees(t.outerAngle)),t.volume&&(n.volume=t.volume),t._babylonData.sound=n});t._babylonData={loaded:f}}return t._babylonData.loaded},e.prototype._getEventAction=function(e,t,n,r,o){switch(n){case"play":return function(e){var n=(o||0)+(e-r);t.play(n)};case"stop":return function(e){t.stop()};case"pause":return function(e){t.pause()};default:throw new Error(e+": Unsupported action "+n)}},e.prototype._loadAnimationEventAsync=function(e,t,n,a,i){var s=this;if(0==i.targetedAnimations.length)return Promise.resolve();var l=i.targetedAnimations[0],u=a.emitter,c=o.a.Get("#/extensions/"+this.name+"/emitters",this._emitters,u);return this._loadEmitterAsync(e,c).then(function(){var t=c._babylonData.sound;if(t){var n=new r.AnimationEvent(a.time,s._getEventAction(e,t,a.action,a.time,a.startOffset));l.animation.addEvent(n),i.onAnimationGroupEndObservable.add(function(){t.stop()}),i.onAnimationGroupPauseObservable.add(function(){t.pause()})}})},e}();o.b.RegisterExtension(S,function(e){return new w(e)});var C="MSFT_lod",N=function(){function e(e){this.name=C,this.order=100,this.maxLODsToLoad=10,this.onNodeLODsLoadedObservable=new r.Observable,this.onMaterialLODsLoadedObservable=new r.Observable,this._nodeIndexLOD=null,this._nodeSignalLODs=new Array,this._nodePromiseLODs=new Array,this._materialIndexLOD=null,this._materialSignalLODs=new Array,this._materialPromiseLODs=new Array,this._indexLOD=null,this._bufferLODs=new Array,this._loader=e,this.enabled=this._loader.isExtensionUsed(C)}return e.prototype.dispose=function(){delete this._loader,this._nodeIndexLOD=null,this._nodeSignalLODs.length=0,this._nodePromiseLODs.length=0,this._materialIndexLOD=null,this._materialSignalLODs.length=0,this._materialPromiseLODs.length=0,this._indexLOD=null,this._bufferLODs.length=0,this.onMaterialLODsLoadedObservable.clear(),this.onNodeLODsLoadedObservable.clear()},e.prototype.onReady=function(){for(var e=this,t=function(t){var r=Promise.all(n._nodePromiseLODs[t]).then(function(){0!==t&&e._loader.endPerformanceCounter("Node LOD "+t),e._loader.log("Loaded node LOD "+t),e.onNodeLODsLoadedObservable.notifyObservers(t),t!==e._nodePromiseLODs.length-1&&(e._loader.startPerformanceCounter("Node LOD "+(t+1)),e._nodeSignalLODs[t]&&e._nodeSignalLODs[t].resolve())});n._loader._completePromises.push(r)},n=this,r=0;r<this._nodePromiseLODs.length;r++)t(r);var o=function(t){var n=Promise.all(a._materialPromiseLODs[t]).then(function(){0!==t&&e._loader.endPerformanceCounter("Material LOD "+t),e._loader.log("Loaded material LOD "+t),e.onMaterialLODsLoadedObservable.notifyObservers(t),t!==e._materialPromiseLODs.length-1&&(e._loader.startPerformanceCounter("Material LOD "+(t+1)),e._materialSignalLODs[t]&&e._materialSignalLODs[t].resolve())});a._loader._completePromises.push(n)},a=this;for(r=0;r<this._materialPromiseLODs.length;r++)o(r);for(r=1;r<this._bufferLODs.length;r++)this._loadBufferLOD(r)},e.prototype.loadSceneAsync=function(e,t){var n=this._loader.loadSceneAsync(e,t);return 0!==this._bufferLODs.length&&this._loadBufferLOD(0),n},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(e,n){var o,i=a._getLODs(e,t,a._loader.gltf.nodes,n.ids);a._loader.logOpen(""+e);for(var s=function(e){var t=i[e];a._indexLOD=e,0!==e&&(a._nodeIndexLOD=e,a._nodeSignalLODs[e]=a._nodeSignalLODs[e]||new r.Deferred);var n=a._loader.loadNodeAsync("#/nodes/"+t.index,t,function(e){e.setEnabled(!1)}).then(function(t){if(0!==e){var n=i[e-1];n._babylonTransformNode&&(a._disposeTransformNode(n._babylonTransformNode),delete n._babylonTransformNode)}return t.setEnabled(!0),t});0===e?o=n:a._nodeIndexLOD=null,a._indexLOD=null,a._nodePromiseLODs[e]=a._nodePromiseLODs[e]||[],a._nodePromiseLODs[e].push(n)},l=0;l<i.length;l++)s(l);return a._loader.logClose(),o})},e.prototype._loadMaterialAsync=function(e,t,n,r,a){var i=this;return this._indexLOD?null:o.b.LoadExtensionAsync(e,t,this.name,function(e,o){var s,l=i._getLODs(e,t,i._loader.gltf.materials,o.ids);i._loader.logOpen(""+e);for(var u=function(e){var t=l[e];i._indexLOD=e,0!==e&&(i._materialIndexLOD=e);var o=i._loader._loadMaterialAsync("#/materials/"+t.index,t,n,r,function(t){0===e&&a(t)}).then(function(t){if(0!==e){a(t);var n=l[e-1]._data;n[r]&&(i._disposeMaterials([n[r].babylonMaterial]),delete n[r])}return t});0===e?s=o:i._materialIndexLOD=null,i._indexLOD=null,i._materialPromiseLODs[e]=i._materialPromiseLODs[e]||[],i._materialPromiseLODs[e].push(o)},c=0;c<l.length;c++)u(c);return i._loader.logClose(),s})},e.prototype._loadUriAsync=function(e,t,n){var o=this;if(null!==this._materialIndexLOD){this._loader.log("deferred");var a=this._materialIndexLOD-1;return this._materialSignalLODs[a]=this._materialSignalLODs[a]||new r.Deferred,this._materialSignalLODs[a].promise.then(function(){return o._loader.loadUriAsync(e,t,n)})}if(null!==this._nodeIndexLOD){this._loader.log("deferred");a=this._nodeIndexLOD-1;return this._nodeSignalLODs[a]=this._nodeSignalLODs[a]||new r.Deferred,this._nodeSignalLODs[this._nodeIndexLOD-1].promise.then(function(){return o._loader.loadUriAsync(e,t,n)})}return null},e.prototype.loadBufferAsync=function(e,t,n,o){if(this._loader.parent.useRangeRequests&&!t.uri){if(!this._loader.bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");var a=this._indexLOD||0,i=n,s=i+o-1,l=this._bufferLODs[a];return l?(l.start=Math.min(l.start,i),l.end=Math.max(l.end,s)):(l={start:i,end:s,loaded:new r.Deferred},this._bufferLODs[a]=l),l.loaded.promise.then(function(e){return new Uint8Array(e.buffer,e.byteOffset+n-l.start,o)})}return null},e.prototype._loadBufferLOD=function(e){var t=this._bufferLODs[e];this._loader.bin.readAsync(t.start,t.end-t.start+1).then(function(e){t.loaded.resolve(e)},function(e){t.loaded.reject(e)})},e.prototype._getLODs=function(e,t,n,r){if(this.maxLODsToLoad<=0)throw new Error("maxLODsToLoad must be greater than zero");for(var a=new Array,i=r.length-1;i>=0;i--)if(a.push(o.a.Get(e+"/ids/"+r[i],n,r[i])),a.length===this.maxLODsToLoad)return a;return a.push(t),a},e.prototype._disposeTransformNode=function(e){var t=this,n=new Array,r=e.material;r&&n.push(r);for(var o=0,a=e.getChildMeshes();o<a.length;o++){var i=a[o];i.material&&n.push(i.material)}e.dispose();var s=n.filter(function(e){return t._loader.babylonScene.meshes.every(function(t){return t.material!=e})});this._disposeMaterials(s)},e.prototype._disposeMaterials=function(e){for(var t={},n=0,r=e;n<r.length;n++){for(var o=0,a=(c=r[n]).getActiveTextures();o<a.length;o++){var i=a[o];t[i.uniqueId]=i}c.dispose()}for(var s in t)for(var l=0,u=this._loader.babylonScene.materials;l<u.length;l++){var c;(c=u[l]).hasTexture(t[s])&&delete t[s]}for(var s in t)t[s].dispose()},e}();o.b.RegisterExtension(C,function(e){return new N(e)});var P="MSFT_minecraftMesh",R=function(){function e(e){this.name=P,this._loader=e,this.enabled=this._loader.isExtensionUsed(P)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.needAlphaBlending()&&(n.forceDepthWrite=!0,n.separateCullingPass=!0),n.backFaceCulling=n.forceDepthWrite,n.twoSidedLighting=!0,s}return null})},e}();o.b.RegisterExtension(P,function(e){return new R(e)});var I="MSFT_sRGBFactors",F=function(){function e(e){this.name=I,this._loader=e,this.enabled=this._loader.isExtensionUsed(I)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.albedoTexture||n.albedoColor.toLinearSpaceToRef(n.albedoColor),n.reflectivityTexture||n.reflectivityColor.toLinearSpaceToRef(n.reflectivityColor),s}return null})},e}();o.b.RegisterExtension(I,function(e){return new F(e)});var V="ExtrasAsMetadata",B=function(){function e(e){this.name=V,this.enabled=!0,this._loader=e}return e.prototype._assignExtras=function(e,t){if(t.extras&&Object.keys(t.extras).length>0){var n=e.metadata=e.metadata||{};(n.gltf=n.gltf||{}).extras=t.extras}},e.prototype.dispose=function(){delete this._loader},e.prototype.loadNodeAsync=function(e,t,n){var r=this;return this._loader.loadNodeAsync(e,t,function(e){r._assignExtras(e,t),n(e)})},e.prototype.loadCameraAsync=function(e,t,n){var r=this;return this._loader.loadCameraAsync(e,t,function(e){r._assignExtras(e,t),n(e)})},e.prototype.createMaterial=function(e,t,n){var r=this._loader.createMaterial(e,t,n);return this._assignExtras(r,t),r},e}();o.b.RegisterExtension(V,function(e){return new B(e)}),n.d(t,"EXT_lights_image_based",function(){return i}),n.d(t,"KHR_draco_mesh_compression",function(){return l}),n.d(t,"KHR_lights",function(){return f}),n.d(t,"KHR_materials_pbrSpecularGlossiness",function(){return h}),n.d(t,"KHR_materials_unlit",function(){return m}),n.d(t,"KHR_materials_clearcoat",function(){return y}),n.d(t,"KHR_materials_sheen",function(){return v}),n.d(t,"KHR_materials_specular",function(){return g}),n.d(t,"KHR_mesh_quantization",function(){return x}),n.d(t,"KHR_texture_basisu",function(){return L}),n.d(t,"KHR_texture_transform",function(){return M}),n.d(t,"MSFT_audio_emitter",function(){return w}),n.d(t,"MSFT_lod",function(){return N}),n.d(t,"MSFT_minecraftMesh",function(){return R}),n.d(t,"MSFT_sRGBFactors",function(){return F}),n.d(t,"ExtrasAsMetadata",function(){return B})},function(e,t,n){"use strict";n.r(t);var r=n(1);n.d(t,"ArrayItem",function(){return r.a}),n.d(t,"GLTFLoader",function(){return r.b});var o=n(5);n.d(t,"EXT_lights_image_based",function(){return o.EXT_lights_image_based}),n.d(t,"KHR_draco_mesh_compression",function(){return o.KHR_draco_mesh_compression}),n.d(t,"KHR_lights",function(){return o.KHR_lights}),n.d(t,"KHR_materials_pbrSpecularGlossiness",function(){return o.KHR_materials_pbrSpecularGlossiness}),n.d(t,"KHR_materials_unlit",function(){return o.KHR_materials_unlit}),n.d(t,"KHR_materials_clearcoat",function(){return o.KHR_materials_clearcoat}),n.d(t,"KHR_materials_sheen",function(){return o.KHR_materials_sheen}),n.d(t,"KHR_materials_specular",function(){return o.KHR_materials_specular}),n.d(t,"KHR_mesh_quantization",function(){return o.KHR_mesh_quantization}),n.d(t,"KHR_texture_basisu",function(){return o.KHR_texture_basisu}),n.d(t,"KHR_texture_transform",function(){return o.KHR_texture_transform}),n.d(t,"MSFT_audio_emitter",function(){return o.MSFT_audio_emitter}),n.d(t,"MSFT_lod",function(){return o.MSFT_lod}),n.d(t,"MSFT_minecraftMesh",function(){return o.MSFT_minecraftMesh}),n.d(t,"MSFT_sRGBFactors",function(){return o.MSFT_sRGBFactors}),n.d(t,"ExtrasAsMetadata",function(){return o.ExtrasAsMetadata})},function(e,t,n){"use strict";n.r(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a,i,s,l,u,c,f,d;!function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.FLOAT=5126]="FLOAT"}(a||(a={})),function(e){e[e.FRAGMENT=35632]="FRAGMENT",e[e.VERTEX=35633]="VERTEX"}(i||(i={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D"}(s||(s={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.REPEAT=10497]="REPEAT"}(l||(l={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9728]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(u||(u={})),function(e){e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA"}(c||(c={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(f||(f={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE"}(d||(d={}));var h,p=n(0),m=function(){function e(){}return e.SetMatrix=function(e,t,n,r,o){var a=null;if("MODEL"===n.semantic?a=t.getWorldMatrix():"PROJECTION"===n.semantic?a=e.getProjectionMatrix():"VIEW"===n.semantic?a=e.getViewMatrix():"MODELVIEWINVERSETRANSPOSE"===n.semantic?a=p.Matrix.Transpose(t.getWorldMatrix().multiply(e.getViewMatrix()).invert()):"MODELVIEW"===n.semantic?a=t.getWorldMatrix().multiply(e.getViewMatrix()):"MODELVIEWPROJECTION"===n.semantic?a=t.getWorldMatrix().multiply(e.getTransformMatrix()):"MODELINVERSE"===n.semantic?a=t.getWorldMatrix().invert():"VIEWINVERSE"===n.semantic?a=e.getViewMatrix().invert():"PROJECTIONINVERSE"===n.semantic?a=e.getProjectionMatrix().invert():"MODELVIEWINVERSE"===n.semantic?a=t.getWorldMatrix().multiply(e.getViewMatrix()).invert():"MODELVIEWPROJECTIONINVERSE"===n.semantic?a=t.getWorldMatrix().multiply(e.getTransformMatrix()).invert():"MODELINVERSETRANSPOSE"===n.semantic&&(a=p.Matrix.Transpose(t.getWorldMatrix().invert())),a)switch(n.type){case s.FLOAT_MAT2:o.setMatrix2x2(r,p.Matrix.GetAsMatrix2x2(a));break;case s.FLOAT_MAT3:o.setMatrix3x3(r,p.Matrix.GetAsMatrix3x3(a));break;case s.FLOAT_MAT4:o.setMatrix(r,a)}},e.SetUniform=function(e,t,n,r){switch(r){case s.FLOAT:return e.setFloat(t,n),!0;case s.FLOAT_VEC2:return e.setVector2(t,p.Vector2.FromArray(n)),!0;case s.FLOAT_VEC3:return e.setVector3(t,p.Vector3.FromArray(n)),!0;case s.FLOAT_VEC4:return e.setVector4(t,p.Vector4.FromArray(n)),!0;default:return!1}},e.GetWrapMode=function(e){switch(e){case l.CLAMP_TO_EDGE:return p.Texture.CLAMP_ADDRESSMODE;case l.MIRRORED_REPEAT:return p.Texture.MIRROR_ADDRESSMODE;case l.REPEAT:default:return p.Texture.WRAP_ADDRESSMODE}},e.GetByteStrideFromType=function(e){switch(e.type){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;default:return 1}},e.GetTextureFilterMode=function(e){switch(e){case u.LINEAR:case u.LINEAR_MIPMAP_NEAREST:case u.LINEAR_MIPMAP_LINEAR:return p.Texture.TRILINEAR_SAMPLINGMODE;case u.NEAREST:case u.NEAREST_MIPMAP_NEAREST:return p.Texture.NEAREST_SAMPLINGMODE;default:return p.Texture.BILINEAR_SAMPLINGMODE}},e.GetBufferFromBufferView=function(e,t,n,r,o){n=t.byteOffset+n;var i=e.loadedBufferViews[t.buffer];if(n+r>i.byteLength)throw new Error("Buffer access is out of range");var s=i.buffer;switch(n+=i.byteOffset,o){case a.BYTE:return new Int8Array(s,n,r);case a.UNSIGNED_BYTE:return new Uint8Array(s,n,r);case a.SHORT:return new Int16Array(s,n,r);case a.UNSIGNED_SHORT:return new Uint16Array(s,n,r);default:return new Float32Array(s,n,r)}},e.GetBufferFromAccessor=function(t,n){var r=t.bufferViews[n.bufferView],o=n.count*e.GetByteStrideFromType(n);return e.GetBufferFromBufferView(t,r,n.byteOffset,o,n.componentType)},e.DecodeBufferToText=function(e){for(var t="",n=e.byteLength,r=0;r<n;++r)t+=String.fromCharCode(e[r]);return t},e.GetDefaultMaterial=function(t){if(!e._DefaultMaterial){p.Effect.ShadersStore.GLTFDefaultMaterialVertexShader=["precision highp float;","","uniform mat4 worldView;","uniform mat4 projection;","","attribute vec3 position;","","void main(void)","{","    gl_Position = projection * worldView * vec4(position, 1.0);","}"].join("\n"),p.Effect.ShadersStore.GLTFDefaultMaterialPixelShader=["precision highp float;","","uniform vec4 u_emission;","","void main(void)","{","    gl_FragColor = u_emission;","}"].join("\n");var n={attributes:["position"],uniforms:["worldView","projection","u_emission"],samplers:new Array,needAlphaBlending:!1};e._DefaultMaterial=new p.ShaderMaterial("GLTFDefaultMaterial",t,{vertex:"GLTFDefaultMaterial",fragment:"GLTFDefaultMaterial"},n),e._DefaultMaterial.setColor4("u_emission",new p.Color4(.5,.5,.5,1))}return e._DefaultMaterial},e._DefaultMaterial=null,e}(),_=n(2);!function(e){e[e.IDENTIFIER=1]="IDENTIFIER",e[e.UNKNOWN=2]="UNKNOWN",e[e.END_OF_INPUT=3]="END_OF_INPUT"}(h||(h={}));var y=function(){function e(e){this._pos=0,this.currentToken=h.UNKNOWN,this.currentIdentifier="",this.currentString="",this.isLetterOrDigitPattern=/^[a-zA-Z0-9]+$/,this._toParse=e,this._maxPos=e.length}return e.prototype.getNextToken=function(){if(this.isEnd())return h.END_OF_INPUT;if(this.currentString=this.read(),this.currentToken=h.UNKNOWN,"_"===this.currentString||this.isLetterOrDigitPattern.test(this.currentString))for(this.currentToken=h.IDENTIFIER,this.currentIdentifier=this.currentString;!this.isEnd()&&(this.isLetterOrDigitPattern.test(this.currentString=this.peek())||"_"===this.currentString);)this.currentIdentifier+=this.currentString,this.forward();return this.currentToken},e.prototype.peek=function(){return this._toParse[this._pos]},e.prototype.read=function(){return this._toParse[this._pos++]},e.prototype.forward=function(){this._pos++},e.prototype.isEnd=function(){return this._pos>=this._maxPos},e}(),b=["MODEL","VIEW","PROJECTION","MODELVIEW","MODELVIEWPROJECTION","JOINTMATRIX"],v=["world","view","projection","worldView","worldViewProjection","mBones"],A=["translation","rotation","scale"],g=["position","rotationQuaternion","scaling"],T=function(e,t,n){for(var r in e){var o=e[r];n[t][r]=o}},x=function(e){if(e)for(var t=0;t<e.length/2;t++)e[2*t+1]=1-e[2*t+1]},E=function(e){if("NORMAL"===e.semantic)return"normal";if("POSITION"===e.semantic)return"position";if("JOINT"===e.semantic)return"matricesIndices";if("WEIGHT"===e.semantic)return"matricesWeights";if("COLOR"===e.semantic)return"color";if(e.semantic&&-1!==e.semantic.indexOf("TEXCOORD_")){var t=Number(e.semantic.split("_")[1]);return"uv"+(0===t?"":t+1)}return null},L=function(e){var t=null;if(e.translation||e.rotation||e.scale){var n=p.Vector3.FromArray(e.scale||[1,1,1]),r=p.Quaternion.FromArray(e.rotation||[0,0,0,1]),o=p.Vector3.FromArray(e.translation||[0,0,0]);t=p.Matrix.Compose(n,r,o)}else t=p.Matrix.FromArray(e.matrix);return t},O=function(e,t,n,r){for(var o=0;o<r.bones.length;o++)if(r.bones[o].name===n)return r.bones[o];var a=e.nodes;for(var i in a){var s=a[i];if(s.jointName){var l=s.children;for(o=0;o<l.length;o++){var u=e.nodes[l[o]];if(u.jointName&&u.jointName===n){var c=L(s),f=new p.Bone(s.name||"",r,O(e,t,s.jointName,r),c);return f.id=i,f}}}}return null},M=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.node.children.length;o++){if(r.node.children[o]===t)return r.bone}return null},S=function(e,t){var n=e.nodes,r=n[t];if(r)return{node:r,id:t};for(var o in n)if((r=n[o]).jointName===t)return{node:r,id:o};return null},w=function(e,t){for(var n=0;n<e.jointNames.length;n++)if(e.jointNames[n]===t)return!0;return!1},C=function(e,t,n,r,o){if(r||(r=new p.Skeleton(t.name||"","",e.scene)),!t.babylonSkeleton)return r;var a=[],i=[];!function(e,t,n,r){for(var o in e.nodes){var a=e.nodes[o],i=o;if(a.jointName&&!w(n,a.jointName)){var s=L(a),l=new p.Bone(a.name||"",t,null,s);l.id=i,r.push({bone:l,node:a,id:i})}}for(var u=0;u<r.length;u++)for(var c=r[u],f=c.node.children,d=0;d<f.length;d++){for(var h=null,m=0;m<r.length;m++)if(r[m].id===f[d]){h=r[m];break}h&&(h.bone._parent=c.bone,c.bone.children.push(h.bone))}}(e,r,t,a),r.bones=[];for(var s=0;s<t.jointNames.length;s++){if(A=S(e,t.jointNames[s])){var l=A.node;if(l){o=A.id;var u=e.scene.getBoneByID(o);if(u)r.bones.push(u);else{for(var c=!1,f=null,d=0;d<s;d++){var h=S(e,t.jointNames[d]);if(h){var m=h.node;if(m){var _=m.children;if(_){c=!1;for(var y=0;y<_.length;y++)if(_[y]===o){f=O(e,t,t.jointNames[d],r),c=!0;break}if(c)break}}else p.Tools.Warn("Joint named "+t.jointNames[d]+" does not exist when looking for parent")}}var b=L(l);!f&&a.length>0&&(f=M(a,o))&&-1===i.indexOf(f)&&i.push(f),new p.Bone(l.jointName||"",r,f,b).id=o}}else p.Tools.Warn("Joint named "+t.jointNames[s]+" does not exist")}}var v=r.bones;r.bones=[];for(s=0;s<t.jointNames.length;s++){var A;if(A=S(e,t.jointNames[s]))for(d=0;d<v.length;d++)if(v[d].id===A.id){r.bones.push(v[d]);break}}r.prepare();for(s=0;s<i.length;s++)r.bones.push(i[s]);return r},N=function(e,t,n,r,o){if(o||(e.scene._blockEntityCollection=e.forAssetContainer,o=new p.Mesh(t.name||"",e.scene),e.scene._blockEntityCollection=!1,o.id=r),!t.babylonNode)return o;for(var a,i=[],s=null,l=new Array,u=new Array,c=new Array,f=new Array,d=0;d<n.length;d++){var h=n[d];if(P=e.meshes[h])for(var y=0;y<P.primitives.length;y++){var b=new p.VertexData,v=P.primitives[y];v.mode;var A=v.attributes,g=null,T=null;for(var E in A)if(g=e.accessors[A[E]],T=m.GetBufferFromAccessor(e,g),"NORMAL"===E)b.normals=new Float32Array(T.length),b.normals.set(T);else if("POSITION"===E){if(_.GLTFFileLoader.HomogeneousCoordinates){b.positions=new Float32Array(T.length-T.length/4);for(var L=0;L<T.length;L+=4)b.positions[L]=T[L],b.positions[L+1]=T[L+1],b.positions[L+2]=T[L+2]}else b.positions=new Float32Array(T.length),b.positions.set(T);u.push(b.positions.length)}else if(-1!==E.indexOf("TEXCOORD_")){var O=Number(E.split("_")[1]),M=p.VertexBuffer.UVKind+(0===O?"":O+1),S=new Float32Array(T.length);S.set(T),x(S),b.set(S,M)}else"JOINT"===E?(b.matricesIndices=new Float32Array(T.length),b.matricesIndices.set(T)):"WEIGHT"===E?(b.matricesWeights=new Float32Array(T.length),b.matricesWeights.set(T)):"COLOR"===E&&(b.colors=new Float32Array(T.length),b.colors.set(T));if(g=e.accessors[v.indices])T=m.GetBufferFromAccessor(e,g),b.indices=new Int32Array(T.length),b.indices.set(T),f.push(b.indices.length);else{var w=[];for(L=0;L<b.positions.length/3;L++)w.push(L);b.indices=new Int32Array(w),f.push(b.indices.length)}s?s.merge(b):s=b;var C=e.scene.getMaterialByID(v.material);i.push(null===C?m.GetDefaultMaterial(e.scene):C),l.push(0===l.length?0:l[l.length-1]+u[u.length-2]),c.push(0===c.length?0:c[c.length-1]+f[f.length-2])}}e.scene._blockEntityCollection=e.forAssetContainer,i.length>1?(a=new p.MultiMaterial("multimat"+r,e.scene)).subMaterials=i:a=new p.StandardMaterial("multimat"+r,e.scene),1===i.length&&(a=i[0]),o.material||(o.material=a),new p.Geometry(r,e.scene,s,!1,o),o.computeWorldMatrix(!0),e.scene._blockEntityCollection=!1,o.subMeshes=[];var N=0;for(d=0;d<n.length;d++){var P;h=n[d];if(P=e.meshes[h])for(y=0;y<P.primitives.length;y++)P.primitives[y].mode,p.SubMesh.AddToMesh(N,l[N],u[N],c[N],f[N],o,o,!0),N++}return o},P=function(e,t,n,r){e.position&&(e.position=t),(e.rotationQuaternion||e.rotation)&&(e.rotationQuaternion=n),e.scaling&&(e.scaling=r)},R=function(e,t,n,r){var o=null;if(e.importOnlyMeshes&&(t.skin||t.meshes)&&e.importMeshesNames&&e.importMeshesNames.length>0&&-1===e.importMeshesNames.indexOf(t.name||""))return null;if(t.skin){if(t.meshes){var a=e.skins[t.skin];(i=N(e,t,t.meshes,n,t.babylonNode)).skeleton=e.scene.getLastSkeletonByID(t.skin),null===i.skeleton&&(i.skeleton=C(e,a,0,a.babylonSkeleton,t.skin),a.babylonSkeleton||(a.babylonSkeleton=i.skeleton)),o=i}}else if(t.meshes){var i;o=i=N(e,t,t.mesh?[t.mesh]:t.meshes,n,t.babylonNode)}else if(!t.light||t.babylonNode||e.importOnlyMeshes){if(t.camera&&!t.babylonNode&&!e.importOnlyMeshes){var s=e.cameras[t.camera];if(s){if(e.scene._blockEntityCollection=e.forAssetContainer,"orthographic"===s.type){var l=new p.FreeCamera(t.camera,p.Vector3.Zero(),e.scene,!1);l.name=t.name||"",l.mode=p.Camera.ORTHOGRAPHIC_CAMERA,l.attachControl(e.scene.getEngine().getInputElement()),o=l}else if("perspective"===s.type){var u=s[s.type],c=new p.FreeCamera(t.camera,p.Vector3.Zero(),e.scene,!1);c.name=t.name||"",c.attachControl(e.scene.getEngine().getInputElement()),u.aspectRatio||(u.aspectRatio=e.scene.getEngine().getRenderWidth()/e.scene.getEngine().getRenderHeight()),u.znear&&u.zfar&&(c.maxZ=u.zfar,c.minZ=u.znear),o=c}e.scene._blockEntityCollection=!1}}}else{var f=e.lights[t.light];if(f)if("ambient"===f.type){var d=f[f.type],h=new p.HemisphericLight(t.light,p.Vector3.Zero(),e.scene);h.name=t.name||"",d.color&&(h.diffuse=p.Color3.FromArray(d.color)),o=h}else if("directional"===f.type){var m=f[f.type],_=new p.DirectionalLight(t.light,p.Vector3.Zero(),e.scene);_.name=t.name||"",m.color&&(_.diffuse=p.Color3.FromArray(m.color)),o=_}else if("point"===f.type){var y=f[f.type],b=new p.PointLight(t.light,p.Vector3.Zero(),e.scene);b.name=t.name||"",y.color&&(b.diffuse=p.Color3.FromArray(y.color)),o=b}else if("spot"===f.type){var v=f[f.type],A=new p.SpotLight(t.light,p.Vector3.Zero(),p.Vector3.Zero(),0,0,e.scene);A.name=t.name||"",v.color&&(A.diffuse=p.Color3.FromArray(v.color)),v.fallOfAngle&&(A.angle=v.fallOfAngle),v.fallOffExponent&&(A.exponent=v.fallOffExponent),o=A}}if(!t.jointName){if(t.babylonNode)return t.babylonNode;if(null===o){e.scene._blockEntityCollection=e.forAssetContainer;var g=new p.Mesh(t.name||"",e.scene);e.scene._blockEntityCollection=!1,t.babylonNode=g,o=g}}if(null!==o){if(t.matrix&&o instanceof p.Mesh)!function(e,t,n){if(t.matrix){var r=new p.Vector3(0,0,0),o=new p.Quaternion,a=new p.Vector3(0,0,0);p.Matrix.FromArray(t.matrix).decompose(a,o,r),P(e,r,o,a)}else t.translation&&t.rotation&&t.scale&&P(e,p.Vector3.FromArray(t.translation),p.Quaternion.FromArray(t.rotation),p.Vector3.FromArray(t.scale));e.computeWorldMatrix(!0)}(o,t);else{var T=t.translation||[0,0,0],x=t.rotation||[0,0,0,1],E=t.scale||[1,1,1];P(o,p.Vector3.FromArray(T),p.Quaternion.FromArray(x),p.Vector3.FromArray(E))}o.updateCache(!0),t.babylonNode=o}return o},I=function(e,t,n,r){void 0===r&&(r=!1);var o=e.nodes[t],a=null;if(r=!(e.importOnlyMeshes&&!r&&e.importMeshesNames)||(-1!==e.importMeshesNames.indexOf(o.name||"")||0===e.importMeshesNames.length),!o.jointName&&r&&null!==(a=R(e,o,t))&&(a.id=t,a.parent=n),o.children)for(var i=0;i<o.children.length;i++)I(e,o.children[i],a,r)},F=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null)}!function(e){for(var t in e.animations){var n=e.animations[t];if(n.channels&&n.samplers)for(var r=null,o=0;o<n.channels.length;o++){var a=n.channels[o],i=n.samplers[a.sampler];if(i){var s=null,l=null;n.parameters?(s=n.parameters[i.input],l=n.parameters[i.output]):(s=i.input,l=i.output);var u=m.GetBufferFromAccessor(e,e.accessors[s]),c=m.GetBufferFromAccessor(e,e.accessors[l]),f=a.target.id,d=e.scene.getNodeByID(f);if(null===d&&(d=e.scene.getNodeByName(f)),null!==d){var h=d instanceof p.Bone,_=a.target.path,y=A.indexOf(_);-1!==y&&(_=g[y]);var b=p.Animation.ANIMATIONTYPE_MATRIX;h||("rotationQuaternion"===_?(b=p.Animation.ANIMATIONTYPE_QUATERNION,d.rotationQuaternion=new p.Quaternion):b=p.Animation.ANIMATIONTYPE_VECTOR3);var v=null,T=[],x=0,E=!1;h&&r&&r.getKeys().length===u.length&&(v=r,E=!0),E||(e.scene._blockEntityCollection=e.forAssetContainer,v=new p.Animation(t,h?"_matrix":_,1,b,p.Animation.ANIMATIONLOOPMODE_CYCLE),e.scene._blockEntityCollection=!1);for(var L=0;L<u.length;L++){var O=null;if("rotationQuaternion"===_?(O=p.Quaternion.FromArray([c[x],c[x+1],c[x+2],c[x+3]]),x+=4):(O=p.Vector3.FromArray([c[x],c[x+1],c[x+2]]),x+=3),h){var M=d,S=p.Vector3.Zero(),w=new p.Quaternion,C=p.Vector3.Zero(),N=M.getBaseMatrix();E&&r&&(N=r.getKeys()[L].value),N.decompose(C,w,S),"position"===_?S=O:"rotationQuaternion"===_?w=O:C=O,O=p.Matrix.Compose(C,w,S)}E?r&&(r.getKeys()[L].value=O):T.push({frame:u[L],value:O})}!E&&v&&(v.setKeys(T),d.animations.push(v)),r=v,e.scene.stopAnimation(d),e.scene.beginAnimation(d,0,u[u.length-1],!0,1)}else p.Tools.Warn("Creating animation named "+t+". But cannot find node named "+f+" to attach to")}}}}(e);for(n=0;n<e.scene.skeletons.length;n++){var o=e.scene.skeletons[n];e.scene.beginAnimation(o,0,Number.MAX_VALUE,!0,1)}},V=function(e,t,n,r,o,a){return function(i){!function(e,t,n,r,o){var a=r.values||n.parameters,i=n.uniforms;for(var l in o){var u=o[l],c=u.type,f=a[i[l]];if(void 0===f&&(f=u.value),f){var d=function(e){return function(n){u.value&&e&&(t.setTexture(e,n),delete o[e])}};c===s.SAMPLER_2D?k.LoadTextureAsync(e,r.values?f:u.value,d(l),function(){return d(null)}):u.value&&m.SetUniform(t,l,r.values?f:u.value,c)&&delete o[l]}}}(e,t,n,r,o),t.onBind=function(i){!function(e,t,n,r,o,a,i){var l=a.values||o.parameters;for(var u in n){var c=n[u],f=c.type;if(f===s.FLOAT_MAT2||f===s.FLOAT_MAT3||f===s.FLOAT_MAT4)if(!c.semantic||c.source||c.node){if(c.semantic&&(c.source||c.node)){var d=t.scene.getNodeByName(c.source||c.node||"");if(null===d&&(d=t.scene.getNodeByID(c.source||c.node||"")),null===d)continue;m.SetMatrix(t.scene,d,c,u,r.getEffect())}}else m.SetMatrix(t.scene,e,c,u,r.getEffect());else{var h=l[o.uniforms[u]];if(!h)continue;if(f===s.SAMPLER_2D){var p=t.textures[a.values?h:c.value].babylonTexture;if(null==p)continue;r.getEffect().setTexture(u,p)}else m.SetUniform(r.getEffect(),u,h,f)}}i(r)}(i,e,o,t,n,r,a)}}},B=function(e,t,n){for(var r in t.uniforms){var o=t.uniforms[r],a=t.parameters[o];if(e.currentIdentifier===r&&a.semantic&&!a.source&&!a.node){var i=b.indexOf(a.semantic);if(-1!==i)return delete n[r],v[i]}}return e.currentIdentifier},D=function(e){for(var t in e.materials)k.LoadMaterialAsync(e,t,function(e){},function(){})},G=function(){function e(){}return e.CreateRuntime=function(e,t,n){var r={extensions:{},accessors:{},buffers:{},bufferViews:{},meshes:{},lights:{},cameras:{},nodes:{},images:{},textures:{},shaders:{},programs:{},samplers:{},techniques:{},materials:{},animations:{},skins:{},extensionsUsed:[],scenes:{},buffersCount:0,shaderscount:0,scene:t,rootUrl:n,loadedBufferCount:0,loadedBufferViews:{},loadedShaderCount:0,importOnlyMeshes:!1,dummyNodes:[],forAssetContainer:!1};return e.extensions&&T(e.extensions,"extensions",r),e.extensionsUsed&&T(e.extensionsUsed,"extensionsUsed",r),e.buffers&&function(e,t){for(var n in e){var r=e[n];t.buffers[n]=r,t.buffersCount++}}(e.buffers,r),e.bufferViews&&T(e.bufferViews,"bufferViews",r),e.accessors&&T(e.accessors,"accessors",r),e.meshes&&T(e.meshes,"meshes",r),e.lights&&T(e.lights,"lights",r),e.cameras&&T(e.cameras,"cameras",r),e.nodes&&T(e.nodes,"nodes",r),e.images&&T(e.images,"images",r),e.textures&&T(e.textures,"textures",r),e.shaders&&function(e,t){for(var n in e){var r=e[n];t.shaders[n]=r,t.shaderscount++}}(e.shaders,r),e.programs&&T(e.programs,"programs",r),e.samplers&&T(e.samplers,"samplers",r),e.techniques&&T(e.techniques,"techniques",r),e.materials&&T(e.materials,"materials",r),e.animations&&T(e.animations,"animations",r),e.skins&&T(e.skins,"skins",r),e.scenes&&(r.scenes=e.scenes),e.scene&&e.scenes&&(r.currentScene=e.scenes[e.scene]),r},e.LoadBufferAsync=function(e,t,n,r,o){var a=e.buffers[t];p.Tools.IsBase64(a.uri)?setTimeout(function(){return n(new Uint8Array(p.Tools.DecodeBase64(a.uri)))}):p.Tools.LoadFile(e.rootUrl+a.uri,function(e){return n(new Uint8Array(e))},o,void 0,!0,function(e){e&&r(e.status+" "+e.statusText)})},e.LoadTextureBufferAsync=function(e,t,n,r){var o=e.textures[t];if(o&&o.source)if(o.babylonTexture)n(null);else{var a=e.images[o.source];p.Tools.IsBase64(a.uri)?setTimeout(function(){return n(new Uint8Array(p.Tools.DecodeBase64(a.uri)))}):p.Tools.LoadFile(e.rootUrl+a.uri,function(e){return n(new Uint8Array(e))},void 0,void 0,!0,function(e){e&&r(e.status+" "+e.statusText)})}else r("")},e.CreateTextureAsync=function(e,t,n,r,o){var a=e.textures[t];if(a.babylonTexture)r(a.babylonTexture);else{var i=e.samplers[a.sampler],s=i.minFilter===u.NEAREST_MIPMAP_NEAREST||i.minFilter===u.NEAREST_MIPMAP_LINEAR||i.minFilter===u.LINEAR_MIPMAP_NEAREST||i.minFilter===u.LINEAR_MIPMAP_LINEAR,l=p.Texture.BILINEAR_SAMPLINGMODE,c=null==n?new Blob:new Blob([n]),f=URL.createObjectURL(c),d=function(){return URL.revokeObjectURL(f)},h=new p.Texture(f,e.scene,!s,!0,l,d,d);void 0!==i.wrapS&&(h.wrapU=m.GetWrapMode(i.wrapS)),void 0!==i.wrapT&&(h.wrapV=m.GetWrapMode(i.wrapT)),h.name=t,a.babylonTexture=h,r(h)}},e.LoadShaderStringAsync=function(e,t,n,r){var o=e.shaders[t];if(p.Tools.IsBase64(o.uri)){var a=atob(o.uri.split(",")[1]);n&&n(a)}else p.Tools.LoadFile(e.rootUrl+o.uri,n,void 0,void 0,!1,function(e){e&&r&&r(e.status+" "+e.statusText)})},e.LoadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(o.technique){var a=e.techniques[o.technique];if(!a){e.scene._blockEntityCollection=e.forAssetContainer;var i=new p.StandardMaterial(t,e.scene);return e.scene._blockEntityCollection=!1,i.diffuseColor=new p.Color3(.5,.5,.5),i.sideOrientation=p.Material.CounterClockWiseSideOrientation,void n(i)}var l=e.programs[a.program],u=a.states,c=p.Effect.ShadersStore[l.vertexShader+"VertexShader"],m=p.Effect.ShadersStore[l.fragmentShader+"PixelShader"],_="",A="",g=new y(c),T=new y(m),x={},L=[],O=[],M=[];for(var S in a.uniforms){var w=a.uniforms[S],C=a.parameters[w];if(x[S]=C,!C.semantic||C.node||C.source)C.type===s.SAMPLER_2D?M.push(S):L.push(S);else{var N=b.indexOf(C.semantic);-1!==N?(L.push(v[N]),delete x[S]):L.push(S)}}for(var P in a.attributes){var R=a.attributes[P];if((D=a.parameters[R]).semantic){var I=E(D);I&&O.push(I)}}for(;!g.isEnd()&&g.getNextToken();){if(g.currentToken===h.IDENTIFIER){var F=!1;for(var P in a.attributes){R=a.attributes[P];var D=a.parameters[R];if(g.currentIdentifier===P&&D.semantic){_+=E(D),F=!0;break}}F||(_+=B(g,a,x))}else _+=g.currentString}for(;!T.isEnd()&&T.getNextToken();){T.currentToken===h.IDENTIFIER?A+=B(T,a,x):A+=T.currentString}var G={vertex:l.vertexShader+t,fragment:l.fragmentShader+t},U={attributes:O,uniforms:L,samplers:M,needAlphaBlending:u&&u.enable&&-1!==u.enable.indexOf(3042)};p.Effect.ShadersStore[l.vertexShader+t+"VertexShader"]=_,p.Effect.ShadersStore[l.fragmentShader+t+"PixelShader"]=A;var k=new p.ShaderMaterial(t,e.scene,G,U);if(k.onError=function(e,t,n){return function(r,o){t.dispose(!0),n("Cannot compile program named "+e.name+". Error: "+o+". Default material will be applied")}}(l,k,r),k.onCompiled=V(e,k,a,o,x,n),k.sideOrientation=p.Material.CounterClockWiseSideOrientation,u&&u.functions){var H=u.functions;H.cullFace&&H.cullFace[0]!==f.BACK&&(k.backFaceCulling=!1);var j=H.blendFuncSeparate;j&&(j[0]===d.SRC_ALPHA&&j[1]===d.ONE_MINUS_SRC_ALPHA&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_COMBINE:j[0]===d.ONE&&j[1]===d.ONE&&j[2]===d.ZERO&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_ONEONE:j[0]===d.SRC_ALPHA&&j[1]===d.ONE&&j[2]===d.ZERO&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_ADD:j[0]===d.ZERO&&j[1]===d.ONE_MINUS_SRC_COLOR&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_SUBTRACT:j[0]===d.DST_COLOR&&j[1]===d.ZERO&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_MULTIPLY:j[0]===d.SRC_ALPHA&&j[1]===d.ONE_MINUS_SRC_COLOR&&j[2]===d.ONE&&j[3]===d.ONE&&(k.alphaMode=p.Constants.ALPHA_MAXIMIZED))}}else r&&r("No technique found.")},e}(),U=function(){function e(){this.state=null}return e.RegisterExtension=function(t){e.Extensions[t.name]?p.Tools.Error('Tool with the same name "'+t.name+'" already exists'):e.Extensions[t.name]=t},e.prototype.dispose=function(){},e.prototype._importMeshAsync=function(e,t,n,r,o,a,i,s){var l=this;return t.useRightHandedSystem=!0,k.LoadRuntimeAsync(t,n,r,function(t){t.forAssetContainer=o,t.importOnlyMeshes=!0,""===e?t.importMeshesNames=[]:"string"==typeof e?t.importMeshesNames=[e]:!e||e instanceof Array?(t.importMeshesNames=[],p.Tools.Warn("Argument meshesNames must be of type string or string[]")):t.importMeshesNames=[e],l._createNodes(t);var n=new Array,r=new Array;for(var s in t.nodes){var u=t.nodes[s];u.babylonNode instanceof p.AbstractMesh&&n.push(u.babylonNode)}for(var c in t.skins){var f=t.skins[c];f.babylonSkeleton instanceof p.Skeleton&&r.push(f.babylonSkeleton)}l._loadBuffersAsync(t,function(){l._loadShadersAsync(t,function(){D(t),F(t),!_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r)})},i),_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r)},s),!0},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return new Promise(function(s,l){i._importMeshAsync(e,t,r,o,n,function(e,t){s({meshes:e,particleSystems:[],skeletons:t,animationGroups:[],lights:[],transformNodes:[]})},a,function(e){l(new Error(e))})})},e.prototype._loadAsync=function(e,t,n,r,o,a,i){var s=this;e.useRightHandedSystem=!0,k.LoadRuntimeAsync(e,t,n,function(e){k.LoadRuntimeExtensionsAsync(e,function(){s._createNodes(e),s._loadBuffersAsync(e,function(){s._loadShadersAsync(e,function(){D(e),F(e),_.GLTFFileLoader.IncrementalLoading||o()})}),_.GLTFFileLoader.IncrementalLoading&&o()},i)},i)},e.prototype.loadAsync=function(e,t,n,r){var o=this;return new Promise(function(a,i){o._loadAsync(e,t,n,!1,function(){a()},r,function(e){i(new Error(e))})})},e.prototype._loadShadersAsync=function(e,t){var n=!1,r=function(n,r){k.LoadShaderStringAsync(e,n,function(o){o instanceof ArrayBuffer||(e.loadedShaderCount++,o&&(p.Effect.ShadersStore[n+(r.type===i.VERTEX?"VertexShader":"PixelShader")]=o),e.loadedShaderCount===e.shaderscount&&t())},function(){p.Tools.Error("Error when loading shader program named "+n+" located at "+r.uri)})};for(var o in e.shaders){n=!0;var a=e.shaders[o];a?r.bind(this,o,a)():p.Tools.Error("No shader named: "+o)}n||t()},e.prototype._loadBuffersAsync=function(e,t,n){var r=!1,o=function(n,r){k.LoadBufferAsync(e,n,function(o){e.loadedBufferCount++,o&&(o.byteLength!=e.buffers[n].byteLength&&p.Tools.Error("Buffer named "+n+" is length "+o.byteLength+". Expected: "+r.byteLength),e.loadedBufferViews[n]=o),e.loadedBufferCount===e.buffersCount&&t()},function(){p.Tools.Error("Error when loading buffer named "+n+" located at "+r.uri)})};for(var a in e.buffers){r=!0;var i=e.buffers[a];i?o.bind(this,a,i)():p.Tools.Error("No buffer named: "+a)}r||t()},e.prototype._createNodes=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null)}},e.Extensions={},e}(),k=function(){function e(e){this._name=e}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),e.prototype.loadRuntimeAsync=function(e,t,n,r,o){return!1},e.prototype.loadRuntimeExtensionsAsync=function(e,t,n){return!1},e.prototype.loadBufferAsync=function(e,t,n,r,o){return!1},e.prototype.loadTextureBufferAsync=function(e,t,n,r){return!1},e.prototype.createTextureAsync=function(e,t,n,r,o){return!1},e.prototype.loadShaderStringAsync=function(e,t,n,r){return!1},e.prototype.loadMaterialAsync=function(e,t,n,r){return!1},e.LoadRuntimeAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.loadRuntimeAsync(t,n,r,o,a)},function(){setTimeout(function(){o&&o(G.CreateRuntime(n.json,t,r))})})},e.LoadRuntimeExtensionsAsync=function(t,n,r){e.ApplyExtensions(function(e){return e.loadRuntimeExtensionsAsync(t,n,r)},function(){setTimeout(function(){n()})})},e.LoadBufferAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.loadBufferAsync(t,n,r,o,a)},function(){G.LoadBufferAsync(t,n,r,o,a)})},e.LoadTextureAsync=function(t,n,r,o){e.LoadTextureBufferAsync(t,n,function(a){a&&e.CreateTextureAsync(t,n,a,r,o)},o)},e.LoadShaderStringAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadShaderStringAsync(t,n,r,o)},function(){G.LoadShaderStringAsync(t,n,r,o)})},e.LoadMaterialAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadMaterialAsync(t,n,r,o)},function(){G.LoadMaterialAsync(t,n,r,o)})},e.LoadTextureBufferAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadTextureBufferAsync(t,n,r,o)},function(){G.LoadTextureBufferAsync(t,n,r,o)})},e.CreateTextureAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.createTextureAsync(t,n,r,o,a)},function(){G.CreateTextureAsync(t,n,r,o,a)})},e.ApplyExtensions=function(e,t){for(var n in U.Extensions){if(e(U.Extensions[n]))return}t()},e}();_.GLTFFileLoader._CreateGLTF1Loader=function(){return new U};var H=function(e){function t(){return e.call(this,"KHR_binary_glTF")||this}return o(t,e),t.prototype.loadRuntimeAsync=function(e,t,n,r,o){var a=t.json.extensionsUsed;return!(!a||-1===a.indexOf(this.name)||!t.bin)&&(this._bin=t.bin,r(G.CreateRuntime(t.json,e,n)),!0)},t.prototype.loadBufferAsync=function(e,t,n,r){return-1!==e.extensionsUsed.indexOf(this.name)&&("binary_glTF"===t&&(this._bin.readAsync(0,this._bin.byteLength).then(n,function(e){return r(e.message)}),!0))},t.prototype.loadTextureBufferAsync=function(e,t,n,r){var o=e.textures[t],i=e.images[o.source];if(!(i.extensions&&this.name in i.extensions))return!1;var s=i.extensions[this.name],l=e.bufferViews[s.bufferView];return n(m.GetBufferFromBufferView(e,l,0,l.byteLength,a.UNSIGNED_BYTE)),!0},t.prototype.loadShaderStringAsync=function(e,t,n,r){var o=e.shaders[t];if(!(o.extensions&&this.name in o.extensions))return!1;var i=o.extensions[this.name],s=e.bufferViews[i.bufferView],l=m.GetBufferFromBufferView(e,s,0,s.byteLength,a.UNSIGNED_BYTE);return setTimeout(function(){var e=m.DecodeBufferToText(l);n(e)}),!0},t}(k);U.RegisterExtension(new H);var j=function(e){function t(){return e.call(this,"KHR_materials_common")||this}return o(t,e),t.prototype.loadRuntimeExtensionsAsync=function(e,t,n){if(!e.extensions)return!1;var r=e.extensions[this.name];if(!r)return!1;var o=r.lights;if(o)for(var a in o){var i=o[a];switch(i.type){case"ambient":var s=new p.HemisphericLight(i.name,new p.Vector3(0,1,0),e.scene),l=i.ambient;l&&(s.diffuse=p.Color3.FromArray(l.color||[1,1,1]));break;case"point":var u=new p.PointLight(i.name,new p.Vector3(10,10,10),e.scene),c=i.point;c&&(u.diffuse=p.Color3.FromArray(c.color||[1,1,1]));break;case"directional":var f=new p.DirectionalLight(i.name,new p.Vector3(0,-1,0),e.scene),d=i.directional;d&&(f.diffuse=p.Color3.FromArray(d.color||[1,1,1]));break;case"spot":var h=i.spot;if(h)new p.SpotLight(i.name,new p.Vector3(0,10,0),new p.Vector3(0,-1,0),h.fallOffAngle||Math.PI,h.fallOffExponent||0,e.scene).diffuse=p.Color3.FromArray(h.color||[1,1,1]);break;default:p.Tools.Warn('GLTF Material Common extension: light type "'+i.type+"” not supported")}}return!1},t.prototype.loadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(!o||!o.extensions)return!1;var a=o.extensions[this.name];if(!a)return!1;var i=new p.StandardMaterial(t,e.scene);return i.sideOrientation=p.Material.CounterClockWiseSideOrientation,"CONSTANT"===a.technique&&(i.disableLighting=!0),i.backFaceCulling=void 0!==a.doubleSided&&!a.doubleSided,i.alpha=void 0===a.values.transparency?1:a.values.transparency,i.specularPower=void 0===a.values.shininess?0:a.values.shininess,"string"==typeof a.values.ambient?this._loadTexture(e,a.values.ambient,i,"ambientTexture",r):i.ambientColor=p.Color3.FromArray(a.values.ambient||[0,0,0]),"string"==typeof a.values.diffuse?this._loadTexture(e,a.values.diffuse,i,"diffuseTexture",r):i.diffuseColor=p.Color3.FromArray(a.values.diffuse||[0,0,0]),"string"==typeof a.values.emission?this._loadTexture(e,a.values.emission,i,"emissiveTexture",r):i.emissiveColor=p.Color3.FromArray(a.values.emission||[0,0,0]),"string"==typeof a.values.specular?this._loadTexture(e,a.values.specular,i,"specularTexture",r):i.specularColor=p.Color3.FromArray(a.values.specular||[0,0,0]),!0},t.prototype._loadTexture=function(e,t,n,r,o){G.LoadTextureBufferAsync(e,t,function(a){G.CreateTextureAsync(e,t,a,function(e){return n[r]=e},o)},o)},t}(k);U.RegisterExtension(new j),n.d(t,"GLTFBinaryExtension",function(){return H}),n.d(t,"GLTFLoaderBase",function(){return G}),n.d(t,"GLTFLoader",function(){return U}),n.d(t,"GLTFLoaderExtension",function(){return k}),n.d(t,"EComponentType",function(){return a}),n.d(t,"EShaderType",function(){return i}),n.d(t,"EParameterType",function(){return s}),n.d(t,"ETextureWrapMode",function(){return l}),n.d(t,"ETextureFilterType",function(){return u}),n.d(t,"ETextureFormat",function(){return c}),n.d(t,"ECullingType",function(){return f}),n.d(t,"EBlendingFunction",function(){return d}),n.d(t,"GLTFUtils",function(){return m}),n.d(t,"GLTFMaterialsCommonExtension",function(){return j})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){function e(){this.materials=[]}return e.prototype.parseMTL=function(t,n,o,a){if(!(n instanceof ArrayBuffer)){for(var i,s=n.split("\n"),l=/\s+/,u=null,c=0;c<s.length;c++){var f=s[c].trim();if(0!==f.length&&"#"!==f.charAt(0)){var d=f.indexOf(" "),h=d>=0?f.substring(0,d):f;h=h.toLowerCase();var p=d>=0?f.substring(d+1).trim():"";"newmtl"===h?(u&&this.materials.push(u),t._blockEntityCollection=a,u=new r.StandardMaterial(p,t),t._blockEntityCollection=!1):"kd"===h&&u?(i=p.split(l,3).map(parseFloat),u.diffuseColor=r.Color3.FromArray(i)):"ka"===h&&u?(i=p.split(l,3).map(parseFloat),u.ambientColor=r.Color3.FromArray(i)):"ks"===h&&u?(i=p.split(l,3).map(parseFloat),u.specularColor=r.Color3.FromArray(i)):"ke"===h&&u?(i=p.split(l,3).map(parseFloat),u.emissiveColor=r.Color3.FromArray(i)):"ns"===h&&u?u.specularPower=parseFloat(p):"d"===h&&u?u.alpha=parseFloat(p):"map_ka"===h&&u?u.ambientTexture=e._getTexture(o,p,t):"map_kd"===h&&u?u.diffuseTexture=e._getTexture(o,p,t):"map_ks"===h&&u?u.specularTexture=e._getTexture(o,p,t):"map_ns"===h||("map_bump"===h&&u?u.bumpTexture=e._getTexture(o,p,t):"map_d"===h&&u&&(u.opacityTexture=e._getTexture(o,p,t)))}}u&&this.materials.push(u)}},e._getTexture=function(t,n,o){if(!n)return null;var a=t;if("file:"===t){var i=n.lastIndexOf("\\");-1===i&&(i=n.lastIndexOf("/")),a+=i>-1?n.substr(i+1):n}else a+=n;return new r.Texture(a,o,!1,e.INVERT_TEXTURE_Y)},e.INVERT_TEXTURE_Y=!0,e}(),a=function(){function e(t){this.name="obj",this.extensions=".obj",this.obj=/^o/,this.group=/^g/,this.mtllib=/^mtllib /,this.usemtl=/^usemtl /,this.smooth=/^s /,this.vertexPattern=/v( +[\d|\.|\+|\-|e|E]+){3,7}/,this.normalPattern=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.uvPattern=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.facePattern1=/f\s+(([\d]{1,}[\s]?){3,})+/,this.facePattern2=/f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern3=/f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern4=/f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/,this.facePattern5=/f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/,this._forAssetContainer=!1,this._meshLoadOptions=t||e.currentMeshLoadOptions}return Object.defineProperty(e,"INVERT_TEXTURE_Y",{get:function(){return o.INVERT_TEXTURE_Y},set:function(e){o.INVERT_TEXTURE_Y=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"currentMeshLoadOptions",{get:function(){return{ComputeNormals:e.COMPUTE_NORMALS,ImportVertexColors:e.IMPORT_VERTEX_COLORS,InvertY:e.INVERT_Y,InvertTextureY:e.INVERT_TEXTURE_Y,UVScaling:e.UV_SCALING,MaterialLoadingFailsSilently:e.MATERIAL_LOADING_FAILS_SILENTLY,OptimizeWithUV:e.OPTIMIZE_WITH_UV,SkipMaterials:e.SKIP_MATERIALS}},enumerable:!0,configurable:!0}),e.prototype._loadMTL=function(e,t,n,o){var a=r.Tools.BaseUrl+t+e;r.Tools.LoadFile(a,n,void 0,void 0,!1,function(e,t){o(a,t)})},e.prototype.createPlugin=function(){return new e(e.currentMeshLoadOptions)},e.prototype.canDirectLoad=function(e){return!1},e.prototype.importMeshAsync=function(e,t,n,r,o,a){return this._parseSolid(e,t,n,r).then(function(e){return{meshes:e,particleSystems:[],skeletons:[],animationGroups:[]}})},e.prototype.loadAsync=function(e,t,n,r,o){return this.importMeshAsync(null,e,t,n,r).then(function(){})},e.prototype.loadAssetContainerAsync=function(e,t,n,o,a){var i=this;return this._forAssetContainer=!0,this.importMeshAsync(null,e,t,n).then(function(t){var n=new r.AssetContainer(e);return t.meshes.forEach(function(e){return n.meshes.push(e)}),t.meshes.forEach(function(e){var t=e.material;t&&(-1==n.materials.indexOf(t)&&(n.materials.push(t),t.getActiveTextures().forEach(function(e){-1==n.textures.indexOf(e)&&n.textures.push(e)})))}),i._forAssetContainer=!1,n}).catch(function(e){throw i._forAssetContainer=!1,e})},e.prototype._parseSolid=function(t,n,a,i){for(var s,l=this,u=[],c=[],f=[],d=[],h=[],p=[],m=[],_=[],y=[],b=[],v=[],A=0,g=!1,T=[],x=[],E=[],L=[],O=[],M="",S="",w=new o,C=1,N=!0,P=new r.Color4(.5,.5,.5,1),R=function(e,t,n,r,o,a,i){var s;-1===(s=l._meshLoadOptions.OptimizeWithUV?function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[],uv:[]});var n=e[t[0]].normals.indexOf(t[1]);return 1!=n&&t[2]===e[t[0]].uv[n]?e[t[0]].idx[n]:-1}(v,[e,n,t]):function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[]});var n=e[t[0]].normals.indexOf(t[1]);return-1===n?-1:e[t[0]].idx[n]}(v,[e,n]))?(p.push(m.length),m.push(r),_.push(o),b.push(a),void 0!==i&&y.push(i),v[e].normals.push(n),v[e].idx.push(A++),l._meshLoadOptions.OptimizeWithUV&&v[e].uv.push(t)):p.push(s)},I=function(){for(var e=0;e<m.length;e++)T.push(m[e].x,m[e].y,m[e].z),E.push(b[e].x,b[e].y,b[e].z),L.push(_[e].x,_[e].y);!0===l._meshLoadOptions.ImportVertexColors&&x.push(y[e].r,y[e].g,y[e].b,y[e].a),m=[],b=[],_=[],y=[],v=[],A=0},F=function(e,t){for(var n=t;n<e.length-1;n++)O.push(e[0],e[n],e[n+1])},V=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=parseInt(O[n])-1;R(o,0,0,u[o],r.Vector2.Zero(),r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?d[o]:void 0)}O=[]},B=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("/"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;R(a,i,0,u[a],f[i],r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?d[a]:void 0)}O=[]},D=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=parseInt(r[0])-1,a=parseInt(r[1])-1,i=parseInt(r[2])-1;R(o,a,i,u[o],f[a],c[i])}O=[]},G=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("//"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;R(a,1,i,u[a],r.Vector2.Zero(),c[i],!0===l._meshLoadOptions.ImportVertexColors?d[a]:void 0)}O=[]},U=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=u.length+parseInt(r[0]),a=f.length+parseInt(r[1]),i=c.length+parseInt(r[2]);R(o,a,i,u[o],f[a],c[i],!0===l._meshLoadOptions.ImportVertexColors?d[o]:void 0)}O=[]},k=function(){h.length>0&&(s=h[h.length-1],I(),p.reverse(),s.indices=p.slice(),s.positions=T.slice(),s.normals=E.slice(),s.uvs=L.slice(),!0===l._meshLoadOptions.ImportVertexColors&&(s.colors=x.slice()),p=[],T=[],x=[],E=[],L=[])},H=a.split("\n"),j=0;j<H.length;j++){var K,W=H[j].trim().replace(/\s\s/g," ");if(0!==W.length&&"#"!==W.charAt(0))if(this.vertexPattern.test(W))K=W.match(/[^ ]+/g),u.push(new r.Vector3(parseFloat(K[1]),parseFloat(K[2]),parseFloat(K[3]))),!0===this._meshLoadOptions.ImportVertexColors&&(K.length>=7?d.push(new r.Color4(parseFloat(K[4]),parseFloat(K[5]),parseFloat(K[6]),7===K.length||void 0===K[7]?1:parseFloat(K[7]))):d.push(P));else if(null!==(K=this.normalPattern.exec(W)))c.push(new r.Vector3(parseFloat(K[1]),parseFloat(K[2]),parseFloat(K[3])));else if(null!==(K=this.uvPattern.exec(W)))f.push(new r.Vector2(parseFloat(K[1])*e.UV_SCALING.x,parseFloat(K[2])*e.UV_SCALING.y));else if(null!==(K=this.facePattern3.exec(W)))D(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern4.exec(W)))G(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern5.exec(W)))U(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern2.exec(W)))B(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern1.exec(W)))V(K[1].trim().split(" "),1);else if(this.group.test(W)||this.obj.test(W)){var Y={name:W.substring(2).trim(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:""};k(),h.push(Y),g=!0,N=!0,C=1}else if(this.usemtl.test(W)){if(M=W.substring(7).trim(),!N||!g){k();Y={name:"mesh_mm"+C.toString(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:M};C++,h.push(Y),g=!0}g&&N&&(h[h.length-1].materialName=M,N=!1)}else this.mtllib.test(W)?S=W.substring(7).trim():this.smooth.test(W)||console.log("Unhandled expression at line : "+W)}g&&(s=h[h.length-1],p.reverse(),I(),s.indices=p,s.positions=T,s.normals=E,s.uvs=L,!0===this._meshLoadOptions.ImportVertexColors&&(s.colors=x)),g||(p.reverse(),I(),h.push({name:r.Geometry.RandomId(),indices:p,positions:T,colors:x,normals:E,uvs:L,materialName:M}));for(var J=[],q=new Array,Z=0;Z<h.length;Z++){if(t&&h[Z].name)if(t instanceof Array){if(-1===t.indexOf(h[Z].name))continue}else if(h[Z].name!==t)continue;s=h[Z],n._blockEntityCollection=this._forAssetContainer;var Q=new r.Mesh(h[Z].name,n);n._blockEntityCollection=!1,q.push(h[Z].materialName);var X=new r.VertexData;if(X.uvs=s.uvs,X.indices=s.indices,X.positions=s.positions,!0===this._meshLoadOptions.ComputeNormals){var z=new Array;r.VertexData.ComputeNormals(s.positions,s.indices,z),X.normals=z}else X.normals=s.normals;!0===this._meshLoadOptions.ImportVertexColors&&(X.colors=s.colors),X.applyToMesh(Q),this._meshLoadOptions.InvertY&&(Q.scaling.y*=-1),J.push(Q)}var $=[];return""!==S&&!1===this._meshLoadOptions.SkipMaterials&&$.push(new Promise(function(e,t){l._loadMTL(S,i,function(o){try{w.parseMTL(n,o,i,l._forAssetContainer);for(var a=0;a<w.materials.length;a++){for(var s,u=0,c=[];(s=q.indexOf(w.materials[a].name,u))>-1;)c.push(s),u=s+1;if(-1===s&&0===c.length)w.materials[a].dispose();else for(var f=0;f<c.length;f++)J[c[f]].material=w.materials[a]}e()}catch(n){r.Tools.Warn("Error processing MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(n)}},function(n,o){r.Tools.Warn("Error downloading MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(o)})})),Promise.all($).then(function(){return J})},e.OPTIMIZE_WITH_UV=!0,e.INVERT_Y=!1,e.IMPORT_VERTEX_COLORS=!1,e.COMPUTE_NORMALS=!1,e.UV_SCALING=new r.Vector2(1,1),e.SKIP_MATERIALS=!1,e.MATERIAL_LOADING_FAILS_SILENTLY=!0,e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new a),n.d(t,"MTLFileLoader",function(){return o}),n.d(t,"OBJFileLoader",function(){return a})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){function e(){this.solidPattern=/solid (\S*)([\S\s]*)endsolid[ ]*(\S*)/g,this.facetsPattern=/facet([\s\S]*?)endfacet/g,this.normalPattern=/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.vertexPattern=/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.name="stl",this.extensions={".stl":{isBinary:!0}}}return e.prototype.importMesh=function(e,t,n,o,a,i,s){var l;if("string"!=typeof n){if(this._isBinary(n)){var u=new r.Mesh("stlmesh",t);return this._parseBinary(u,n),a&&a.push(u),!0}for(var c=new Uint8Array(n),f="",d=0;d<n.byteLength;d++)f+=String.fromCharCode(c[d]);n=f}for(;l=this.solidPattern.exec(n);){var h=l[1];if(h!=l[3])return r.Tools.Error("Error in STL, solid name != endsolid name"),!1;if(e&&h)if(e instanceof Array){if(!e.indexOf(h))continue}else if(h!==e)continue;h=h||"stlmesh";u=new r.Mesh(h,t);this._parseASCII(u,l[2]),a&&a.push(u)}return!0},e.prototype.load=function(e,t,n){return this.importMesh(null,e,t,n,null,null,null)},e.prototype.loadAssetContainer=function(e,t,n,o){var a=new r.AssetContainer(e);return e._blockEntityCollection=!0,this.importMesh(null,e,t,n,a.meshes,null,null),e._blockEntityCollection=!1,a},e.prototype._isBinary=function(e){var t;if(50,84+50*(t=new DataView(e)).getUint32(80,!0)===t.byteLength)return!0;for(var n=t.byteLength,r=0;r<n;r++)if(t.getUint8(r)>127)return!0;return!1},e.prototype._parseBinary=function(e,t){for(var n=new DataView(t),o=n.getUint32(80,!0),a=0,i=new Float32Array(3*o*3),s=new Float32Array(3*o*3),l=new Uint32Array(3*o),u=0,c=0;c<o;c++){for(var f=84+50*c,d=n.getFloat32(f,!0),h=n.getFloat32(f+4,!0),p=n.getFloat32(f+8,!0),m=1;m<=3;m++){var _=f+12*m;i[a]=n.getFloat32(_,!0),i[a+2]=n.getFloat32(_+4,!0),i[a+1]=n.getFloat32(_+8,!0),s[a]=d,s[a+2]=h,s[a+1]=p,a+=3}l[u]=u++,l[u]=u++,l[u]=u++}e.setVerticesData(r.VertexBuffer.PositionKind,i),e.setVerticesData(r.VertexBuffer.NormalKind,s),e.setIndices(l),e.computeWorldMatrix(!0)},e.prototype._parseASCII=function(e,t){for(var n,o=[],a=[],i=[],s=0;n=this.facetsPattern.exec(t);){var l=n[1],u=this.normalPattern.exec(l);if(this.normalPattern.lastIndex=0,u){for(var c,f=[Number(u[1]),Number(u[5]),Number(u[3])];c=this.vertexPattern.exec(l);)o.push(Number(c[1]),Number(c[5]),Number(c[3])),a.push(f[0],f[1],f[2]);i.push(s++,s++,s++),this.vertexPattern.lastIndex=0}}this.facetsPattern.lastIndex=0,e.setVerticesData(r.VertexBuffer.PositionKind,o),e.setVerticesData(r.VertexBuffer.NormalKind,a),e.setIndices(i),e.computeWorldMatrix(!0)},e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new o),n.d(t,"STLFileLoader",function(){return o})},function(e,t,n){"use strict";(function(e){var r=n(2),o=n(3);n.d(t,"a",function(){return r.GLTFFileLoader}),n.d(t,"b",function(){return r.GLTFLoaderAnimationStartMode}),n.d(t,"c",function(){return r.GLTFLoaderCoordinateSystemMode}),n.d(t,"d",function(){return r.GLTFLoaderState}),n.d(t,"e",function(){return o.GLTFValidation});var a=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==a){for(var i in a.BABYLON=a.BABYLON||{},r)a.BABYLON[i]=r[i];for(var i in o)a.BABYLON[i]=o[i]}}).call(this,n(4))},function(e,t){},function(e,t,n){"use strict";(function(e){var r=n(7);n.d(t,"a",function(){return r});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in o.BABYLON=o.BABYLON||{},o.BABYLON.GLTF1=o.BABYLON.GLTF1||{},r)o.BABYLON.GLTF1[a]=r[a]}).call(this,n(4))},function(e,t,n){"use strict";(function(e){var r=n(5),o=n(11),a=n(6);n.d(t,"a",function(){return a});var i=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==i){i.BABYLON=i.BABYLON||{};var s=i.BABYLON;s.GLTF2=s.GLTF2||{},s.GLTF2.Loader=s.GLTF2.Loader||{},s.GLTF2.Loader.Extensions=s.GLTF2.Loader.Extensions||{};var l=[];for(var u in r)s.GLTF2.Loader.Extensions[u]=r[u],l.push(u);for(var u in o)s.GLTF2.Loader[u]=o[u],l.push(u);for(var u in a)l.indexOf(u)>-1||(s.GLTF2[u]=a[u])}}).call(this,n(4))},function(e,t,n){"use strict";n.r(t),function(e){var r=n(8);n.d(t,"MTLFileLoader",function(){return r.MTLFileLoader}),n.d(t,"OBJFileLoader",function(){return r.OBJFileLoader});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a]}.call(this,n(4))},function(e,t,n){"use strict";n.r(t),function(e){var r=n(9);n.d(t,"STLFileLoader",function(){return r.STLFileLoader});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a]}.call(this,n(4))},,,,function(e,t,n){"use strict";n.r(t);n(2),n(3),n(7),n(6),n(8),n(9);var r=n(10),o=n(12),a=n(13),i=n(14),s=n(15);n.d(t,"GLTFLoaderCoordinateSystemMode",function(){return r.c}),n.d(t,"GLTFLoaderAnimationStartMode",function(){return r.b}),n.d(t,"GLTFLoaderState",function(){return r.d}),n.d(t,"GLTFFileLoader",function(){return r.a}),n.d(t,"GLTFValidation",function(){return r.e}),n.d(t,"GLTF1",function(){return o.a}),n.d(t,"GLTF2",function(){return a.a}),n.d(t,"MTLFileLoader",function(){return i.MTLFileLoader}),n.d(t,"OBJFileLoader",function(){return i.OBJFileLoader}),n.d(t,"STLFileLoader",function(){return s.STLFileLoader})}])});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

const mz3d = window.mz3d;

//setup was here	

const _graphics_updateAllElements=Graphics._updateAllElements;
Graphics._updateAllElements = function() {
	_graphics_updateAllElements.apply(this,arguments);
	if(mz3d.canvas){
		mz3d.updateCanvas();
	}
};

const _sceneMap_update=Scene_Map.prototype.update;
Scene_Map.prototype.update = function(){
	_sceneMap_update.apply(this,arguments);
	if(!mz3d.isDisabled()){
		mz3d.update();
		mz3d.render();
	}
}

const _createTilemap=Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap=function(){
	_createTilemap.apply(this,arguments);
	mz3d.mapDisabled = mz3d.isDisabled();
	mz3d.pixiSprite=new PIXI.Sprite(mz3d.texture);
	mz3d.pixiSprite.scale.set(1/mz3d.RES_SCALE,1/mz3d.RES_SCALE);
	mz3d.pixiContainer=new PIXI.Container();
	mz3d.viewContainer=new PIXI.Container();
	mz3d.pixiContainer.addChild( mz3d.viewContainer );
	mz3d.viewContainer.addChild( mz3d.pixiSprite );
	mz3d.mv_baseSprite = this._baseSprite;
	if(!mz3d.mapDisabled){
		this._tilemap.visible=false;
		this._baseSprite.addChild( mz3d.pixiContainer );
	}
};

const _sprite_char_setchar = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {
	_sprite_char_setchar.apply(this,arguments);
	Object.defineProperty(character,'mv_sprite',{
		value:this,
		configurable:true,
		enumerable:false,
	});
};

// Player Transfer

const _performTransfer=Game_Player.prototype.performTransfer;
Game_Player.prototype.performTransfer = function() {
	const newmap = this._newMapId !== $gameMap.mapId();
	_performTransfer.apply(this,arguments);
	if(mz3d.is1stPerson()){
		mz3d.blendCameraYaw.setValue(mz3d.dirToYaw($gamePlayer.direction(),0));
	}
	if(!newmap){
		this.z = mz3d.getWalkHeight(this.x,this.y);
		for ( const follower of this._followers._data){
			follower.z=this.z;
		}
	}
};

// On Map Load

let tilesetLoaded = false;

const _onMapLoaded=Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded=function(){
	const newmap = this._transfer && ( $gamePlayer._newMapId !== $gameMap.mapId() );
	Input.clear();
	if(newmap || mz3d.needClearMap){
		mz3d.clearMap();
		mz3d.needClearMap=false;
	}else if(mz3d.needReloadMap&&mz3d.mapLoaded){
		mz3d.reloadMap();
	}
	mz3d.needReloadMap=false;
	tilesetLoaded = false;
	if(!mz3d.mapLoaded){
		mz3d.beforeMapLoad(newmap);
		mz3d.loadMapSettings();
	}
	_onMapLoaded.apply(this,arguments);
	if(!tilesetLoaded){ mz3d.loadTilesetSettings(); }
	if(!mz3d.mapLoaded){
		if(newmap){ mz3d.applyMapSettings(); }
		mz3d.afterMapLoad(newmap);
		if(mz3d.isDisabled()){
			mz3d.mapReady=true;
			//mv3d.createCharacters();
		}else{
			mz3d.mapReady=false;
			//mv3d.mapReady=true;
			mz3d.loadMap();
		}
	}
	mz3d.updateBlenders(true);
};

// onMapLoaded > performTransfer > map setup
// hook into map setup before Qmovement's setup.
const _map_battleback_Setup = Game_Map.prototype.setupBattleback;
Game_Map.prototype.setupBattleback=function(){
	_map_battleback_Setup.apply(this,arguments);
	mz3d.loadTilesetSettings();
	tilesetLoaded = true;
};

const _onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
Scene_Load.prototype.onLoadSuccess = function() {
	_onLoadSuccess.apply(this,arguments);
	mz3d.needClearMap=true;
};

const _map_isReady = Scene_Map.prototype.isReady;
Scene_Map.prototype.isReady = function() {
	let ready = _map_isReady.apply(this,arguments);
	return ready && mz3d.mapReady;
};

// Title

const _title_start=Scene_Title.prototype.start;
Scene_Title.prototype.start = function() {
	_title_start.apply(this,arguments);
	mz3d.clearMap();
	mz3d.clearCameraTarget();
};

const _initGraphics = SceneManager.initGraphics;
SceneManager.initGraphics = function() {
	_initGraphics.apply(this,arguments);
	if(mz3d.isMV && !Graphics.isWebGL()){
		throw new Error("MV3D requires WebGL");
	}
};

// force webgl
SceneManager.preferableRendererType = function() {
    if (Utils.isOptionValid('canvas')) {
        return 'canvas';
    } else if (Utils.isOptionValid('webgl')) {
        return 'webgl';
    } else {
		if(Graphics.hasWebGL()){ return 'webgl'; }
        return 'auto';
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

const mv3d = window.mv3d;

mv3d.blendModes={
	[PIXI.BLEND_MODES.NORMAL]: BABYLON.Engine.ALPHA_COMBINE,
	[PIXI.BLEND_MODES.ADD]: BABYLON.Engine.ALPHA_ADD,
	[PIXI.BLEND_MODES.MULTIPLY]: BABYLON.Engine.ALPHA_MULTIPLY,
	[PIXI.BLEND_MODES.SCREEN]: BABYLON.Engine.ALPHA_SCREENMODE,
	
	NORMAL:BABYLON.Engine.ALPHA_COMBINE,
	ADD:BABYLON.Engine.ALPHA_ADD,
	MULTIPLY:BABYLON.Engine.ALPHA_MULTIPLY,
	SCREEN:BABYLON.Engine.ALPHA_SCREENMODE,
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(9);
__webpack_require__(11);

if(window.Imported&&Imported.YEP_SaveCore){
	const _onLoadSuccess = Scene_File.prototype.onLoadSuccess;
	Scene_File.prototype.onLoadSuccess=function(){
		_onLoadSuccess.apply(this,arguments);
		mv3d.needClearMap=true;
	}
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const mv3d = window.mv3d;

mv3d['option-store']={}

mv3d.options={};

if(mv3d.OPTION_RENDER_DIST) mv3d.options['mv3d-renderDist']={
	name:mv3d.OPTION_NAME_RENDER_DIST,
	min:mv3d.OPTION_RENDER_DIST_MIN, max:mv3d.OPTION_RENDER_DIST_MAX,
	increment:5,
	wrap:false,
	apply(v){ mv3d.RENDER_DIST=v; },
	default:mv3d.RENDER_DIST,
};

if(mv3d.OPTION_FOV) mv3d.options['mv3d-fov']={
	name:mv3d.OPTION_NAME_FOV,
	min:mv3d.OPTION_FOV_MIN, max:mv3d.OPTION_FOV_MAX,
	increment:5,
	apply(v){ mv3d.FOV=v; },
	default:mv3d.FOV,
};

if(mv3d.OPTION_MIPMAP) mv3d.options['mv3d-mipmap']={
	name:mv3d.OPTION_NAME_MIPMAP,
	type:'bool',
	apply(v){ mv3d.MIPMAP=v; mv3d.needReloadMap=true; },
	default:mv3d.MIPMAP,
};

mv3d.invertY=false;
if(mv3d.OPTION_INVERTY) mv3d.options['mv3d-inverty']={
	name: mv3d.OPTION_NAME_INVERTY,
	type:'bool',
	apply(v){ mv3d.invertY=v; },
	default: false,
};

mv3d.lookSensitivity=1.0;
if(mv3d.OPTION_LOOKSENSITIVITY) mv3d.options['mv3d-looksensitivity']={
	name: mv3d.OPTION_NAME_LOOKSENSITIVITY,
	min:10, max:400,
	increment:10,
	wrap:false,
	apply(v){ mv3d.lookSensitivity=v/100; },
	default:100,
};

if(mv3d.ENABLE_3D_OPTIONS){
	__webpack_require__(10);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
const mv3d = window.mv3d;



const _option_command_list = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
	_option_command_list.apply(this,arguments);
	if(mv3d.ENABLE_3D_OPTIONS===mv3d.enumOptionModes.SUBMENU && Object.keys(mv3d.options).length){
		this.addCommand("3D Options", 'mv3d-options');
	}else if(mv3d.ENABLE_3D_OPTIONS===mv3d.enumOptionModes.ENABLE){
		for (const key in mv3d.options){
			this.addCommand(mv3d.options[key].name,key);
		}
	}
};

const _option_status_text = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
	const symbol = this.commandSymbol(index);
	const value = this.getConfigValue(symbol);
	if(symbol==='mv3d-options'){ return ''; }
	return _option_status_text.apply(this,arguments);
};

Object.defineProperty(ConfigManager, 'mv3d-options', {
	get(){ return undefined; },
	set(v){ SceneManager.push(Scene_3D_Options); },
	configurable: true,
	enumerable:false,
});

const _config_makeData=ConfigManager.makeData;
ConfigManager.makeData = function() {
	const config = _config_makeData.apply(this,arguments);
	Object.assign(config,mv3d['option-store']);
	return config;
};
const _config_applyData=ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	_config_applyData.apply(this,arguments);
	for(const key in mv3d.options){
		if(key in config){
			mv3d['option-store'][key]=config[key];
			mv3d.options[key].apply(config[key]);
		}
	}
	mv3d.updateParameters();
};



class Scene_3D_Options extends Scene_Options{
	createOptionsWindow(){
		this._optionsWindow = new Window_3D_Options();
		this._optionsWindow.setHandler('cancel', this.popScene.bind(this));
		this.addWindow(this._optionsWindow);
	}
	terminate(){
		super.terminate();
		mv3d.updateParameters();
	}
}

class Window_3D_Options extends Window_Options{
	makeCommandList(){
		for (const key in mv3d.options){
			this.addCommand(mv3d.options[key].name,key);
		}
	}
}

if(mv3d.ENABLE_3D_OPTIONS===1) Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Scene_Options.prototype,'terminate',o=>function(){
	o.apply(this,arguments);
	mv3d.updateParameters();
},true);

Window_Options.prototype._is_mv3d_option=function(symbol){
	return symbol in mv3d.options;
}

Window_Options.prototype._mv3d_cursor=function(wrap,direction){
	const index = this.index();
	const symbol = this.commandSymbol(index);
	let value = this.getConfigValue(symbol);
	const option = mv3d.options[symbol];
	if(!option) { return; }
	if(option.type==='bool'){
		this.changeValue(symbol, direction>0);
	}else{
		const min = option.min||0;
		const max = option.values?option.values.length-1:option.max||1;
		value += (option.increment||1)*direction;
		if(wrap&&option.wrap||wrap==='ok'){
			if(value>max){ value = min; }
			if(value<min){ value = max; }
		}else{
			value = value.clamp(min,max);
		}
		this.changeValue(symbol, value);
	}
}


Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Window_Options.prototype,'statusText',o=>function(index){
    const symbol = this.commandSymbol(index);
    if(!this._is_mv3d_option(symbol)){ return o.apply(this,arguments); }
    const value = this.getConfigValue(symbol);
    const option = mv3d.options[symbol];
    if(option.type==='bool'){
        return this.booleanStatusText(value);
    }else if(option.values){
        return option.values[value];
    }
    return String(value);
},true);

Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Window_Options.prototype,'setConfigValue',o=>function(symbol, value){
    if(!this._is_mv3d_option(symbol)){ return o.apply(this,arguments); }
    mv3d['option-store'][symbol]=value;
    const option = mv3d.options[symbol];
    if(option.apply){ option.apply(value); }
},true);

Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Window_Options.prototype,'getConfigValue',o=>function(symbol){
    if(!this._is_mv3d_option(symbol)){ return o.apply(this,arguments); }
    const option = mv3d.options[symbol];
    let value = mv3d['option-store'][symbol];
    if(value==null){ value=option.default||option.min||0; }
    return value;
},true);

Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Window_Options.prototype,'cursorLeft',o=>function(wrap){
    const symbol = this.commandSymbol(this.index());
    if(this._is_mv3d_option(symbol)){
        return this._mv3d_cursor(wrap,-1);
    }else{
        return o.apply(this,arguments);
    }
},true);

Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Window_Options.prototype,'cursorRight',o=>function(wrap){
    const symbol = this.commandSymbol(this.index());
    if(this._is_mv3d_option(symbol)){
        return this._mv3d_cursor(wrap,1);
    }else{
        return o.apply(this,arguments);
    }
},true);

Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Window_Options.prototype,'processOk',o=>function(){
    const index = this.index();
    const symbol = this.commandSymbol(index);
    if(!this._is_mv3d_option(symbol)){
        return o.apply(this,arguments);
    }
    let value = this.getConfigValue(symbol);
    const option = mv3d.options[symbol];
    if(option.type==='bool'){
        this.changeValue(symbol, !value);
    }else{
        this._mv3d_cursor('ok',1);
    }
},true);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
const mv3d = window.mv3d;


Object.assign(mv3d,{
	vehicleObstructed(vehicle,...args){
		return vehicleObstructed.apply(vehicle,args);
	},
	tileCollision(char,x,y,useStairThresh=false,useTargetZ=false){
		if(!(char instanceof mv3d.Character)){if(!char.mv3d_sprite){return false;}char=char.mv3d_sprite;}
		const z = typeof useTargetZ==='number'? useTargetZ
		:useTargetZ?char.getTargetElevation(x,y):char.z;
		const cc = char.getCollisionHeight(z);
		const tcs = this.getCollisionHeights(x,y);
		if(useStairThresh==2){ cc.z1+=mv3d.STAIR_THRESH; cc.z2+=mv3d.STAIR_THRESH; }
		for (const tc of tcs){
			if(cc.z1<tc.z2&&cc.z2>tc.z1){
				if(useStairThresh==1&&mv3d.STAIR_THRESH){ return this.tileCollision(char,x,y,2,useTargetZ); }
				return true;
			}
		}
		return false;
	},
	charCollision(char1,char2,useStairThresh=false,useTargetZ1=false,useTargetZ2=useTargetZ1,triggerMode=false){
		if(!(char1 instanceof mv3d.Character)){if(!char1.mv3d_sprite){return false;}char1=char1.mv3d_sprite;}
		if(!(char2 instanceof mv3d.Character)){if(!char2.mv3d_sprite){return false;}char2=char2.mv3d_sprite;}
		if(!triggerMode&&(!char1.char._mv3d_hasCollide()||!char2.char._mv3d_hasCollide())){ return false; } 
		const c1z = typeof useTargetZ1==='number'? useTargetZ1 : useTargetZ1?char1.getTargetElevation(char2.x,char2.y):char1.z;
		const c2z = typeof useTargetZ2==='number'? useTargetZ2 : useTargetZ2?char2.targetElevation:char2.z;
		const cc1 = char1.getCollisionHeight(c1z);
		const cc2 = triggerMode ? char2.getTriggerHeight(c2z) : char2.getCollisionHeight(c2z);
		if(useStairThresh==2){ cc1.z1+=mv3d.STAIR_THRESH; cc1.z2+=mv3d.STAIR_THRESH; }
		if(!triggerMode&&cc1.z1<cc2.z2&&cc1.z2>cc2.z1 || triggerMode&&cc1.z1<=cc2.z2&&cc1.z2>=cc2.z1){
			if(useStairThresh==1&&mv3d.STAIR_THRESH){ return this.charCollision(char1,char2,2,useTargetZ1,useTargetZ2); }
			return true;
		}
		return false;
	},
	getPlatformFloatForCharacter(char,x,y,opts={}){
		if(!(char instanceof mv3d.Character)){if(!char.mv3d_sprite){return 0;}char=char.mv3d_sprite;}
		let z = mv3d.getPlatformForCharacter(char,x,y,opts).z2;
		if(char.hasFloat){
			const cHeight = char.getCHeight();
			z += mv3d.getFloatHeight(x,y,char.z+Math.max(cHeight,mv3d.STAIR_THRESH),mv3d.STAIR_THRESH>=cHeight);
		}
		return z;
	},
	getPlatformForCharacter(char,x,y,opts={}){
		if(!(char instanceof mv3d.Character)){if(!char.mv3d_sprite){return false;}char=char.mv3d_sprite;}
		const cHeight = char.getCHeight();
		const useStairThresh = mv3d.STAIR_THRESH>=cHeight;
		Object.assign(opts,{char:char,gte:useStairThresh});
		return this.getPlatformAtLocation(x,y,char.z+Math.max(cHeight,mv3d.STAIR_THRESH),opts);
	},
	getPlatformAtLocation(x,y,z,opts={}){
		const char = opts.char;
		//if(!('onlyPlatforms' in opts)){ opts.onlyPlatforms=true; }
		const cs = this.getCollisionHeights(x,y,opts);
		cs.push(...mv3d.getEventsAt(x,y)
			.filter(event=>{
				if(!(event.mv3d_sprite&&event._mv3d_isPlatform()&&event._mv3d_hasCollide()&&event.mv3d_sprite.visible)){ return false; }
				if(char){
					if(char.char===event || event.isMoving()){ return false; }
					let pc=event.mv3d_sprite;
					while(pc=pc.platformChar){
						if(pc===char||pc===event.mv3d_sprite){ return false; }
					}
				}
				return true;
			})
			.map(event=>event.mv3d_sprite.getCollisionHeight())
		);
		let closest = cs[0];
		for (const c of cs){
			if(c.z2>closest.z2 && (opts.gte?c.z2<=z:c.z2<z) ){
				closest=c;
			}
		}
		return closest;
	},

	getEventsAt(x,y){
		return $gameMap.eventsXyNt(Math.round(x),Math.round(y));
	},

	isRampAt(x,y,z){
		const tileData = this.getTileData(x,y);
		let height = 0;
		for (let l=0;l<4;++l){
			height += this.getTileFringe(x,y,l);
			height += this.getTileHeight(x,y,l);
			const conf = this.getTileConfig(tileData[l],x,y,l);
			if(conf.shape!==this.enumShapes.SLOPE){ continue; }
			const slopeHeight = conf.slopeHeight||1;
			if(z>=height-slopeHeight && z<=height){
				return { id:tileData[l], x,y,l,conf, z1:height-slopeHeight, z2:height };
			}
		}
		return false;
	},

	getRampData(x,y,l,conf=null){
		const tileId = mv3d.getTileId(x,y,l);
		if(!conf){ conf = this.getTileConfig(tileId,x,y,l); }
		if(conf.shape!==this.enumShapes.SLOPE){ return false; }
		const height = mv3d.getStackHeight(x,y,l);
		const slopeHeight = conf.slopeHeight||1;
		return { id:tileId, x,y,l,conf, z1:height-slopeHeight, z2:height };
	},

	canPassRamp(d,slope,opts={}){
		if(d===5||d<=0||d>=10){ return true; }
		const {dir:sd} = mv3d.getSlopeDirection(slope.x,slope.y,slope.l,true);
		const x2 = $gameMap.roundXWithDirection(slope.x,d);
		const y2 = $gameMap.roundYWithDirection(slope.y,d);
		const slope2 = this.isRampAt(x2,y2,sd===d?slope.z1:sd===10-d?slope.z2:(slope.z1+slope.z2)/2);
		if(slope2){
			const  {dir:sd2} = mv3d.getSlopeDirection(x2,y2,slope2.l,true);
			if(sd!==d&&sd!==10-d){
				if(sd===sd2&&slope.z1===slope2.z1&&slope.z2===slope2.z2){ return true; }
				return false;
			}
			return sd===sd2 && (sd===d?(slope.z1===slope2.z2):(slope.z2===slope2.z1));
		}
		if(sd!==d&&sd!==10-d){ return false; }
		const dh = this.getPlatformAtLocation(x2,y2, (opts.z!=null?opts.z:sd===d?slope.z1:slope.z2)+mv3d.STAIR_THRESH ).z2;
		return Math.abs(dh-(sd===d?slope.z1:slope.z2))<=mv3d.STAIR_THRESH;
	}
});

Game_CharacterBase.prototype._mv3d_isFlying=function(){
	if(!this.mv3d_sprite){ return false;}
	return this.mv3d_sprite.blendElevation.currentValue()>0||this.mv3d_sprite.hasConfig('zlock')||!this.mv3d_sprite.getConfig('gravity',mv3d.GRAVITY);
};
Game_Vehicle.prototype._mv3d_isFlying=function(){
	return this.isAirship()||Game_CharacterBase.prototype._mv3d_isFlying.apply(this,arguments);
};
Game_Player.prototype._mv3d_isFlying=function(){
	if(this.isInVehicle()&&this.vehicle().isAirship()){ return true; }
	return Game_CharacterBase.prototype._mv3d_isFlying.apply(this,arguments);
};

Game_CharacterBase.prototype._mv3d_isPlatform=function(){
	return this.mv3d_sprite&&this.mv3d_sprite.getConfig('platform',mv3d.WALK_ON_EVENTS);
};

Game_CharacterBase.prototype._mv3d_hasCollide=function(){
	const sprite = this.mv3d_sprite;
	if(!sprite || sprite.getConfig('collide')===false){ return false; }
	return this._mv3d_isPlatform() || Boolean(sprite.getCHeight());
};

if(window.Imported&&Imported.QMovement){
	__webpack_require__(12);
}else if(PluginManager._scripts.includes("AltimitMovement")&&Game_CharacterBase.prototype.moveVector){
	__webpack_require__(13);
}else{
	__webpack_require__(14);
}

// jump
const _charBase_jump = Game_CharacterBase.prototype.jump;
Game_CharacterBase.prototype.jump = function(xPlus, yPlus) {
	if (mv3d.isDisabled()){ return _charBase_jump.apply(this,arguments); }
	this.mv3d_jumpHeightStart = this.z!=null?this.z:mv3d.getWalkHeight(this.x,this.y);
	this.mv3d_jumpHeightEnd = mv3d.getWalkHeight(this.x+xPlus,this.y+yPlus);
	_charBase_jump.apply(this,arguments);
};

Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["override"])(Game_Map.prototype,'allTiles',o=>function(x,y){
	return this.layeredTiles(x, y);
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const mv3d = window.mv3d;

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(ColliderManager,'update',o=>function(){
	this.hide();
});

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(ColliderManager.container,'update',o=>function(){
	if(this.visible){ o.apply(this,arguments); }
},true);

let _tileColliders={};
mv3d.getQTileColliders=()=>_tileColliders;

function mv3d_makeTileCollider(x,y,zcollider,extra){
	const tc=new Box_Collider($gameMap.tileWidth(),$gameMap.tileHeight());
	tc.x=x*$gameMap.tileWidth();
	tc.y=y*$gameMap.tileHeight();
	tc.mv3d_collider=zcollider;
	tc.mv3d_collider_type=extra;
	return tc;
}

const infiniteHeightCollider={z1:-Infinity,z2:Infinity};

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(Game_Map.prototype,'setupMapColliders',o=>function(){
	this._tileCounter = 0;
	_tileColliders={};
	for (let x = 0; x < this.width(); x++)
	for (let y = 0; y < this.height(); y++) {
		const px = x * this.tileWidth(), py = y * this.tileHeight();
		const flags = this.tilesetFlags();
		const tiles = mv3d.getTileData(x, y);
		const zColliders = mv3d.getCollisionHeights(x,y,{layers:true,slopeMin:true});
		const tileCollider_list = _tileColliders[[x,y]]=[];
		for (let i=0; i<zColliders.length; ++i) {
			tileCollider_list[i]=mv3d_makeTileCollider(x,y,zColliders[i],'mv3d');
		}
		_tileColliders[[x,y,'x']]=mv3d_makeTileCollider(x,y,infiniteHeightCollider,'mv3d_x');
		for (let l = 0; l < tiles.length; ++l) {
			const flag = flags[tiles[l]];
			const passage = mv3d.getTilePassage(tiles[l],x,y,l);
			if(passage===mv3d.enumPassage.THROUGH){ continue; }
			const conf = mv3d.getTileConfig(x,y,l);
			if(conf.shape===mv3d.enumShapes.SLOPE){
				const rampData = mv3d.getRampData(x,y,l,conf);
				let dcol=0;
				if(!mv3d.canPassRamp(2,rampData)){ dcol|=0b0001; }
				if(!mv3d.canPassRamp(4,rampData)){ dcol|=0b0010; }
				if(!mv3d.canPassRamp(6,rampData)){ dcol|=0b0100; }
				if(!mv3d.canPassRamp(8,rampData)){ dcol|=0b1000; }
				dcol+=1536;
				const slopeZ2 = mv3d.getStackHeight(x,y,l);
				const slopeZ1 = slopeZ2-(conf.slopeHeight||1);
				//const data = Array.from(QMovement.tileBoxes[flag]);
				let data = QMovement.tileBoxes[dcol];
				const key = [x,y,l,'slope'].toString();
				_tileColliders[key]=[];
				if(data){
					if(data[0].constructor!==Array){ data=[data]; }
					for(const box of data){
						const c = new Box_Collider(box[0]||0,box[1]||0,box[2],box[3]);
						c.slopeZ1=slopeZ1; c.slopeZ2=slopeZ2;
						c.moveTo(px,py);
						c.mv3d_collider=infiniteHeightCollider;
						_tileColliders[key].push(c);
					}
				}
			}
			let mv3d_collider;
			if(zColliders.layers[l]){
				mv3d_collider=zColliders.layers[l];
				mv3d_collider.passage=passage;
				mv3d_collider.l=l;
			}
			let data = this.getMapCollider(x, y, flag);
			if (!data){ continue; }
			data=Array.from(data);
			if (data[0].constructor === Array) {
				for (var j = 0; j < data.length; j++) {
					data[j].mv3d_collider=mv3d_collider;
					data[j].isRegionCollider=true;
					this.makeTileCollider(x, y, flag, data[j], j);
				}
			} else {
				data.mv3d_collider=mv3d_collider;
				data.isQCollider=true;
				this.makeTileCollider(x, y, flag, data, 0);
			}
		}
	}
},true);

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(Game_Map.prototype,'makeTileCollider',o=>function(x,y,flag,boxData,index){
	const collider = o.apply(this,arguments);
	if(boxData.mv3d_collider){
		if(boxData.isRegionCollider){
			collider.mv3d_collider = infiniteHeightCollider;
		}else if(boxData.isQCollider){
			collider.mv3d_collider = {z1:-Infinity,z2:Infinity};
			if(boxData.mv3d_collider){
				collider.mv3d_collider.l = boxData.mv3d_collider.l;
			}
			/*
			collider.mv3d_collider = {
				z1: boxData.mv3d_collider.z2,
				z2: boxData.mv3d_collider.z2 + mv3d.STAIR_THRESH + 0.01,
			};
			*/
		}else{
			collider.mv3d_collider = boxData.mv3d_collider;
		}
	}
	return collider;
},true);

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(Game_CharacterBase.prototype,'collider',o=>function collider(){
	const collider = o.apply(this,arguments);
	if(!this.mv3d_sprite){ return collider; }
	if(!collider.mv3d_collider){
		Object.defineProperty(collider,'mv3d_collider',{
			configurable:true,enumerable:false, value: this.mv3d_sprite.getCollider(),
		});
		Object.defineProperty(collider,'mv3d_triggerCollider',{
			configurable:true,enumerable:false, value: this.mv3d_sprite.getTriggerCollider(),
		});
	}
	return collider;
});

function QzCollidersOverlap(c1,c2){
	if(!c1.mv3d_collider||!c2.mv3d_collider){ return true; }
	c1=c1.mv3d_collider; c2=c2.mv3d_collider;
	return zCollidersOverlap(c1,c2);
}
function zCollidersOverlap(c1,c2){
	if(c1.z1<c2.z2&&c1.z2>c2.z1 && c1.z1+mv3d.STAIR_THRESH<c2.z2&&c1.z2+mv3d.STAIR_THRESH>c2.z1){
		return true;
	}
	return false;
}

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(ColliderManager,'getCollidersNear',o=>function getCollidersNear(collider, only, debug){
	// Q colliders
	let isBreak=false;
	const near = o.call(this,collider,c=>{
		if(QzCollidersOverlap(collider,c)===false){ return false; }
		if(collider.mv3d_collider){
			const cx = Math.round(c.x/QMovement.tileSize);
			const cy = Math.round(c.y/QMovement.tileSize);
			if(collider.mv3d_collider.char){
				// if we're standing on a character, ignore Q colliders.
				//const platform = collider.mv3d_collider.char.getPlatform();
				const platform = collider.mv3d_collider.char.getPlatform(cx,cy);
				if(platform.char){ return false; }
			}
			if(c.mv3d_collider){
				// ignore Q colliders not on current layer
				const tileLayers = mv3d.getTileLayers(cx,cy,collider.mv3d_collider.z1+mv3d.STAIR_THRESH);
				if(!tileLayers.includes(c.mv3d_collider.l)){ return false; }
			}
		}
		if(only){
			const value = only(c);
			if(value==='break'){isBreak=true;}
			return value;
		}
		return true;
	},debug);
	if(isBreak){ return near; }
	const x1 = (collider.x+collider._offset.x-1)/QMovement.tileSize;
	const y1 = (collider.y+collider._offset.y-1)/QMovement.tileSize;
	const x2 = (collider.x+collider._offset.x+collider.width+1)/QMovement.tileSize;
	const y2 = (collider.y+collider._offset.y+collider.height+1)/QMovement.tileSize;
	if (collider.mv3d_collider)
	for (let tx = Math.floor(x1); tx < Math.ceil(x2); ++tx)
	for (let ty = Math.floor(y1); ty < Math.ceil(y2); ++ty){
		const colliderList=_tileColliders[[tx,ty]];
		const xCollider = _tileColliders[[tx,ty,'x']];
		let slopeColliders = null;
		let isWall=false;
		const tileLayers = mv3d.getTileLayers(tx,ty,collider.mv3d_collider.z1+mv3d.STAIR_THRESH);
		for(const l of tileLayers){
			if( mv3d.getTilePassage(tx,ty,l)===mv3d.enumPassage.WALL ){ isWall=true; }
			const slopeKey = [tx,ty,l,'slope'].toString();
			if(slopeKey in _tileColliders){ slopeColliders = _tileColliders[slopeKey]; }
		}
		let shouldCollide=false;
		if(xCollider&&collider.mv3d_collider.char){
			const char = collider.mv3d_collider.char;
			const opts = {slopeMin:true};
			const platform = char.getPlatform(tx,ty,opts);
			opts.platform=platform;
			// collide if falling
			if(char.falling&&!char.char._mv3d_isFlying()){ shouldCollide=true; }
			// x passage
			else if(isWall && !platform.char){
				shouldCollide=true;
			}
			// collide slopes
			else if (slopeColliders && !char.platform.char && !platform.char){
				for (const c of slopeColliders){
					if(mv3d.WALK_OFF_EDGE && char.z>c.slopeZ1){ continue; }
					let value=true;
					if(only){ value = only(c); }
					if(value!==false){
						near.push(c);
						if(value==='break'){ return near; }
						continue;
					}
				}
			}
			// collide ledges
			else if(!mv3d.WALK_OFF_EDGE && !char.char._mv3d_isFlying() && (!char.platform||!char.platform.isSlope)
			&& Object(_util__WEBPACK_IMPORTED_MODULE_0__["unround"])(Math.abs(char.getPlatformFloat(tx,ty,opts)-char.targetElevation))>mv3d.STAIR_THRESH){
				shouldCollide=true;
			}
			
			if(shouldCollide){
				let value=true;
				if(only){ value = only(xCollider); }
				if(value!==false){
					near.push(xCollider);
					if(value==='break'){ return near; }
					continue;
				}
			}
		}
		// collide with wall
		if(colliderList) for(let i = 0; i<colliderList.length; ++i){
			if(QzCollidersOverlap(collider,colliderList[i])){
				if(only){
					const value = only(colliderList[i]);
					if(value!==false){ near.push(colliderList[i]); }
					if(value==='break'){ return near; }
				}else{
					near.push(colliderList[i]);
				}
			}
		}
	}
	return near;
});

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(ColliderManager,'getCharactersNear',o=>function(collider, only){
	return o.call(this,collider,char=>{
		const sprite = char.mv3d_sprite; if(!sprite){ return true; }
		const c1 = collider.mv3d_collider;
		const c2 = $gameTemp._mv3d_Q_getCharactersTriggerHeight?sprite.getTriggerHeight():sprite.getCollisionHeight();
		if(!c1||!c2){ return true; }
		if(zCollidersOverlap(c1,c2)===false){ return false; }
		if(only){ return only(char); }
		return true;
	});
});

Object(_util__WEBPACK_IMPORTED_MODULE_0__["override"])(Game_Player.prototype,'startMapEvent',o=>function(x,y,triggers,normal){
	$gameTemp._mv3d_Q_getCharactersTriggerHeight=true;
	o.apply(this,arguments);
	$gameTemp._mv3d_Q_getCharactersTriggerHeight=false;
});

mv3d.Character.prototype.getPlatform=function(x=this.char._realX,y=this.char._realY,opts={}){
	const px = (x-0.5)*QMovement.tileSize;
	const py = (y-0.5)*QMovement.tileSize;
	const collider = this.char.collider();

	const x1 = (px+collider._offset.x+1)/QMovement.tileSize;
	const y1 = (py+collider._offset.y+1)/QMovement.tileSize;
	const x2 = (px+collider._offset.x+collider.width-1)/QMovement.tileSize;
	const y2 = (py+collider._offset.y+collider.height-1)/QMovement.tileSize;
	
	const platform = [
		//mv3d.getPlatformForCharacter(this,x,y),
		mv3d.getPlatformForCharacter(this,x1,y1,opts),
		mv3d.getPlatformForCharacter(this,x2,y1,opts),
		mv3d.getPlatformForCharacter(this,x2,y2,opts),
		mv3d.getPlatformForCharacter(this,x1,y2,opts),
	].reduce((a,b)=>a.z2>=b.z2?a:b);
	return platform;
};

mv3d.getEventsAt=function(x,y){
	let events;
	try{
		events = ColliderManager._characterGrid[Math.round(x)][Math.round(y)];
	}catch(err){
		return [];
	}
	if(!events){ return []; }
	return events.filter(event=>{
		if(!(event instanceof Game_Event) || event.isThrough()){ return false; }
		return true;
	});
};

mv3d.setDestination=function(x,y){
	$gameTemp.setPixelDestination(Math.round(x*$gameMap.tileWidth()), Math.round(y*$gameMap.tileHeight()));
};

const _clearMouseMove = Game_Player.prototype.clearMouseMove;
Game_Player.prototype.clearMouseMove=function(){
	_clearMouseMove.apply(this,arguments);
	if(this._pathfind){
		this.clearPathfind();
	}
}


const _QdiagMap={
	1: [4, 2], 3: [6, 2],
	7: [4, 8], 9: [6, 8]
};
const _QMoveVH=o=>function(dir) {
		return;
