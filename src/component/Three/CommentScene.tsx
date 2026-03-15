import type { FC } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import type { CommentType } from "../../types/types";

const CommentScene: FC<CommentType> = ({ text, x, y, z, color }) => {
  const ref = useRef<any>(null);

  const position = useMemo(() => [x, y, z], [x, y, z]);

  useFrame((_, delta) => {
    ref.current.position.z += delta * 2;

    if (ref.current.position.z > 5) {
      ref.current.position.z = -10;
    }
  });

  return (
    <Text
      ref={ref}
      position={position as [x: number, y: number, z: number]}
      fontSize={0.5}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

export default CommentScene;
