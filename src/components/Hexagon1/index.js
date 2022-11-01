import React, { useEffect, useState , useRef}from 'react'
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import "./hexagon1.css"

const Hexagon1 = (props) => {
    const hexagonSize = { x: 20, y: 20 };
    
    const scrollTo = (event, location) =>{
      // console.log(event);
      // console.log(location);
      props.scrollPosition(location);
    }
    
    return (
    <>
        <HexGrid className="hexGrid" width={520} height={210} viewBox="-25 -40 100 65">
          {/* Main grid with bit hexagons, all manual */}
          <Layout className="hexLayout" size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon onClick={event => scrollTo(event, "empphase1")} q={-1} r={0} s={1} className="hexagons1-emphatize">
                <Text>Emphatize</Text>
            </Hexagon>
            <Hexagon  onClick={event => scrollTo(event, "empphase1")} q={0} r={-1} s={1} className="hexagons1">
                <Text style={{cursor: 'pointer'}} x={-3} y={10} >Context Analysis</Text>
            </Hexagon>
            {/* <Hexagon q={-1} r={1} s={0} className="hexagons">
              <Text>-1, 1, 0, Theorize</Text>
            </Hexagon> */}
            <Hexagon onClick={event => scrollTo(event, "defphase1")} q={0} r={0} s={0} className="hexagons1-define"> 
                <Text>Define</Text>
            </Hexagon>
            <Hexagon onClick={event => scrollTo(event, "defphase1")}  q={1} r={0} s={-1} className="hexagons1">
                <Text style={{cursor: 'pointer'}} x={-8} y={-8} >Challenge</Text>
            </Hexagon>
            <Hexagon onClick={event => scrollTo(event, "ideaphase1")} q={1} r={-1} s={0} className="hexagons1-ideate">
              <Text>Ideate</Text>
            </Hexagon>
            <Hexagon onClick={event => scrollTo(event, "ideaphase1")}  q={2} r={-2} s={0} className="hexagons1">
                <Text style={{cursor: 'pointer'}} x={-3} y={10} >Product Concept</Text>
            </Hexagon>
            {/* <Hexagon q={2} r={-1} s={-1} className="hexagons">
              <Text>2, -1, -1, Prototype</Text>
            </Hexagon>
            <Hexagon q={3} r={-1} s={-2} className="hexagons">
              <Text>-1, 1, 0, Test</Text>
            </Hexagon> */}
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