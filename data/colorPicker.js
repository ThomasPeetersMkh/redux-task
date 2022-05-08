import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(5),
    name: "Chocolate",
    hex: "#D2691E",
  },
  {
    id: nanoid(5),
    name: "Fire Brick",
    hex: "#B22222",
  },
];

const colorPickerSlice = createSlice({
  name: "colorPickerState",
  initialState,
  reducers: {
    addColor(state, { payload: { name, hex } }) {
      state.push({
        id: nanoid(5),
        name,
        hex,
      });
    },
    changeColor(state, { payload: { id, hex } }) {
      const objToEdit = state.find((todo) => todo.id === id);
      objToEdit.hex = hex;
    },
    changeName(state, { payload: { id, name } }) {
      const objToEdit = state.find((todo) => todo.id === id);
      objToEdit.name = name;
    },
  },
});

export default colorPickerSlice;
export const { addColor, changeColor, changeName } = colorPickerSlice.actions;
