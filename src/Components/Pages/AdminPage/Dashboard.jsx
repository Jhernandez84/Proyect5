import React from 'react'
import { AdminProducts } from '../ProductsPage/Admin.Products'

export const Dashboard = () => {
  return (
    <>
      <div className='container'>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Vista Usuarios
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <AdminProducts />
              </div>
            </div>
          </div>
        </div>
      <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Vista Productos
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <AdminProducts />
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
