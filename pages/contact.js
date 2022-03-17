import React, {useState} from 'react'
import styles from '../styles/contact.module.css'

function contact() {
  
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [phone,setphone] = useState('')
  const [desc,setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,email,phone,desc)
    const data = {name,email,phone,desc };

fetch('http://localhost:3000/api/postcontact', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
  console.log('Success:', data);
  alert("Thanks for contacting us")
  setname('')
  setphone('')
  setemail('')
  setdesc('')
})
.catch((error) => {
  console.error('Error:', error);
});
  }


  const handleChange = (e) => {
    if(e.target.name == 'name'){
      setname(e.target.value)
    }
    else if(e.target.name == 'email'){
      setemail(e.target.value)
    }
    else if(e.target.name == 'phone'){
      setphone(e.target.value)
    }
    else if(e.target.name == 'desc'){
      setdesc(e.target.value)
    }
  }

  return (
    
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Name</label>
          <input type="name" value={name} onChange={handleChange} className={styles.input} id="name" name='name' aria-describedby="emailHelp"/>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>Email address</label>
          <input type="email" value={email} onChange={handleChange} className={styles.input} id="exampleInputEmail1" name='email' aria-describedby="emailHelp"/>
          <div id="emailHelp"  className={styles.formtext}>We'll never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone</label>
          <input type="phone" value={phone} className={styles.input} onChange={handleChange} name='phone' id="phone" aria-describedby="emailHelp"/>
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
          <textarea className={styles.input} onChange={handleChange}  name='desc' value={desc}  id="desc"/>
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default contact