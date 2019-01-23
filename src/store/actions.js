import axios from 'axios';

import * as types from './types';

let actions={
    [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload)
};
export default actions;