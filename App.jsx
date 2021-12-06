import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Button, ScrollView, Modal, Pressable} from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

export default class test extends Component {
  constructor() {
    super();
    this.state= {
      tinetti: {},
      showResults: false,
    };


    this.handleInputChange=this.handleInputChange.bind(this);
    this.submit=this.submit.bind(this);
    this.setShowResultsVisible = this.setShowResultsVisible.bind(this);
    this.clear=this.clear.bind(this);
  }

  //function for popup
  setShowResultsVisible(visible) {
    this.setState({ showResults: visible });
  }

    handleInputChange(name, value) {
      this.state.tinetti[name] = value;
      //update the state
      this.setState({ tinetti: this.state.tinetti });
    }

      //function for sumbit
      submit(){
      this.setState({ showResults: true});
      let sitting=
      +this.state.tinetti.scoreOne +
      +this.state.tinetti.scoreTwo +
      +this.state.tinetti.scoreThree +
      +this.state.tinetti.scoreFour +
      +this.state.tinetti.scoreFive +
      +this.state.tinetti.scoreSix +
      +this.state.tinetti.scoreSeven +
      +this.state.tinetti.scoreEight +
      +this.state.tinetti.scoreNine;
      this.setState({sitting: sitting});

      let gait=
      +this.state.tinetti.scoreTen +
      +this.state.tinetti.scoreEleven +
      +this.state.tinetti.scoreTwelve +
      +this.state.tinetti.scoreThirteen +
      +this.state.tinetti.scoreFourteen +
      +this.state.tinetti.scoreFifteen +
      +this.state.tinetti.scoreSix +
      +this.state.tinetti.scoreSeven +
      +this.state.tinetti.scoreEighteen +
      +this.state.tinetti.scoreNineteen;
      this.setState({gait: gait})

      let total=sitting + gait      
      if (Number.isNaN(total)) {
        this.setState({ total: "You missed at least one answer" });
      } else {
      // this.state.total = total
      this.setState({total: total})
      }
    }
     
      
      clear() {
        this.setState({ tinetti: {} });
        }   
        
        
    render() {
     const { showResults } = this.state;
  return (
      <SafeAreaView>
      <ScrollView>
      <PaperProvider>

         {/* for popup answer */}
      <View style={styles.centerView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={ showResults}
        onRequestsClose={() => {
          this.setShowResultsVisible(!showResults);
        }}
        // Modal rendering
        ><View style={styles.modalView}>

          <Text style={styles.totalScore}>Total Score: {
            this.state.total
            }{"\n"}{"\n"}</Text>

               <Text>Tinetti Score /  Fall Risk Interpetation</Text>
            
              <Text>Below 19: : High Fall Risk</Text>              
              <Text>19-23: Moderate Fall Risk</Text>               
              <Text>Above 23: Low Fall Risk</Text> 
              

           {/* //close modal but not   */}


          <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setShowResultsVisible(!showResults)}>
              
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>           
          </View></Modal>
        </View>

       <View style={styles.container}>
       <Text style={{fontWeight: "bold", textAlign: "center", fontSize: 20, marginTop: 15}}>Tinetti Balance</Text>
          <Text style={styles.title}>BALANCE SECTION</Text>
        </View>
        <View style={styles.secondTitle}>
          <Text style={styles.title}>Sitting Balance</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreOne', newValue)}value={this.state.tinetti.scoreOne}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreOne==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Leans/slides in chair" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreOne==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Steady, Safe" value="1" />
          </View>   
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Rises From Chair</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreTwo', newValue)}value={this.state.tinetti.scoreTwo}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreTwo==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Unable without help" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreTwo==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Able, uses arms" value="1" />
          </View>  
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreTwo==="2" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(2 pts) Able without use of arms, 1 attempt" value="2" />
          </View>   
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Attempts to Rise</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreThree', newValue)}value={this.state.tinetti.scoreThree}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreThree==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Unable without help " value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreThree==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Able, requires > 1 attempt" value="1" />
          </View>  
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreThree==="2" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(2 pts) Able without use of arms " value="2" />
          </View>   
        </RadioButton.Group>

        <View style={styles.secondTitle}>
          <Text style={styles.title}>Standing balance 1st 5 secs</Text>
        </View>
          <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreFour', newValue)}value={this.state.tinetti.scoreFour}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFour==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Unsteady(staggers, moves feet, trunk sway)" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFour=="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Steady but uses walker or other support" value="1" />
          </View>  
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFour==="2" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(2 pts) Steady without walker or other support" value="2" />
          </View>   
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Standing Balance</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreFive', newValue)}value={this.state.tinetti.scoreFive}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFive==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Unsteady" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFive==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Steady but wide stance/uses support" value="1" />
          </View>  
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFive==="2" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(2 pts) Narrow stance without support" value="2" />
          </View>   
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Nudged</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreSix', newValue)}value={this.state.tinetti.scoreSix}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSix==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Begins to fall" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSix==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Staggers, grabs, catches self" value="1" />
          </View>  
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSix==="2" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(2 pts) Steady" value="2" />
          </View>   
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Eyes Closed</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreSeven', newValue)}value={this.state.tinetti.scoreSeven}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSeven==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Unsteady" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSeven==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Steady" value="1" />
          </View>            
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Turning 360 degrees:Steps</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreEight', newValue)}value={this.state.tinetti.scoreEight}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreEight==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Discontinuous steps" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreEight==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Continuous steps" value="1" />
          </View>            
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Sitting Down</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreNine', newValue)}value={this.state.tinetti.scoreNine}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreNine==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Unsafe (misjudged distance, falls into chair)" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreNine==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Uses arms or not a smooth motion" value="1" />
            <View>
            <RadioButton.Item style={this.state.tinetti.scoreNine==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Safe, smooth motion " value="1" />
          </View>
          </View>            
        </RadioButton.Group>


        <View style={styles.container}>
          <Text style={styles.title}>GAIT SECTION</Text>
        </View>

        <View style={styles.secondTitle}>
          <Text style={styles.title}>Indication of gait</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreTen', newValue)}value={this.state.tinetti.scoreTen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreTen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Any hesitancy or multiple attempts " value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreTen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) No Hesitancy" value="1" />
          </View>            
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Step length and height: Right</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreEleven', newValue)}value={this.state.tinetti.scoreEleven}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreEleven==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Step to" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreEleven==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Step through R" value="1" />
          </View>            
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Step length and height: Left</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreTwelve', newValue)}value={this.state.tinetti.scoreTwelve}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreTwelve==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Step to" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreTwelve==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Step through L" value="1" />
          </View>            
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Foot clearance: Right</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreThirteen', newValue)}value={this.state.tinetti.scoreThirteen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreThirteen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Foot drop/Shuffles" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreThirteen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) R foot clears floor" value="1" />
          </View>            
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Foot clearance: Left</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreFourteen', newValue)}value={this.state.tinetti.scoreFourteen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFourteen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Foot drop/Shuffles" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFourteen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) L foot clears floor" value="1" />
          </View>            
        </RadioButton.Group>



        <View style={styles.secondTitle}>
          <Text style={styles.title}>Step Symmetry</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreFifteen', newValue)}value={this.state.tinetti.scoreFifteen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFifteen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) R and L step lengths not equal " value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreFifteen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) R and L step length appears equal" value="1" />
          </View>            
        </RadioButton.Group>



        <View style={styles.secondTitle}>
          <Text style={styles.title}>Step Continuity</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreSixteen', newValue)}value={this.state.tinetti.scoreSixteen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSixteen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Stopping/discontinuity between steps" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSixteen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Steps appear continuous" value="1" />
          </View>            
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Path</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreSeventeen', newValue)}value={this.state.tinetti.scoreSeventeen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSeventeen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Marked deviation" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSeventeen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Mild/moderate deviation or uses AD" value="1" />
          </View>   
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreSeventeen==="2" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(2 pts) Straight without AD" value="2" />
          </View>          
        </RadioButton.Group>


        <View style={styles.secondTitle}>
          <Text style={styles.title}>Trunk</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreEighteen', newValue)}value={this.state.tinetti.scoreEighteen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreEighteen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Marked sway or uses AD" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreEighteen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) No sway but flex knees or back or uses arms for stability" value="1" />
          </View>   
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreEighteen==="2" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(2 pts)  No sway, flex, use of arms or AD" value="2" />
          </View>          
        </RadioButton.Group>



        <View style={styles.secondTitle}>
          <Text style={styles.title}>Walk Time</Text>
        </View>
        <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreNineteen', newValue)}value={this.state.tinetti.scoreNineteen}>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreNineteen==="0" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(0 pts) Heels apart" value="0" />
          </View>
          <View>
            <RadioButton.Item style={this.state.tinetti.scoreNineteen==="1" ? styles.checkMarkPicked: styles.checkMark} 
            color="#c2daff" labelStyle={styles.write}
            label="(1 pts) Heels almost touching while walking" value="1" />
          </View>            
        </RadioButton.Group>

        <View style={styles.submit} >
        <Button title="Submit" onPress={this.submit}/>
       </View>
       <View style={styles.clear}>
        <Button title="Clear" onPress={this.clear}/> 
        </View>         
      

   
     </PaperProvider>
     </ScrollView>
     </SafeAreaView>
  );
};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    fontSize: 18,
  },
  checkMark: {
    paddingRight: 2,  
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 2,  
    borderRadius: 5, 
  },

  checkMarkPicked: {   
    paddingRight: 2,
    backgroundColor: "#c2daff", 
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 2,  
    borderRadius: 5, 
  },
  submit: {
    borderWidth: 1,
    borderRadius: 30,
    width: 170,
    marginTop: 10,
    marginLeft: 90,
  },

  clear: {    
    borderRadius: 30,
    width: 65,
    marginTop: 10,
    marginLeft: 145,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  totalScore: {
    fontSize: 18,
    fontWeight: "bold",
  },
  write: {  
    paddingLeft: 0,    
  },
  answer: {
    flex: 0.3,
    justifyContent: "space-between",
    borderWidth: 1,    
    margin: 1,  
    textAlign: "right", 
  },
  

});
