import type { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import ColorPalette from "../Common/ColorPallette";
import Button from "../Common/Button";
import CommentScene from "./CommentScene";
import { useComments } from "../../hooks/useComments";

const ThreeComment: FC = () => {
  const [input, setInput] = useState<string>("");
  const [selectColor, setSelectColor] = useState<string>("#ffffff");

  const { comments, addComment } = useComments();

  return (
    <div style={{ height: "100%", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {comments.map((c) => (
          <CommentScene key={c.id} {...c} />
        ))}
      </Canvas>

      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ColorPalette
          selectColor={selectColor}
          setSelectColor={setSelectColor}
        />
        <input
          style={{ width: "250px", height: "33px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="コメント入力"
        />
        <Button
          onClick={() => addComment(input, selectColor)}
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "60px",
            height: "35px",
            marginLeft: "10px",
          }}
          text={"送信"}
        />
      </div>
    </div>
  );
};

export default ThreeComment;
