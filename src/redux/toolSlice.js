import { createSlice } from "@reduxjs/toolkit";
// import { getType } from "../api/type";

/**
 * 创建切片
 */
export const toolSlice = createSlice({
  name: "toolID",
  initialState: {
    toolIDList: [],
    toolID: "init",
    requirementType: "",
    problemType: "",
    thoughtType: "",
    modelType:"",
    testType:""
  },
  reducers: {
    updateStoreToolId: (state, { payload }) => {
      console.log(payload);
      state.toolID = payload;
    },
    updateStoreRequirementType: (state, { payload }) => {
      console.log(payload);
      state.requirementType = payload;
    },
    updateStoreProblemType: (state, { payload }) => {
      console.log(payload);
      state.problemType = payload;
    },
    updateStoreThoughtType: (state, { payload }) => {
      console.log(payload);
      state.thoughtType = payload;
    },
    updateStoreModelType: (state, { payload }) => {
      console.log(payload);
      state.modelType = payload;
    },
    updateStoreTestType: (state, { payload }) => {
      console.log(payload);
      state.testType = payload;
    },
  },
});

export const {
  updateStoreToolId,
  updateStoreProblemType,
  updateStoreRequirementType,
  updateStoreThoughtType,
  updateStoreModelType,
  updateStoreTestType
} = toolSlice.actions;

export default toolSlice.reducer;
