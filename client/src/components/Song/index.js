import React, { Component, useState } from 'react';
import { Col, Row, Container } from '../Grid';
import {Card} from "react-bootstrap";
import ReactAudioPlayer from 'react-audio-player';
import API from "../../utils/API";
import "./style.css";

function Song(props) {

    
    var jamLike = function(){
        API.updateSong(props.id).then((res) => {
            window.location.reload(false)
        })
      };


    let link = "/user/" + props.id;

    return (
        <Row>
            <Col size="md-12">
            <div className="background-card card-border">
                <Card.Body>
                    <ReactAudioPlayer
                    src={props.audio}
                    controls
                    />                   
                    <Card.Title><p>{props.title}</p></Card.Title>
                    <Card.Text>
                        <p>Creator: <a href={link}>{props.creator}</a></p>
                    </Card.Text>
                    <Card.Text>
                        <p>Instrument: {props.instrument}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Genre: {props.genre}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Description: {props.description}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Jammed to: {props.likes.length}</p>
                    </Card.Text>
                    <button className="button-color" id={props.id} onClick={jamLike}>Jam to this!</button>
                </Card.Body>
            </div>
            </Col>
        </Row>
    )
};

export default Song;