import { useEffect, useState, useCallback } from "react"
import type { CommentType } from "../types/types"

export const useComments = () => {
  const [comments, setComments] = useState<CommentType[]>([
    { id: "1", text: "888888", x: -2, y: 1, z: -10, color: "#ffffff" },
    { id: "2", text: "草", x: 0, y: 0, z: -12, color: "#d31313" },
    { id: "3", text: "すごい", x: 2, y: -1, z: -14, color: "#bbe923" },
    { id: "4", text: "サイコー！", x: 5, y: 12, z: 5, color: "#1491b7" }
  ])

  const addComment = useCallback((text: string, selectColor: string) => {
    setComments((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text,
        x: Math.random() * 4 - 2,
        y: Math.random() * 2 - 1,
        z: -10,
        color: selectColor,
      }
    ])
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      comments.map((item)=> {
        addComment(item.text, item.color);
      })

    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return { comments, addComment }
}