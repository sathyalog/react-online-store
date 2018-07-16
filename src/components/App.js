import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import Header from './Header';
import Inventory from './Inventory';
import Navbar from './Navbar';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import Item from './Item';
import sampleData from "../sample-data";

class App extends React.Component {
    state = {
        items: {},
        order: {},
        icon: true
    }
    addItem = (Item) => {
        //1. take a copy of existing state
        const items = { ...this.state.items };
        //2. add our new items to the items variable
        items[`item${Date.now()}`] = Item;
        //3. set the new items to the state
        this.setState({
            items: items
        })
    }

    loadSampleItems = () => {
        this.setState({ items: sampleData });
    };

    handleChange = () => {
        this.setState(state => ({ icon:!this.state.icon }));
    };

    render() {
        const theme = createMuiTheme({
            palette: {
                primary: blue,
                secondary: pink,
            },

        });
    return (
        <MuiThemeProvider theme={theme}>
            <Navbar />
            <Paper style={{ padding: '20px' }} elevation={1}>
                <Header tagline="Fresh Groceries" />
                <ExpansionPanel>
                    <ExpansionPanelSummary onClick={this.handleChange}>
                        <Typography style={{ fontSize: '15px' }}>Add Item
                        <i className="material-icons" style={{ verticalAlign: "middle" }}>
                            {this.state.icon?  "add" : "remove"} 
                        </i>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Inventory addItem={this.addItem} 
                        loadSampleItems={this.loadSampleItems}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <GridList style={{flexWrap: 'wrap',transform: 'translateZ(0)'}} cols={2.5}>
                   {Object.keys(this.state.items).map(key => 
                   <Item key={key} details={this.state.items[key]}/>)}
                </GridList>
            </Paper>
        </MuiThemeProvider>
    )
    }
}

export default App;