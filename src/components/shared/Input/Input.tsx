import {TextField} from '@mui/material';
import {styled} from "@mui/material/styles";


const TextFieldStyled = styled(TextField)(() => ({
    '.MuiInputBase-root': {
        borderRadius: '10px',
    }
}));

export const Input = (props: any) => {
    return <TextFieldStyled {...props}/>
}