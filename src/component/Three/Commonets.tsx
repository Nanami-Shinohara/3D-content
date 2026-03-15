import type { FC } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { CommentType } from "../../types/types";

const Comments: FC<CommentType> = ({ text, x, y, z, color }) => {
  const ref = useRef<any>(null);

  useFrame((_, delta) => {
    ref.current.position.z += delta * 2;

    if (ref.current.position.z > 5) {
      ref.current.position.z = -10;
    }
  });

  return (
    <Text
      ref={ref}
      position={[x, y, z]}
      fontSize={0.5}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

export default Comments;
