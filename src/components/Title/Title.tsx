import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
}
function Title(props: TitleProps) {
  console.log(props.address);
  
  return (
    <h1 className={styles.title}>To do list typescript</h1>
  )
}

function equal (prevProps: TitleProps, nextProps: TitleProps) {
  return prevProps.address.street === nextProps.address.street
}

export default React.memo(Title, equal)