import {TrainedDataActionType} from "../action-types/trained-data.actiontype";



const initialState={
    query:"",
    botIntent:"",
    botScenario:"",
    result:[],
    scList:[],
    inList:[],
    scDList:[]

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

        case TrainedDataActionType.SET_SCDLIST:
            return{
                ...state, scDList:action.scDList
            };

        case TrainedDataActionType.SET_INTENT:
            for(var x in state.scDList){
                if(state.scDList[x].scenario.scenarioName===state.botScenario)
                {
                    state.scDList[x].label=state.botIntent;
                    return state;
                }
            }

        case TrainedDataActionType.SET_BINTENT:
            for(var x in state.scDList){
                if(state.scDList[x].scenario.scenarioName===action.obj.scenario.scenarioName)
                {
                    state.scDList[x].label=action.obj.label;
                    return state;
                }
            }
            state.scDList.push(action.obj);
            return state;

//FINAL
        case TrainedDataActionType.ADD_SCENARIO:
            let temp=[];
            let temp2=action.scenario;
            temp2.id=action.scenario.scenarioId;
            temp2.scenarioKey=action.scenario.scenarioId+"-"+action.scenario.scenarioName;
            temp.scenario=temp2;
            temp.id="null";
            temp.label="null";
            temp.sampleCount="0";
            state.scDList.push(temp);
            state.scList.push(state.action.scenarioName);
            return state;

//FINAL
       case TrainedDataActionType.REM_SCENARIO:
            temp=[];
            for(var x in state.scDList){
                if(state.scDList[x].scenario.scenarioName!=action.remScenario)
                    temp.push(state.scDList[x]);
            }
            temp2=[];
            for(var x in state.scList){
                if(state.scList[x]!=action.remScenario)
                    temp2.push(state.scList[x])
            }
            return{
                ...state,
                scList:temp2,
                scDList:temp
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