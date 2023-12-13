import React, { useState } from "react";
function Task1(){
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        Email:"",
        Mobile:"",
        Project:"",
    })
    const [newArray,setNewArray]=useState([])
    const handleChange =(e)=>{
        const {name,value}=e.target;
      setFormData({...formData,[name]:value})       
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        setNewArray([...newArray,formData])
        setFormData({
            firstName:"",
            lastName:"",
            Email:"",
            Mobile:"",
            Project:"",            
        })
        }
        const handleDelete =(index)=>{
            const updatedArray = newArray.filter((ele,id)=>(id !== index))
            setNewArray(updatedArray)
        }
        const handleEdit =(index)=>{
            debugger
             const updatedArray = newArray[index]
             setFormData({
                firstName:updatedArray.firstName,
                lastName:updatedArray.lastName,
                Email:updatedArray.Email,
                Mobile:updatedArray.Mobile,
                Project:updatedArray.Project,
             })             
        }
    return(
        <>
        <h1>Clients</h1>
        <form onSubmit={handleSubmit}>
            
           Name  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/> <br/><br/>
           LastName  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/> <br/><br/>
          Email  <input type="email" name="Email" value={formData.Email} onChange={handleChange}/> <br/><br/>
          Mobile No.  <input type="text" name="Mobile" value={formData.Mobile} onChange={handleChange}/> <br/><br/>

           Project  <input type="text" name="Project" value={formData.Project} onChange={handleChange}/> <br/><br/>
            
            <button type="submit">Create Client</button>
        </form>
        <br/>
        <br/>
        {
            newArray.length >= 1 && (
                <table>
                    <tr>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>email</th>
                        <th>Mobile No.</th>
                        <th>Project</th>
                    </tr>
                    {newArray.map((data,index)=>(
                        <tr key={index}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.Mobile}</td>
                            <td>{data.Project}</td>
                            <td><button onClick={()=>{handleEdit(index)}}>Edit</button></td>
                            <td><button onClick={()=>{handleDelete(index)}}>Delete</button></td>


                        </tr>
                    ))}
                </table>
            )
        }
        </>
    )
}
export default Task1;