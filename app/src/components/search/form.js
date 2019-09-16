import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Search extends React.PureComponent{

    constructor(props){
        super(props);

        this.state = {
            term: "Ice Cream",
            location: "Alpharetta",
            message: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(fld, value){
        this.setState({ [fld]: value });
    }

    onSubmit(){
        let {term, location} = this.state;
        if(term==='' || location==='') {
            this.setState({message: "All fields are required."});
        }else{
            this.setState({message: ""}, () => {
                this.props.searchBusiness({term, location, limit:5});   
            });
        }
    }

    render(){
        let {term, location, message}=  this.state;

        return(<>

            <Grid spacing ={2} container  direction="row"  justify="center"  alignItems="center" >
                
                <Grid  item >
                    <TextField
                        id="term"
                        label="Term"
                        value={term}
                        onChange={(e) => this.onChange('term', e.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>

                <Grid item >
                    <TextField
                        id="location"
                        label="Location"
                        value={location}
                        onChange={(e) => this.onChange('location', e.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>


                <Grid item className='form-btn'>
                    <Button variant="contained" size="large" color="secondary" onClick={this.onSubmit}>
                        Search
                    </Button>
                </Grid>

                
            </Grid>

            <Grid container direction="row"  justify="center"  alignItems="center" >
                {this.props.loading && <p>Hold on! We're loading the results....</p>}
                {message && <p className='error'>{message}</p>}
            </Grid> 
        </>
        );
    }
}