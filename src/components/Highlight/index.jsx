import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

function Highlight(props) {
    return (
       <>
        <Grid container spacing={3}>
            <Grid item sm={4} xs= {12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant= "body2">
                            Số ca mắc
                        </Typography>
                        <Typography component="p" variant= "body2">
                            3000
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs= {12}>
            <Card>
                    <CardContent>
                        <Typography component="p" variant= "body2">
                            Số ca khỏi
                        </Typography>
                        <Typography component="p" variant= "body2">
                            3000
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs= {12}>
            <Card>
                    <CardContent>
                        <Typography component="p" variant= "body2">
                            Số ca tử vong
                        </Typography>
                        <Typography component="p" variant= "body2">
                            3000
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
       </>
    );
}

export default Highlight;