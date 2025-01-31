import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";


export default function ThreeD(){

    // shape mesh
    const Shape = ()=> {

    // used so we can manipulate the shape mesh
    const meshRef = useRef();

    // manipulates shape mesh
    useFrame(() =>{
        if(meshRef.current){
            meshRef.current.rotation.y +=0.01;
            meshRef.current.rotation.x +=0.01;
        }
    })

        return(
            <mesh ref={meshRef}>
                <torusGeometry  />
                <meshLambertMaterial color={'#00FF00'} emissive={'#00FF00'}/>
            </mesh>
        )
    }

    return(
      <Canvas style={{height: '100vh', width:'100vw'}} className="flex justify-center align-center bg-amber-400">
        <OrbitControls enableDamping enableRotate enablePan enableZoom/>
        <directionalLight position={[1,1,1]} intensity={5} color={0xFFFFFF}/>
        <Shape/>
      </Canvas>  
    );
}