import axios from "axios";
import { Navbar } from "../../custom/Navbar";
import Wrapper from "../../styled-css/NewsLetterWrapper";
import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const url= 'https://www.course-api.com/cocktails-newsletter';
export const action = async({request}) => {
        console.log(request)


    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try{
        const response = await axios.post(url,data);
        toast.success(response.data.msg);
        return redirect('/');
    }
    catch(error)
    {
        console.log(error   )
        toast.error(error?.response.data.msg)
        return error 
    }


}
export const NewsLetter = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state ==='submitting';
    // return <Wrapper>
    //     <h3 style={{fontSize:'30px'}}>Ours NewsLetter</h3>
    //     <form className='form'>
    //     <p>Name</p>
    //     <input type='text' className='name' id='name'/>
    //     <p>Last Name</p>
    //     <input type='text' className='last' id='last'/>
    //     <p>Email</p>
    //     <input type='email' className='email' id='email'/>
    //     <button type='submit'>Submit</button>
    // </form>
    // </Wrapper>

    return <Wrapper>
        <Form className="form" method="POST"> 
        <h4 style={{textAlign:'center',marginBottom:'2rem'}}>Ours NewsLetter</h4>
        <div className="form-row">
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className="form-input" name='name' id='name' required/>
        </div>
        <div className="form-row">
            <label htmlFor='lastName' className='form-label'>Last Name</label>
            <input type='text' className="form-input" name='lastName' id='lastName' required/>
        </div>
        <div className="form-row">
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className="form-input" name='email' id='email' required/>
        </div>
        <div className="form-row">
        <button type="submit" className="btn btn-block" style={{alignItems:"center"}} disabled={isSubmitting}>{isSubmitting?"Submitting" : "Submit"}</button>
        </div>

    </Form>
    </Wrapper>
}

export default NewsLetter;      