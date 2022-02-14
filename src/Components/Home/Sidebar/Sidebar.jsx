import React, { useContext, useState } from 'react';
import { styled} from '@mui/material/styles'
import { useNavigate } from 'react-router';
import { productContext } from '../../../Contexts/ProductsContext';
import { Box, FormControl, FormLabel, Grid, Paper, RadioGroup, Slider, Radio, FormControlLabel } from '@mui/material';
import { Button} from 'react-bootstrap'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Sidebar = () => {
    const search = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const { getProducts} = useContext(productContext)
    const [type, setType] = useState(search.get('type') || '')
    const [price, setPrice] = useState(search.get('price_lte') || '')
    
    const filterProducts = (key, value) => {
        search.set(key, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '' )
        setPrice(search.get('price_lte' || ''))
        getProducts()
    }

    const handleChangeType = (e, value) => {
        search.set(e, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        getProducts()
    }

    const resetFilter = () => {
        navigate('/')
        setType('')
        setPrice('')
        getProducts()
    }

    return (
        <Box 
        sx={{flexGrow: 1}}
        style={{marginLeft: '20px'}}
        >
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <Paper elevation={2}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>Тип:</FormLabel>
                            <RadioGroup 
                            aria-label='gender'
                            name='gender1'
                            value={type}
                            onChange={(e) => handleChangeType('type', e.target.value)} 
                            >
                                <FormControlLabel
                                    value='Купе'
                                    control={<Radio/>}
                                    label='Купе'
                                />
                                <FormControlLabel
                                   value='Седан'
                                   control={<Radio/>}
                                   label='Седан'
                                />
                                <FormControlLabel
                                   value='Универсал'
                                   control={<Radio/>}
                                   label='Универсал'
                                />
                                <FormControlLabel
                                   value='Хэтчбек'
                                   control={<Radio/>}
                                   label='Хэтчбек'
                                />
                                <FormControlLabel
                                   value='Кроссовер'
                                   control={<Radio/>}
                                   label='Кроссовер'
                                />
                            </RadioGroup>
                        </FormControl>

                        <Grid>
                            <Slider
                                onChange={(e) => filterProducts('price_lte', e.target.value)}
                                valueLabelDisplay='auto'
                                max={120000}
                                step={5000}
                            />
                        </Grid>
                        <Button
                        onClick={resetFilter}
                        variant='outline-dark'
                        // color='secondary'
                        >
                            Сбросить
                        </Button>
                    </Paper>
                </Grid>
        
            </Grid>
         
        </Box>
         
    );
};

export default Sidebar;