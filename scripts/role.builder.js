var actionRepair = require('action.repair');
var actionBuild = require('action.build');
var actionHarvest = require('action.harvest');
var actionCollect = require('action.collect');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if(creep.memory.building) {
            if(!actionRepair.run(creep)) {
               actionBuild.run(creep);
            }
        } else if(!actionCollect.run(creep)) {
            actionHarvest.run(creep);
        }
    }
};

module.exports = roleBuilder;
