import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store';
import { getCurrentUser } from '../actions/current-user';
import { LOGIN_CLEAR } from '../constants/auth';
const DefaultLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {error} = useAppSelector(state => state.currentUser);
  useEffect(() => {
    dispatch(getCurrentUser())
  }, []);

  useEffect(() => {
    if(error) {
      navigate('/');
    }
  },[error]);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
