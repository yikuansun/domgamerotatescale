/* This library was built for domgame.js */

HTMLElement.prototype.moveVec = function(distance, angle) {
    this.changeXpos(Math.cos(angle) * distance);
    this.changeYpos(Math.sin(angle) * distance);
}

HTMLElement.prototype.rotate = function(angle) {
    this.style.transform = " rotate(" + angle.toString() + "rad)";
}

HTMLElement.prototype.scale = function(factor) {
    centerpt = [parseFloat(this.style.left) + parseFloat(this.style.width) / 2, parseFloat(this.style.bottom) + parseFloat(this.style.height) / 2];
    this.style.width = (parseFloat(this.style.width) * factor).toString() + DOMgame.unit_type;
    this.style.height = (parseFloat(this.style.height) * factor).toString() + DOMgame.unit_type;
    this.setXpos(centerpt[0]);
    this.setYpos(centerpt[1]);
}

HTMLElement.prototype.setWidth = function(width) {
    xpos = parseFloat(this.style.left) + parseFloat(this.style.width) / 2;
    this.style.width = width.toString() + DOMgame.unit_type;
    this.setXpos(xpos);
}

HTMLElement.prototype.setHeight = function(height) {
    ypos = parseFloat(this.style.bottom) + parseFloat(this.style.height) / 2;
    this.style.height = height.toString() + DOMgame.unit_type;
    this.setYpos(ypos);
}