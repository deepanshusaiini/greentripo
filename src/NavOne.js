import { useState } from "react";
import NavBar from "./NavBar";
import Map from "./Map";
import { FaPhone } from "react-icons/fa";
import { MdMailOutline } from 'react-icons/md';

function NavOne() {

    return (
        <div className="container">
            <div className="navbar-one">
                <div className="navbar-left">
                    <FaPhone className="phone-icon" />
                    <h3>
                        +1-805-702-1258
                    </h3>
                    <MdMailOutline className="email-icon" />
                    <p>
                        customercare@greentripo.com
                    </p>
                </div>
                <div className="navbar-right">
                    <h2>Follow on:</h2>
                    <div>
                        <img className='img-one' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACUCAMAAAAEVFNMAAAAaVBMVEX///8QDw0AAAAIBwNgX17j4+NWVVVSUlGhoaENDAr09PT7+/sEAgDw8PBjY2PT09NaWloxMTHp6enGxsa+vr6MjIuzs7MfHx/b29tERERzc3Otra3MzMyUlJQYGBiDg4N7e3onJyY5ODgJbifqAAAEv0lEQVR4nO2cbXuqMAyGZ5F3EQRUQMDp//+RB3C+DNoQagOeXX0+zpXdq22apAlfX1paWlpaWlpaWlpaWlpaWlp/Rp4ZJmmaJmHmLY0yIt/LTt87Y8Pu2rgXywkDf2kwrszSWXeUhvui7ie5U5ofBu0njt2QuSueWup8nwZLQ77I2e5EtA/mOqripTlv8pyG1gBon8z7D5jl4LSCJ/c3c2Uui+unEdvgaDsZbHdYcpbjomYTcFsxtg0X402OiLXbl8tqZxlc78ymTu8deb3Essi22L02FMvL2XnLXG56f4ivp5l5k907vO3em3chHySX71MGq/4r3nbrzUecTDosxHM816oIr+/P7404nYU3syfwGndf3jCGRnBzmcO6eVssb+sHH3NrvV1bdn69dM78799g9gwe5x7J2/DZ1SnJ4iAIYjMrk8PJ+e4bb1aQRyIl8nxjrCjjPo1X9YBd8o0X4A64xo3kOr5Of7TLiBfFN4qXHQU2dgDcuBWki6K8YPxJY3UQjB8Cuy6lV4G0EGL7OgRuppgwakpwvHvhAzjAK8p9h3IhmCXOUPGADUY2xQcMr7tKxE/gAUPfyHvyUWcyK4AUIBfYZUSGIq0RZwa867nAVKvYR9ngTQ4FmAJgGlsc7jBeMNvyxnpxJ7N/NP98KzWJn3nC2bTh1+un+2Ibdbryzx12JuD1ChzwIK9jbutHhltwTjKbwLKZODeN9W2EeRwf6FLEHigj3AD3x1koW1ip33Y4N8LtA8e4hRSpT17hVoTRB+YbsuH/qdwtxs3UEBgZATLl4WgqCbxGAivPqiBjT2lgSzVwRAs8GPe2kNlVWeChOXxTQY5Lp8kDK7ZrpsALUAecqQUOd9TAQJwio+SCS/jIAyv2JtIjAPxIUbbqDYxePwPgmeL0BARs7CLrobw38Gw/P7OAoFB1mAQBsyo2n+oNfP3ILOcDTiBg9N8CEjGqlwSUVMMD80O620NE6ThJZYBZwwMDrptqswYdHHjgIwCs+I4fOprxwJBZUx1yqLBIHgSsmBdyL9HAofgZ6t1LwIFHAwOpGPUOPBAioYGB5Jz6EAkIQtHA0D5QbNUaict7sMC+OGqhuP0SG30sMGDLmaU+kSJOVWHdgFB8vFOkqsTJwM3Vsp/qDTvnj09yES5NMhC4o8M68EJgknQrLqEtFyKRJLRxVwZSwG6t2Le8CXUpIwVMdUGOufaSA6a6vEVcLMoAk10sYm4NZIBptlyn8ctxCWDCy3FE+YEEMGX5wXiBx3Rg0gKP8RKaycC0JTTjRUqTgZlNW7k2VgY2FZi8DGys0G4iMH2h3dh10kTgGUoZRyzFNGBaC3EXWI47CXiectxmGQMF+1OA5yp4BkvKJwDPV1LeekEiYjzwh7QZoIHn5W2cecE6xgIz1VcEowr5Rx4SeP7WHlHzFA54ieapxq04c9JtGGCDosIHJU4D4Djwcg2AX7wWy1HgRVss2ypF67dJHgFum1gXbtgPnNWrTQaBjeXbhFv9asQWAze0dfUBjdidnq3uAmCXsWPkfNDbG/zEsbriVR5w2zVlV8kH4XaKw1PByQ9bP69rWIRpTO0LMYrez/Yf+0IMLS0tLS0tLS0tLS0tLS0trb+ufyCkPupWPLcoAAAAAElFTkSuQmCC'></img>
                        <img className='img-two' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT7nZyVxKmO0OGOyp7yuZDN7Y67A9olZVWg&s'></img>
                        <img className='img-three' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-0c7nWX4Jo9neuLUlIWcUutbzUBuKRgnyQ&s'></img>
                        <img className='img-four' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJO45msUOXwAm2ajZTDLznzkec0csKNMpQEA&s'></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default NavOne;            