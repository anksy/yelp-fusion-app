import React from 'react';
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import BusinessRow from "./result";
import SearchForm from "./form";

import { searchBusiness } from "../../store/actions/application";
import yelp from "../../assets/imgs/yelp.png";

import "./search.css";

class Search extends React.Component{
    
    render(){
        let {businesses, loading} = this.props;

        return(
            <>
                <Grid className='heading'><img src={yelp} alt="Fusion"/></Grid>
                <SearchForm loading={loading} searchBusiness={this.props.searchBusiness}/>
                <Grid spacing ={2} container  direction="row"  justify="space-between"  alignItems="center" >
                    <Grid item xs={12}>
                        {businesses.map((business, i) => <BusinessRow key={i} business={business} />)}
                    </Grid>
                </Grid>
            </>
        );
    }
}

const mapStateToProps = state => {
    return({
        businesses: state.application.businesses,
        loading: state.application.loading
    });
}

const mapDispatchToProps = { searchBusiness };

export default connect(mapStateToProps, mapDispatchToProps)(Search);