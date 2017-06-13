var actionHarvest = require('action.harvest');
var actionUpgrade = require('action.upgrade');
var actionCollect = require('action.collect');

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            actionUpgrade.run(creep);
        } else if(!actionCollect.run(creep)) {
            actionHarvest.run(creep);
        }
    }
};

module.exports = roleUpgrader;
