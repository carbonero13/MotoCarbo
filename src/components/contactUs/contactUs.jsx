import React from 'react';
import './contactUs.css'
import { Link } from 'react-router-dom';


export const ContactUs = () => {

    return (
        <div>
            <div className="order-container-body">
                <div class="order-image">
                    <div class="order-text">
                        <div className="order-container">
                            <div className="contact-details">
                                <div >
                                    <p><span>Contacto:</span></p>
                                </div>
                                <div >
                                   <p><span>Dirección:</span>  En Casa 198, Ciudad Autonoma de Buenos Aires, CP1458</p>
                                </div>
                                <div >
                                    <p><span>Telefono:</span> <Link className='linkContact' to={`tel://+54 9 11 4758-9632`}> +54 9 11 4758-9632</Link></p>
                                </div>
                                <div className="order-header">
                                    <p><span>Email:</span> <Link className='linkContact' to={`mailto:info@motocarbo.com`}> info@motocarbo.com</Link></p>
                                </div>
                                <div className="order-header">
                                    <p><span>Web:</span><Link className='linkContact' to={`/`}> motocarbo.com</Link></p>
                                </div>
                                <div className="order-header">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
}
