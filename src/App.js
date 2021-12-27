import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import BackToTop from './component/BackTop/BackToTop';
import About from './Pages/Abouts/About';
import Blog from './Pages/Blog/Blog';
import Course from './Pages/Course/Course';
import DetailCourse from './Pages/DetailsPages/DetailCourse';
import Events from './Pages/Events/Events';
import Home from './Pages/Home/Home';
import PageLoading from './component/PageLoading/PageLoading';
import PageNotLoading from './component/PageNotLoading/PageNotLoading';
import SearchPage from './Pages/SearchPage/SearchPage';
import { getCredentailFromLocal } from './Redux/action/UserAction';
import Login from './Pages/Login/Login';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import UserTemplate from './Templates/UserTemplate/UserTemplate';
import CategoryCourses from './Pages/CategoryCourses/CategoryCourses';
import InfoPage from './Pages/InfoPage/InfoPage';
function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCredentailFromLocal)
  }, [])
  return (  
    <BrowserRouter>     
    <PageLoading />
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
        <HomeTemplate path="/trangchu" exact component={Home} />
        <HomeTemplate path="/khoahoc" exact component={Course} />
        <HomeTemplate path="/blog" exact component={Blog} />
        <HomeTemplate path="/sukien" exact component={Events} />
        <HomeTemplate path="/thongtin" exact component={About} />
        <HomeTemplate path="/danhmuckhoahoc/:maDanhMuc" exact component={CategoryCourses} />
        <HomeTemplate path="/timkiem/:tuKhoa" exact component={SearchPage} />
        <HomeTemplate path="/chitiet/:maKhoaHoc" exact component={DetailCourse} />
        <HomeTemplate path="/thongtincanhan" exact component={InfoPage} />
        <UserTemplate path="/login" exact component={Login} />
        <UserTemplate exact component={PageNotLoading} />
      </Switch> 
      {/* <BackToTop /> */}
    </BrowserRouter>
  );
}

export default App;
