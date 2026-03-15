import type { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import type { CommentType } from "../types/types";
import Comments from "../component/Comments/Commonets";
import ColorPalette from "../component/Common/ColorPallette";
import Button from "../component/Common/Button";

const ThreeComment: FC = () => {
  const [comments, setComments] = useState<CommentType[]>([
    { id: "1", text: "888888", x: -2, y: 1, z: -10, color: "#ffffff" },
    { id: "2", text: "草", x: 0, y: 0, z: -12, color: "#d31313" },
    { id: "3", text: "すごい", x: 2, y: -1, z: -14, color: "#bbe923" },
  ]);

  const [input, setInput] = useState<string>("");
  const [selectColor, setSelectColor] = useState<string>("#ffffff");

  const addComment = () => {
    if (!input) return;
    setComments((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: input,
        x: Math.random() * 4 - 2,
        y: Math.random() * 2 - 1,
        z: -10,
        color: selectColor,
      },
    ]);

    setInput("");
  };

  return (
    <div style={{ height: "100%", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {comments.map((c) => (
          <Comments key={c.id} {...c} />
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
          style={{width: "250px", height: "33px"}}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="コメント入力"
        />
        <Button
          onClick={() => addComment()}
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
