import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Svg, Path, G, Circle } from 'react-native-svg';

class RadialProgress extends Component {
    
    calcDashArray(radius) {
        return String(2 * 3.14 * radius)
    };

    calcFillArray(radius, value) {
        return String(this.calcDashArray(radius) * (1 - (value / 100)))
    }

    render () {
        console.log(this.props);
        console.log(this.calcDashArray(this.props.radius));
        console.log(this.calcFillArray(this.props.radius, this.props.value));

        const {
            radius, value, color, stroke
        } = this.props

        return (
            // <View style={styles.percentBall}>
            //     <Text style={styles.itemPercent}>{this.props.value}%</Text>
            // </View>
            <View style={styles.percentBall}>
                <Svg width={(radius + stroke) * 2} height={(radius + stroke) * 2}>
                    <Circle 
                        cx={radius+stroke}
                        cy={radius+stroke}
                        r={radius}
                        fill="none"
                        stroke={color}
                        opacity={0.2}
                        strokeWidth={stroke} />
                    
                    <Circle 
                        strokeLinecap="round"
                        cx={radius+stroke} 
                        cy={radius+stroke} 
                        r={radius} 
                        fill="none" 
                        stroke={color} 
                        strokeWidth={stroke}
                        strokeDasharray={this.calcDashArray(radius)} 
                        strokeDashoffset={this.calcFillArray(radius, value)} />
                </Svg>

                <View style={{...styles.centerInside, width: (radius+stroke)*2, height: (radius+stroke)*2}}>

                    <Text style={styles.itemPercent}>{this.props.value}%</Text>

                </View>

            </View>
        )
    }
}

var styles = StyleSheet.create({
    // Size
    // Color
    // BackgroundColor
    // Value

    centerInside: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemPercent: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    },
})

export default RadialProgress