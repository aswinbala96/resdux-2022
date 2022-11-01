import React from 'react'
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import "./hexagon4.css"

const Hexagon4 = () => {
    const hexagonSize = { x: 20, y: 20 };
    return (
    <>
        <HexGrid className="hexGrid" width={900} height={290} viewBox="-10 -40 100 85">
          {/* Main grid with bit hexagons, all manual */}
          <Layout className="hexLayout" size={hexagonSize} flat={true} spacing={1.1} origin={{ x: -37, y: 0 }}>
            <Hexagon q={-1} r={0} s={1} className="hexagons4-emphatize">
                <Text>Emphatize</Text>
            </Hexagon>
            {/* <Hexagon q={-1} r={1} s={0} className="hexagons">
              <Text>-1, 1, 0, Theorize</Text>
            </Hexagon> */}
            <Hexagon q={0} r={0} s={0} className="hexagons4-define"> 
                <Text>Define</Text>
            </Hexagon>
            
            <Hexagon q={1} r={-1} s={0} className="hexagons4-ideate">
              <Text>Ideate</Text>
            </Hexagon>
            
            <Hexagon q={2} r={-1} s={-1} className="hexagons4-prototype">
              <Text>Prototype</Text>
            </Hexagon>
            
            <Hexagon q={3} r={-1} s={-2} className="hexagons4-test">
              <Text>Test</Text>
            </Hexagon>
            
            
            {/* Using pattern (defined below) to fill the hexagon */}
            {/* <Hexagon q={0} r={-1} s={1} fill="pat-1">
                <Text>0,-1,1</Text>
            </Hexagon> */}
            {/* <Hexagon q={0} r={1} s={-1}>
                <Text>0,1,-1</Text>
            </Hexagon> */}
            {/* <Hexagon q={1} r={0} s={-1}>
              <Text>1, 0, -1</Text>
            </Hexagon> */}
            {/* Pattern and text */}
            {/* <Hexagon q={-1} r={1} s={0} fill="pat-2">
              <Text>-1, 1, 0</Text>
            </Hexagon> */}

            {/* <Hexagon q={-2} r={0} s={1} /> */}
          </Layout>
          {/* Additional small grid, hexagons generated with generator */}
          {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
          {/* <Pattern id="pat-1" link="http://lorempixel.com/400/400/cats/1/" size={hexagonSize} />
          <Pattern id="pat-2" link="http://lorempixel.com/400/400/cats/2/" size={hexagonSize} /> */}
        </HexGrid>
    </>

  )
}

export default Hexagon4