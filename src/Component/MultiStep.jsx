import React from 'react'

const MultiStep = () => {

    const data = [

        {
           id: 'name',
           buttonName: 'Next',
           placeholder: 'Enter your name',
           inputText: 'text',
           label: 'Name',
       },
        {
           id: 'email',
           buttonName: 'Next',
           placeholder: 'Enter your email',
           inputText: 'email',
           label: 'Email',
       },
       {
           id: 'password',
           buttonName: 'Next',
           placeholder: 'Enter your password',
           inputText: 'password',
           label: 'Password'
       },
       {
          id: 'dob',
          buttonName: 'Submit',
          placeholder: 'Enter your dob',
          inputText: 'date',
          label: 'DOB'
      }
    ]

  return (
    <div>
    <form action="">
        <label htmlFor=""></label>
        <input type="text" name="" id="" placeholder='Enter Your name' />
        <button>Next</button>
    </form>
    </div>
  )
}

export default MultiStep