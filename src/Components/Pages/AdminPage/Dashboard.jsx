import React from 'react'
import { AdminProducts } from '../ProductsPage/Admin.Products'

export const Dashboard = () => {
  return (
    <>
      <div className='container'>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Vista Administrador Productos
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <AdminProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
