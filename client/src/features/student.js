import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7500',
    withCredentials: true, credentials: 'include'
  });
  
 const getStudentAction = createAsyncThunk ('get/studentList', async () => {
     console.log(33);
    const response = await instance.get('/students');
    return response.data;
 
})

const postStudentAction = createAsyncThunk ('get/postStudentAction', async (student) => {

   const response = await instance.post('/students', student, {crossdomain: true });
   console.log(response.data);
   return response.data;

})

export const studentSlice = createSlice({
     name: 'student',
     initialState: {
         student: [],
         newStudentAdded: 0, 
     },
     reducers: {
     },
     extraReducers : {
         [getStudentAction.fulfilled] :  (state,action ) => {
            state.student = action.payload;
          }, 
          [postStudentAction.fulfilled] :  (state, action ) => {
            state.newStudentAdded = state.newStudentAdded + 1 ;
          },
     }

})

export { getStudentAction , postStudentAction }

export default studentSlice.reducer;