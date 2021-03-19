import React, { useRef, useEffect}
   from 'react'


export default function Paypal() {
    const paypal = useRef();
  
    useEffect(() => {

      window.paypal

        .Buttons({

          createOrder: (data) => {
            return data.order.create({
                intent:"donation",
                amount:{
                    currency_code:"NZD",
                  value:650.00  
                },
                description:"RangManch"
            });
          },
          onApprove: async (actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }, []);
  
    return (
      <div>
        <div ref={paypal}></div>
      </div>
    );
  }