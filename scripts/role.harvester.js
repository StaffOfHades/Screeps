var actionHarvest = require('action.harvest');
var actionDeposit = require('action.deposit');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(!creep.memory.harvesting && creep.carry.energy == 0) {
            creep.memory.harvesting = true;
            creep.say('🔄 harvest');
        }
        if(creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.harvesting = false;
            creep.say('🏦 deposit');
        }
        
        if(creep.memory.harvesting) {
            actionHarvest.run(creep);
        } else {
            actionDeposit.run(creep);
        }
    }
};

module.exports = roleHarvester;
