
function print_if_exist(element) {
    ((element != undefined) && (element != null)) ? console.log(element) : console.log('not exist');
}

function show_prototype(item) {
    console.log('prototype:');
    print_if_exist(item.prototype);
    console.log('__proto__:');
    print_if_exist(item.__proto__);
}

/*
 *  Functions(not for anonymous functions or array functions) 
 *  have the 'prototype' attribute.
 *  
 *  The 'constructor' attribute of prototype reference to self.
 *  eg.: Player.prototype.constructor => [Function: Player]
 */
function Player() {};
show_prototype(Player);

/*
 *  Every object has their own constructor, and constructor
 *  has 'prototype' attribute which reference the function's
 *  prototype.
 * 
 *  eg.: newPlayer.constructor = [Function: Player]
 *  eg.: newPlayer.constructor.prototype = Player {} => Player prototype
 */
// let newPlayer = new Player();
// show_prototype(newPlayer);
// show_prototype(newPlayer.constructor);

