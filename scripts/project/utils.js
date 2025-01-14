

export function isPointerOverObject(pointerX, pointerY, object) {
    const { x, y, width, height } = object.getBoundingBox();
    return (
        pointerX >= x &&
        pointerX <= x + width &&
        pointerY >= y &&
        pointerY <= y + height
    );
}
