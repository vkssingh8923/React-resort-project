import React, { Component } from 'react'
import {RoomContext} from '../context'

import Loading from '../components/loading'
import Room from './Room'
import Title from './Title'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let {loading,featuredRooms:rooms} =this.context
        console.log(rooms);
        rooms=rooms.map(room=>{
            return <Room key={rooms.id} room={room}/>
        })

        return (
            // <div>
            //     from featured rom
            //     <Room></Room>
            //     <Title/>
            //     <Loading></Loading>
            // </div>
            <section className="featured-rooms">
                <Title title="featured-rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
                </div>
            </section>
        )
    }
}
