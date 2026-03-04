export default function Footer() {
    return (
        <>
            <footer className="footer flex  flex-wrap gap-5 sm:footer-horizontal bg-base-300 text-base-content pl-20 pt-10  ">
                <nav className="w-64 p-5">
                    <h1 className=" font-bold 
               bg-gradient-to-r 
               from-green-400 via-blue-500 to-purple-600 
               bg-clip-text text-transparent btn-ghost text-sm">
                        CS — Ticket Services
                    </h1>
                    <p>
                        Customer Support Zone is a simple and efficient ticket management
                        platform that helps teams track, manage, and resolve customer issues smoothly.
                        With clear priority indicators, real-time updates, and a responsive design,
                        it ensures faster communication and better support experiences across all devices.</p>
                </nav>
                <nav className="w-64 p-5">
                    <h6 className="footer-title  font-bold 
               bg-gradient-to-r 
               from-green-400 via-blue-500 to-purple-600 
               bg-clip-text text-transparent btn-ghost text-sm">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="w-64 p-5">
                    <h6 className="footer-title  font-bold 
               bg-gradient-to-r 
               from-green-400 via-blue-500 to-purple-600 
               bg-clip-text text-transparent btn-ghost text-sm">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className="w-64 p-5">
                    <h6 className="footer-title  font-bold 
               bg-gradient-to-r 
               from-green-400 via-blue-500 to-purple-600 
               bg-clip-text text-transparent btn-ghost text-sm">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav className="w-64 p-5">
                    <h6 className="footer-title  font-bold 
               bg-gradient-to-r 
               from-green-400 via-blue-500 to-purple-600 
               bg-clip-text text-transparent btn-ghost text-sm">Social</h6>
                    <div className="grid grid-flow-row gap-4">
                        <a href="www.twitter.com"
                            className="flex gap-2 items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                            <span>Twitter</span>

                        </a>
                        <a href="www.youtube.com"
                            className="flex gap-2 items-center" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                            <span>
                                YouTube
                            </span>
                        </a>
                        <a href="www.facebook.com"
                            className="flex gap-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                            <span>Facebook</span>
                        </a>
                        <a href="www.linkedin.com"
                            className="flex gap-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                            </svg>
                            <span>
                                LinkedIn
                            </span>
                        </a>
                    </div>
                </nav>
            </footer>
            <p className="text-center bg-base-300 pb-4">© 2025 Ticket Services. All rights reserved.</p>
        </>
    )
}