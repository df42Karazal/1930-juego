//=============================================================================
// ZERO_Disable_Text_Opening_Closing_Animations.js
//=============================================================================
/*:
 * @ZERO_Disable_Text_Opening_Closing_Animations
 * @plugindesc Disable text window opening and closing animations
 * @version 1.0
 * @author Zero_G
 * @filename ZERO_Disable_Text_Opening_Closing_Animations.js
 * @help
 -------------------------------------------------------------------------------
 == Description ==
 This plugin will Disable text window opening and closing animations

 == Terms of Use ==
 - Free for use in non-commercial projects with credits
 - Free for use in commercial projects
 - Please provide credits to Zero_G

 == Usage ==
 Just add the plugin.

 == Changelog ==
 v1.0 Intial
*/

// Overwrite
Window_Base.prototype.updateOpen = function() {
    if (this._opening) {
        this.openness = 255;
        if (this.isOpen()) {
            this._opening = false;
        }
    }
};

// Overwrite
Window_Base.prototype.updateClose = function() {
    if (this._closing) {
        this.openness = 0;
        if (this.isClosed()) {
            this._closing = false;
        }
    }
};