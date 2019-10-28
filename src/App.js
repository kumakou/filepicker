import React from 'react';
import './App.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Paper from '@material-ui/core/paper';


function App() {

  const ExStyle = {
    margin: "auto",
    width: "98%",
  }
  const ExSumStyle = {
    background: '#4a13c5',
    color: "white",
    display: "block",
  }

  const ExPaneDel = {
    background: '#FFFFFF',
    border: "3px solid #4a13c5"
  }

  const file = (name) => {
    return (
      <a href="#">
        <Paper><p>{name}</p></Paper>
      </a>
    );
  }

  /*const dragOverHandler = (ev) => {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }*/

  const drag_and_drop = (
    <div onDrop={file("新しいファイル")} //onDragOver={dragOverHandler}
      style={{
        width: "98%",
        height: "100px",
        marginTop: "5px",
        borderStyle: "dashed",
        opacity: "0.4",
      }}>
      <p
        style={{
          color: "#000000",
          opacity: "0.5",
          textAlign: "center"
        }}
      >ここにファイルやフォルダーを置いてください</p>
    </div >
  );

  return (
    <div className="App">
      <ExpansionPanel style={ExStyle} >
        <ExpansionPanelSummary style={ExSumStyle}>
          <p>フォルダー</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={ExPaneDel}>
          <div style={{ width: "98%", margin: "auto" }}>
            <ExpansionPanel style={ExStyle} >
              <ExpansionPanelSummary style={ExSumStyle}>
                <p>フォルダー</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={ExPaneDel}>
                <div style={{ width: "98%", margin: "auto" }}>
                  <ExpansionPanel style={ExStyle} >
                    <ExpansionPanelSummary style={ExSumStyle}>
                      <p>フォルダー</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={ExPaneDel}>
                      <div style={{ width: "98%", margin: "auto", textAlign: "center" }}>
                        {file("ファイル１")}
                        {file("ファイル２")}
                        {drag_and_drop}
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <div style={{ width: "98%", margin: "auto", textAlign: "center" }}>
                    {drag_and_drop}
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <div style={{ width: "98%", margin: "auto", textAlign: "center" }}>
              {drag_and_drop}
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default App;
