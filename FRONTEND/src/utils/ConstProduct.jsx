const ConstProduct = [{
    name: 'internet', label: 'internet'
},
{
    name: 'internet-esim', label: 'Internet Esim'
},

{
    name: 'internet-simcard', label: 'Internet Simcard'
},
{
    name: 'internet-mifimodem', label: 'Internet Mifimodem'
},
]

export { ConstProduct }
export const getProduct = (name) => { return ConstProduct?.find(product => product?.name === name); };