import React from 'react'

function Pagination() {
    return (
        <nav class="pg mt-4 border-0" aria-label="Page navigation example ">
            <ul class="pagination border-0 justify-content-center">
                <li class="page-item disabled">
                <a class="page-link border-0 " href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link border-0" href="#">1</a></li>
                <li class="page-item"><a class="page-link border-0" href="#">2</a></li>
                <li class="page-item"><a class="page-link border-0" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link border-0" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
