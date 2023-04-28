import { useForm } from 'react-hook-form';
import { useDispatch, useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '@mui/material'

import Input from './Input';
import { chooseName, chooseRace, chooseClass, chooseAlignment, chooseBackground, chooseLevel, chooseExperience } from '../redux/slices/RootSlice';
import { server_calls } from '../api/server';
import { MenuItem, Select, InputLabel, NativeSelect, TextField } from '../../node_modules/@mui/material/index';

interface InfoFormProps {
    id?: string[]
}

const InfoForm = ( props: InfoFormProps ) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data);
        console.log(`Updated: ${ data.name } ${ props.id }`);
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset();
    } else {
        dispatch(chooseName(data.name));
        dispatch(chooseRace(data.race));
        dispatch(chooseClass(data._class));
        dispatch(chooseAlignment(data.alignment));
        dispatch(chooseBackground(data.background));
        dispatch(chooseLevel(data.level));
        dispatch(chooseExperience(data.experience));

        server_calls.create(store.getState());
        setTimeout(() => {window.location.reload()}, 1000);
    }
  }

  return (
    <div className='h-3/5 pr-5 pl-5 m-5 overflow-y-scroll'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          {/* <label htmlFor="name">Name</label> */}
          <TextField {...register('name', { required: true })} label='Name' variant='standard' name='name'/>
        </div>
        <div className='mb-3'>
          {/* <FormControl fullwidth></FormControl> */}
            <InputLabel htmlFor="race">Race</InputLabel>
            <NativeSelect {...register('race', { required: true })} defaultValue='Dragonborn' inputProps={{name:'race', id:'uncontrolled-native'}}>
              <option value={'Dragonborn'}>Dragonborn</option>
              <option value={'Dwarf'}>Dwarf</option>
              <option value={'Elf'}>Elf</option>
              <option value={'Gnome'}>Gnome</option>
              <option value={'Half-Elf'}>Half-Elf</option>
              <option value={'Halfling'}>Halfling</option>
              <option value={'Half-Orc'}>Half-Orc</option>
              <option value={'Human'}>Human</option>
              <option value={'Tiefling'}>Tiefling</option>
            </NativeSelect>
          {/* </FormControl> */}
        </div>
        <div className='mb-3'>
          <InputLabel htmlFor="_class">Class</InputLabel>
            <NativeSelect {...register('_class', { required: true })} defaultValue='Sorcerer'inputProps={{name:'_class', id:'uncontrolled-native'}}>
              <option value={'Barbarian'}>Barbarian</option>
              <option value={'Bard'}>Bard</option>
              <option value={'Cleric'}>Cleric</option>
              <option value={'Druid'}>Druid</option>
              <option value={'Fighter'}>Fighter</option>
              <option value={'Monk'}>Monk</option>
              <option value={'Paladin'}>Paladin</option>
              <option value={'Ranger'}>Ranger</option>
              <option value={'Rogue'}>Rogue</option>
              <option value={'Sorcerer'}>Sorcerer</option>
              <option value={'Warlock'}>Warlock</option>
              <option value={'Wizard'}>Wizard</option>
            </NativeSelect>
        </div>
        <div className='mb-3'>
          <InputLabel htmlFor="alignment">Alignment</InputLabel>
            <NativeSelect {...register('alignment', { required: true })} defaultValue='Chaotic Neutral' inputProps={{name:'alignment', id:'uncontrolled-native'}}>
              <option value={'Lawful Good'}>Lawful Good</option>
              <option value={'Neutral Good'}>Neutral Good</option>
              <option value={'Chaotic Good'}>Chaotic Good</option>
              <option value={'Lawful Neutral'}>Lawful Neutral</option>
              <option value={'Neutral'}>Neutral</option>
              <option value={'Chaotic Neutral'}>Chaotic Neutral</option>
              <option value={'Lawful Evil'}>Lawful Evil</option>
              <option value={'Neutral Evil'}>Neutral Evil</option>
              <option value={'Chaotic Evil'}>Chaotic Evil</option>
            </NativeSelect>
        </div>
        <div className='mb-3'>
          <InputLabel htmlFor="background">Background</InputLabel>
            <NativeSelect {...register('background', { required: true })} defaultValue='Guild Artisan' inputProps={{name:'background', id:'uncontrolled-native'}}>
              <option value={'Acolyte'}>Acolyte</option>
              <option value={'Charlatan'}>Charlatan</option>
              <option value={'Criminal'}>Criminal</option>
              <option value={'Entertainer'}>Entertainer</option>
              <option value={'Folk Hero'}>Folk Hero</option>
              <option value={'Guild Artisan'}>Guild Artisan</option>
              <option value={'Hermit'}>Hermit</option>
              <option value={'Noble'}>Noble</option>
              <option value={'Outlander'}>Outlander</option>
              <option value={'Sage'}>Sage</option>
              <option value={'Sailor'}>Sailor</option>
              <option value={'Soldier'}>Soldier</option>
              <option value={'Urchin'}>Urchin</option>
              <option value={'Other'}>Other</option>
            </NativeSelect>
        </div>
        <div className='mb-3'>
          {/* <label htmlFor="level">Level</label> */}
          <TextField {...register('level', { required: true })} label='Level' variant='standard' name='level'/>
        </div>
        <div>
          {/* <label htmlFor="experience">Experience</label> */}
          <TextField {...register('experience', { required: true })} label='Experience' variant='standard' name='experience'/>
        </div>
        <div className="flex">
            <button className='flex justify-center w-full m-5 bg-orange-200 p-2 rounded 
             text-black hover:bg-orange-300 hover:text-white'>
                Submit
            </button>
        </div>
      </form>
    </div>
  )
}

export default InfoForm