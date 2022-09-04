import React from 'react';
import MyInput from "./UI/input/MyInput";
import DropDownList from "./UI/dropDown-list/DropDownList";

const PostFilter = ({filter, setFilter}) => {
    return (
        <>
            <MyInput value={filter.filter} onChange={e => setFilter({...filter, filter: e.target.value})}/>
            <DropDownList
                value={filter.sort}
                onChange={selSort => setFilter({...filter, sort: selSort})}
                defaultVal={'Сортировка по'}
                options={[
                    {value: 'title', name: 'Названию'},
                    {value: 'body', name: 'Описанию'}
                ]}/>
        </>
    );
};

export default PostFilter;