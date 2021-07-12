import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'

import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'

import { sectors } from '../data/mainfilters/sectors'


const ButtonTypeD = ( chapters ) => {

    const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const sectorsToColumns = [
    [0, 2],
    [2, 4],
    [4, 6],
    [6, 9]
  ]

  const addListItem = (child) => {

    const sublist = () => {
      const __sublist = child.map((a) => {

        const l = (
        <div className='sectors__subitem'>
          <input type="checkbox"/>
          <div className="sectors__titles"> { a.name } </div>
        </div>
        )
        return l
      })

      return __sublist
    }

    

    if(child) {
      return (
        <div className = "sectors__sublist">
          { 
            sublist()
          }
        </div>
    )}
  }

  const sectorBlock = (name, itemType, child ) => {

    const item = (v) => { 

      return (
      <div className={ 'sectors__' + v }>
          <input type="checkbox"/>
          <div className="sectors__titles"> { name } </div>
      </div>
    )
  }

    if(itemType === 'block') {
    return (
      <div className='sectors__block'>
        { item('mainlevel') }
        { addListItem(child) }
      </div>
    )
    } else if(itemType === 'subitem') {
      item(itemType)
    }
  }

  const scatterSectors = () => {

    const slicedColumns = sectorsToColumns.map((key, i) => {
      const sliced = sectors.list.slice(key[0], key[1])

      return(
        <div className = "sectors__column" id={ i }>
          {
            sliced.map((a) => {
              return(
                sectorBlock(a.name, 'block', a.child)
              )
            }
)
          }
        </div>
      )
    })

    return ( slicedColumns )
  }

  const _button = React.forwardRef(({children, onClick, type}) => {
    return (
      <div class={"mainfilters__input--list " + type} onClick = {onClick} aria-describedby="popover-contained">{ children }</div>
    )
  }) 

  return (
    <div className="filterBox" ref={ref}>
      <Button onClick={handleClick} bsPrefix="mainfilters__input--list" variant="filter" type="filter">Filter sectors and industries</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover style = {{width: '1000px', maxWidth: '1000px', height: '500px'}} id="popover-contained">
          <Popover.Title as="h3">Sectors</Popover.Title>
          <Popover.Content>
            <div className = 'sectors'>

              <div className = 'sectors__columns'>
               { scatterSectors() }
              </div>

              <div className = 'sectors__top'>
                <Button className = 'sectors__buttons mainfilters__input--list sectorselect' type="selectsector" as = { _button }>Select All</Button>
                <Button className = 'sectors__buttons mainfilters__input--list sectorselect' type="selectsector" as = { _button }>Deselect All</Button>
              </div>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );

    

}

export default ButtonTypeD