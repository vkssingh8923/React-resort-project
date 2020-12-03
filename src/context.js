import React, { Component } from 'react'
import Items from './data'
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
    };

    componentDidMount(){
        let rooms =this.formatData(Items)
        console.log(rooms);
        let featuredRooms = rooms.filter(room=>room.featured === true);
        this.setState(
            {
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false
            }
        )
    }
    formatData(items){
        let tempItems=items.map(item=>{
            let id= item.sys.id 
            let images= item.fields.images.map(image=>image.fields.file.url)
            let rooms={...item.fields,images,id} 
                        
            return rooms
        })

        return tempItems
    }
    
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer =RoomContext.Consumer;

export {RoomProvider , RoomConsumer ,RoomContext}
