import {TrainedDataActionType} from "../action-types/trained-data.actiontype";

const initialState={
    query:"",
    botIntent:"",
    botScenario:"",
    result:[],
    scList:[],
    inList:[]

};

export default function TrainedDataReducer(state = initialState, action){

    switch(action.type){

        case TrainedDataActionType.SET_QUERY:
            return{
                ...state, query:action.query
            };

        case TrainedDataActionType.SET_BOT_INTENT:
            return{
                ...state, botIntent:action.botIntent
            };

        case TrainedDataActionType.SET_BOT_SCENARIO:
            return{
                ...state, botScenario:action.botScenario
            };

        case TrainedDataActionType.SET_RESULT:
            return{
                ...state, result:action.result
            };

        case TrainedDataActionType.SET_SCLIST:
            return{
                ...state, scList:action.scList
            };

        case TrainedDataActionType.SET_INLIST:
            return{
                ...state, inList:action.inList
            };




        /*
        case TrainedDataActionType.GENERATE:
            return state;


        case TrainedDataActionType.MAP:
            
            return state;
        */

        default:
            return state;
  
    }
    
}