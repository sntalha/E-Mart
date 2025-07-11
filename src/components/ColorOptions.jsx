import React from 'react'
import styles from '../pages/styles/productinfo.module.scss';

const ColorOptions = ({ colorsList, onChangeColor, activeColor }) => {

  function handleColorChange(c) {
    onChangeColor(c)
  }
  return (
    <>
      {colorsList.map((color) => <div
        onClick={() => handleColorChange(color)}
        className={styles.color_box}
        style={{ backgroundColor: color, border: `3px solid ${activeColor == color ? "#000" : color}` }}
      >
      </div>)}
    </>
  )
}

export default ColorOptions;