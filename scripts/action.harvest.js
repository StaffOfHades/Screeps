var actionHarvest = {

 /** @param {Creep} creep **/
    run: function(creep) {
        var sources = creep.room.find(FIND_SOURCES);
        var source = creep.pos.findClosestByPath(sources);
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#FFA42B'}});
        }
    }
};

module.exports = actionHarvest;
