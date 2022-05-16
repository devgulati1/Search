import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Container, Typography } from '@mui/material';

export const CardList=({filterUsers:users})=>{
    return (
      <Container>
          <Grid container spacing={3}>
          {users.map((user)=>{
            return (
                
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardHeader 
                            title={user.title}
                            
                           
                            />
                            <CardContent>
                                <Typography >{user.body}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
               
            )
           
          })}
           </Grid>
      </Container>
           
      
    )
}