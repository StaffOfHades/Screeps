var actionUpgrade = {

 /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#DF266A'}});
        }
    }
};

module.exports = actionUpgrade;
