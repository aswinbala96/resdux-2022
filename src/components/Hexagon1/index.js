import React from 'react'
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import "./hexagon1.css"

const Hexagon1 = () => {
    const hexagonSize = { x: 10, y: 10 };
    const hexagons = GridGenerator.parallelogram(-2, 3, -2, 1);
    const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);
    return (
    <>
        <h2>React Hexgrid v1</h2>
        <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
        <HexGrid width={400} height={400} viewBox="-30 -30 110 110">
          {/* Main grid with bit hexagons, all manual */}
          <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={-1} r={0} s={1}>
                <Text>-1,0,1, Emphatize</Text>
            </Hexagon>
            <Hexagon q={-1} r={1} s={0}>
              <Text>-1, 1, 0, Theorize</Text>
            </Hexagon>
            <Hexagon q={0} r={0} s={0}> 
                <Text>0,0,0, Define</Text>
            </Hexagon>
            <Hexagon q={1} r={-1} s={0}>
              <Text>1, -1, 0, Ideate</Text>
            </Hexagon>
            <Hexagon q={2} r={-1} s={-1}>
              <Text>2, -1, -1, Prototype</Text>
            </Hexagon>
            <Hexagon q={3} r={-1} s={-2}>
              <Text>-1, 1, 0, Test</Text>
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

export default Hexagon1