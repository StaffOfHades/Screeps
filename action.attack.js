var actionAttack = {

 /** @param {Creep} creep **/
    run: function(creep) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
            return true;
        } else {
            return false;
        }
    }
};

module.exports = actionAttack;
