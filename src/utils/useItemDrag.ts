import { useEffect } from "react"
import { useDrag } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"
import { DragItem } from "../components/DragItem"
import { useAppState } from "../store/AppStateContext"

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()

  const [, drag, preview] = useDrag(() => ({
    type: item.type,
    item: item,
  }))

  // dispatch({
  //   type: "SET_DRAGGED_ITEM",
  //   payload: item,
  // })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return { drag }
}
