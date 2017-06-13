var spawner = require('spawner');
var tower = require('tower');
var creep = require('creep');

global.UPDATE_CYCLE = 16;
global.update = global.UPDATE_CYCLE - 1;
global.MIN_ENERGY = 0;

module.exports.loop = function () {
    
     if( ++global.update == global.UPDATE_CYCLE ) {
        console.log();
        for(var name in Game.rooms) {
            console.log('Room "' + name + '" has ' + 
            Game.rooms[name].energyAvailable + ' energy');
        }
    } else if(global.update > global.UPDATE_CYCLE) {
         global.update = 0;
    }
    
    spawner.run('Spawn1');
    tower.run('TOWER_ID');
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        } else {
           creep.run(name);
        }
    }
}
