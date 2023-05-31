import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";
import React from 'react';
import { View } from "react-native";

export const LineGraph = () => {
    return (
        <View>
            <VictoryChart theme={VictoryTheme.material}
                padding={{ top: 10, bottom: 60, right: 60, left: 30 }}>
                <VictoryLine
                    style={{
                        data: { stroke: "#39B54A" },
                        // parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryChart>
        </View>
    );
}