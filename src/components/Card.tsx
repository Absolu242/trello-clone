import React, { useRef } from "react"
import { useDrop } from "react-dnd"
import { useAppState } from "../store/AppStateContext"
import { CardContainer } from "../styles"
import { isHidden } from "../utils/isHidden"
import { useItemDrag } from "../utils/useItemDrag"
import { CardDragItem } from "./DragItem"

interface CardProps {
  text: string
  index: number
  id: string
  columnId: string
  isPreview?: boolean
}

const Card = ({ text, id, index, columnId, isPreview }: CardProps) => {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: "CARD", id, index, text, columnId })
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index
      const sourceColumn = item.columnId
      const targetColumn = columnId

      dispatch({
        type: "MOVE_TASK",
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      })
      item.index = hoverIndex
      item.columnId = targetColumn
    },
  })

  drag(drop(ref))

  return (
    <CardContainer
      isHidden={isHidden(isPreview, state.draggedItem, "CARD", id)}
      isPreview={isPreview}
      ref={ref}
    >
      {text}
    </CardContainer>
  )
}

export default Card
