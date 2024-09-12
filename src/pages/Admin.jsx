import AdminPanel from './admin/menu/AdminPanel';
import Results from './admin/newViewrResult/viewResult';
import { useEffect, useState } from 'react';
import '../stylesheet/Admin.css';
import { getTeams } from '../utils/requester';
import { removeKey } from '../utils/helpers';

// Load teams data from API
async function loadTeams(setTeams) {
  let teamsResponse = getTeams();
  teamsResponse.then(res => {
    let data = res['data']['data'];
    data = removeKey(data, '_id');
    data = removeKey(data, '__v');
    setTeams(data);
  });
}

const Admin = () => {
  const [pageMode, setPageMode] = useState(1); // Default to Admin Panel (1 for Panel, 2 for Results View)
  const [teams, setTeams] = useState([]);

  // Define components for Admin Panel and Results View
  const PanelComponent = () => <AdminPanel setPageMode={setPageMode} />;
  const ResultsViewComponent = () => <Results setPageMode={setPageMode} teams={teams} setTeams={setTeams} />;

  // Array to switch between components based on page mode
  const AdminComponents = [null, PanelComponent, ResultsViewComponent];
  const CurrentComponent = AdminComponents[pageMode];

  // Load teams data on component mount
  useEffect(() => {
    loadTeams(setTeams);
  }, []); 

  return (
    <div className="ml-40">
      <br /> <br /> <br /> <br />
      {/* Render the current component based on pageMode */}
      {CurrentComponent && <CurrentComponent />}
    </div>
  );
};

export default Admin;
