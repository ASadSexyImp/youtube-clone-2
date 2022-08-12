import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import {
    getPopularVideos,
    getVideosByCategory,
} from '../../redux/actions/videos.action'

const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(
        state => state.homeVideos
    )
  return (
    <div>
        <Container>
            <CategoriesBar/>
            <Row>
                {videos.map((video)=>(
                    <Col lg={3} md={4}>
                        <Video video={video} key={video.id}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default HomeScreen