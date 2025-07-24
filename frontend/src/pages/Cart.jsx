import React from 'react'

function Cart({item}) {
  return (
    <div className='flex items-center ga[-4 rounded-2xl p-4 shadow-sm hover:shadow-md transition'>
        <div className='w-24 h-24 flex shrink--0'>
            <img src={item.image?item.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabqK036YDZSLo2ecQpSj7-bV_mYEqdCqrYA&s"} alt={item.name} className='w-full h-full object-cover rounded=xl'/>
        </div>


        <div className='flex flex-clo justify-between w-full'>
            <div>
                <h2 className='tex-lg font-semibold'>{item.name}</h2>
            </div>
            <div>
                <h2 className='tex-lg font-semibold'>{item.email}</h2>
            </div>
            <div>
                <h2 className='tex-lg font-semibold'>{item.contact}</h2>
            </div>
            <div>
                <h2 className='tex-lg font-semibold'>{item.description}</h2>
            </div>
            <div>
                <h2 className='tex-lg font-bold'>{item.title}</h2>
            </div>
        </div>
        
    
    </div>
  )
}

export default Cart
