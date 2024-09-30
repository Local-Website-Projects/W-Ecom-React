import React, {useState} from "react";
import './select.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ClickAwayListener} from "@mui/material";

const Select = ({data, placeholder}) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(placeholder);
    const [listData, setListData] = useState(data);
    const [listData2, setListData2] = useState(data);
    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setIsOpenSelect(false);
        setSelectedItem(name);
    }

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword);
        })

        const list2 = list.filter((item, index) => list.indexOf(item) === index);
        setListData(list2);
    }
    return (
        <>
            <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
                <div className='selectDrop cursor position-relative'>
                    <span className='openSelect' onClick={openSelect}>{selectedItem.length > 10? selectedItem.substring(0,10) + '..' : selectedItem} {
                        <ExpandMoreIcon className='searchIcon'></ExpandMoreIcon>}</span>
                    {
                        isOpenSelect === true &&
                        <div className='selectDropdown'>
                            <div className='searchField'>
                                <input type='text' placeholder='Search here' onChange={filterList}/>
                            </div>
                            <ul className='searchResults'>
                                <li key={0} onClick={() => closeSelect(0, {placeholder})}
                                    className={`${selectedIndex === 0 ? 'active' : ''}`}>{placeholder}
                                </li>
                                {
                                    listData.map((item, index) => {
                                        return (
                                            <li key={index + 1} onClick={() => closeSelect(index + 1, item)}
                                                className={`${selectedIndex === index + 1 ? 'active' : ''}`}>{item}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    }

                </div>
            </ClickAwayListener>
        </>
    )
}

export default Select