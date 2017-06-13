var actionRepair = {

 /** @param {Creep} creep **/
    run: function(creep) {
        var closestDamaged = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamaged) {
            if(creep.repair(closestDamaged) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestDamaged, {visualizePathStyle: {stroke: '#35D224'}});
            }
            return true;
        } else {
            return false;
        }
    }
};

module.exports = actionRepair;
