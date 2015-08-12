/**
 * @file Easter egg
 * @author Artem Veikus artem@veikus.com
 * @version 3.0
 */
(function() {
    var telegram = require(__dirname + '/telegram.js'),
        botan = require('botanio')(61578);

    Banderavec.name = 'banderavec';

    Banderavec.initMessage = function(message) {
        return message.text === 'Слава Україні!';
    };

    /**
     * @param message {object} Telegram message object
     * @constructor
     */
    function Banderavec(message) {
        this.chat = message.chat.id;
        this.complete = true;

        telegram.sendMessage(this.chat, 'Героям слава!', null);
        botan.track(message, 'Easter egg');
    }

    /**
     * @param message {object} Telegram message object
     */
    Banderavec.prototype.onMessage = function (message) {};


    module.exports = Banderavec;
}());