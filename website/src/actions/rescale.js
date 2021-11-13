/**
 * ref: https://stackoverflow.com/questions/10858523/css-transform-with-element-resizing
 * @param {HTMLElement} elem
 * @param {number} scaleSize
 */
export function rescale(elem, scaleSize) {
  const height = elem.clientHeight;
  // const width = elem.clientWidth;
  const ratioX = scaleSize;
  const ratioY = scaleSize;

  elem.style.transform = "scale(" + ratioX + ", " + ratioY + ")";
  elem.style.transformOrigin = "0 0";
  // elem.style.width = width * ratioX + "px";
  elem.style.height = height * ratioY + "px";

  return {
    /**
     * @param {number} newScaleSize
     */
    update(newScaleSize) {
      scaleSize = newScaleSize;
    },
  };
}
