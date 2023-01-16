import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const materialMatcap = new THREE.MeshMatcapMaterial()

export default function Experience() {

    // const [torusGeometry, setTorusGeometry] = useState()
    // const [materialMatcap, setMaterialMatcap] = useState()

    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    useEffect(() => {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true

        materialMatcap.matcap = matcapTexture
        materialMatcap.needsUpdate = true
    }, [])

    useFrame( (state, delta)=> {

        for(const donut  of donuts.current)
        {
            donut.rotation.y += delta * 0.2
        }

    })

    const donuts = useRef([])

    // const donutsGroup = useRef()

    const tempArray = [...Array(100)]
    console.log(tempArray)
    tempArray.map(() => {
        console.log('value')
    })

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <torusGeometry
            ref={setTorusGeometry}
            args={[
                1, 0.6, 16, 32
            ]}
        ></torusGeometry>
        <meshMatcapMaterial ref={setMaterialMatcap} matcap={matcapTexture} /> */}


        {/* <mesh scale={1.5}>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}

        <Center>
            <Text3D
                font='./fonts/helvetiker_regular.typeface.json'
                size={0.75}
                heigh={0.2}
                curveSegments={12}
                bevelEnabled={true}
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
                material={materialMatcap}
            >
                Hello Mario

            </Text3D>
        </Center>


        {/* <group ref={donutsGroup}> */}
            {[...Array(100)].map((value, index) =>
                <mesh
                ref={ (element) =>  {
                    donuts.current[index] = element
                }}
                    geometry={torusGeometry}
                    material={materialMatcap}
                    position={[
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10
                    ]}

                    scale={0.2 + (Math.random() * 0.2)}

                    rotation={[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0
                    ]}
                >
                </mesh>
            )}
        {/* </group> */}

    </>
}