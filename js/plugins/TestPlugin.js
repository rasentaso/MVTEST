//=============================================================================
// TestPlugin.js
//=============================================================================

/*:ja
 * @plugindesc 独自のカスタマイズ用
 * @author daitaso
 *
 *
 * @help
 *
 * プラグインコマンド:
 */

(function() {


	//タイトル画面の改造
	var _Window_TitleCommand_prototype_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
	Window_TitleCommand.prototype.makeCommandList = function() {
        this.addCommand('はじめから',   'newGame');
        this.addCommand('つづきから', 'continue', this.isContinueEnabled());
        this.addCommand('オプション',   'options');
	};	
    
    var _Scene_Base_prototype_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function() {
        _Scene_Base_prototype_update.call(this);  
        var test = document.getElementById("test").nodeValue;
        console.log(test);
    };
})();
