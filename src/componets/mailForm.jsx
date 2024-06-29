import React from "react";

export default function MailForm(marginValue){
    const [formData,setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comment:""
    })

    const handleChange = event =>{
        // this to handle form the form input
        setFormData(prev => { return{...prev,
        [event.target.name]:[event.target.value]                                
        }})
    }
    return(
        <>
            <form name="contact v1" 
                  method="post" data-netlify="true" 
                  data-netlify-honeypot="bot-field" 
                  netlify-honeypot="bot-field" 
                  style={{minHeight:'fit-content'}}>
                <input type="hidden" name="form-name" value="contact v1" />
                <label className="hidden">
                    Don’t fill this out if you’re human: <input name="bot-field" />
                    <input type="hidden" name="subject" 
                            value={"New lead from"+formData.firstName +" " +formData.lastName} />
                </label>
                <label>
                Naam<input  type="text"
                            name="firstName"
                            onChange={handleChange} 
                            value={FormData.firstName}
                            />
                </label>

                <label>
                Achter naam
                <input  type="text" 
                        name="lastName"
                        onChange={handleChange}
                        value={FormData.lastName}
                                />
                </label>

                <label>
                Email*
                <input  type="email" 
                        name="email"
                        onChange={handleChange}
                        value={FormData.email}
                        />
                </label>

                <label>
                Bericht*<textarea name="comment"
                                  onChange={handleChange}
                                  value={FormData.comment}
                                  >
                        </textarea>
                </label>
                <button type="submit">Verstuur</button>
     
            </form>
        </>
    )


}