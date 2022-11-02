import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Form = () => {
    return (
        <div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            {/* <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" /> */}
            <div className="text-900 text-3xl font-medium mb-3">Enter the Details</div>
            {/* <span className="text-600 font-medium line-height-3">Don't have an account?</span> */}
            {/* <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a> */}
        </div>

        <div>
            <label htmlFor="firstName" className="block text-900 font-medium mb-2">First Name</label>
            <InputText id="firstName" type="text" className="w-full mb-3" />

            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="email" className="w-full mb-3" />

            <Button label="Submit" className="w-full" />
        </div>
    </div>
</div>
    )
}

export default Form