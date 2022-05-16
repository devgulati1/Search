import { Card, CardContent, CardHeader, Container, TextField, Typography } from '@mui/material';

export const SearchBar=({searchFiledHandler})=>{
    
return (
    <Container>
        <TextField
        color='primary'
        type="search"
        placeholder="Search Here  "
        onChange={searchFiledHandler}
        />
    </Container>
)
}