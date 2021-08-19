import React from 'react'
import { ColumnContainer, ColumnTitle } from '../styles'

interface ColumnProps{
   text:string
}

export default function Column({text,children}:React.PropsWithChildren<ColumnProps>) {
   return (
      <ColumnContainer>
         <ColumnTitle>{text}</ColumnTitle>
         {children}
      </ColumnContainer>
   )
}
