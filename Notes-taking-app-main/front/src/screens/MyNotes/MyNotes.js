import React, {useEffect, useState}from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Template from '../../components/Template/Template'
import NotesCard from '../../components/NotesCard/NotesCard'
import axios from 'axios'

const MyNotes =  () => {
  const [notesList, setnotesList] = useState([])
  const fetchList= async()=>{
    const list= await axios.get("/api").then().catch((error)=>{console.log(error)})
    setnotesList(list.data)
  }
  useEffect(() => {
    fetchList();
  }, [])
  
  return (
      <>
    <div>
        <Template title={"This is notes section"}/>
        <Link to="/create"><Button style={{marginLeft:100, marginBottom:6}} size="lg">Create</Button></Link>
        {notesList.map((ele)=>{
            return (<NotesCard key={ele.id} title={ele.title} content={ele.content} category={ele.category}/>);
        })}
        

    </div>
    </>
  )
}

export default MyNotes