import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Modal from "./Modal";
import { server_calls } from "../api/server";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
    { field: 'name', headerName: "Name", flex: 1 },
    { field: 'race', headerName: "Race", flex: 1 },
    { field: '_class', headerName: "Class", flex: 1 },
    { field: 'alignment', headerName: "Alignment", flex: 1 },
    { field: 'background', headerName: "Background", flex: 1 },
    { field: 'level', headerName: "Level", flex: 1 },
    { field: 'experience', headerName: "Experience", flex: 1 },
]

const DataTable = () => {
  const [open, setOpen ] = useState(false);
  const {characterData, getData } = useGetData();
  const [ rowSelectionModel, setRowSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }  

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(rowSelectionModel[0]);
    getData();
    console.log(`Row Selection Model: ${rowSelectionModel}`);
    setTimeout( () => { window.location.reload() }, 1000);
  }

  return (
    <>
        {/* Modal */}
        <Modal 
            id={rowSelectionModel}
            open={open}
            onClose={handleClose}
        />

        <div className="flex flex-row justify-center pt-5">
            <div className="head m-3 mt-5 flex justify-start align-items-center text-center text-lg">
                <h3>Manage your characters:</h3>
            </div>
            <div className="flex">
                <div>
                    <button
                      className="dtable p-3 m-3 rounded"
                      onClick={handleOpen}>
                        Create
                    </button>
                </div>
                    <button
                      className="dtable p-3 m-3 rounded"
                      onClick={handleOpen}>
                        Update
                    </button>
                    <button
                      className="dtable p-3 m-3 rounded"
                      onClick={deleteData}>
                        Delete
                    </button>
            </div>
        </div>

        <div 
          className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"} 
          style={{ height: 400, width: '75%', margin: "auto"}}>
            <h2 className="p-3 my-1 rounded">My Characters :</h2>
              <DataGrid rows={characterData} columns={columns} initialState={{pagination:{paginationModel:{pageSize:5}}}}
                checkboxSelection={true} onRowSelectionModelChange={ (item:any) => {setRowSelectionModel(item)} } 
                sx={{ '& .MuiCheckbox-root.Mui-checked': {color: 'rgb(180, 161, 142)',} }}/>
        </div>
    </>
  )
}

export default DataTable