import React from "react";

export default function MailForm(){
    const [FormData,setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comment:""
    })

    const handleChange = event =>{
        setFormData(prev => { return{...prev,
        [event.target.name]:[event.target.value]                                
        }})
    }
    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
    return(
        <>
            <form
                name="contact-v1"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact-v1"/>
                <h2>Contact met ons</h2>
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
                <button>Verstuur</button>

            </form>
        </>
    )


}