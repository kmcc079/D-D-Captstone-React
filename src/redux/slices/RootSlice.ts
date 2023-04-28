import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Namee",
        race: "Race",
        _class: "Class",
        alignment: "Alignment",
        background: "Background",
        level: "Level",
        experience: "Experience",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseRace: (state, action) => { state.race = action.payload },
        chooseClass: (state, action) => { state._class = action.payload },
        chooseAlignment: (state, action) => { state.alignment = action.payload },
        chooseBackground: (state, action) => { state.background = action.payload },
        chooseLevel: (state, action) => { state.level = action.payload },
        chooseExperience: (state, action) => { state.experience = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseRace, chooseClass, chooseAlignment, chooseBackground, chooseLevel, chooseExperience } = rootSlice.actions;