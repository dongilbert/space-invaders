
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

class Enemy extends Component {
    render() {
        return (
            <circle cx={this.props.x}
                    cy={this.props.y}
                    style={{fillOpacity: 0.4}}
                    r="5"
            />
        );
    }
};

export default class Enemies extends Component {
    render() {
        return (
            <g>
                {this.props.enemies.map((enemy) => {
                    return (<Enemy {...enemy} key={enemy.id} />);
                })}
            </g>
        );
    }
}