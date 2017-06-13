var actionBuild = {

 /** @param {Creep} creep **/
    run: function(creep) {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            var target = creep.pos.findClosestByPath(targets);
            if(creep.build(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#4E2FB1'}});
            }
            return true;
        } else {
            return false;
        }
    }
};

module.exports = actionBuild;
