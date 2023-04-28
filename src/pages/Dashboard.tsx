import DataTable from '../components/DataTable'
import Background from '../assets/images/bow-and-field.jpg'

const Dashboard = () => {
    
    return (
      <div style={{ backgroundImage: `url(${ Background })`}} className="dboard mx-auto bg-cover bg-fixed">
        <div>
          <DataTable />
        </div>
      </div>
    )
}

export default Dashboard