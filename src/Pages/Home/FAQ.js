import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import faq from '../../assets/faq.png';
const FAQ = () => {
    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={faq} className="max-w-sm rounded-lg shadow-2xl" alt='faq' />
                    <div className='max-w-md'>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How does the site work?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        You can browse the site to find your desired products. You can click Buy Now then it will go to the purchase page. Then You selected payment method and place your order. You let us know your address, select a delivery time  and voila, you are done.  A Elite representative will then deliver your order right to your home or office.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I contact you?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        You can always call 010101 or mail us at support@elite.com.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How do I know when my order is here?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        A Elite representative will call you as soon as they are at your house to let you know about your delivery.

                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are your delivery hours?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient to you.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How do I pay?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We accept Online Credit Card  service.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What if the item is out of stock?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We hold our own inventory in our warehouses, so we rarely run out of stock. However, we will try our best to source what you need. If we cannot find it, we will SMS/call you and let you know what substitutes are available.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default FAQ;