import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import ButtonGroup from 'react-bootstrap/ButtonGroup'


const ButtonTypeB = ( chapters ) => {

    const _chapters = chapters.chapters

    const [label, setLabel] = useState(_chapters[0].name)

    const RecursiveMenu = (items) => {
        
        return (
            items.map(key => {
                const _name = (key.child) ? <span style={{marginLeft: '20px'}}><input type="checkbox"/>{key.name}</span> : <span><input type="checkbox"/>{key.name}</span>
                
                let _button;

                const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
                    return (
                    <a
                      className="dropdown-item dropdown-toggle"
                      href=""
                      ref={ref}
                      onMouseEnter={(e) => onClick(e)}
                      onClick={(e) => {
                        e.preventDefault();
                        onClick(e);
                      }}
                    >
                      {children}
                    </a>
                  )
                    });

                if(key.list) {
                    _button =
                        <Dropdown
                            as={ButtonGroup}
                            key='right'
                            id={`dropdown-button-drop-right`}
                            drop='right'
                            variant="secondary"
                            title={`Drop right`}
                            style={{width: '100%'}}
                        >
                        <Dropdown.Toggle id="dropdown-basic" as = {CustomToggle}>
                            { _name }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                RecursiveMenu(key.list)
                            }
                        </Dropdown.Menu>
                        </Dropdown>
                } else {
                    _button = (
                        <Dropdown.Item onClick = { (e) => {
                            e.preventDefault()
                        } } href="#/action-1">{_name}</Dropdown.Item>
                    )
                }

                return _button

            })
        )
    }

    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" bsPrefix="mainfilters__input--list">
            {label}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            { RecursiveMenu(_chapters) }
        </Dropdown.Menu>
        </Dropdown>
    )

    

}

export default ButtonTypeB