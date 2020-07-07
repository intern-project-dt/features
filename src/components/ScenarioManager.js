import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ScenarioManagerActionType } from "../action-types/scenario-manager.actiontype";
import { connect } from "react-redux";
import * as ScenarioManager from "../actions/scenario-manager.action"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      height: 30,
      alignItems: "left",
      position:"relative",
      top: 10,
      left: -420,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    heading :{
      position:"relative",
      top: -10,
      left: -540,
      fontFamily: "Segoe UI"
    },
    line :{
      position:"relative",
      top: -10,
      width: 900,
      left: -250,
      height: 2,
      backgroundColor:"black"
    },
    heading1 :{
      position:"relative",
      top: 110,
      left: -250,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: 110,
      width: 900,
      left: 180,
      height: 2,
      backgroundColor:"black"
    },
    field1 :{
      position:"relative",
      top: 1880,
      left: 10,
      
    },
  }));
 

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      position: 'relative',
      top: 45,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 170,
    height: 30,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const CSSTextField = withStyles({
  root: {
    width: 205,
    padding: '10px 0px',
    position: 'relative',
    top: -70,
    left: 1,
      },

  
  
})(TextField);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      position: 'relative',
      top: 20,
      left: 330,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      align: 'center',
      backgroundColor: '#0367fc',
      borderColor: '#0367fc',
      
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
  
  function InputTextField(props) {
    const classes = useStyles();
    const handleChange = (action,input) => {
      switch(action){
        case "SCEDIT_IN" :  
          props.dispatch(ScenarioManager.inputEditSC(input));
          break;
  
        case "SC_NAME" :
          props.dispatch(ScenarioManager.inputEditSC(input));
          break;   
        
  
        case "ID_IN" :
          props.dispatch(ScenarioManager.inputSCId(input));
          break; 
        case "STRAT_IN" :  
          props.dispatch(ScenarioManager.inputSCStrat(input));
          break;
  
        case "LOB_IN" :
          props.dispatch(ScenarioManager.inputSCLOB(input));
          break; 
        case "MSISDN_IN" :  
          props.dispatch(ScenarioManager.inputMSISDN(input));
          break;
  
        case "FB_IN" :
          props.dispatch(ScenarioManager.inputFB(input));
          break;  
        case "RESP_IN" :  
          props.dispatch(ScenarioManager.inputResp(input));
          break;
  
        case "REMSC_IN" :
          props.dispatch(ScenarioManager.inputRemovalScenario(input));
          break;                       
     
        }
      };

          async function saveScenario(){
              let res = await fetch('http://10.5.205.104:8080/trainer/saveScenario', {
                method: 'post',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    scenario:{
                      scenarioId:props.scenarioId,
                      scenarioName:props.scenarioName,
                      scenarioStrategy:props.scenarioStrat,
                      scenarioLob:props.scenarioLOB,
                      scenarioResponse:props.scenarioResp,
                      msisdnRequired:props.reqMSISDN,
                      feedbackRequired:props.reqFeedback,
                      scenarioStep:null,
                      scenarioIntent:null
                    }
                })
            });

            let result = await res.json();

            if(result.status==200)
              console.log("correct");
            else
              console.log("wrong");    

    }

    async function loadScenario(){

    }

    async function remScenario(){
      let res = await fetch('http://10.5.205.104:8080/trainer/removeScenario?name={props.scenarioRemove}', {
                method: 'get',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                
            });

        let result =await res.json();      
      
    }


    return (
        <div className="forms">
        <Typography variant="h3" className={classes.heading}>
              Manage Scenario
            </Typography>
    
            <Divider className={classes.line}/>
        

        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            
            
              
            
            
                <div className= "field">  
                
                <p> <div className="field1" style={{ position: "relative", left:2, top:-10 }} >Select Scenario to Edit:  </div> </p>
                <div className="block"><Select style={{width:200, position: "relative", top:-40}}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={props.scenarioEditted}
                onChange={(e)=>handleChange("SCEDIT_IN",e.target.value)}
                >
                          <MenuItem value="I want to know my data usage">I want to know my data usage</MenuItem>
                          <MenuItem value="I want to change my alterante phone number">I want to change my alterante phone number</MenuItem>
                          <MenuItem value="I want to know my current bill plan">I want to know my current bill plan</MenuItem>
                          <MenuItem value="I want to migrate from prepaid to postpaid">I want to migrate from prepaid to postpaid</MenuItem>
                          <MenuItem value="chatbot_greeting">chatbot_greeting</MenuItem>
                          <MenuItem value="chatbot_closure">chatbot_closure</MenuItem>
                          <MenuItem value="chatbot_help">chatbot_help</MenuItem>
                          <MenuItem value="chatbot_new_bill_plan">chatbot_new_bill_plan</MenuItem>
                          <MenuItem value="chatbot_active_ir">chatbot_active_ir</MenuItem>
                          <MenuItem value="chatbot_nearest_store">chatbot_nearest_store</MenuItem>
                          <MenuItem value="chatbot_others">chatbot_others</MenuItem>
                          <MenuItem value="I want to migrate change my email id">I want to migrate change my email id</MenuItem>
                          <MenuItem value="I want to disconnect my number">I want to disconnect my number</MenuItem>
                          <MenuItem value="chatbot_create_family">chatbot_create_family</MenuItem>
                          <MenuItem value="chatbot_set_data_limit">chatbot_set_data_limit</MenuItem>
                          <MenuItem value="chatbot_track_data_usage">chatbot_track_data_usage</MenuItem>
                          <MenuItem value="hr_leave_application">hr_leave_application</MenuItem>
                          <MenuItem value="hr_leave_policies">hr_leave_policies</MenuItem>
                          <MenuItem value="hr_pan_update">hr_pan_update</MenuItem>
                          <MenuItem value="hr_last_claim_date">hr_last_claim_date</MenuItem>
                          <MenuItem value="hr_slip_required">hr_slip_required</MenuItem>
                </Select>
                   </div>
                
                
                </div>
                
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                
                <p> <div className="field1" style={{ position: "relative", left:5, top:-10}}> Enter Scenario Name:  </div> </p>
                <div className="block"> <CSSTextField style={{height: 30, position: "relative", left:2, top:-50}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                    value={props.scenarioName}
                    onChange={(e)=>handleChange("SC_NAME",e.target.value)}
                  />
                   </div>
                </div>
            </form>
            
            <p><div className="field1" style={{ position: "relative", left:25, top:20}}> Enter Scenario ID: </div></p>
            <CSSTextField style={{height: 30, position: "relative", left:330, top:-15}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                    value={props.scenarioId}
                    onChange={(e)=>handleChange("SC_NAME",e.target.value)}
                  />
            
              
              </div>
            
              <p><div className= "field1" style={{ position: "relative", left:27, top:20}}> Select Scenario Strategy: 
              </div></p>
              <div className="block"> 

              <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
              <Select style={{width:205, height: 50, position: "relative", left:247, top:-5}}
                native
                value={props.scenarioStrat}
                onChange={(e)=>handleChange("STRAT_IN",e.target.value)}
                inputProps={{
                  name: 'lob',
                  id: 'filled-lob-native-simple',
                }}
              >
                      <option value={"DTScenario"}>DTScenario</option>
                      <option value={"FAQScenario"}>FAQScenario</option>
                      <option value={"SwitchScenario"}>SwitchScenario</option>
              </Select>
              </div>
              <p> <div className="field1" style={{ position: "relative", left:30, top:20}}> Select Scenario LOB:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <Select style={{width:205, height: 50, position: "relative", left:250, top:-10}}
                      native
                      value={props.scenarioLOB}
                      onChange={(e)=>handleChange("LOB_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"Postpaid"}>Postpaid</option>
                      <option value={"Prepaid"}>Prepaid</option>
                      <option value={"DTH"}>DTH</option>
                      <option value={"Telemedia"}>Telemedia</option>
                      <option value={"HR"}>HR</option>
                      <option value={"PaymentsBank"}>PaymentsBank</option>
                    </Select>
                    </div>
              <p> <div className="field1" style={{ position: "relative", left:30, top:20}}> MSISDN Required:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <Select style={{width:205, height: 50, position: "relative", left:250, top:-10}}
                      native
                      value={props.reqMSISDN}
                      onChange={(e)=>handleChange("MSISDN_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"True"}>True</option>
                      <option value={"False"}>False</option>
                    </Select>
                    
                  </div>
                  <p> <div className="field1" style={{ position: "relative", left:30, top:20}}> Feedback Required:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <Select style={{width:205, height: 50, position: "relative", left:250, top:-10}}
                      native
                      value={props.reqFeedback}
                      onChange={(e)=>handleChange("FB_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"True"}>True</option>
                      <option value={"False"}>False</option>
                    </Select>

                      <p> <div className = "field1" style={{ position: "relative", left:-130, top:20}} >Enter Scenario Response: </div></p>
                        <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                        
                      <div className="block"> 
                      
                          <CSSTextField style={{width:205, height: 50, position: "relative", left:5, top:-40}}
                          id="filled-secondary"
                          variant="filled"
                          color="secondary"
                          value={props.scenarioResp}
                    onChange={(e)=>handleChange("RESP_IN",e.target.value)}
                        />
                        </div>

                      

                              
                    </div>
            


            

            
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:30}}
            onClick={saveScenario}>
                Save
            </BootstrapButton>
            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:30}}>
                Load
            </BootstrapButton>
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Delete Bot
            </Typography>
        
            <Divider className={classes.line1}/>
            <br /> <br /> <br /> <br /> <br />
            <div className= "field1">  
            
                <br /> <br />
                <p> <div className="field1" style={{ position: "relative", left:-100, top:20}}> Feedback Required:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <Select style={{width:205, height: 50, position: "relative", left:10, top:-10}}
                      native
                      value={props.scenarioRemove}
                      onChange={(e)=>handleChange("USER_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"True"}>True</option>
                      <option value={"False"}>False</option>
                    </Select>
                
                        </div>
            </div>
            <br/>
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:550, top:40}}
            onClick={remScenario}>
                Delete Bot
            </BootstrapButton>
            </div>
            </div>
      </FormControl>
        </div>
    );
  }

  function mapStateToProps(state) {
      return{
        scenarioEditted:state.scenarioManager.scenarioEditted,
        scenarioName:state.scenarioManager.scenarioName,
        scenarioId:state.scenarioManager.scenarioId,
        scenarioStrat:state.scenarioManager.scenarioStrat,
        scenarioLOB:state.scenarioManager.scenarioLOB,
        reqMSISDN:state.scenarioManager.reqMSISDN,
        reqFeedback:state.scenarioManager.reqFeedback,
        scenarioResp:state.scenarioManager.scenarioResp,
        scenarioRemove:state.scenarioManager.scenarioRemove
      };
  }
  
  export default connect(mapStateToProps)(InputTextField);