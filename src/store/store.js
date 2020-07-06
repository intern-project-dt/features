import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import BotManagerReducer from '../reducers/bot-manager.reducer';
import TrainedDataReducer from '../reducers/trained-data.reducer';
import LoginReducer from '../reducers/login.reducer';
import ScenarioManagerReducer from '../reducers/scenario-manager.reducer';
import BotTesterReducer from '../reducers/bot-tester.reducer';
import ReqAnalysisReducer from '../reducers/req-analysis.reducer';
import TopBarReducer from "../reducers/top-bar.reducer"

const initialState = {};
const middleware  = [thunk]

const rootReducer= combineReducers({

    botManager:  BotManagerReducer,
    trainedData: TrainedDataReducer,
    login: LoginReducer,
    scenarioManager: ScenarioManagerReducer,
    tester: BotTesterReducer,
    reqAnalysis: ReqAnalysisReducer,
    topBar:TopBarReducer,

});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
)
    
export default store;
