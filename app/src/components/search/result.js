import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Row = ({business}) => {
    return(
        <Card className="m-bot card">
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {business.name}
                <span className='location'>{`${business.location.address || ""} ${business.location.city || ""}`}</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {business.review}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="i">
                Reviewed By: {business.reviewedBy}
            </Typography>
            </CardContent>
        </Card>
    );
}

export default Row;