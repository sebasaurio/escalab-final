import React,{useState} from 'react'
import {useForm, Controller} from 'react-hook-form'

import {TextField, Switch, Button, FormHelperText} from '@material-ui/core'
import {KeyboardDatePicker  } from "@material-ui/pickers";
import {MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import '../assets/styles/remindMe.css'

const RemindMe = () => {

    const {handleSubmit, control, reset} = useForm()
    const onSubmit = data => console.log(data)

    const [dateNow, setDateNow] = useState(new Date())

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className='form-container'>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-remind'>

                        <Controller
                            name='Name'
                            control={control}
                            rules={{ required: true, maxLength: 50 }}
                            defaultValue=''
                            render={({field}) => <TextField label='Name' type='name' {...field}/>}
                        />

                        <Controller
                            name='Email'
                            control={control}
                            rules={{ required: true }}
                            defaultValue=''
                            render={({field}) => <TextField label='Email' type='email' {...field}/>}
                        />
                        

                        <Controller
                            name='ReminderDate'
                            as={KeyboardDatePicker}
                            control={control}
                            rules={{ required: true }}
                            defaultValue={dateNow}
                            render={({ field: { name, value }}) => 
                                <KeyboardDatePicker
                                    name={name}
                                    label='Reminder date'
                                    inputformat='MM/dd/yyyy'
                                    format='MM/dd/yyyy'
                                    value={value}
                                    onChange={(date) => setDateNow(date)}
                                    minDate={new Date()}

                                />}
                        />

                        <Controller
                            name='SendImages'
                            control={control}
                            defaultValue='no'
                            rules={{ required: true }}
                            render={({field}) => (
                                    <>
                                        <Switch onChange={(e) => field.onChange(e.target.checked)} color="primary" label='Send images?' inputProps={{ 'no': 'yes' }} {...field}/>
                                        <FormHelperText>Send images?</FormHelperText>
                                    </>
                                )
                            }
                        />

                        <div className='reminder-actions'>
                            <Button type='reset' variant='outlined' onClick={() => reset({  }) } >Clear</Button>
                            <Button type='submit' variant='contained' color="primary">Send reminder!</Button>
                        </div>
                    </form>
                </div>
            </MuiPickersUtilsProvider>
    )
}

export default RemindMe
