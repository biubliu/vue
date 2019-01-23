import { VIEW_LOADING } from './types';

let mutations={
    [VIEW_LOADING]:(state,payload)=> state.Loading=payload,
};
export default mutations;