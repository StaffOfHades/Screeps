var actionCollect = {

 /** @param {Creep} creep **/
    run: function(creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) && 
                        structure.energy > global.MIN_ENERGY;
                }
        });
        if(targets.length > 0) {
            var target = creep.pos.findClosestByPath(targets);
            if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#A81328'}});
            }
            return true;
        } else {
            //creep.say('🔋 Empty');
            return false;
        }
    }
};

module.exports = actionCollect;
