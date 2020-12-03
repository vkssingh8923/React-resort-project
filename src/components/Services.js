import React, { Component } from 'react'
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon:"a",
                title:"free cocktail",
                info:"the man in blacj hat is veru very dabnngerpous brbelieve me otir or not is yout uoyouyour choice"
            },
            {
                icon:"b",
                title:"Endeless shuttle ",
                info:"the man in blacj hat is veru very dabnngerpous brbelieve me otir"
            },
            {
                icon:"c",
                title:"hikling hinking",
                info:"the man in blacj hat is veru very dabnngerpous brbelieve me otir or not is yout uoyouyour right vhchoice you make choice"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (<article key={index} className="service">
                            <span>{item.icon}{index}</span>
                            <h5>{item.title}</h5>
                            <p>{item.info}</p>
                        </article>) 
    })}
                </div>
            </section>
        )
    }
}
