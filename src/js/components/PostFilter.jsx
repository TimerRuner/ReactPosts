import React from "react";
import Input from "./UI/Input";
import Select from "./UI/Select";

const PostFilter = ({filter, setFilter}) => {
  return(
    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
      <Input 
        className="form-control"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <Select
        value={filter.sort}
        onChange={value => setFilter({...filter, sort: value})}
        defaultValue="Сортувати за"
        options={[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По вмісту'}
        ]}
      />
    </div>
  )
}

export default PostFilter