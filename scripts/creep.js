var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var creep = {

    run: function(name) {
        var creep_ = Game.creeps[name];
        
        switch(creep_.memory.role) {
            case 'harvester':
                roleHarvester.run(creep_);
                break;
            case 'upgrader':
                roleUpgrader.run(creep_);
                break;
            case 'builder':
                roleBuilder.run(creep_);
                break;
            default:
                console.error('Unknown role: ' + creep_.memory.role);
        }
    }
};

module.exports = creep;
