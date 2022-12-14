import React, { useEffect, useState }  from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen'

import {  BrowserRouter as Router, Routes, Route, useRoutes, useNavigate, Navigate } from 'react-router-dom'

import "./_app.scss"
import { useSelector } from 'react-redux'
import SearchScreen from './screens/SearchScreen'

const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)
    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='app_container'>
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className='app_main '>
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && !accessToken) {
            navigate('/auth')
        }
    }, [accessToken, loading, navigate])

    return (
        <Routes>
            <Route
                path='/'
                exact
                element={
                    <Layout>
                        <HomeScreen />
                    </Layout>
                }
            />
            <Route path='/auth' element={<LoginScreen />} />


            <Route
                path='/search/:query'
                element={
                    <Layout>
                        <SearchScreen />
                    </Layout>
                }
            />

            <Route
                path='/watch/:id'
                element={
                    <Layout>
                        <WatchScreen />
                    </Layout>
                }
            />

            <Route
                path='/feed/subscriptions'
                element={
                    <Layout>
                        <h1>subscriptions result</h1>
                        <SubscriptionsScreen />
                    </Layout>
                }
            />


            {/* <Route path='/feed/subscriptions'>
                <Layout>
                    <h1>subscriptions result</h1>
                    <SubscriptionsScreen />
                </Layout>
            </Route>
            <Route path='/channel/:channelId'>
                <Layout>
                    <h1>channel result</h1>
                    <ChannelScreen />
                </Layout>
            </Route> */}
{/* 
            <Route>
                <Navigate to='/' />
            </Route> */}
        </Routes>
    )

}

export default App