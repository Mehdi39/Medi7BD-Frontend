import { useState } from 'react'
import Swal from 'sweetalert2'

const useMethods = () => {
    const [updateUI, setUpdateUI] = useState(null)

    const cancelOrder = (id) => {
        Swal.fire({
          title: "Are you sure to delete this item?",
          showDenyButton: true,
          confirmButtonText: "Yes, Delete this!",
          denyButtonText: `Ops! Don't delete.`,
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(
              `http://localhost:5000/cancelOrder?pdID=${id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  setUpdateUI(!updateUI)
                } else {
                  setUpdateUI(false)
                }
              })
              .catch((err) => console.log(err.message))
          }
        })
      }

    const updateOrder = (id) => {
        fetch(`http://localhost:5000/updateorder?pdID=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUpdateUI(!updateUI)
                    Swal.fire('Product Approved Successfully!')
                } else {
                    setUpdateUI(false)
                }
            }).catch(err => console.log(err.message))
    }

    return { cancelOrder, updateOrder, updateUI }
}

export default useMethods